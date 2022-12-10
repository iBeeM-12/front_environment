import { Button, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const RemakeButton = () => {
  const navigate1 = useNavigate();
  return (
    <HStack spacing={4}>
      <Button
        bg="#CECECE"
        color="black"
        size="xs"
        onClick={() => {
          navigate1("/group/create");
        }}
      >
        編集
      </Button>
    </HStack>
  );
};

export const ProfileRemakeButton = () => {
  //const navigate2 = useNavigate();
  return (
    <HStack spacing={4}>
      <Button
        bg="#CECECE"
        color="black"
        size="xs"
        //onClick={() => {
        //navigate2("/group/create");}}
      >
        編集
      </Button>
    </HStack>
  );
};
