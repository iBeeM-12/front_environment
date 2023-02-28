import { HStack, Image, Stack, VStack } from "@chakra-ui/react";
import { Avatar, AvatarGroup } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SecessionButton } from "./SecessionBottun";

type Group = {
  id: number;
  name: string | number; // 本来は string が正しいはずだけども！？
  img: string;
  isUnread: number; // API 設計みた感じこの戻り値もありそう 0：既読, 1：未読
  memberList: [number, string, string][];
};

//ホーム画面のグループの状態一覧
export const HomeGroup = () => {
  const navigate = useNavigate();
  const [groupList, setGroupList] = useState<Group[]>();

  const FetchMemberList = async (data: any[]) => {
    const stash: Group[] = [];
    for (let i = 0; i < data.length; i++) {
      const url_avatar = `http://localhost:8000/home/group_member?group_id=${data[i][0]}`;
      await axios
        .get(url_avatar)
        .then((res) => {
          const _: Group = {
            id: data[i][0],
            name: data[i][1],
            img: data[i][2],
            isUnread: data[i][3],
            memberList: res.data,
          };
          stash.push(_);
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error(err);
        });
    }
    return stash;
  };

  useEffect(() => {
    const url_id = "http://localhost:8000/home/users_group_list?user_id=1";
    axios
      .get(url_id)
      .then((res) => {
        const data = res.data;
        // resArr が配列であることを保証しなと map が使えない
        if (Array.isArray(data)) {
          FetchMemberList(data).then((resolve) => {
            setGroupList(resolve);
          });
        }
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  }, []);

  return (
    <>
      {groupList && // 初期値を渡していないため undefined を回避する必要がある
        groupList.map((group) => {
          return (
            <>
              <HStack spacing={10}>
                <Stack key={group.id}>
                  <Image
                    src={group.img}
                    onClick={() => {
                      navigate(`/group/${group.id}`);
                    }}
                  />
                </Stack>
                <VStack spacing={4}>
                  <Text fontSize="xl">{group.name}</Text>
                  <AvatarGroup size="md" max={3}>
                    {group.memberList.map((member) => {
                      return (
                        <Avatar
                          key={member[0]}
                          name={member[2]}
                          src={member[1]}
                        />
                      );
                    })}
                  </AvatarGroup>
                </VStack>
                <SecessionButton grpid={group.id} />
              </HStack>
            </>
          );
        })}
    </>
  );
};
