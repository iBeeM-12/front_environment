import React from "react";
import { MemberView } from "./MemberView";
import { GroupTop } from "./GroupTop";
import { VStack } from "@chakra-ui/react";

export const Group = () => {
  return (
    <>
      <GroupTop />
      <MemberView />
    </>
  );
};
