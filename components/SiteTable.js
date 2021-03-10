import { format, parseISO } from 'date-fns';
import { Box, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

import { Table, Tr, Th, Td } from './Table';

const SiteRow = ({ site }) => {
  const createdAt = format(parseISO(site.createdAt), 'PPpp');

  return (
    <Box as="tr">
      <Td fontWeight="600">{site.name}</Td>
      <Td>{site.url}</Td>
      <Td>
        <NextLink href="/p/[siteId]" as={`/p/${site.id}`} passHref>
          <Link>View Feedback</Link>
        </NextLink>
      </Td>
      <Td>{createdAt}</Td>
    </Box>
  );
};

const SiteTable = ({ sites }) => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Site Link</Th>
          <Th>Feedback Link</Th>
          <Th>Date Added</Th>
          <Th>{''}</Th>
        </Tr>
      </thead>
      <tbody>
        {sites.map((site) => (
          <SiteRow site={site} key={site.url} />
        ))}
      </tbody>
    </Table>
  );
};

export default SiteTable;
