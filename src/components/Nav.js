import { Box, Flex } from "@chakra-ui/react";
import { Link } from "gatsby";
import React from "react";

function Nav() {
  return (
    <>
      <Box className="">
        <Flex className="z-50 flex justify-end mx-20 pt-5 text-lg space-x-6">
          <Link
            className="text-black border-b-4 border-gray-700 hover:border-opacity-100 border-opacity-100"
            to="/"
          >
            home
          </Link>
          <Link to="/" className="text-black border-b-4 border-gray-700 border-opacity-0 hover:border-opacity-100">
              next
            
          </Link>
          <Link className="text-black border-b-4 border-gray-700 border-opacity-0 hover:border-opacity-100">
            empty
          </Link>
        </Flex>
      </Box>
    </>
  );
}

export default Nav;
