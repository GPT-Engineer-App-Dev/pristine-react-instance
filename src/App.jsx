import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { SupabaseAuthProvider } from "./integrations/supabase/auth.jsx";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <SupabaseAuthProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </SupabaseAuthProvider>
    </ChakraProvider>
  );
}

export default App;