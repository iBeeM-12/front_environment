import { HStack, Image, Stack, VStack } from "@chakra-ui/react";
import { Avatar, AvatarGroup } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

export const HomeGroup = () => {
  return (
    <HStack spacing={20}>
      <Stack>
        <Image
          src="gibbresh.png"
          fallbackSrc="https://via.placeholder.com/150"
        />
      </Stack>
      <VStack spacing={4}>
        <Text fontSize="xl">group1</Text>
        <AvatarGroup size="md" max={5}>
          <Avatar
            name="Taro"
            src="https://i.pinimg.com/736x/53/1e/44/531e449c6d536d03f98a91ac82b1833d.jpg"
          />
          <Avatar
            name="Jiro"
            src="https://uploadfile.bizhizu.cn/up/e5/9b/d7/e59bd7b44b8382f8305f860b736a0642.jpg"
          />
          <Avatar
            name="Sabro"
            src="https://i.pinimg.com/originals/5a/21/da/5a21dabae82da8a4a28e3523ad5cd114.jpg"
          />
          <Avatar
            name="Siro"
            src="https://2.bp.blogspot.com/-4cDI5-IdyKs/WUdY336_nbI/AAAAAAABFAg/xxpZDJEt6ncUrMQwU7Ug-HQA8-eRI36eACLcBGAs/s400/pet_cat_sit.png"
          />
          <Avatar
            name="Goro"
            src="https://i1.sndcdn.com/avatars-000737354359-nqceq9-t500x500.jpg"
          />
          <Avatar
            name="roku"
            src="https://th.bing.com/th/id/OIP.CsFV-tWOkLjeHobsxgYR1QHaH9?pid=ImgDet&rs=1"
          />
        </AvatarGroup>
      </VStack>
    </HStack>
  );
};
