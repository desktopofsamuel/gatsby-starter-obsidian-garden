import { useStaticQuery, graphql } from 'gatsby';

const useCategoriesList = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query CategoriesListQuery {
        allMdx(filter: { frontmatter: { publish: { ne: false } } }) {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
          }
        }
      }
    `,
  );

  return allMdx.group.sort(function (a, b) {
    return b.totalCount - a.totalCount;
  });
};

export default useCategoriesList;
