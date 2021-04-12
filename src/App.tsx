import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";
import Jobs from "./views/Jobs/Jobs";
import Register from "./views/Register/Register";
import Signup from "./views/Signup/Signup";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact component={Home} path="/" />
          <Route exact component={Jobs} path="/jobs" />
          <Route exact component={Signup} path="/signup" />
          <Route exact component={Register} path="/register" />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
