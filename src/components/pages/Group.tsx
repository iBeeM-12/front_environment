import { GroupTop } from "../GroupTop";
import { Box, Container, VStack } from "@chakra-ui/react";
import { Tab1 } from "../Tab";
import { useParams } from "react-router-dom";
//グループ画面の枠

export const Group = () => {
  const { id } = useParams();
  return (
    <>
      <Container maxW="container.md">
        <VStack bg="#F6C745" spacing={1}>
          {id && <GroupTop id={id} />}
          <Box h={"10px"}></Box>
          <Tab1 />
        </VStack>
      </Container>
    </>
  );
};
