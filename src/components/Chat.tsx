//チャット用画面
import { Box, HStack, VStack } from "@chakra-ui/react";
import { Tab2 } from "./Tab";
import { ChatLeftIcon } from "./ChatLeftIcon";
import { Chatbubble } from "./Chatbubble";
import { Chatname } from "./Chatname";

export const Chat = () => {
  return (
    <>
      <Box bg="E5D1C8" w="100%" p={2}>
        <VStack bg="#FFFFFF" spacing={1}>
          <HStack>
            <VStack>
              <Chatname />
              <ChatLeftIcon />
            </VStack>
            <Chatbubble />
            <Box bg="white" w="250px" p={2}></Box>
          </HStack>
          <Tab2 />
        </VStack>
      </Box>
    </>
  );
};
