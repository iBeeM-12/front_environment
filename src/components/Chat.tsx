//チャット用画面
import { Box } from "@chakra-ui/react";
import { MyChat } from "./MyChat";
import { ReadOrNot } from "./ReadOrNot";
import { Tab2 } from "./Tab";
import { YourChat } from "./YourChat";

export const Chat = () => {
  return (
    <>
      <Box bg="#E5D1C8">
        <Box>
          <YourChat />
          <MyChat />
          <YourChat />
          <ReadOrNot />
          <YourChat />
        </Box>
        <Tab2 />
      </Box>
    </>
  );
};
