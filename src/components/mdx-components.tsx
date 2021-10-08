import React from 'react';
import {
  Alert,
  Box,
  Image as ChakraImage,
  chakra,
  Code,
  Kbd,
  useColorModeValue,
  Link as ChakraLink,
} from '@chakra-ui/react';
import GatsbyLink from '@/components/gatsby-link';
//

const Image = (props) => (
  <ChakraImage my="8" apply="mdx.image" as="img" {...props} />
);

const InlineCode = (props) => (
  <Code
    apply="mdx.code"
    bg={useColorModeValue('blue.50', 'blue.900')}
    color={useColorModeValue('blue.600', 'blue.200')}
    rounded="lg"
    px="2"
    {...props}
  />
);

const Pre = (props) => <chakra.div my="2em" borderRadius="sm" {...props} />;

const Embed = (props) => (
  <Box my={4} rounded="lg" shadow="sm" overflow="hidden">
    <iframe {...props}></iframe>
  </Box>
);

const MDXComponents = {
  h1: (props) => <chakra.h1 {...props} />,
  h2: (props) => <chakra.h2 apply="mdx.h2" fontSize="2xl" {...props} />,
  h3: (props) => <chakra.h3 apply="mdx.h3" fontSize="xl" {...props} />,
  h4: (props) => <chakra.h4 apply="mdx.h4" fontSize="lg" {...props} />,
  hr: (props) => <chakra.hr apply="mdx.hr" {...props} />,
  strong: (props) => <Box as="strong" fontWeight="semibold" {...props} />,
  inlineCode: InlineCode,
  code: Code,
  pre: Pre,
  kbd: (props) => <Kbd mx="2" {...props} />,
  blockquote: (props) => (
    <Alert
      mt="4"
      role="none"
      status="info"
      variant="left-accent"
      as="blockquote"
      rounded="4px"
      my="1.5rem"
      bg={useColorModeValue('blue.50', '#1A273B')}
      {...props}
    />
  ),
  // table: Table,
  // th: THead,
  // td: TData,
  br: (props) => <Box height="24px" {...props} />,
  a: (props) => (
    <GatsbyLink
      color={useColorModeValue('primary.500', 'primary.400')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('primary.500', 'primary.400')}
      _hover={{
        textDecoration: 'none',
        color: 'primary.300',
      }}
      {...props}
    />
  ),
  p: (props) => <chakra.p apply="mdx.p" {...props} />,
  ul: (props) => <chakra.ul apply="mdx.ul" {...props} />,
  ol: (props) => <chakra.ol apply="mdx.ul" {...props} />,
  li: (props) => <chakra.li pb="4px" ml="16px" {...props} />,
  img: Image,
  // Tweet,
  Embed,
  // VideoPlayer,
};

export default MDXComponents;
