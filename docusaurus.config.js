// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Documentation Space',
  tagline: 'My knowledge is here',
  url: 'https://seifeslimenedocs.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'seifeslimene', // Usually your GitHub org/user name.
  projectName: 'seifeslimenedocs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Seif E. Slimene',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'My Tutorials',
          },
          {to: '/blog', label: 'My Blog Articles', position: 'left'},
          {
            href: 'https://github.com/seifeslimene',
            label: 'My GitHub',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'My Docs',
            items: [
              {
                label: 'My Tutorials',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Reach Me On',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/2804752/seif-eddine-slimene',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/7xHSEfDCea',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/seifeslimene',
              },
            ],
          },
          {
            title: 'More About Me',
            items: [
              {
                label: 'My Blog Articles',
                to: '/blog',
              },
              {
                label: 'My GitHub',
                href: 'https://github.com/seifeslimene',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Seif Eddine Slimene\`s Documentation Space`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
