import React from "react";
import PropTypes from "prop-types";
// import { GlobalStyles } from "twin.macro";

// Look at gatsby-config.js: "@chakra-ui/gatsby-plugin"
// import { ChakraProvider } from "@chakra-ui/react";

import Header from "./Header";
import Footer from "./Footer";

/* 

############
FONT LOADING
############

// https://www.gatsbyjs.com/docs/recipes/styling-css/#using-google-fonts

Example:
// https://github.com/fontsource/fontsource/tree/main/packages/poppins
$> npm install @fontsource/poppins

import "@fontsource/poppins/400.css"; // Weight 400
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";

Set default fonts in:
tailwind.config.js: theme.fontFamily

No need for an extra
  import "./layout.css" with
    body { font-family: "Poppins" }

No necessary need for
  // https://www.themes.dev/blog/typographic-defaults-in-tailwind-css

! Because
!   A: tailwind.config.js: theme.fontFamily is merged into <GlobalStyles />
      Example: https://unpkg.com/tailwindcss/dist/base.css
    B: /src/@chakra-ui/gatsby-plugin/theme.js is used by main context provider ChakraProvider

*/

// https://www.gatsbyjs.com/docs/recipes/pages-layouts/#creating-a-layout-component
// https://www.gatsbyjs.com/docs/how-to/routing/layout-components/
// https://www.gatsbyjs.com/plugins/gatsby-plugin-layout/
const Layout = ({ children, refrence, animation, ...rest }) => (
  // Is already done by "@chakra-ui/gatsby-plugin"
  // <ChakraProvider>
  <div {...rest}>
    {/* https://github.com/ben-rogerson/twin.examples/tree/master/gatsby-emotion#add-the-global-styles
    is largely done by CSSReset with ChakraProvider */}
    {/* <GlobalStyles /> */}
    <Header />
    <main>{children}</main>
    <Footer reff={refrence} animate={animation} />



  </div>
  // </ChakraProvider>
);

// https://github.com/facebook/react/issues/5143#issuecomment-662150906
Layout.propTypes = {
  children: PropTypes.element.isRequired,
  animation: PropTypes.func,
  refrence: PropTypes.any
};

export default Layout;
