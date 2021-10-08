import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@/components/layout';
import Post from '@/components/post';
import MDXCompProvider from '@/components/mdx-provider';
import { HStack } from '@chakra-ui/react';
// import SEO from '@/components/seo';
import { useSiteMetadata } from '../hooks';

const PostTemplate = ({ data }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const post = data.mdx.frontmatter;
  const postTitle = data.mdx.frontmatter.title;
  const pageTitle = `${postTitle} - ${siteTitle}`;

  return (
    <MDXCompProvider>
      <Layout>
        {/* <SEO postNode={data.mdx} postSEO postPath={data.mdx.fields.slug} /> */}
        <Post post={data.mdx} />
      </Layout>
    </MDXCompProvider>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      excerpt(pruneLength: 300)
      fields {
        slug
        title
        # tagSlugs
      }
      frontmatter {
        title
        date
        tags
        # category
        # description
        # socialImage {
        #   publicURL
        #   childImageSharp {
        #     gatsbyImageData
        #   }
        # }
      }
    }
  }
`;

export default PostTemplate;
