import { Heading, Flex, Text } from '@chakra-ui/react';
import AddSiteModal from './AddSiteModal';

const EmptyState = () => (
  <Flex
    direction="column"
    align="center"
    width="100%"
    backgroundColor="white"
    borderRadius="8px"
    p={16}
  >
    <Heading size="lg" mb={2}>
      You haven't added any sites.
    </Heading>
    <Text mb={6}>Welcome 👋 Let's get started.</Text>
    <AddSiteModal emptyState />
  </Flex>
);

export default EmptyState;
