import { useState, useEffect } from "react";
import { client } from "../lib/api";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";

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
        <div>
          <button className="button">
            <Link to="/board">Let's speak</Link>
          </button>
          <button className="button">
            <Link to="/">Home</Link>
          </button>
        </div>
        <div>
          <button
            className="button"
            onClick={() => updateProfile({ username, website, avatar_url })}
            disabled={loading}
          >
            {loading ? "Loading ..." : "Update"}
          </button>

          <button
            className="button"
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
        <div>
          <label htmlFor="email" className="account-label">
            Email
          </label>
          <input
            className="account-input"
            id="email"
            type="text"
            value={session.user.email}
            disabled
          />
        </div>
        <div>
          <label htmlFor="username" className="account-label">
            Name
          </label>
          <input
            className="account-input"
            id="username"
            type="text"
            value={username || ""}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="website" className="account-label">
            Website
          </label>
          <input
            className="account-input"
            id="website"
            type="website"
            value={website || ""}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
      </div>
    </main>
  );
}
