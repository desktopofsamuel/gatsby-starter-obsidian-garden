import React from 'react';
import { Grid, Heading, Text, HStack, VStack, Button } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import Link from '@/components/gatsby-link';

type EdgesType = {
  edges: [
    {
      node: {
        excerpt: string;
        fields: {
          slug: string;
          title: string;
        };
        frontmatter: {
          date: string;
          category: [string];
          title: string;
          description: string;
        };
      };
    },
  ];
};

const NoteList = ({ edges }: EdgesType) => (
  <Grid gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }} gridGap="10">
    {edges.map((edge) => (
      <VStack
        spacing="2"
        align="flex-start"
        key={edge.node.fields.slug}
        width="100%"
      >
        <Link to={edge.node.fields.slug}>
          <HStack as="article" spacing="2">
            <Text
              as="time"
              fontSize="sm"
              fontWeight="bold"
              textTransform="uppercase"
            >
              {edge.node.fields.date}
            </Text>
            <Text
              as="small"
              fontSize="sm"
              color="secondary.400"
              fontWeight="bold"
            >
              {edge.node.frontmatter.category}
            </Text>
          </HStack>
          <Link to={edge.node.fields.slug}>
            <Heading as="h2" variant="title" mt="0">
              {edge.node.fields.title}
            </Heading>
          </Link>
          <Text noOfLines={3}>
            {edge.node.excerpt || edge.node.frontmatter.description}
          </Text>
        </Link>
      </VStack>
    ))}
  </Grid>
);

export default NoteList;
