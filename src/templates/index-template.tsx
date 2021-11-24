import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@/components/layout';
import NoteList from '@/components/note-list';
import Pagination from '@/components/pagination';
import Helmet from 'react-helmet';
import { PageContext, AllMdx } from '@/type';
import { useSiteMetadata } from '../hooks';
import { Box, SimpleGrid, Divider, Heading, Text } from '@chakra-ui/react';

type Props = {
  data: AllMdx;
  pageContext: PageContext;
};

const IndexPage = ({ data, pageContext }: Props) => {
  const { currentPage, hasNextPage, hasPrevPage, prevPagePath, nextPagePath } =
    pageContext;
  const { edges } = data.allMdx;
  const {
    title: siteTitle,
    subtitle: siteSubtitle,
    description: siteDescription,
  } = useSiteMetadata();
  const pageTitle =
    currentPage > 0
      ? `All Pages —  Page ${currentPage} | ${siteTitle}`
      : siteTitle;

  return (
    <Layout subtitle={siteSubtitle} description={siteDescription}>
      <Helmet title={pageTitle} />
      <Box my="10">
        <Heading as="h1">Gatsby Garden</Heading>
        <Text>
          Free Gatsby starter template to host your own digital garden for free,
          created by Obsidian.
        </Text>
      </Box>

      <Divider my="10" />

      <NoteList edges={edges} />
      {(hasPrevPage || hasNextPage) && (
        <Pagination
          prevPagePath={prevPagePath}
          nextPagePath={nextPagePath}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
        />
      )}
    </Layout>
  );
};

export const query = graphql`
  query IndexTemplateQuery($postsLimit: Int!, $postsOffset: Int!) {
    allMdx(
      filter: {
        frontmatter: { publish: { ne: false } }
        fileAbsolutePath: { regex: "/vault/" }
      }
      limit: $postsLimit
      skip: $postsOffset
      sort: { order: DESC, fields: fields___date }
    ) {
      edges {
        node {
          fields {
            slug
            title
            date
            categorySlug
          }
          excerpt(pruneLength: 300)
          frontmatter {
            title
            date
            category
            tags
          }
        }
      }
    }
  }
`;

export default IndexPage;
