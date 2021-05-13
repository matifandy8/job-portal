import "./Signup.css";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

type Profile = {
  password: number;
  email: string;
};

const Signup = () => {
  let history = useHistory();

  const { register, handleSubmit, errors } = useForm<Profile>();

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
    const body = data;
    const response = fetch("http://localhost:5000/auth/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          toast("Login successfully!");
          console.log("Login successfully");
          history.push("/");
        } else {
          toast.error(data);
        }
      });
  });

  return (
    <div className="signup">
      <form className="signup__form" onSubmit={onSubmit}>
        <h1>Signup</h1>

        <div>
          <input
            ref={register({ required: true })}
            className="signup__input"
            id="email"
            name="email"
            type="email"
            placeholder="Type your Email"
          />
          {errors.email && <div className="error">Enter your Email</div>}
        </div>
        <div>
          <input
            ref={register({ required: true })}
            className="signup__input"
            id="password"
            name="password"
            type="password"
            placeholder="Type your Password"
          />
          {errors.password && <div className="error">Enter your Password</div>}
        </div>
        <button type="submit">Sign in</button>
        <h3>
          Don't have a Account? <Link to="/register">Register</Link>
        </h3>
      </form>
    </div>
  );
};

export default Signup;
