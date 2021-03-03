import React from "react";
import { useForm } from "react-hook-form";

type Profile = {
  firstname: string;
  lastname: string;
  age: number;
};

const Signup: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<Profile>();

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
  });

  return (
    <div className="signup">
      <form onSubmit={onSubmit}>
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
            id="password"
            name="password"
            type="password"
            placeholder="Type your Password"
          />
          {errors.age && <div className="error">Enter your Password</div>}
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Signup;
