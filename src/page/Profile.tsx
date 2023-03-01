import { Box, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { FreeText } from "../components/FreeText";
import { HistoryIconText } from "../components/HistoryIconText";
import { HomeTop } from "../components/HomeTop";
import { ProfileRemakeButton } from "../components/RemakeBottun";
import { ReturnButton } from "../components/ReturnButton";

export const Profile = () => {
  return (
    <>
      <Box minH="5000px" bg="#F6C745">
        <Box h="10px"></Box>
        <HStack>
          <Box w="280px"></Box>
          <ProfileRemakeButton />
          <ReturnButton />
        </HStack>
        <HomeTop />
        <VStack spacing={"3"}>
          <FreeText />
          <Box bg="#FFFFFF" w="370px" borderRadius="md">
            <HistoryIconText />
          </Box>
        </VStack>
      </Box>
    </>
  );
};
