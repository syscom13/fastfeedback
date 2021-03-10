import { format, parseISO } from 'date-fns';
import { Box, Heading, Text, Divider } from '@chakra-ui/react';

export default function Feedback({ author, text, createdAt }) {
  return (
    <Box borderRadius={4} maxW="700px" w="full">
      <Heading size="sm" as="h3" mb={0} color="gray.900">
        {author}
      </Heading>
      <Text color="gray.500" mb={4} fontSize="xs">
        {format(parseISO(createdAt), 'PPpp')}
      </Text>
      <Text color="gray.800" mb={8}>
        {text}
      </Text>
      <Divider borderColor="gray.200" backgroundColor="gray.200" />
    </Box>
  );
}
