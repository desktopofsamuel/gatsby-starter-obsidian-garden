import React from 'react';
import {
  Tag as ChakraTag,
  TagLeftIcon,
  TagLabel,
  ListItem,
} from '@chakra-ui/react';
// import { FaHashtag } from 'react-icons/fa';
import GatsbyLink from '@/components/gatsby-link';
import kebabCase from 'lodash/kebabCase';

const Tag = ({ children, link }) => (
  <ListItem>
    <GatsbyLink to={`/tag/${kebabCase(link || children)}/`}>
      <ChakraTag
        variant="subtle"
        px="3"
        py="2"
        borderRadius="full"
        transition="all 300ms ease-in-out"
        _hover={{ background: 'primary.500', color: 'white' }}
      >
        {/* <TagLeftIcon width="10px" as={FaHashtag} mr="1" /> */}
        <TagLabel fontWeight="bold">{children}</TagLabel>
      </ChakraTag>
    </GatsbyLink>
  </ListItem>
);

export default Tag;
