import React from 'react';
import { Heading, Text, HStack, VStack, Button } from '@chakra-ui/react';
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
  <VStack spacing="8">
    {edges.map((edge) => (
      <VStack
        spacing="2"
        align="flex-start"
        key={edge.node.fields.slug}
        width="100%"
      >
        <HStack spacing="2">
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
            {/* {edge.node.frontmatter.category} */}
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
        <Link to={edge.node.fields.slug}>
          <Button variant="ghost" ml="-18px">
            閱讀更多
          </Button>
        </Link>
      </VStack>
    ))}
  </VStack>
);

export default NoteList;
