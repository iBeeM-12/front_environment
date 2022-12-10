import { Box, Button, HStack } from "@chakra-ui/react";

export const ButtonOfCreateGroup = () => {
  return (
    <HStack spacing={4}>
      <Box w={"150px"}></Box>
      <Button colorScheme="orange" size="xs">
        作成
      </Button>
    </HStack>
  );
};
