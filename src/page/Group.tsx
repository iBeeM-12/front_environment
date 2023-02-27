import { GroupTop } from "../components/GroupTop";
import { Box, VStack } from "@chakra-ui/react";
import { Tab1 } from "../components/Tab";
import { useParams } from "react-router-dom";
//グループ画面の枠

export const Group = () => {
  const { id } = useParams();
  return (
    <>
      <VStack bg="#F6C745" spacing={1}>
        {id && <GroupTop id={id} />}
        <Box h={"10px"}></Box>
        <Tab1 />
      </VStack>
    </>
  );
};
