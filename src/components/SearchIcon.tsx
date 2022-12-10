import { HStack, Icon, Text } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React from "react";

type Props = {
  text: string;
};
export const PlusButton = ({ text }: Props) => {
  return (
    <HStack>
      <Icon as={SearchIcon} boxSize={9} />
      <Text fontSize="xl">{text}</Text>
    </HStack>
  );
};
