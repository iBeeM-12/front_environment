import { HStack, Image, Stack, VStack } from "@chakra-ui/react";
import { Avatar, AvatarGroup } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SecessionButton } from "./SecessionBottun";

//ホーム画面のグループの状態一覧
export const HomeGroup = () => {
  //二個目の要素が今回numberになってしまっているため対応
  const [id, setId] = useState<[number, string | number, string][]>([
    [0, "dummy", "dummy2"],
  ]);

  const [avatars, avatarList] = useState<[number, string, string][]>([
    [
      1,
      "Taro",
      "https://cdn.discordapp.com/attachments/1038862997998817350/1051063658718957598/study_neko.PNG",
    ],
  ]);

  useEffect(() => {
    const url_id = "http://localhost:8000/home/users_group_list?user_id=1";

    axios
      .get(url_id)
      .then((res) => {
        setId(res.data);
        const url_avatar = `http://localhost:8000/home/group_member?group_id=${res.data[0]}`;
        axios
          .get(url_avatar)
          .then((res) => {
            avatarList(res.data);
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((error) => {});
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
                  src={grpid[2]}
                  onClick={() => {
                    navigate(`/group/${grpid[0]}`);
                    //サムネと名前は受け渡したほうが楽かも
                  }}
                />
              </Stack>
              <VStack spacing={4}>
                <Text fontSize="xl">{grpid[1]}</Text>
                <AvatarGroup size="md" max={3}>
                  {/** お作法1: return の中で if 文のようなロジックを使用するときは {} で囲う */}
                  {/** お作法2: map を使うときは必ず return を書く */}
                  {/** (一応) お作法3: map を使うときは必ず key を与える (描画には問題ないけど、concole で警告が出る) */}
                  {avatars.map((avatar) => {
                    return (
                      <Avatar
                        key={avatar[0]}
                        name={avatar[2]}
                        src={avatar[1]}
                      />
                    );
                  })}
                </AvatarGroup>
              </VStack>
              <SecessionButton grpid={grpid[0]} />
            </HStack>
          </>
        );
      })}
    </>
  );
};
