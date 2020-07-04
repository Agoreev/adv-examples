import React, { Fragment } from "react";
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
    <Fragment>
      <p className={classes.Header}>Select sample</p>
      <div className={classes.CompaniesList}>{list}</div>
    </Fragment>
  );
};

export default CompaniesList;
