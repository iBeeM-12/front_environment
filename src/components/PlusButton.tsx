import { HStack, Icon, Text } from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import React from "react";
import { useNavigate } from "react-router-dom";

//プラスボタンのコンポーネント

type Props = {
  text: string;
};
export const PlusButtonGroup = ({ text }: Props) => {
  const navigate = useNavigate();
  return (
    <HStack>
      <Icon
        as={PlusSquareIcon}
        boxSize={9}
        onClick={() => {
          navigate("/group/create");
        }}
      />
      <Text fontSize="xl">{text}</Text>
    </HStack>
  );
};

export const PlusButtonMember = ({ text }: Props) => {
  const navigate = useNavigate();
  return (
    <HStack>
      <Icon
        as={PlusSquareIcon}
        boxSize={9}
        //onClick={() => {
        //navigate("/group/create");
        //}}
      />
      <Text fontSize="xl">{text}</Text>
    </HStack>
  );
};
