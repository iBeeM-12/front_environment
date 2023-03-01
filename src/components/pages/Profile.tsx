import { Box, Container, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { FreeText } from "../FreeText";
import { HistoryIconText } from "../HistoryIconText";
import { HomeTop } from "../HomeTop";
import { VSpacer } from "../molecules/Spacer";
import { ProfileRemakeButton } from "../RemakeBottun";
import { ReturnButton } from "../ReturnButton";

export const Profile = () => {
  return (
    <>
      <Container maxW="container.md">
        <Box bg="#F6C745">
          <Box display="flex" justifyContent="flex-end">
            <HStack>
              <ProfileRemakeButton />
              <ReturnButton />
            </HStack>
          </Box>
          <VSpacer size={8} />
          <HomeTop />
          <VStack spacing={"3"}>
            <FreeText />
            <Box bg="#FFFFFF" w="370px" borderRadius="md">
              <HistoryIconText />
            </Box>
          </VStack>
          <VSpacer size={60} />
        </Box>
      </Container>
    </>
  );
};
