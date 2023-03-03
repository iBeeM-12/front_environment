import { Box, Image } from "@chakra-ui/react";
import { ChatList } from "../data/dummyData";
//受け取る情報　出力する画像(コメント)(chatlistがデーターベース)
//送る情報なし
export const Chatbubble = () => {
  return (
    <>
      <Image src={ChatList[2].talk} boxSize={32} />
    </>
  );
};
