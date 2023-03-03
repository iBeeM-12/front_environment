import { Box, Center, VStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { HStack, Text } from "@chakra-ui/react";
import { ReturnButton } from "./ReturnButton";
import { RemakeButton } from "./RemakeBottun";
import { HSpacer } from "./molecules/Spacer";

//グループ画面

type Props = {
  groupName: string;
  groupImage: string;
};

export const GroupTop = ({ groupName, groupImage }: Props) => {
  return (
    <>
      {/* FIXME: スタイルをピクセルで指定しているためもう少しいい感じにする */}
      <Box display="flex" justifyContent="flex-end">
        <HStack>
          <RemakeButton />
          <ReturnButton />
        </HStack>
      </Box>
      <Center>
        <HStack>
          <Image src={groupImage} alt="groupImage" boxSize={40} />
          <HSpacer size={12} />
          <Text fontSize="3xl">{groupName}</Text>
        </HStack>
      </Center>
    </>
  );
};
