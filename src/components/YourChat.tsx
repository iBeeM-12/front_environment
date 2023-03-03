import { HStack } from "@chakra-ui/react";
import { Chatbubble } from "./Chatbubble";
import { ChatLeftIcon } from "./ChatLeftIcon";
import { Chatname } from "./Chatname";
import { HSpacer } from "./molecules/Spacer";

export const YourChat = () => {
  return (
    <>
      <HSpacer size={12} />
      <HStack>
        <Chatname />
        <ChatLeftIcon />
        <Chatbubble />
      </HStack>
    </>
  );
};
