import { SearchIcon } from "@chakra-ui/icons";
import { HStack, IconButton, Input } from "@chakra-ui/react";

export const UserSearch = () => {
  return (
    <>
      <HStack>
        <IconButton aria-label="Search database" icon={<SearchIcon />} />
        <Input variant={"outline"} size="sm" placeholder="友達のユーザーID" />
      </HStack>
    </>
  );
};
