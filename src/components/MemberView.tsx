import { Box, HStack, Image, VStack } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { MemberList } from "../data/dummyData";
import { VSpacer } from "./molecules/Spacer";

export const MemberView = () => {
  return (
    <Box bg={"#E5D1C8"}>
      <VStack marginRight={100}>
        {MemberList.map((member) => {
          return (
            <HStack key={member.name} spacing={5}>
              <Image w="160px" h="90px" src={member.smn} alt="samune" />
              <Avatar src={member.stat} />
              <Text>{member.name}</Text>
            </HStack>
          );
        })}
      </VStack>
      <VSpacer size={12} />
    </Box>
  );
};
