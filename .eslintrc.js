/*
https://www.gatsbyjs.com/plugins/gatsby-plugin-eslint/
https://eslint.org/docs/user-guide/configuring
https://prettier.io/docs/en/integrating-with-linters.html
*/

module.exports = {
  parser: "babel-eslint", // Uses babel-eslint transforms
  settings: {
    react: {
      version: "detect", // Detect react version
    },
    // "mdx/code-blocks": true, // optional, if you want to lint code blocks at the same time
  },
  env: {
    node: true, // Defines things like process.env when generating through node
  },
  extends: [
    "eslint:recommended", // Use recommended configs
    "plugin:react/recommended",
    "plugin:react-hooks/recommended", // https://reactjs.org/docs/hooks-rules.html
    // "plugin:mdx/recommended",
    "prettier", // Turns off all rules that are unnecessary or might conflict with Prettier.
  ],
};
