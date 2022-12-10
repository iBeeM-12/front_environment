import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { GroupInfo0 } from "../data/dummyData";
import React from "react";

//グループアイコンの設定画面のテキストと画像枠
type Props = {
  text: string;
};
export const GroupIconSet = () => {
  return (
    <Stack spacing={3}>
      <Text fontSize="xl">グループアイコンを設定</Text>
      <Box w={"150px"} h={"150px"}>
        <Image src={GroupInfo0[0]} alt="name1" />
      </Box>
    </Stack>
  );
};
