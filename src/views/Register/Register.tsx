import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Register.css";
import Axios from "axios";
import { toast } from "react-toastify";

type Profile = {
  name: string;
  email: string;
  password: number;
};

const Register: React.FC = ({ setAuth }) => {
  const { register, handleSubmit, errors } = useForm<Profile>();

  const onSubmit = handleSubmit((data) => {
    // body: JSON.stringify(data),
    const body = data;
    const response = fetch("http://localhost:5000/auth/register", {
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
          setAuth(true);
          toast("Login successfully!");
        } else {
          setAuth(false);
          toast.error(parseRes);
        }
      });
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
              id="name"
              name="name"
              type="text"
              placeholder="Type your Name"
            />
            {errors.name && <div className="error">Enter your name</div>}
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
