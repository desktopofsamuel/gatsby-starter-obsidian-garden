import React from 'react';
import { Flex, Button, Link } from '@chakra-ui/react';

type Props = {
  prevPagePath: string;
  nextPagePath: string;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

const Pagination = ({
  prevPagePath,
  nextPagePath,
  hasNextPage,
  hasPrevPage,
}: Props) => {
  return (
    <Flex justifyContent="space-between" my="8">
      <Link
        href={hasPrevPage ? prevPagePath : null}
        _hover={{ textDecoration: 'none', color: 'primary.500' }}
      >
        <Button isDisabled={!hasPrevPage} variant="solid">
          ← PREV
        </Button>
      </Link>
      <Link
        href={hasNextPage ? nextPagePath : null}
        _hover={{ textDecoration: 'none' }}
      >
        <Button variant="solid" isDisabled={!hasNextPage}>
          → NEXT
        </Button>
      </Link>
    </Flex>
  );
};

export default Pagination;
