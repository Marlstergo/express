import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default function Telephone() {
  const { site } = useStaticQuery(query);
  const { tel } = site.siteMetadata;

  let telElements = tel.map((number) => (
    <li key={number.toString()}>
      <a href={`tel:${number}`}>{number}</a>
    </li>
  ));

  return <ul>{telElements}</ul>;
}

const query = graphql`
  query {
    site {
      siteMetadata {
        tel
      }
    }
  }
`;
