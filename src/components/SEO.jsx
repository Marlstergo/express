import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

/*
https://github.com/joshbuchea/HEAD
https://css-tricks.com/essential-meta-tags-social-media/
https://www.gatsbyjs.com/docs/add-page-metadata/
https://www.gatsbyjs.com/docs/add-seo-component/
https://www.gatsbyjs.com/docs/how-to/adding-common-features/seo/
https://www.gatsbyjs.com/tutorial/seo-and-social-sharing-cards-tutorial/#using-the-seo-component
TODO: https://developers.google.com/search/docs/advanced/appearance/overview
*/

/*
Icons are configured in gatsby-config.js:
https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/#configure-icons-and-their-generations---required
*/

const SEO = ({ title, description, image, article }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  const ogType = article ? "article" : "website";

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />

      {/* Facebook Open Graph */}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content={ogType} />}

      {/* Twitter Card */}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.url && <meta property="twitter:url" content={seo.url} />}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
        defaultImage: image
      }
    }
  }
`;
