import React from "react";
import classes from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <>
      <main>
        <h1>An error occured!</h1>
        <p className={classes.error}>The page does not exist!</p>
      </main>
    </>
  );
};

export default ErrorPage;