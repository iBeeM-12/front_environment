import { Button, Stack } from "@chakra-ui/react";
import React from "react";

export const ReturnButton = () => {
  return (
    <Stack spacing={4} direction="row" align="center">
      <Button bg="#EEA239" color="#FFFFFF" size="xs">
        戻る
      </Button>
    </Stack>
  );
};
