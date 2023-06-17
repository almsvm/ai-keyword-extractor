import { Textarea, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";

const TextInput = ({ extractKeywords }) => {
  const [text, setText] = useState("");

  const toast = useToast();
  const submitText = () => {
    if (text === "") {
      toast({
        title: "Text field is required",
        description: "Please enter a text to extract keywords",
        status: "error",
        duration: 5000,
        isClosable: false,
      });
    } else {
      extractKeywords(text);
    }
  };

  return (
    <>
      <Textarea
        bg="green.600"
        color="gray.100"
        padding={4}
        marginTop={6}
        height={200}
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <Button
        bg="green.800"
        color="gray.100"
        marginTop={4}
        width="100%"
        _hover={{ bg: "green.900" }}
        onClick={submitText}
      >
        Extract Keywords
      </Button>
    </>
  );
};

export default TextInput;
