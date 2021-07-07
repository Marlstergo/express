/* EXAMPLE */

import React from "react";
// import { useStaticQuery, graphql } from "gatsby";
import "twin.macro";
import { Box, Flex } from "@chakra-ui/react";
import { Link } from "gatsby";
// import React from "react";
// Example
// import { FiPhone, FiMenu, FiX } from "react-icons/fi";
// import { ImWhatsapp } from "react-icons/im";

export default function Header() {
  // const { site } = useStaticQuery(query);
  // const { tel } = site.siteMetadata;

  return (
    <header id="header">
      <Box className="">
        <Flex tw="z-50 flex justify-end mx-20 pt-5 text-lg space-x-6">
          <Link
            tw="text-black border-b-4 border-gray-700 hover:border-opacity-100 border-opacity-100"
            to="/"
          >
            home
          </Link>
          <Link to="/" tw="text-black border-b-4 border-gray-700 border-opacity-0 hover:border-opacity-100">
              next
            
          </Link>
          <Link tw="text-black border-b-4 border-gray-700 border-opacity-0 hover:border-opacity-100">
            empty
          </Link>
        </Flex>
      </Box>
    </header>
  );
}

// const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         tel
//       }
//     }
//   }
// `;
