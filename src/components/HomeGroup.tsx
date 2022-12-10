import { HStack, Image, Stack, VStack } from "@chakra-ui/react";
import { Avatar, AvatarGroup } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { avatarList } from "../data/dummyData";
import { SecessionButton } from "./SecessionBottun";

//ホーム画面のグループの状態一覧
export const HomeGroup = () => {
  const navigate = useNavigate();
  return (
    <>
      <HStack spacing={10}>
        <Stack>
          <Image
            src="gibbresh.png"
            fallbackSrc="https://via.placeholder.com/150"
          />
        </Stack>
        <VStack spacing={4}>
          <Text fontSize="xl">group1</Text>
          <AvatarGroup size="md" max={3}>
            {/** お作法1: return の中で if 文のようなロジックを使用するときは {} で囲う */}
            {/** お作法2: map を使うときは必ず return を書く */}
            {/** (一応) お作法3: map を使うときは必ず key を与える (描画には問題ないけど、concole で警告が出る) */}
            {avatarList.map((avatar) => {
              return (
                <Avatar key={avatar.name} name={avatar.name} src={avatar.src} />
              );
            })}
          </AvatarGroup>
        </VStack>
        <SecessionButton />
      </HStack>
    </>
  );
};
