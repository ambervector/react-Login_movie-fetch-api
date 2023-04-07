import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./SignInPage.module.css";

const SignInPage = () => {
  const [hasError, setHasError] = useState(false);


  const navigate = useNavigate();



  const retrieveduserName = localStorage.getItem("NAME");
  const retrievedpassword = localStorage.getItem("PASSWORD");

  const enteredNameRef = useRef();
  const enteredPasswordRef = useRef();


  function submitHandler(event) {
    event.preventDefault();
    if (
      enteredNameRef.current.value === retrieveduserName &&
      enteredPasswordRef.current.value === retrievedpassword
    ) {
      setHasError(false);
      localStorage.setItem("IS_AUTHENTICATED", "1");
      navigate("/final");
    } else {
      setHasError(true);
    }


  }

  return (
    <>
      <div className={classes.container}>
        <form onSubmit={submitHandler}>
          <div className={classes.form}>
            <legend>Sign In</legend>
            <div className={classes.input_box}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                ref={enteredNameRef}
              />
            </div>

            <div className={classes.input_box}>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="text"
                placeholder="Enter your password"
                ref={enteredPasswordRef}
              />
            </div>

            {hasError && <p>Invalid Credentials</p>}

            <div className={classes.btn_box}>
              <button className={classes.input_btn} type="submit">
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignInPage;
