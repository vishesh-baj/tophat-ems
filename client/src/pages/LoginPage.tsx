import React from "react";
import { useForm } from "react-hook-form";
type Props = {};

const LoginPage = (props: Props) => {
  const onSubmit = () => {};

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="w-2/4 h-3/4 bg-base-200">
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="user id" name="" id="" />
          <input type="password" name="" id="" />
          <button className="btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
