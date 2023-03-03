import { Box, HStack } from "@chakra-ui/react";
import { ChatBubble } from "./Chatbubble";
type Props = {
  text: string;
  stamp: string;
};
export const MyChat = ({ text, stamp }: Props) => {
  return (
    <>
      <HStack>
        <Box bg="white" w="300px" p={2}></Box>
        <ChatBubble text={text} stamp={stamp} />
      </HStack>
    </>
  );
};
