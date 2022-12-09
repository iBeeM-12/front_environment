import { Box, HStack, Image, Stack, VStack } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

const MemberList = [
  {
    name: "Taro",
    smn: "https://i.pinimg.com/736x/53/1e/44/531e449c6d536d03f98a91ac82b1833d.jpg",
    stat: "https://livedoor.blogimg.jp/nijianime/imgs/5/9/59a27a65-s.jpg",
  },
  {
    name: "Jiro",
    smn: "https://uploadfile.bizhizu.cn/up/e5/9b/d7/e59bd7b44b8382f8305f860b736a0642.jpg",
    stat: "https://livedoor.blogimg.jp/nijianime/imgs/5/9/59a27a65-s.jpg",
  },
  {
    name: "Sabro",
    smn: "https://i.pinimg.com/originals/5a/21/da/5a21dabae82da8a4a28e3523ad5cd114.jpg",
    stat: "https://cdn-ak.f.st-hatena.com/images/fotolife/h/hamachese/20221016/20221016040112.jpg",
  },
  {
    name: "Siro",
    smn: "https://neko.omosiro.org/wp-content/uploads/2015/01/airou.jpg",
    stat: "https://cdn-ak.f.st-hatena.com/images/fotolife/h/hamachese/20221016/20221016040112.jpg",
  },
  {
    name: "Goro",
    smn: "https://i1.sndcdn.com/avatars-000737354359-nqceq9-t500x500.jpg",
    stat: "https://livedoor.blogimg.jp/nijianime/imgs/5/9/59a27a65-s.jpg",
  },
  {
    name: "sith",
    smn: "https://i.ytimg.com/vi/dY8QbAOxlww/maxresdefault.jpg",
    stat: "https://cdn-ak.f.st-hatena.com/images/fotolife/h/hamachese/20221016/20221016040112.jpg",
  },
];

export const MemberView = () => {
  return (
    <Box bg={"#E5D1C8"}>
      <VStack marginRight={100}>
        {MemberList.map((member) => {
          return (
            <HStack key={member.name} spacing={5}>
              <Image w="160px" h="90px" src={member.smn} alt="samune" />
              <Avatar src={member.stat} />
              <Text>{member.name}</Text>
            </HStack>
          );
        })}
      </VStack>
    </Box>
  );
};
