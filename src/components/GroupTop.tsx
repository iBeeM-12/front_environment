import { Box, VStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { GroupInfo0 } from "../data/dummyData";
import { HStack, Text } from "@chakra-ui/react";
import { ReturnButton } from "./ReturnButton";
import { RemakeButton } from "./RemakeBottun";

//グループ画面
export const GroupTop = () => {
  return (
    <>
      {/* FIXME: スタイルをピクセルで指定しているためもう少しいい感じにする */}
      <HStack h={"150px"} key={GroupInfo0[1]}>
        <VStack>
          <Box h={"10px"}></Box>
          <Box w={"150px"} h={"150px"}>
            <Image src={GroupInfo0[0]} alt="name1" />
          </Box>
        </VStack>
        <Box>
          <VStack>
            <Box h="20px"></Box>
            <HStack>
              <Box w="125px"></Box>
              <RemakeButton />
              <ReturnButton />
            </HStack>
            <Box h={"30px"} />
            <Text fontSize="3xl">{GroupInfo0[1]}</Text>
            <Box h={"30px"} />
          </VStack>
        </Box>
      </HStack>
    </>
  );
};
