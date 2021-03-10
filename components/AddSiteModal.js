import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import useSWR, { mutate } from 'swr';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';

import { createSite } from '@/lib/db';
import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';

export default function AddSiteModal({ emptyState }) {
  const initialRef = useRef();
  const toast = useToast();
  const auth = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit } = useForm();
  const { data } = useSWR('/api/sites', fetcher);

  const onCreateSite = ({ name, url }) => {
    const newSite = {
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      name,
      url,
    };

    // update the local data immediately, but disable the revalidation
    mutate('/api/sites', { sites: [...data.sites, newSite] }, false);

    // send a request to the API to update the source
    createSite(newSite);

    // trigger a revalidation (refetch) to make sure our local data is correct
    // mutate('/api/sites');

    onClose();
    toast({
      title: 'Success!',
      description: "We've added you site.",
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <>
      {emptyState ? (
        <Button variant="solid" size="md" onClick={onOpen}>
          Add Your First Site
        </Button>
      ) : (
        <Button
          backgroundColor="gray.900"
          color="white"
          _hover={{ bg: 'gray.700' }}
          _active={{ bg: 'gray.800', transform: 'scale(0.95)' }}
          onClick={onOpen}
        >
          + Add Site
        </Button>
      )}

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
          <ModalHeader fontWeight="bold">Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                name="name"
                ref={register({ required: 'Required' })}
                placeholder="My site"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                placeholder="https://website.com"
                name="url"
                ref={register({ required: 'Required' })}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button bgColor="brandBg" color="brandText" type="submit">
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
