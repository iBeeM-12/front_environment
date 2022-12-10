import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { MemberInfo0 } from "../data/dummyData";
import { HStack, Text, Center } from "@chakra-ui/react";

//ホーム画面上部のコンポーネント

export const HomeTop = () => {
  return (
    <>
      {/* FIXME: スタイルをピクセルで指定しているためもう少しいい感じにする */}
      <HStack bg="#F6C745" h={"150px"} spacing={10} key={MemberInfo0[1]}>
        <Box w={"240px"} h={"150px"}>
          <Image src={MemberInfo0[0]} alt="name1" />
        </Box>

        <Box>
          <Text fontSize="3xl">{MemberInfo0[1]}</Text>
          <Center>
            <Avatar name="temp1" src={MemberInfo0[2]} />
          </Center>
        </Box>
      </HStack>
    </>
  );
};
