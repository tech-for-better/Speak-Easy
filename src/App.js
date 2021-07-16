import LandingPage from "./pages/LandingPage";
import Board from "./pages/Board";
import Footer from "./components/Footer";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./supabase.css";
import "./styles.css";
import { useState, useEffect } from "react";
import { client } from "./lib/api";
import Auth from "./Auth";
import Account from "./Account";

const App = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(client.auth.session());

    client.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  return (
    <>
      <div className="container" style={{ padding: "50px 0 100px 0" }}>
        <Router>
          <Switch>
            {/* <Route exact path="/" component={LandingPage}/> */}
            <Route path="/board" component={Board} />
            <Route path="/login" component={Auth} />
            <Route path="/home" component={LandingPage} />

            {!session ? (
              <Auth />
            ) : (
              // <LandingPage/>}
              <Account key={session.user.id} session={session} />
            )}
            <Footer />
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default App;
