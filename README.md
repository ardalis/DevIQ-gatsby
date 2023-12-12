# DevIQ Gatsby

A gatsby static site for [DevIQ.com](https://deviq.com).

## Dev Containers

If you don't have Node, NPM, or Gatsby installed locally, don't panic! We have [Development Containers](https://containers.dev/) configured in the `.devcontainer` folder. These allow you to run your apps in containers locally. You can also [use these with Visual Studio Code](https://code.visualstudio.com/docs/devcontainers/containers). You do need to have Docker running in order to use the container.

The [Dockerfile](./.devcontainer/Dockerfile) starts with a Node image that we need for this repo. It also installs the Gatsby CLI tooling.

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

## Exporting Mermaid Diagrams to SVG

You can use [mermaid-cli](https://github.com/mermaid-js/mermaid-cli) to convert Mermaid diagrams to SVG. **This is how we create Mermaid graphs with links.**

SVG is XML under the covers and can be styled and edited.