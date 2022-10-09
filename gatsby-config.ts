// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config({ path: `.env` });

import type { GatsbyConfig } from "gatsby";
import config from "./src/data/config";

const gatsbyConfig: GatsbyConfig = {
  siteMetadata: {
    title: config.title,
    description: config.description,
    author: config.author,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        url: "https://api.github.com/graphql",
        headers: {
          Authorization: `bearer ${process.env.GATSBY_PORTFOLIO_GITHUB_TOKEN}`,
        },
      },
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: config.themeColor,
        showSpinner: false,
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [config.googleAnalyticsID],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.title,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        short_name: "starter",
        start_url: "/",
        display: "minimal-ui",
        icon: "./static/favicon/favicon.png",
        icons: [
          {
            src: "icons/icon-48x48.png",
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: "icons/icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "icons/icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "icons/icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
        ],
      },
    },
    "gatsby-plugin-offline",
  ],
};

export default gatsbyConfig;
