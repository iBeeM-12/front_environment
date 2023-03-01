import { SearchIcon } from "@chakra-ui/icons";
import { HStack, IconButton, Input } from "@chakra-ui/react";

export const UserIDSearch = () => {
  return (
    <>
      <HStack>
        <IconButton aria-label="Search database" icon={<SearchIcon />} />
        <Input
          variant={"outline"}
          size="sm"
          bg="#FFFFFF"
          placeholder="友達のユーザーID"
        />
      </HStack>
    </>
  );
};
