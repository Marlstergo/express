// https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/#additional-environments-staging-test-etc
/* require("dotenv").config({
  path: `.env.myCustomEnvironment`,
});
 */

const companyName = "Company XYZ";
const domain = process.env.domain || "company-xyz.com";
// https://www.netlify.com/blog/2020/03/26/how-to-set-up-netlify-dns-custom-domains-cname-a-records/
const url = process.env.URL || `https://www.${domain}`; // No trailing slash allowed!

const today = new Date();
const [month, day, year] = [
  today.getUTCMonth() + 1, // +1 because zero indicates the first month of the year
  today.getUTCDate(),
  today.getUTCFullYear(),
];

module.exports = {
  siteMetadata: {
    // src/components/SEO.js
    title: "Fallback title in %s", // This default value is overwritten if SEO.js prop "title" is set
    titleTemplate: `%s • ${companyName}`, // Always used by SEO.js! %s is sourced from the SEO.js prop "title"
    description: "Fallback description in the metadata", // 50 - 160 characters
    siteUrl: url, // No trailing slash allowed!
    domain: domain, // Bare second-level domain
    image: "/thumbnail.jpg", // SEO.js: Path to your default (!) image you placed in the 'static' folder
    tel: ["+(49)1234-5678901-23", "+(49)1234-5678901-24"],
    fax: "+(49)1234-5678901-25",
    companyName: companyName,
    vatId: "DE132465798",
    companyType: "GbR",
    person: [
      { firstName: "John", lastName: "Doe" },
      { firstName: "Jane", lastName: "Smith" },
    ],
    street: "Streetname",
    streetNumber: "23a",
    zipCode: "13245",
    city: "Berlin",
    country: "Deutschland",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "@chakra-ui/gatsby-plugin", // Automatically https://chakra-ui.com/docs/getting-started#set-up-provider
    "gatsby-plugin-image",
    // "gbimage-bridge",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: url,
        sitemap: `${url}/sitemap.xml`,
        // policy: [{ userAgent: "*", allow: ["/"], disallow: ["/datenschutz"] }], // Online operation
        policy: [{ userAgent: "*", disallow: ["/"] }], // Development operation
      },
    },
    /*     {
      resolve: "gatsby-plugin-sitemap",
      options: {
        exclude: ["/datenschutz"],
      },
              
        https://developers.google.com/search/docs/advanced/crawling/ask-google-to-recrawl
        https://developers.google.com/search/docs/advanced/sitemaps/build-sitemap
        "If you have updated pages in the sitemap, mark them with <lastmod>."

        https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/#recommended-usage
        "Google ignores <priority> and <changefreq> values, so don’t bother adding them."
        "Google reads the <lastmod> value, but if you misrepresent this value, we will stop reading it."

        https://www.sitemaps.org/protocol.html#lastmoddef
        
    }, */
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        exclude: ["/datenschutz"],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage(
              filter: {
                path: { regex: "/^(?!/404/|/404.html|/dev-404-page/)/" }
              }
            ) {
              edges {
                node {
                  path
                }
              }
            }
          }
        `,
        output: "/sitemap.xml",
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map((edge) => {
            // Landing page is the most important one
            const priority = edge.node.path === "/" ? 1.0 : 0.5;
            // Impressum is not modified frequently
            const changefreq =
              edge.node.path === "/impressum/" ? "yearly" : "daily";
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              lastmod: `${year}-${month}-${day}`,
              changefreq: changefreq,
              priority: priority,
            };
          }),
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        /* 
        https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/#configure-icons-and-their-generations---required

        For best results, if you’re providing an icon for generation it should be…

        …at least as big as the largest icon being generated (512x512 by default).
        …square (if it’s not, transparent bars will automatically be added to make it square).
        …of one of the following formats: JPEG, PNG, WebP, TIFF, GIF or SVG.
        */
        icon: "src/images/icon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        defaultLayouts: {
          default: require.resolve("./src/components/LayoutMDX.jsx"),
        },
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        // TODO: Doesn't work in `develop`
        // Partial workaround in package.json `scripts`
        stages: ["develop", "develop-html", "build-javascript"],
        extensions: ["js", "jsx"],
        // extensions: ["js", "jsx", "md", "mdx"],
        // exclude: ["node_modules", ".cache", "public"], // .eslintignore
        // Any eslint-webpack-plugin options below:
        emitError: true,
        emitWarning: true,
        failOnError: true,
        failOnWarning: true,
        quiet: false,
      },
    },
    {
      resolve: "gatsby-plugin-svgr-svgo",
      options: {
        // SVG as a React component (inline SVG), e.g. <CatInlineSvg />
        inlineSvgOptions: [
          {
            test: /\.inline.svg$/,
            /*             svgoConfig: {
              // https://github.com/svg/svgo#built-in-plugins
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            }, */
          },
        ],
        // SVG as a file that is available by URL, e.g. <img src={CatSvg} />
        urlSvgOptions: [
          {
            test: /\.svg$/,
            /*             svgoConfig: {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            }, */
          },
        ],
      },
    },
  ],
};
