import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import background from "../assets/images/login-background.png";
import { loginPost } from "../redux/action/login_fetch";

function Login() {
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.fetchApi.login);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLogin((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();

    dispatch(loginPost({ value: login }));
  };

  return (
    <div className="login-wrapper">
      <img src={background} alt="background"></img>
      <div className="login-form-wrapper">
        <div className="logo-nav"></div>
        <h1 className="m-0">Welcome, Admin BCR</h1>
        {loginStatus === "SALAH" && (
          <div className="login-alert">
            <p className="m-0">Masukkan username dan password yang benar. Perhatikan penggunaan huruf kapital.</p>
          </div>
        )}
        <form className="d-flex flex-column" onSubmit={handleClick}>
          <label htmlFor="email" className="login-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Contoh: johndee@gmail.com"
            className="mb-3 login-input"
            onChange={handleChange}
          ></input>
          <label htmlFor="password" className="login-label">
            Password
          </label>
          <input id="password" name="password" type="password" placeholder="6+ karakter" className="login-input" onChange={handleChange}></input>
          <button className="mt-5 login-btn" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
