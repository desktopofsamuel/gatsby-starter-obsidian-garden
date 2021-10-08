const siteConfig = require('./config.js');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  pathPrefix: siteConfig.pathPrefix,
  siteMetadata: {
    url: siteConfig.url,
    title: siteConfig.title,
    subtitle: siteConfig.subtitle,
    description: siteConfig.description,
    copyright: siteConfig.copyright,
    disqusShortname: siteConfig.disqusShortname,
    menu: siteConfig.menu,
    category: siteConfig.category,
    author: siteConfig.author,
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'media',
        path: `${__dirname}/content/vault/media`,
      },
    },
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCSS: true,
        isUsingColorMode: false,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve('./src/templates/default-template.js'),
        },
        plugins: [
          `gatsby-remark-images`,
          'gatsby-remark-unwrap-images',
          // `gatsby-remark-images-medium-zoom`, // Important!
        ],
        gatsbyRemarkPlugins: [
          // {
          //   resolve: `gatsby-remark-wiki-link`,
          //   options: {
          //     slugify: `${__dirname}/src/utils/make-slug.js`,
          //     stripBrackets: true,
          //   },
          // },
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              // [Optional] The root of "media_folder" in your config.yml
              // Defaults to "static"
              // staticFolderName: 'media',
              // [Optional] Include the following fields, use dot notation for nested fields
              // All fields are included by default
              // include: ['featured'],
              // [Optional] Exclude the following fields, use dot notation for nested fields
              // No fields are excluded by default
              // exclude: ['featured.skip'],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
              backgroundColor: 'transparent',
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
  ],
};
