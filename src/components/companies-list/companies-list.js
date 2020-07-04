import React from "react";
import Company from "./company";
import classes from "./companiesList.module.css";

const CompaniesList = ({ companies, onCompanySelected }) => {
  const list = Object.keys(companies).map((key) => {
    const company = companies[key];
    return (
      <Company
        key={company.id}
        company={company}
        onCompanySelected={onCompanySelected}
      />
    );
  });
  return (
    <div className={classes.CompaniesList}>
      <p>Select sample</p>
      {list}
    </div>
  );
};

export default CompaniesList;
