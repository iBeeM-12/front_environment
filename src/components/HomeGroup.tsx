import { HStack, Image, Stack, VStack } from "@chakra-ui/react";
import { Avatar, AvatarGroup } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { avatarList } from "../data/dummyData";
import { SecessionButton } from "./SecessionBottun";

//ホーム画面のグループの状態一覧
export const HomeGroup = () => {
  const [id, setName] = useState<(string | number)[][]>([
    [0, "dummy", "dummy2", 0],
  ]);

  console.log(id);
  useEffect(() => {
    const url = "http://localhost:8000/home/my_group/?user_id=1";
    // const url_icon = "http://localhost:8000/home/user/icon/";

    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        // 本当は型判定とかしたほうがよいが…
        // 詳しくは zod とか調べてみるとよいかも！？
        setName(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const navigate = useNavigate();
  return (
    <>
      {id.map((grpid) => {
        return (
          <>
            <HStack spacing={10}>
              <Stack key={grpid[0]}>
                <Image
                  //{grpid[2]}を入れたい
                  src="gibbresh.png"
                  fallbackSrc="https://via.placeholder.com/150"
                  onClick={() => {
                    navigate("/group");
                  }}
                />
              </Stack>
              <VStack spacing={4}>
                <Text fontSize="xl">{grpid[1]}</Text>
                <AvatarGroup size="md" max={3}>
                  {/** お作法1: return の中で if 文のようなロジックを使用するときは {} で囲う */}
                  {/** お作法2: map を使うときは必ず return を書く */}
                  {/** (一応) お作法3: map を使うときは必ず key を与える (描画には問題ないけど、concole で警告が出る) */}
                  {avatarList.map((avatar) => {
                    return (
                      <Avatar
                        key={avatar.name}
                        name={avatar.name}
                        src={avatar.src}
                      />
                    );
                  })}
                </AvatarGroup>
              </VStack>
              <SecessionButton />
            </HStack>
          </>
        );
      })}
    </>
  );
};
