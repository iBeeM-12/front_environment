import { Box, Center, Container, HStack } from "@chakra-ui/layout";
import { ButtonOfCreateGroup } from "../ButtonOfCreateGroup";
import { GroupIconSet } from "../GroupIconSet";
import { InputGroupName } from "../InputGroupName";
import { VSpacer } from "../molecules/Spacer";
import { ReturnButton } from "../ReturnButton";
import { UserIDSearch } from "../UserIDSearch";

export const CreateGroup = () => {
  return (
    <>
      <Container maxW="container.md">
        <Box bg="#E5D1C8">
          <Box display="flex" justifyContent="flex-end">
            <HStack>
              <ButtonOfCreateGroup />
              <ReturnButton />
            </HStack>
          </Box>
          <VSpacer size={12} />

          <InputGroupName />
          <VSpacer size={12} />
          <Center>
            <GroupIconSet />
          </Center>
          <VSpacer size={4} />

          <UserIDSearch />
          <VSpacer size={60} />
        </Box>
      </Container>
    </>
  );
};
