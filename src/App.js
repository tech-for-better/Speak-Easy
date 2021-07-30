import LandingPage from "./pages/LandingPage";
import Board from "./pages/Board";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./styles.css";
import { useState, useEffect } from "react";
import { client } from "./lib/api";
import Auth from "./contexts/Auth";
import Account from "./pages/Account";

const App = () => {
  const [session, setSession] = useState(client.auth.session());

  useEffect(() => {
    setSession(client.auth.session());

    client.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    
  }, []);

  console.log(session);

  return (
    <>
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={Auth} /> d
            {!session ? (
              <Redirect to="/login" />
            ) : (
              <>
                <Route path="/board" component={Board} />
                <Route
                  path="/account"
                  render={() => (
                    <Account session={session} setSession={setSession} />
                  )}
                />
              </>
            )}
          </Switch>
          <Footer />
        </Router>
      </div>
    </>
  );
};

export default App;
