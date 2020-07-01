import React from "react";
import Company from "./company";

const companiesList = ({ companies, onCompanySelected }) => {
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
  return <div className="companies-list">{list}</div>;
};

export default companiesList;
