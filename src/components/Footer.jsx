import { Box, Image, Text, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box marginTop={50}>
      <Flex justifyContent="center" alignItems="center">
        <Image
          src="https://img.icons8.com/color/48/000000/chatgpt.png"
          alt="chatgpt"
          marginRight={2}
        />
        <Text>Powered By Open AI</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
