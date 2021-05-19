import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";
import Jobs from "./views/Jobs/Jobs";
import Register from "./views/Register/Register";
import Signup from "./views/Signup/Signup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function App() {
  return (
    <>
      {/* <Router>
        <Navbar />
        <Switch>
          <Route exact component={Home} path="/" />
          <Route exact component={Jobs} path="/jobs" />
          <Route exact component={Signup} path="/signup" />
          <Route exact component={Register} path="/register" />
        </Switch>
        <Footer />
      </Router>
      <Route exact component={Signup} path="/signup" /> */}

      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/" exact>
              <Navbar />
              <Home />
              <Footer />
            </Route>
            <Route path="/jobs" exact>
              <Navbar />
              <Jobs />
              <Footer />
            </Route>
            <Route path="/about" exact>
              <Navbar />
              <Footer />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
