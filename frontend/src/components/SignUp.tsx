import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUpComponent = () => {
  const [formData, setFormData] = useState({
    username:"",
    email: "",
    password: "",
    errorMessage: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({ ...formData, errorMessage: "Invalid email or password" });
  };

  const { username, email, password, errorMessage } = formData;

  return (
    <div className="sign_up-container">
      <div className="sign_up__sidebar"></div>
      <div className="sign_in">
        <h1 className="sign_up__header">
          <span className="sign_up__header__title">
            <span className="text-light">We are</span> Blog-Master
          </span>
          {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            test tailwind
          </button> */}
          <span className="sign_up__header__subtitle">
            Welcome Back, sign in to continue, or if you have not registered yet,
            please contact with Blog-Master committee to get you started.
          </span>
        </h1>
        {errorMessage && (
          <div className="sign_up__error">{errorMessage}</div>
        )}
        <form className="sign_up__form" onSubmit={handleSubmit}>
          <div className="sign_up__form__group">
            <label
              className="sign_up__form__group__label"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="sign_up__form__group__input"
              type="text"
              id="username"
              value={username}
              onChange={handleChange}
              placeholder="Enter Your username"
              required
            />
          </div>
          <div className="sign_up__form__group">
            <label
              className="sign_up__form__group__label"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="sign_up__form__group__input"
              type="email"
              id="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="sign_up__form__group">
            <label
              className="sign_up__form__group__label"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="sign_up__form__group__input"
              type="password"
              id="password"
              value={password}
              onChange={handleChange}
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="sign_up__form__group">
            <button
              className="sign_up__form__group__button"
              type="submit"
              disabled={!username || !email || !password}
            >
              Sign Up
            </button>

            <Link to="/connect">
                  <button >
                    Sign into your Account
                  </button>
                </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpComponent;