require("dotenv").config()

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
    },
    {
      resolve: "gatsby-plugin-image",
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `yj3avkzhzg73`,
        accessToken: process.env.CONTENTFUL_API_TOKEN,
      },
    },
  ],
}
