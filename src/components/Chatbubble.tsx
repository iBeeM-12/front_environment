import { Box, Image } from "@chakra-ui/react";
import { ChatList } from "../data/dummyData";
//受け取る情報　出力する画像(コメント)(chatlistがデーターベース)
//送る情報なし
export const Chatbubble = () => {
  return (
    <>
      <Box bg="#D9D9D9" w="120px" h="120px" p={4}>
        <Box boxSize="sm">
          <Image src={ChatList[2].talk} boxSize="100px" />
        </Box>
      </Box>
    </>
  );
};
