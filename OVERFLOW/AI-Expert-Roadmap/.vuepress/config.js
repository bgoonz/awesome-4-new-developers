const container = require("markdown-it-container");
const fs = require("fs");
module.exports = {
  title: "AI Expert Roadmap",
  description: "The i.am.ai Experts Roadmap",
  dest: "public/roadmap",
  base: "/roadmap/",
  themeConfig: {
    repo: "https://github.com/AMAI-GmbH/AI-Expert-Roadmap",
    docsDir: ".",
    docsBranch: "master",
    editLinks: true,
    editLinkText: "Edit this page",
    sidebarDepth: 1,
    lastUpdated: "Last Updated",
    search: false,
    sidebar: [
      ["/", "Roadmap"],
      ["contributing.md", "Contribution"],
    ],
    nav: [
      {
        text: "AI Use Cases",
        link: "https://i.am.ai/usecases",
        target: "_self",
      },
      { text: "AI Roadmap", link: "/" },
      {
        text: "AI Newsletter",
        link: "https://i.am.ai/newsletter",
        target: "_self",
      },
      {
        text: "Hire AI Experts",
        link: "https://am.ai?utm_source=i.am.ai&utm_medium=Referral&utm_campaign=AI+Expert+Roadmap+Hire+Experts+Navbar",
        target: "_blank",
      },
    ],
  },
  patterns:
    process.env.EXPORT_PDF === "True" ? ["readme.md"] : ["**/*.md", "**/*.vue"],
  plugins: [
    "@snowdog/vuepress-plugin-pdf-export",
    {
      puppeteerLaunchOptions: {
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      },
    },
  ],
  /* using this Google Analytics Plugin makes metomic's autoblock impossible
    
    plugins: {
        '@vuepress/plugin-google-analytics': {
            ga: 'UA-131730139-2'
          },
    }, */
  /*plugins: {
        '@vuepress/pwa': {xw
            serviceWorker: true,
            updatePopup: {
                message: "Updated documentation is available.",
                buttonText: "Refresh"
            }
        }
    },*/

  head: [
    process.env.EXPORT_PDF !== "True"
      ? [
          "script",
          {
            async: true,
            defer: true,
            "data-domain": "i.am.ai",
            src: "https://stats.am.ai/js/plausible.outbound-links.js",
          },
        ]
      : ["script", {}],
    [
      "link",
      {
        rel: "icon",
        href: `/logos/icon-512x512.png`,
      },
    ],
    [
      "link",
      {
        rel: "manifest",
        href: "/manifest.json",
      },
    ],
    [
      "meta",
      {
        name: "theme-color",
        content: "#1f6286",
      },
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-capable",
        content: "yes",
      },
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: `/logos/icon-152x152.png`,
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/logos/icon-144x144.png",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileColor",
        content: "#ffffff",
      },
    ],
    [
      "meta",
      {
        name: "Description",
        content:
          "Follow these roadmaps to become an Artificial Intelligence expert.",
      },
    ],
    [
      "meta",
      {
        property: "og:title",
        content: "AI Roadmap",
      },
    ],
    [
      "meta",
      {
        property: "og:image",
        content: "https://i.am.ai/img/banner/i-am-ai-banner-roadmap.png",
      },
    ],
    [
      "meta",
      {
        property: "og:description",
        content:
          "Follow these roadmaps to become an Artificial Intelligence expert.",
      },
    ],
    [
      "meta",
      {
        property: "og:url",
        content: "https://i.am.ai/roadmap",
      },
    ],
    [
      "meta",
      {
        property: "og:type",
        content: "website",
      },
    ],
    [
      "meta",
      {
        property: "og:site_name",
        content: "AI Roadmap",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/Favicon.png",
      },
    ],
  ],
  extendMarkdown(md) {
    md.use(container, "example", {
      render: (tokens, idx) =>
        tokens[idx].nesting === 1
          ? `<Example title="${tokens[idx].info
              .trim()
              .slice("upgrade".length)
              .trim()}">`
          : "</Example>",
    });
    md.use(container, "youtube", {
      render: (tokens, idx) =>
        tokens[idx].nesting === 1 ? `<Youtube>` : "</Youtube>",
    });

    const render = md.render;
    md.render = (...args) => {
      // original content
      var html = render.call(md, ...args);

      // Replace Github links to i.am.ai/roadmap in the roadmap
      html = html.replace(
        /<a[[\s]+([^>]+)>((?:.|\s)*?)<\/a>/g,
        function (match, p1, p2) {
          if (p1.startsWith('href="https://i.am.ai/roadmap#')) {
            return p2;
          }
          return match;
        }
      );

      // SVG embedding for clickable images
      html = html.replace(
        /<img\s[^>]*?src\s*=\s*['\"]([^'\"]*?)['\"][^>]*?>/g,
        function (match, p1) {
          if (
            p1.startsWith("./images/") &&
            p1.endsWith(".svg") &&
            !p1.startsWith("./images/logos")
          ) {
            var svg = fs.readFileSync(p1, "utf8");
            svg = svg.replace(/<\?xml.+\?>|<!DOCTYPE.+>/g, "");
            // make links open in new window
            svg = svg.replace(/target=\"_blank\"/gis, "");
            svg = svg.replace(
              /(<a[^<>]*xlink:href=['\"]?http[^<>]+)>/gis,
              '$1 target="_blank">'
            );
            return svg;
          }
          return match;
        }
      );

      return html;
    };
  },
};
