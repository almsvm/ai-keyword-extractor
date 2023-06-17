import { Container, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Box bg="green.700" color="gray.300" height="100vh" paddingTop="150px">
      <Container maxW="3xl" centerContent>
        <Header />
        <Footer />
      </Container>
    </Box>
  );
};

export default App;
