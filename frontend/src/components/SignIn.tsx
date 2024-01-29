import React, { useState } from "react";
import useToken from "../hooks/useToken";
import { useNavigate } from "react-router-dom";

const SignInComponent = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    errorMessage: "",
  });
  const [user] = useToken(formData);
  console.log(user);
  
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({ ...formData });
    if (!user?.data?.reset_password) {
      localStorage.setItem('user', JSON.stringify({ ...formData, token: user.token, id: user.data.id }));
      console.log(user.token);
      navigate("/reset-password");
    } else if (user?.data?.reset_password) {
      navigate("/");
    }
  };

  // redirect to reset password if new user

  const { email, password, errorMessage } = formData;

  return (
    <div className="sign_in-container">
      <div className="sign_in__sidebar"></div>
      <div className="sign_in">
        <h1 className="sign_in__header">
          <span className="sign_in__header__title">
            <span className="text-light">We are</span> Blog-Master
          </span>
          {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            test tailwind
          </button> */}
          <span className="sign_in__header__subtitle">
            Welcome Back, sign in to continue, or if you have not registered
            yet, please contact with Blog-Master committee to get you started.
          </span>
        </h1>
        {errorMessage && <div className="sign_in__error">{errorMessage}</div>}
        <form className="sign_in__form" onSubmit={handleSubmit}>
          <div className="sign_in__form__group">
            <label className="sign_in__form__group__label" htmlFor="email">
              Email
            </label>
            <input
              className="sign_in__form__group__input"
              type="email"
              id="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="sign_in__form__group">
            <label className="sign_in__form__group__label" htmlFor="password">
              Password
            </label>
            <input
              className="sign_in__form__group__input"
              type="password"
              id="password"
              value={password}
              onChange={handleChange}
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="sign_in__form__group">
            <button
              className="sign_in__form__group__button"
              type="submit"
              disabled={!email || !password}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInComponent;
