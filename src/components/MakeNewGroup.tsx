import React from "react";
import { Stack, Text } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

//ホーム画面グループ追加＋ボタンとテキスト
type Props = {
  detail: string;
};

export const MakeNewGroup = () => {
  return (
    <>
      <Stack spacing={4} direction="row" align="center">
        <Button colorScheme="teal" size="lg">
          +
        </Button>
        <Text fontSize="xl">グループ追加</Text>
      </Stack>
    </>
  );
};
