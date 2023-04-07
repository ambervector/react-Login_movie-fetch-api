import React from "react";
import classes from "./CompanyInfo.module.css";

const CompanyInfo = () => {
  return (
    <>
      <div className={classes.company_info_box}>
        <p>
          <strong>Company:</strong> Geeksynergy Technologies Pvt Ltd
        </p>
        <p>
          <strong>Address:</strong> Sanjayanagar, Bengaluru-56
        </p>
        <p>
          <strong>Phone:</strong> XXXXXXXXX09
        </p>
        <p>
          <strong>Email:</strong> XXXXXX@gmail.com
        </p>
      </div>
    </>
  );
};

export default CompanyInfo;
