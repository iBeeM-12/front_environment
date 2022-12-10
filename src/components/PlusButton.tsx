import { HStack, Icon, Text } from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import React from "react";

//プラスボタンのコンポーネント

type Props = {
  text: string;
};
export const PlusButton = ({ text }: Props) => {
  return (
    <HStack>
      <Icon as={PlusSquareIcon} boxSize={9} />
      <Text fontSize="xl">{text}</Text>
    </HStack>
  );
};
