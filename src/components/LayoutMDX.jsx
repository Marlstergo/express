import React from "react";
import PropTypes from "prop-types";
import "twin.macro";

import Layout from "./Layout";

export default function LayoutMDX({ children }) {
  return (
    <Layout>
      {/* https://github.com/tailwindlabs/tailwindcss-typography */}
      <article tw="prose lg:prose-xl">{children}</article>
    </Layout>
  );
}

LayoutMDX.propTypes = {
  children: PropTypes.node.isRequired,
};
