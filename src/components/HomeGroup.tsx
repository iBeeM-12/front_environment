import { HStack, Image, Stack, VStack } from "@chakra-ui/react";
import { Avatar, AvatarGroup } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SecessionButton } from "./SecessionBottun";

//ホーム画面のグループの状態一覧
export const HomeGroup = () => {
  const navigate = useNavigate();
  //二個目の要素が今回numberになってしまっているため対応
  const [id, setId] = useState<[number, string | number, string][]>([
    [0, "dummy", "dummy2"],
  ]);
  const [avatars, setAvatars] = useState<[number, string][][]>();

  const RequestMemberList = (stash: any[], arr: any[]) => {
    for (let i = 0; i < arr.length; i++) {
      const url_avatar = `http://localhost:8000/home/group_member?group_id=${arr[i][0]}`;
      axios
        .get(url_avatar)
        .then((_res) => {
          // NOTE: API の設計にある name が返ってきてない
          stash.push(_res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const FetchMemberList = async (arr: [number, string | number, string][]) => {
    const stash: any[] = []; // FIXME: any を回避
    await RequestMemberList(stash, arr);
    console.log(stash);
    return stash;
  };

  useEffect(() => {
    const url_id = "http://localhost:8000/home/users_group_list?user_id=1";

    axios
      .get(url_id)
      .then((res) => {
        if (Array.isArray(res.data)) {
          // resArr が配列であることを保証
          FetchMemberList(res.data).then((resolve) => {
            console.log(resolve);
            setAvatars(resolve);
          });
        }
        setId(res.data);
      })
      .catch((error) => {});
  }, []);

  if (avatars) {
    // console.log(avatars, avatars.length, avatars[0]);
    console.log(avatars, avatars.length);
  }

  return (
    <>
      {avatars && <Avatar src={"https://bit.ly/dan-abramov"} />}
      {/* {id.map((grpid, i) => {
        return (
          <div key={i}>
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
                  {avatars &&
                    avatars[i] &&
                    avatars[i].map((avatar) => {
                      return <Avatar key={avatar[0]} src={avatar[1]} />;
                    })}
                </AvatarGroup>
              </VStack>
              <SecessionButton grpid={grpid[0]} />
            </HStack>
          </div>
        );
      })} */}
    </>
  );
};
