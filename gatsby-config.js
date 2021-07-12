module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Życie od nowa",
    menuLinks: [
      {
        name: "Kursy online",
        link: "/courses",
        image: "/courses.png",
      },
      {
        name: "Publikacje",
        link: "/publications",
        image: "/publications.png",
      },
      {
        name: "Szkolenia",
        link: "/learning",
        image: "/learning.png",
      },
      { name: "Terapie", link: "/terapy", image: "/terapy.png" },
      {
        name: "Coaching",
        link: "/coaching",
        image: "/coaching.png",
      },
      {
        name: "Podróże rozwojowe",
        link: "/travel",
        image: "/travel.png",
      },
    ],
    navLinks: [
      {
        name: "O NAS",
        link: "/about",
      },
      {
        name: "SKLEP",
        link: "/shop",
      },
      {
        name: "KONTAKT",
        link: "/contact",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-transformer-remark",
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
  ],
};
