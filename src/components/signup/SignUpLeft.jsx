import React from "react";
import classes from "./SignUpLeft.module.css";

const SignUpLeft = () => {
  return (
    <>
      <div className={classes.signup_left}>
        <ul className={classes.instruction_list}>
          <li className="length">
            Password must be at least 6 characters long.
          </li>
          <li className="lowercase">
            Name and Password fields should not be empty.
          </li>
          <li className="uppercase">Please provide a valid email address.</li>
          <li className="special">Please provide a valid phone number.</li>
        </ul>
      </div>
    </>
  );
};

export default SignUpLeft;
