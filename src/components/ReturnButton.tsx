import { Button, Stack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

//戻るボタンのコンポーネント

export const ReturnButton = () => {
  const navigate = useNavigate();
  return (
    <Stack spacing={4} direction="row" align="center">
      <Button
        bg="#EEA239"
        color="#FFFFFF"
        size="xs"
        onClick={() => {
          navigate("/");
        }}
      >
        戻る
      </Button>
    </Stack>
  );
};
