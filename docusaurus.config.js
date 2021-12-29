// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Leaf Global Fintech',
  tagline: 'Leaf Global Fintech',
  url: 'https://leafglobalfintech.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'LeafGlobalFintech', // Usually your GitHub org/user name.
  projectName: 'leaf_loans', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: true,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
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
        title: 'Leaf Global Fintech',
        logo: {
          alt: 'Leaf Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            position: 'left',
            label: 'Documentation',
            docId: 'overview',
          },
          {
            position: 'left',
            label: 'Project Charter',
            to: '/project-charter',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: 'docs',
              },
            ],
          },
          {
            title: 'Socials',
            items: [
              {
                label: 'Facebook',
                href: 'https://facebook.com/leafglobaltech',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/leafglobaltech',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/LeafGlobalTech',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/orgs/LeafGlobalFintech/',
              },
              {
                label: 'Privacy Policy',
                href: '/privacy_policy',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Leaf Global Fintech Corporation. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
