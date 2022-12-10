import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import { HomeTop } from "./HomeTop";
import { HomeGroup } from "./HomeGroup";
import { PlusButtonGroup } from "./PlusButton";

//ホーム画面くみ上げ
export const Home = () => {
  return (
    <>
      <Box bg={"#F6C745"} minH="5000px">
        <HomeTop />
        <Box h="10px"></Box>
        <HStack>
          <Box w="2px"></Box>
          <Box borderRadius="xl" w="370px" bg={"#E5D1C8"}>
            <PlusButtonGroup text={"グループの追加"} />
            <HomeGroup />
            <HomeGroup />
            <HomeGroup />
            <HomeGroup />
            <HomeGroup />
            <HomeGroup />
          </Box>
        </HStack>
      </Box>
    </>
  );
};
