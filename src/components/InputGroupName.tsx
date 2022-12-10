import { HStack, Input, Text } from "@chakra-ui/react";

export const InputGroupName = () => {
  return (
    <HStack spacing={1}>
      <Text fontSize="lx" whiteSpace={"nowrap"}>
        グループ名：
      </Text>
      <Input
        variant={"outline"}
        size="sm"
        bg="#FFFFFF"
        placeholder="グループ名を入力"
      />
    </HStack>
  );
};
