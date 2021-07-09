import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const clientId = "985473717392-c3ggcgj2ut1b2vih98fatq724mupnve6.apps.googleusercontent.com";

function LoginGoogle() {
  let history = useHistory();

  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const onLoginSuccess = (res: any) => {
    // localStorage.setItem("token", "tokengoogle");
    // toast("Login successfully!");
    // console.log("Login successfully");
    // history.push("/");
    console.log("Login Success:", res.profileObj);
    setShowloginButton(false);
    setShowlogoutButton(true);
  };

  const onLoginFailure = (res: any) => {
    console.log("Login Failed:", res);
  };

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
  };

  return (
    <div>
      {showloginButton ? (
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign In with Google"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      ) : null}

      {showlogoutButton ? (
        <GoogleLogout
          clientId={clientId}
          buttonText="Sign Out"
          onLogoutSuccess={onSignoutSuccess}
        ></GoogleLogout>
      ) : null}
    </div>
  );
}
export default LoginGoogle;
