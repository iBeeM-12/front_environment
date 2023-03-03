import { Box, VStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { HStack, Text } from "@chakra-ui/react";
import { ReturnButton } from "./ReturnButton";
import { RemakeButton } from "./RemakeBottun";

//グループ画面

type Props = {
  groupName: string;
  groupImage: string;
};

export const GroupTop = ({ groupName, groupImage }: Props) => {
  return (
    <>
      {/* FIXME: スタイルをピクセルで指定しているためもう少しいい感じにする */}
      <HStack h={"150px"}>
        <VStack>
          <Box w={"150px"} h={"150px"}>
            <Image src={groupImage} alt="groupImage" />
          </Box>
        </VStack>
        <VStack>
          <HStack>
            <Box w="125px"></Box>
            {/* <RemakeButton /> */}
            <ReturnButton />
          </HStack>
          <Box h={"30px"} />
          <Text fontSize="3xl">{groupName}</Text>
          <Box h={"30px"} />
        </VStack>
      </HStack>
    </>
  );
};
