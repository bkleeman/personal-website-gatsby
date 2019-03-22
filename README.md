# My Personal Website

This repository contains the source code for my personal website. This application is served over https @ https://benjaminkleeman.surge.sh/ and is available as a Progressive Web App for mobile and desktop environments. My exploration into Gatsby has helped me learn about JavaScript frameworks, React and GraphQL fundamentals, serving dynamic content as a static site, and a bit about combining client-side & server-side rendering to maximize efficiency.

## Implementation

For those interested in implementing this application, to build off of for your own purposes or otherwise, here are the steps you must take. For those just interested in installing the site as an application, skip ahead to step 6.

1) Clone the repository<br>`git clone https://github.com/bkleeman/personal-website-gatsby.git`

2) cd into the appropriate directory
    `cd personal-website-gatsby`

3) `npm install`

4) Build the public file system
    `gatsby build`

5) Run a production server
    `gatsby serve`
    You now have an instance running at http://localhost:9000/, and you can download the application

6) Install to the desktop/Add to Home Screen
    
    6a) For Google Chrome on desktop: 
        Select the "more vertical" menu -- you know, the one in the upper right with the three dots 

        and select "Install benjamin-kleeman-personal website"

    6b) For Google Chrome on Android: 
        Follow these instructions https://www.maketecheasier.com/add-chrome-bookmarks-android-home-screen/

    6c) For Safari on iOS: 
        Select the share icon, and navigate the bottom row to the big "plus sign" icon, and tap "Add to Home Screen." This will add the application to your home screen and you can open it for a native app-like experience.

7) To run a development server,
    `gatsby serve`
    You can now take advantage of hot reloading as you customize the site to suit your needs.

8) Peruse the [GatsbyJS documentation](https://www.gatsbyjs.org/docs/) 


## Built With

* [GatsbyJS](https://www.gatsbyjs.org/) for application structure and generation
* [React](https://reactjs.org/) for components
* [GraphQL](https://graphql.org/) for database queries
* [Font Awesome](https://fontawesome.com) for icons
* [Surge](https://surge.sh/) for deployment over HTTPS

## Authors

* **Benjamin Kleeman** - *All website planning and development* - [bkleeman](https://github.com/bkleeman)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thanks go out to the following: 
  * Professor [James deBettencourt](https://github.com/jdebettencourt) for inspiring me to work with JavaScript frameworks and encouraging me to learn ES6 best practices
  * Hunter Chang @ [CodeBushi](https://codebushi.com/) for the awesome Gatsby starter
  * [Wes Bos](https://github.com/wesbos) and [Scott Tolinski](https://github.com/stolinski) at [Syntax](https://syntax.fm/) for convincing me that Gatsby is worth pursuing
  * [Billie Thompson](https://github.com/PurpleBooth) for the README template
