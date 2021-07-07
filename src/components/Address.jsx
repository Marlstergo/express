import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

export default function Address({ showCompanyType }) {
  const { site } = useStaticQuery(query);
  const {
    // companyName,  // TODO: Kapitalgesellschaften
    companyType,
    person,
    street,
    streetNumber,
    zipCode,
    city,
  } = site.siteMetadata;

  let companyHeadElement;

  // Einzelgewerbe
  if (companyType === "Einzelgewerbe") {
    companyHeadElement = (
      <>
        {`${person[0].firstName} ${person[0].lastName}`}
        {showCompanyType && (
          <>
            {companyType}
            <br />
          </>
        )}
      </>
    );
  }

  // GbR
  if (companyType === "GbR") {
    // Will be concatenated string
    let personList = "";

    person.forEach((element, index, array) => {
      personList += `${element.firstName} ${element.lastName}`;
      // There is an empty string after the last element
      personList += index < array.length - 1 ? " & " : "";
    });

    personList += ` ${companyType}`;

    companyHeadElement = personList;
  }

  return (
    <p>
      <b>{companyHeadElement}</b>
      <br />
      {street} {streetNumber}
      <br />
      {zipCode} {city}
    </p>
  );
}

Address.propTypes = {
  showCompanyType: PropTypes.bool,
};

const query = graphql`
  query {
    site {
      siteMetadata {
        # companyName
        companyType
        person {
          firstName
          lastName
        }
        street
        streetNumber
        zipCode
        city
      }
    }
  }
`;
