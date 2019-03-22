module.exports = {
  siteMetadata: {
    title: "Benjamin Kleeman",
    author: "Benjamin Kleeman",
    description: "A personal/portfolio website for Benjamin Kleeman, a web developer and musician."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'benjamin-kleeman-personal-website',
        short_name: 'benjamin-kleeman',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'src/images/icon-512x512.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
