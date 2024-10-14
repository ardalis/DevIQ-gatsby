# DevIQ Gatsby

A gatsby static site for [DevIQ.com](https://deviq.com).

## Dev Containers

If you don't have Node, NPM, or Gatsby installed locally, don't panic! We have [Development Containers](https://containers.dev/) configured in the `.devcontainer` folder. These allow you to run your apps in containers locally. You can also [use these with Visual Studio Code](https://code.visualstudio.com/docs/devcontainers/containers). You do need to have Docker running in order to use the container.

The [Dockerfile](./.devcontainer/Dockerfile) starts with a Node image that we need for this repo. It also installs the Gatsby CLI tooling.

Because of the way dev containers work, if you want to run `gatsby serve` or `gatsby develop` and access the site from outside the container, you will need to use `--host 0.0.0.0` with the command to make it accessible outside of the container. So:

- If you prefer the build-and-serve cycle, use `gatsby serve --host 0.0.0.0`
- If you prefer to use the hot reload features, then use `gatsby develop --host 0.0.0.0`

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

## Adding a New Page

There are a few things that need to happen when adding a new page:

1. Create a new page.
2. Create a featured image.
3. Update the section's overview page.
4. Update the sidebar.

### Creating a New Page

When you add a new page, you need to create a Markdown file within the respective folder. We name our files using `kebab-case`.

Once you create a new file, then add the frontmatter to that file. We created a snippet to make it easier to insert if you use Visual Studio Code.

This project has a `.vscode` folder checked in. There is a snippet within that folder to make it easier to insert the frontmatter into a new page.

Within VS Code:

1. Bring up the Command Palette.
2. Search for **Snippets: Insert Snippet**
3. In **Workspace Snippets**, select the snippet named `deviq-template`.

### Creating a Featured Image

We have a process for creating a featured image using Canva:

1. The DevIQ template is [read-only on Canva](https://www.canva.com/design/DAGTShSdi3E/tMJgAOTI5eXEZ2-2qvTyDQ/edit). Make a copy of the file in Canva by going to **File** > **Make a copy**.
2. Update the title.
3. Find an appropriate background by going to **Elements** > **Photos** and search.
4. Drag the photo to the canvas, towards the middle of the image.
5. Right-click on the image and select **Replace background**.
6. Download the image and save it in the respective `images` folder.
7. Update the frontmatter for the new page with the correct file name.

### Updating the Section's Overview

Once the page is ready, then link to the new page from the overview page for that section. The overview pages are named as `{section-name}-overview.md`.

Unless otherwise noted, the links on the overview pages are in alphabetical order.

### Updating the Sidebar

The sidebar is located in `src\config\sidebar.yml`. The links within a section are in alphabetical order. Add the link to the new page in the respective navigation section.

## Exporting Mermaid Diagrams to SVG

You can use [mermaid-cli](https://github.com/mermaid-js/mermaid-cli) to convert Mermaid diagrams to SVG. **This is how we create Mermaid graphs with links.**

SVG is XML under the covers and can be styled and edited.