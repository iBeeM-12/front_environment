import { Box, HStack, Image, VStack } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

type Props = {
  memberList: {
    memberId: number;
    memberImage: string;
    memberName: string;
    statusIcon: string;
  }[];
};

export const MemberView = ({ memberList }: Props) => {
  console.log(memberList);
  return (
    <Box bg={"#E5D1C8"} minH={"5000px"}>
      <VStack marginRight={100}>
        {memberList.map((member) => {
          return (
            <HStack key={member.memberId} spacing={5}>
              <Image w="160px" h="90px" src={member.memberImage} alt="samune" />
              <Avatar src={member.statusIcon} />
              <Text>{member.memberName}</Text>
            </HStack>
          );
        })}
      </VStack>
    </Box>
  );
};
