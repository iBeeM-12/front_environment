import { Box, Container, HStack } from "@chakra-ui/layout";
import { MakeGroupNI } from "../MakeGroupNameImage";
import { VSpacer } from "../molecules/Spacer";
import { ReturnButton } from "../ReturnButton";
import { UserIDSearch } from "../UserIDSearch";

export const CreateGroup = () => {
  return (
    <>
      <Container maxW="container.md">
        <Box bg="#E5D1C8">
          <Box display="flex" justifyContent="flex-end">
            <ReturnButton />
          </Box>
          <VSpacer size={12} />

          <MakeGroupNI />

          <VSpacer size={4} />

          <VSpacer size={60} />
        </Box>
      </Container>
    </>
  );
};
