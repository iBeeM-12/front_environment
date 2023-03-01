import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { GroupInfo0 } from "../data/dummyData";
import React from "react";

//グループアイコンの設定画面のテキストと画像枠
export const GroupIconSet = () => {
  return (
    <VStack>
      <Text fontSize="xl">グループアイコンを設定</Text>
      <Box w={"150px"} h={"150px"}>
        <Image src={GroupInfo0[0]} alt="name1" />
      </Box>
    </VStack>
  );
};
