import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import Private from "./pages/Private.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { SupabaseAuthProvider, useSupabaseAuth } from "./integrations/supabase/auth.jsx";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

function App() {
  const ProtectedRoute = ({ children }) => {
    const { session } = useSupabaseAuth();
    if (!session) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <ChakraProvider theme={theme}>
      <SupabaseAuthProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/private" element={<ProtectedRoute><Private /></ProtectedRoute>} />
          </Routes>
        </Router>
      </SupabaseAuthProvider>
    </ChakraProvider>
  );
}

export default App;