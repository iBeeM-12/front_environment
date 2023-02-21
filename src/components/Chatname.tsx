import { Text } from "@chakra-ui/react";
import { ChatList } from "../data/dummyData";

export const Chatname = () => {
  return (
    <>
      <Text fontSize="xl">{ChatList[2].name}</Text>
    </>
  );
};
