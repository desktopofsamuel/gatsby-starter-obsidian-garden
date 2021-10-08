import React from 'react';
import dayjs from 'dayjs';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import {
  chakra,
  Heading,
  Text,
  Wrap,
  HStack,
  UnorderedList,
} from '@chakra-ui/react';
import Tag from '@/components/tag';
import GatsbyLink from '@/components/gatsby-link';
import kebabCase from 'lodash/kebabCase';

const MDX = chakra(MDXRenderer);

type PostType = {
  post: {
    fields: {
      slug: string;
      title: string;
    };
    frontmatter: {
      title: string;
      tags: [string];
      date: string;
      category: string;
    };
    body: any;
  };
  hideMeta: boolean;
};

const Post = ({ post, hideMeta }: PostType) => {
  const { body } = post;
  const { tagSlugs, slug, title, date } = post.fields;
  // const { tags, title, date } = post.frontmatter;
  const { tags, category } = post.frontmatter;

  console.log(post.fields);

  return (
    <>
      {hideMeta ? null : (
        <HStack spacing="2">
          <Text
            as="time"
            fontSize="sm"
            fontWeight="bold"
            textTransform="uppercase"
          >
            {dayjs(date).format(`MMMM YYYY`)}
          </Text>
          <GatsbyLink to={`/category/${kebabCase(category)}/`}>
            <Text
              as="small"
              fontSize="sm"
              color="secondary.400"
              fontWeight="bold"
              _hover={{
                color: 'secondary.300',
              }}
            >
              {category}
            </Text>
          </GatsbyLink>
        </HStack>
      )}
      <Heading variant="pagetitle" mt="2" mb="8">
        {title}
      </Heading>
      <MDX>{body}</MDX>
      <UnorderedList m="0">
        <Wrap spacing="2">
          {tags && tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </Wrap>
      </UnorderedList>
    </>
  );
};

export default Post;
