import React from "react";
import { Connect } from "react-redux";

const Login = props => {
  return (
    <div>
      <a href={process.env.REACT_APP_LOGIN}>
        <button>Login</button>
      </a>
    </div>
  );
};

export default Login;
