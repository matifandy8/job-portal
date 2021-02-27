import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route component={Home} path={"/"} />
      </Switch>
    </Router>
  );
}

export default App;
