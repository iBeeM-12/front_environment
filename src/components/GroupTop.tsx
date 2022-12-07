import { Box } from "@chakra-ui/react";
import { GroupList } from "../data/dummyData";
import { HStack, Text } from "@chakra-ui/react";

export const GroupTop = () => {
  return (
    <>
      {/* FIXME: スタイルをピクセルで指定しているためもう少しいい感じにする */}
      <HStack bg="#F6C745" h={"150px"} spacing={10}>
        <Box>
          <Text fontSize="3xl">{GroupList[0]}</Text>
        </Box>
      </HStack>
    </>
  );
};
