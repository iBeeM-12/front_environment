import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import { MemberInfo0 } from "../data/dummyData";
import { Stack, HStack, VStack, Text } from "@chakra-ui/react";

export const HomeTop = () => {
  return (
    <>
      <HStack spacing="24px" key={MemberInfo0[1]}>
        {/* youso1 */}
        <Box bg="wite" boxSize="150">
          <Image src={MemberInfo0[0]} alt="name1" />
        </Box>

        {/* youso2 */}
        <Box>
          <Text fontSize="3xl">{MemberInfo0[1]}</Text>
          <Avatar name="temp1" src={MemberInfo0[2]} />
        </Box>
      </HStack>
    </>
  );
};
