import { graphql } from 'gatsby';

export const postFragment = graphql`
  fragment post on Mdx {
    id
    body
    excerpt(pruneLength: 300)
    fields {
      slug
      tagSlugs
      categorySlug
    }
    frontmatter {
      date
      description
      tags
      template
      title
      socialImage {
        publicURL
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      headings {
        depth
        value
      }
      tableOfContents
    }
  }
`;

export default postFragment;
