import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { GroupInfo0 } from "../data/dummyData";
import React from "react";

type Props = {
  text: string;
};
export const GroupIconSet = ({ text }: Props) => {
  return (
    <Stack spacing={3}>
      <Text fontSize="2xl">グループ名：</Text>
      <Text fontSize="2xl">グループアイコンを設定</Text>
      <Box w={"240px"} h={"135px"}>
        <Image src={GroupInfo0[0]} alt="name1" />
      </Box>
    </Stack> //特に意味のないコメント
  );
};
