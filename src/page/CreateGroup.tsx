import { Box, HStack } from "@chakra-ui/layout";
import { ButtonOfCreateGroup } from "../components/ButtonOfCreateGroup";
import { GroupIconSet } from "../components/GroupIconSet";
import { InputGroupName } from "../components/InputGroupName";
import { ReturnButton } from "../components/ReturnButton";
import { UserSearch } from "../components/UserIDSearch";

export const CreateGroup = () => {
  return (
    <>
      <Box bg="#E5D1C8" minH="5000px">
        <HStack>
          <Box w="280px"></Box>
          <ButtonOfCreateGroup />
          <ReturnButton />
        </HStack>
        <Box w="350px">
          <InputGroupName />
        </Box>
        <HStack>
          <Box w="100px"></Box>
          <GroupIconSet />
        </HStack>
        <Box w="350px">
          <UserSearch />
        </Box>
      </Box>
    </>
  );
};
