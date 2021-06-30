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
import Profile from "./views/Profile/Profile";
import JobInfo from "./views/JobInfo/JobInfo";

toast.configure();

function App() {
  return (
    <>
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
            <Route path="/jobs/:id" exact>
              <Navbar />
              {/* redux data global state */}
              <JobInfo />
              <Footer />
            </Route>
            <Route path="/profile" exact>
              <Navbar />
              {/* redux data global state */}
              <Profile />
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
