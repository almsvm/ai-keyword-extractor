import { Heading, Image, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <Image
        width={100}
        src="https://img.icons8.com/fluency/96/artificial-intelligence.png"
        alt="artificial-intelligence"
        marginBottom="1rem"
      />
      <Heading color="gray.100">IntelliKeywords</Heading>
      <Text fontSize={25} textAlign="center">
        "Simply input your text below, and let us effortlessly extract the
        keywords for you."
      </Text>
    </>
  );
};

export default Header;
