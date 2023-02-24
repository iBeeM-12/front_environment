//チャット用画面
import { Box, VStack } from "@chakra-ui/react";
import { MyChat } from "./MyChat";
import { ReadOrNot } from "./ReadOrNot";
import { Tab2 } from "./Tab";
import { YourChat } from "./YourChat";

export const Chat = () => {
  return (
    <>
      <Box bg="E5D1C8" w="100%" p={2}>
        <VStack bg="#FFFFFF" spacing={1}>
          <YourChat />
          <MyChat />
          <YourChat />
          <ReadOrNot />
          <YourChat />

          <Tab2 />
          <Box bg="#FFFFFF" w="100%" h="5px" p={4}></Box>
        </VStack>
      </Box>
    </>
  );
};
