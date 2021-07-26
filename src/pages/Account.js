import { useState, useEffect } from "react";
import { client } from "../lib/api";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import boardIcon from "../assets/board.png";
import homeIcon from "../assets/home.png";

export default function Account({ session, setSession }) {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [website, setWebsite] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);

  useEffect(() => {
    getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      const user = client.auth.user();

      let { data, error, status } = await client
        .from("profiles")
        .select(`username, website, avatar_url`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true);
      const user = client.auth.user();

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      };

      let { error } = await client.from("profiles").upsert(updates, {
        returning: "minimal", // Don't return the value after inserting
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }
  console.log(session);
  return (
    <main className="account-main">
      <div className="account-header">
        <div className="header__buttons--left">
          <button className="button__home">
            <Link to="/">
              <img
                src={homeIcon}
                alt="home icon"
                style={{ width: "100%", height: "auto" }}
              />
            </Link>
          </button>
          <button className="button__letsSpeak">
            <Link to="/board">
              <img
                src={boardIcon}
                alt="profile avatar icon"
                style={{ width: "100%", height: "auto" }}
              />
            </Link>
          </button>
        </div>
        <div class="header__buttons--right">
          <button
            className="button__signOut"
            onClick={() => {
              console.log("clicked");
              client.auth.signOut();
            }}
          >
            Sign Out
          </button>
        </div>
      </div>
      <div className="form-widget">
        <Avatar
          url={avatar_url}
          size={150}
          onUpload={(url) => {
            setAvatarUrl(url);
            updateProfile({ username, website, avatar_url: url });
          }}
        />
        <div className="form__containers">
          <label htmlFor="email">Email</label>
          <input
            className="account-input"
            id="email"
            type="text"
            value={session.user.email}
            disabled
          />
        </div>
        <div className="form__containers">
          <label htmlFor="username">Name</label>
          <input
            className="account-input"
            id="username"
            type="text"
            value={username || ""}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form__containers">
          <label htmlFor="website">Website</label>
          <input
            className="account-input"
            id="website"
            type="website"
            value={website || ""}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
        <button
          className="button__update"
          onClick={() => updateProfile({ username, website, avatar_url })}
          disabled={loading}
        >
          {loading ? "Loading ..." : "Update"}
        </button>
      </div>
    </main>
  );
}