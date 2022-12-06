import { HStack, Icon, Text } from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import React from "react";

export const PlusButton = () => {
  return (
    <HStack>
      {/* The default icon size is 1em (16px) */}
      <Icon as={PlusSquareIcon} boxSize={9} />
      <Text fontSize="xl">メンバーの追加</Text>
    </HStack>
  );
};
