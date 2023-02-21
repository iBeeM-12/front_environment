//チャット用画面
import { GroupTop } from "./GroupTop";
import { Box, VStack } from "@chakra-ui/react";
import { Stampver } from "./StampSelect";
import { Tab2 } from "./Tab";
import { ChatLeftIcon } from "./ChatLeftIcon";

export const Chat = () => {
  return (
    <>
      <VStack bg="#F6C745" spacing={1}>
        <ChatLeftIcon />
        <Tab2 />
      </VStack>
    </>
  );
};
