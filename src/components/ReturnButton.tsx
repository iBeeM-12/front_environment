import { Button, Stack } from "@chakra-ui/react";
import React from "react";

//戻るボタンのコンポーネント

export const ReturnButton = () => {
  return (
    <Stack spacing={4} direction="row" align="center">
      <Button colorScheme="gray" size="xs">
        戻る
      </Button>
    </Stack>
  );
};
