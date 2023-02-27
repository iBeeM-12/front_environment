import { Box, HStack } from "@chakra-ui/react";
import { Chatbubble } from "./Chatbubble";

export const MyChat = () => {
  return (
    <>
      <HStack>
        <Box bg="white" w="300px" p={2}></Box>
        <Chatbubble />
      </HStack>
    </>
  );
};
