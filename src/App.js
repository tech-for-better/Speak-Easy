import LandingPage from "./pages/LandingPage";
import Board from "./pages/Board";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/board">
          <Board />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
