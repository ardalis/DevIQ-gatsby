# DevIQ Gatsby

A gatsby static site for [DevIQ.com](https://deviq.com).

## Dev Containers

If you don't have Node, NPM, or Gatsby installed locally, don't panic! We have [Development Containers](https://containers.dev/) configured in the `.devcontainer` folder. These allow you to run your apps in containers locally. You can also [use these with Visual Studio Code](https://code.visualstudio.com/docs/devcontainers/containers). You do need to have Docker running in order to use the container.

The [Dockerfile](./.devcontainer/Dockerfile) starts with a Node image that we need for this repo. It also installs the Gatsby CLI tooling.

## Local Dependencies

If you do want to run this locally and not within a dev container, you will want to have the following installed:

- [Gatsby CLI](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#how-to-use-gatsby-cli)
- [Node v.20.10.0](https://nodejs.org/en/download) - You can also use [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) and have it download `20.10.0`.

## Build Locally

To build locally, install the gatsby command line tools:

```powershell
npm install -g gatsby-cli@latest-v4
```

Next, run these commands:

```powershell
npm install --legacy-peer-deps

gatsby build
gatsby serve
```

You may also need to run this to clean up local cached files:

```powershell
gatsby clean
```

When you're doing active development, run:

```powershell
gatsby develop
```

This will build the site and watch the folder for changes, automatically updating as changes are detected.

## Adding Frontmatter to a File

This project has a .vscode folder checked in. There is a snippet within that folder to make it easier to insert the frontmatter into a new page.

Within VS Code:

1. Bring up the Command Palette.
2. Search for **Snippets: Insert Snippet**
3. In **Workspace Snippets**, select the snippet named `deviq-template`.

## Exporting Mermaid Diagrams to SVG

You can use [mermaid-cli](https://github.com/mermaid-js/mermaid-cli) to convert Mermaid diagrams to SVG. **This is how we create Mermaid graphs with links.**

SVG is XML under the covers and can be styled and edited.