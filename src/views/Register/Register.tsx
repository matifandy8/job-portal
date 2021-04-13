import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Register.css";

type Profile = {
  firstname: string;
  lastname: string;
  email: string;
  password: number;
};

const Register: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<Profile>();

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
  });

  return (
    <>
      <div className="register">
        <form className="register__form" onSubmit={onSubmit}>
          <h1>Register</h1>
          <div>
            <input
              ref={register({ required: true })}
              className="register__input"
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
              className="register__input"
              id="lastname"
              name="lastname"
              type="text"
              placeholder="Type your LastName"
            />
            {errors.lastname && (
              <div className="error">Enter your last name</div>
            )}
          </div>

          <div>
            <input
              ref={register({ required: true })}
              className="register__input"
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
              className="register__input"
              id="password"
              name="password"
              type="password"
              placeholder="Type your Password"
            />
            {errors.password && (
              <div className="error">Enter your Password</div>
            )}
          </div>
          <button type="submit">Register</button>
          <h3>
            Already have an Account? <Link to="/signup">Sign Up</Link>
          </h3>
        </form>
      </div>
    </>
  );
};

export default Register;
