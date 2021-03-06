import React from "react";
import classes from "./company.module.css";

const Company = ({ company, onCompanySelected }) => {
  return (
    <div className={classes.Company}>
      <img
        src={company.image}
        alt={company.title}
        onClick={() => onCompanySelected(company.id)}
      />
    </div>
  );
};

export default Company;
