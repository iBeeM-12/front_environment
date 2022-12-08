import { Box, Center } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { GroupInfo0 } from "../data/dummyData";
import { HStack, Text } from "@chakra-ui/react";

export const GroupTop = () => {
  return (
    <>
      {/* FIXME: スタイルをピクセルで指定しているためもう少しいい感じにする */}
      <HStack bg="#F6C745" h={"150px"} spacing={10} key={GroupInfo0[1]}>
        <Box w={"150px"} h={"150px"}>
          <Image src={GroupInfo0[0]} alt="name1" />
        </Box>

        <Box>
          <Text fontSize="3xl">{GroupInfo0[1]}</Text>
          <Center>
            <Avatar name="temp1" src={GroupInfo0[2]} />
          </Center>
        </Box>
      </HStack>
    </>
  );
};
