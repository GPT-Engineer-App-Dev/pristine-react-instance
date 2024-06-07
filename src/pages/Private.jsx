import { Container, Heading, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar.jsx";

const Private = () => {
  return (
    <>
      <Navbar />
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Heading as="h1" size="2xl">Protected Page</Heading>
        <Text fontSize="xl">This is a protected page. Only authenticated users can see this.</Text>
      </Container>
    </>
  );
};

export default Private;