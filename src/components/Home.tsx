import React from "react";
import { Box } from "@chakra-ui/react";
import { HomeTop } from "./HomeTop";
import { HomeGroup } from "./HomeGroup";
import { PlusButton } from "./PlusButton";
import { Axios } from "../axios";
export const Home = () => {
  return (
    <>
      <HomeTop />

      <Box bg={"#E5D1C8"}>
        <Box h={2} />
        <PlusButton text={"グループの追加"} />
        <Box h={2} />
        <HomeGroup />
        <HomeGroup />
        <HomeGroup />
        <HomeGroup />
        <HomeGroup />
        <HomeGroup />
      </Box>

      <Axios />
    </>
  );
};
