import { Image, Text, VStack } from "@chakra-ui/react";

type Props = {
  id: number;
  icon: string;
  name: string;
};

export const ExceptMyselfChat = ({ id, icon, name }: Props) => {
  return (
    <>
      <VStack>
        <Image borderRadius="full" boxSize="75px" src={icon} key={id} />
        <Text fontSize="24">{name}</Text>
      </VStack>
    </>
  );
};
