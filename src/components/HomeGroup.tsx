import { HStack, Image, Stack, VStack } from "@chakra-ui/react";
import { Avatar, AvatarGroup } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { avatarList, GroupInfo0 } from "../data/dummyData";
import { SecessionButton } from "./SecessionBottun";

//ホーム画面のグループの状態一覧
export const HomeGroup = () => {
  //二個目の要素が今回numberになってしまっているため対応
  const [id, setId] = useState<[number, string | number, string][]>([
    [0, "dummy", "dummy2"],
  ]);

  console.log(id);
  useEffect(() => {
    const url = "http://localhost:8000/home/users_group_list?user_id=1";
    // const url_icon = "http://localhost:8000/home/user/icon/";

    axios
      .get(url)
      .then((res) => {
        // 本当は型判定とかしたほうがよいが…
        // 詳しくは zod とか調べてみるとよいかも！？
        setId(res.data);
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
                  {avatarList.map((avatar) => {
                    return (
                      <Avatar
                        key={avatar.name}
                        name={avatar.name}
                        src={avatar.src}
                      />
                      // avatar.name = ステータスID
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
