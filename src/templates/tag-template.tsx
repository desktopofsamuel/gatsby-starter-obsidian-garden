import React from 'react';
import { graphql } from 'gatsby';
import startCase from 'lodash/startCase';
import Layout from '@/components/layout';
import NoteList from '@/components/note-list';
import Pagination from '@/components/pagination';
import { Heading } from '@chakra-ui/react';
import { PageContext, AllMdx } from '@/type';
import { useSiteMetadata } from '../hooks';

type Props = {
  data: AllMdx;
  pageContext: PageContext;
};

const TagTemplate = ({ data, pageContext }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { edges } = data.allMdx;
  const {
    tag,
    slug,
    currentPage,
    prevPagePath,
    nextPagePath,
    hasPrevPage,
    hasNextPage,
  } = pageContext;

  const pageTitle =
    currentPage > 0
      ? `所有關於"${tag}"的文章 - 第${currentPage}頁 - ${siteTitle}`
      : `所有關於"${tag}"的文章 - ${siteTitle}`;

  return (
    <Layout title={pageTitle}>
      <Heading as="h1">{startCase(tag)}</Heading>
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
  query TagPage($tag: String, $postsLimit: Int!, $postsOffset: Int!) {
    allMdx(
      limit: $postsLimit
      skip: $postsOffset
      filter: { frontmatter: { publish: { ne: false }, tags: { in: [$tag] } } }
      sort: { order: DESC, fields: fields___date }
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          fields {
            title
            slug
            categorySlug
            date
          }
          frontmatter {
            title
            date
            category
            publish
            # description
          }
        }
      }
    }
  }
`;

export default TagTemplate;
