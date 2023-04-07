import React, { useEffect } from "react";
import SignUpLeft from "../components/signup/SignUpLeft";
import SignUpRight from "../components/signup/SignUpRight";
import classes from "./SignUpPage.module.css";

const SingUpPage = () => {
  useEffect(() => {
    localStorage.removeItem("NAME");
    localStorage.removeItem("PASSWORD");
    localStorage.removeItem("IS_AUTHENTICATED");
  }, []);

  const appliedClass = `${classes.sign_up} ${classes.container}`;
  return (
    <div className={appliedClass}>
      <SignUpLeft />
      <SignUpRight />
    </div>
  );
};

export default SingUpPage;
