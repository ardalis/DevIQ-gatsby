import { graphql } from 'gatsby';
import DocsComponent from '@rocketseat/gatsby-theme-docs-core/src/components/Docs';

export default DocsComponent;

export const query = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      fields {
        slug
      }
      frontmatter {
        title
        description
        featuredImage {
            childImageSharp {
                gatsbyImageData (layout:CONSTRAINED)
            }
        }
        disableTableOfContents
      }
      body
      headings {
        depth
        value
      }
    }
  }
`;
