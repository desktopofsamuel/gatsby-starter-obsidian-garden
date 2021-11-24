import { Box, Container, Text } from '@chakra-ui/layout';
import React from 'react';

const Footer = ({}) => {
  return (
    <Box backgroundColor="slategray" minH="200px">
      <Container maxW="container.md" py="10">
        <Text color="white">Created by Samuel Wong</Text>
      </Container>
    </Box>
  );
};

export default Footer;
