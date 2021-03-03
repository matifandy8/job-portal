import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";
import Signup from "./views/Signup/Signup";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact component={Home} path="/" />
          <Route exact component={Signup} path="/signup" />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
