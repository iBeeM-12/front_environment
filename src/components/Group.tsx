import React from "react";
import { MemberView } from "./MemberView";
import { GroupTop } from "./GroupTop";
import { VStack } from "@chakra-ui/react";
import { Tab1 } from "./Tab";
//グループ画面の枠

export const Group = () => {
  return (
    <>
      <VStack bg="#F6C745" spacing={1}>
        <GroupTop />
        <Tab1 />
      </VStack>
    </>
  );
};
