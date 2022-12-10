import { HStack, Text } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { MemberInfo1 } from "../data/dummyData";

export const HistoryIconText = () => {
  return (
    <HStack>
      <Avatar src={MemberInfo1[2]} />
      <Text fontSize="lg"> ○○:○○表示を開始しました</Text>
    </HStack>
  );
};
