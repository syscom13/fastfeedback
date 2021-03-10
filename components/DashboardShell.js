import { useAuth } from '@/lib/auth';
import {
  Flex,
  Link,
  Stack,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Button,
} from '@chakra-ui/react';

import { FastFeedbackIcon } from 'public/icons';
import AddSiteModal from '@/components/AddSiteModal';

const DashboardShell = ({ children }) => {
  const { user, signOut } = useAuth();

  return (
    <Flex flexDirection="column">
      <Flex
        justifyContent="space-between"
        backgroundColor="white"
        alignItems="center"
        py={4}
        px={8}
        maxWidth="1250px"
      >
        <Stack spacing={4} isInline alignItems="center">
          <FastFeedbackIcon name="logo" color="black.500" boxSize="32px" />
          <Link>Sites</Link>
          <Link>Feedback</Link>
        </Stack>

        <Flex alignItems="center">
          {user && (
            <Button
              variant="ghost"
              fontWeight="medium"
              mr={2}
              onClick={signOut}
            >
              Log Out
            </Button>
          )}
          <Avatar size="sm" src={user?.photoUrl} />
        </Flex>
      </Flex>

      <Flex backgroundColor="gray.100" p={8} height="100vh">
        <Flex w="100%" maxW="1250px" margin="0 auto" direction="column">
          <Breadcrumb>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink color="gray.700" fontSize="sm">
                Sites
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Flex justifyContent="space-between">
            <Heading mb={8}>My Sites</Heading>
            <AddSiteModal emptyState={false} />
          </Flex>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;
