import { HStack, Input, Text } from "@chakra-ui/react";

export const InputGroupName = () => {
  return (
    <HStack spacing={1}>
      <Text fontSize="sm" whiteSpace={"nowrap"}>
        グループ名：
      </Text>
      <Input variant={"outline"} size="sm" placeholder="グループ名を入力" />
    </HStack>
  );
};
