import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const Navbar = () => {
  const { session, logout } = useSupabaseAuth();

  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={RouterLink} to="/" color="white" fontWeight="bold" fontSize="xl">
            Home
          </Link>
        </Box>
        <Flex alignItems="center">
          {session ? (
            <Button onClick={logout} colorScheme="teal" variant="outline">
              Logout
            </Button>
          ) : (
            <Link as={RouterLink} to="/login" color="white" fontWeight="bold" fontSize="xl">
              Login
            </Link>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;