require("dotenv").config()

module.exports = {
  /* Your site config here */
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Poppins`,
            file: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap",
          },
        ],
      },
    },
  ],
}
