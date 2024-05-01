import { Box, Flex, Text, VStack, Heading, Input, Button, useBreakpointValue } from '@chakra-ui/react';
import { FaEnvelope, FaPhone, FaUser } from 'react-icons/fa';

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box>
      <Flex as="nav" bg="brand.900" color="white" p={4} justifyContent="space-between">
        <Text fontSize="lg" fontWeight="bold">GPT Engineer</Text>
        <Flex gap="4">
          <Button variant="link" colorScheme="whiteAlpha">Home</Button>
          <Button variant="link" colorScheme="whiteAlpha">About</Button>
          <Button variant="link" colorScheme="whiteAlpha">Contact</Button>
        </Flex>
      </Flex>
      <VStack spacing={10} p={10} align="stretch">
        <Box as="section" bg="gray.100" p={10}>
          <Heading size="2xl" textAlign="center">Welcome to GPT Engineer</Heading>
          <Text mt={4} fontSize="xl" textAlign="center">
            Discover the power of AI in web development!
          </Text>
        </Box>
        <Box as="section" bg="white" p={10}>
          <Heading size="xl" textAlign="center">About</Heading>
          <Text mt={4} fontSize="lg">
            Fabian Hedin is a seasoned software developer with a deep passion for coding. With over a decade of experience in the tech industry, Fabian has contributed to numerous high-profile projects and has a track record of driving innovation. His expertise spans across multiple programming languages and technologies, making him a versatile asset in any development team. Notable achievements include leading the development of an award-winning mobile application and authoring several well-received technical articles.
          </Text>
        </Box>
        <Box as="section" bg="gray.100" p={10}>
          <Heading size="xl" textAlign="center">Contact Us</Heading>
          <VStack spacing={5} mt={4}>
            <Flex align="center" w="100%">
              <FaUser />
              <Input placeholder="Your Name" ml={2} />
            </Flex>
            <Flex align="center" w="100%">
              <FaEnvelope />
              <Input placeholder="Your Email" ml={2} />
            </Flex>
            <Flex align="center" w="100%">
              <FaPhone />
              <Input placeholder="Your Phone" ml={2} />
            </Flex>
            <Button colorScheme="blue" alignSelf="center">Send Message</Button>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;