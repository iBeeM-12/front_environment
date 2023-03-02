import { Box, Button, HStack, Image, VStack } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { HSpacer } from "./molecules/Spacer";

type Props = {
  memberList: [number, string, string, string][];
};

export const MemberView = ({ memberList }: Props) => {
  const Log = () => {
    console.log(memberList);
  };
  return (
    <Box bg={"#E5D1C8"} minH={"5000px"}>
      <VStack marginRight={100}>
        <Button onClick={() => Log()}>ログ</Button>
        {memberList.map((member, i) => {
          return (
            <>
              <HStack key={i} spacing={1}>
                <Text fontSize="28" minW="150px">
                  {member[2]}
                </Text>
                <HSpacer size={4} />
                <Avatar w="75px" h="75px" src={member[1]} />
                <HSpacer size={4} />
                <Image w="150px" h="100px" src={member[3]} />
              </HStack>
            </>
          );
        })}
      </VStack>
    </Box>
  );
};
