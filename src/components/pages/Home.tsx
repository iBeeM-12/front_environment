import React from "react";
import { Box, Container, HStack } from "@chakra-ui/react";
import { HomeTop } from "../HomeTop";
import { HomeGroup } from "../HomeGroup";
import { PlusButtonGroup } from "../PlusButton";
import { VSpacer } from "../molecules/Spacer";

//ホーム画面くみ上げ
export const Home = () => {
  return (
    <>
      <Container maxW="container.md">
        <Box bg={"#F6C745"}>
          <HomeTop />
          <VSpacer size={12} />

          <HStack>
            <Box borderRadius="xl" minW="100%" bg={"#E5D1C8"}>
              <PlusButtonGroup text={"グループの追加"} />
              <HomeGroup />
            </Box>
          </HStack>
          <VSpacer size={60} />
        </Box>
      </Container>
    </>
  );
};
