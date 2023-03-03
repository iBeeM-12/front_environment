import { Box, HStack } from "@chakra-ui/react";
import { Chatbubble } from "./Chatbubble";
import { HSpacer } from "./molecules/Spacer";

export const MyChat = () => {
  return (
    <>
      <Box display="flex" justifyContent="flex-end">
        <Chatbubble />
        <HSpacer size={8} />
      </Box>
    </>
  );
};
