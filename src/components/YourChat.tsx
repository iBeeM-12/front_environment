import { Box, HStack, VStack } from "@chakra-ui/react";
import { Chatbubble } from "./Chatbubble";
import { ChatLeftIcon } from "./ChatLeftIcon";
import { Chatname } from "./Chatname";

export const YourChat = () => {
  return (
    <>
      <HStack>
        <VStack>
          <Chatname />
          <ChatLeftIcon />
        </VStack>
        <Chatbubble />
        <Box bg="white" w="250px" p={2}></Box>
      </HStack>
    </>
  );
};
