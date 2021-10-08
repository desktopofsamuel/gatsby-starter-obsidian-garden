import React from 'react';
import { PageProps, graphql } from 'gatsby';
import { PageContext, AllMdx } from '@/type';
import NoteList from '@/components/note-list';
import Title from '@/components/Title';
import Layout from '@/components/layout';

type Props = {
  data: AllMdx;
  pageContext: PageContext;
};

const Home = ({ data, pageContext }: Props) => {
  return (
    <Layout>
      <Title>Hello TypeScript!</Title>
      <p>A TypeScript starter for Gatsby. Great for advanced users.</p>
      <p>
        Follow me on Twitter (
        <a href="https://twitter.com/jpedroschmitz">@jpedroschmitz</a>)
      </p>
      <NoteList edges={data.allMdx.edges} />
    </Layout>
  );
};

export default Home;

export const query = graphql`
  query IndexQuery {
    # ($postsLimit: Int!, $postsOffset: Int!)
    allMdx(
      filter: {
        frontmatter: { publish: { ne: false } }
        fileAbsolutePath: { regex: "/vault/" }
      }
      # limit: $postsLimit
      # skip: $postsOffset
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
            title
            date
            # categorySlug
          }
          excerpt(pruneLength: 300)
          frontmatter {
            title
            date
            # category
            # description
            # tags
          }
        }
      }
    }
  }
`;
