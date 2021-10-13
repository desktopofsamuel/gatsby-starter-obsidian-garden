import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@/components/layout';
import startCase from 'lodash/startCase';
import Pagination from '@/components/pagination';
import NoteList from '@/components/note-list';
import { Heading } from '@chakra-ui/react';
import { PageContext, AllMdx } from '@/type';
import { useSiteMetadata } from '../hooks';

type Props = {
  data: AllMdx;
  pageContext: PageContext;
};

const CategoryTemplate = ({ data, pageContext }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();

  const { edges } = data.allMdx;
  const {
    category,
    slug,
    currentPage,
    prevPagePath,
    nextPagePath,
    hasPrevPage,
    hasNextPage,
  } = pageContext;
  const pageTitle =
    currentPage > 0
      ? `${category} - Page ${currentPage} - ${siteTitle}`
      : `${category} - ${siteTitle}`;

  return (
    <Layout title={pageTitle}>
      <Heading as="h1">{startCase(category)}</Heading>
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
  query CategoryPage($category: String, $postsLimit: Int!, $postsOffset: Int!) {
    allMdx(
      limit: $postsLimit
      skip: $postsOffset
      filter: {
        frontmatter: { publish: { ne: false }, category: { eq: $category } }
      }
      sort: { order: DESC, fields: fields___date }
    ) {
      edges {
        node {
          fields {
            slug
            title
            date
          }
          excerpt(pruneLength: 300)
          frontmatter {
            title
            category
            publish
          }
        }
      }
    }
  }
`;

export default CategoryTemplate;
