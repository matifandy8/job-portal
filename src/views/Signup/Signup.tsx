import React from "react";
import "./Signup.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

type Profile = {
  firstname: string;
  lastname: string;
  password: number;
  email: string;
};

const Signup: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<Profile>();

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
  });

  return (
    <div className="signup">
      <form className="signup__form" onSubmit={onSubmit}>
        <h1>Signup</h1>
        <div>
          <input
            ref={register({ required: true })}
            id="firstname"
            name="firstname"
            type="text"
            placeholder="Type your FirstName"
          />
          {errors.firstname && <div className="error">Enter your name</div>}
        </div>
        <div>
          <input
            ref={register({ required: true })}
            id="lastname"
            name="lastname"
            type="text"
            placeholder="Type your LastName"
          />
          {errors.lastname && <div className="error">Enter your last name</div>}
        </div>
        <div>
          <input
            ref={register({ required: true })}
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
