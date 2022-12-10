import React from "react";
import { MemberView } from "./MemberView";
import { GroupTop } from "./GroupTop";
import { Box, VStack } from "@chakra-ui/react";
import { Tab1 } from "./Tab";

export const Group = () => {
  return (
    <>
      <VStack bg="#F6C745" spacing={1}>
        <GroupTop />
        <Box h={"10px"}></Box>
        <Tab1 />
      </VStack>
    </>
  );
};
