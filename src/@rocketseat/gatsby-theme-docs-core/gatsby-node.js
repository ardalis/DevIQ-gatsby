const path = require(`path`);
const { createFilePath, createRemoteFileNode } = require(`gatsby-source-filesystem`);
const fs = require(`fs`);
const urljoin = require(`url-join`);

const { normalizeBasePath, resolveLink } = require(`./util/url`);
const withDefault = require(`./util/with-default`);

exports.createPages = (
  { graphql, actions: { createPage }, reporter },
  themeOptions,
) => {
  reporter.info(`Getting the docs via GraphQL`);

  const { basePath, baseDir, docsPath, githubUrl, branch } = withDefault(
    themeOptions,
  );

  const docsTemplate = require.resolve(`./templates/docs-query.js`);
  const homeTemplate = require.resolve(`./src/templates/homepage-query.js`);

  return graphql(
    `
      {
        files: allFile(filter: { extension: { in: ["md", "mdx"] } }) {
          edges {
            node {
              id
              relativePath
              childMdx {
                fields {
                  slug
                }
              }
            }
          }
        }
        sidebar: allSidebarItems {
          edges {
            node {
              label
              link
              items {
                label
                link
              }
              id
            }
          }
        }
      }
    `,
  ).then(result => {
    if (result.errors) {
      reporter.panic(
        `docs: there was an error loading the docs folder!`,
        result.errors,
      );
      return;
    }

    // Generate prev/next items based on sidebar.yml file
    const sidebar = result.data.sidebar.edges;
    const listOfItems = [];

    sidebar.forEach(({ node: { label, link, items } }) => {
      if (Array.isArray(items)) {
        items.forEach(item => {
          listOfItems.push({
            label: item.label,
            link: resolveLink(item.link, basePath),
          });
        });
      } else {
        listOfItems.push({
          label,
          link: resolveLink(link, basePath),
        });
      }
    });

    // Generate docs pages
    const docs = result.data.files.edges;
    docs.forEach(doc => {
      const {
        childMdx: {
          fields: { slug },
        },
        relativePath,
      } = doc.node;

      let githubEditUrl;

      if (repositoryUrl) {
        const pathLink = path.join(branch, baseDir, docsPath);
        githubEditUrl = urljoin(repositoryUrl, `tree`, pathLink, relativePath);
      }

      const pageLink = slug.slice(0, slug.length - 1);
      const currentPageIndex = listOfItems.findIndex(
        page => page.link === pageLink,
      );

      const prev = listOfItems[currentPageIndex - 1];
      const next = listOfItems[currentPageIndex + 1];

      createPage({
        path: slug,
        component: docsTemplate,
        context: {
          slug,
          prev,
          next,
          githubEditUrl,
        },
      });
    });

    reporter.success(`docs pages created`);
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type Mdx implements Node {
      frontmatter: MdxFrontmatter!
    }

    type MdxFrontmatter {
      title: String!
      description: String
      image: String
      featuredImage: File @fileByRelativePath
      disableTableOfContents: Boolean
    }
  `);

  actions.createTypes(`
    type SidebarItems implements Node {
      label: String!
      link: String
      items: [SidebarItemsItems]
    }

    type SidebarItemsItems {
      label: String
      link: String
    }
  `);
};

exports.onPreBootstrap = ({ store, reporter }, themeOptions) => {
  const { configPath, docsPath } = withDefault(themeOptions);
  const { program } = store.getState();

  const dirs = [
    path.join(program.directory, configPath),
    path.join(program.directory, docsPath),
  ];

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      reporter.success(`docs: intialized the ${dir} directory`);
      fs.mkdirSync(dir);
    }
  });
};

exports.onCreateNode = (
  { node, actions: { createNodeField }, getNode },
  themeOptions,
) => {
  if (node.internal.type !== `Mdx`) {
    return;
  }

  const { basePath } = withDefault(themeOptions);

  let value = createFilePath({ node, getNode });
  if (value === 'index') value = '';

  createNodeField({
    name: `slug`,
    node,
    value: normalizeBasePath(basePath, value),
  });

  createNodeField({
    name: `id`,
    node,
    value: node.id,
  });

  const {fmImagesToRelative} = require('gatsby-remark-relative-images')

  exports.onCreateNode = ({node, actions, getNode}) => {
    const {createNodeField} = actions
    fmImagesToRelative(node)
  
    if (node.internal.type === `MarkdownRemark`) {
      const value = createFilePath({node, getNode})
      createNodeField({
        name: `image`,
        node,
        value,
      })
    }
  }

};
