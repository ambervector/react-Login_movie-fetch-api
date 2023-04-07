import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import ProfessionDropDown from "./ProfessionDropDown";
import classes from "./SignUpRight.module.css";

const SignUpPage = () => {
  const navigate = useNavigate();
  const nameInputRef = useRef();
  const passwordInputRef = useRef();
  const emailInputRef = useRef();
  const phoneNumberInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(`submitted!`);
    const data = {
      name: nameInputRef.current.value,
      password: passwordInputRef.current.value,
      email: emailInputRef.current.value,
      phoneNumber: phoneNumberInputRef.current.value,
    };

    localStorage.setItem("NAME", data.name);
    localStorage.setItem("PASSWORD", data.password);
    navigate("/signin");
  };

  return (
    <>
      <div className={classes.signup_right}>
        <form onSubmit={submitHandler}>
          <div className={classes.form}>
            <legend>Sign Up Form</legend>
            <div className={classes.input_box}>
              <label htmlFor="name">
                Name<span>*</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                required
                ref={nameInputRef}
              />
            </div>

            <div className={classes.input_box}>
              <label htmlFor="password">
                Password<span>*</span>
              </label>
              <input
                id="password"
                type="text"
                placeholder="Enter your password"
                required
                minLength={6}
                ref={passwordInputRef}
              />
            </div>
            <div className={classes.input_box}>
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                ref={emailInputRef}
              />
            </div>

            <div className={classes.input_box}>
              <label htmlFor="phone_number">Phone Number</label>
              <input
                id="phone_number"
                type="phone"
                placeholder="Enter your phone Number"
                ref={phoneNumberInputRef}
              />
            </div>
            <div className={classes.input_box}>
              <ProfessionDropDown />
            </div>
            <div className={classes.btn_box}>
              <button className={classes.input_btn} type="submit">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUpPage;
