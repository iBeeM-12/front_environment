import { Box, HStack } from "@chakra-ui/layout";
import { ButtonOfCreateGroup } from "../ButtonOfCreateGroup";
import { GroupIconSet } from "../GroupIconSet";
import { InputGroupName } from "../InputGroupName";
import { ReturnButton } from "../ReturnButton";
import { UserIDSearch } from "../UserIDSearch";

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
          <UserIDSearch />
        </Box>
      </Box>
    </>
  );
};
