import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  HStack,
  IconButton,
  Input,
  Stack,
  VStack,
  Text,
  Image,
} from "@chakra-ui/react";
import axios from "axios";
import { useRef, useState } from "react";
import { VSpacer } from "../molecules/Spacer";
import { useParams } from "react-router-dom";

type Props = {
  setIsAddMember: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AddMamber = ({ setIsAddMember }: Props) => {
  const { id } = useParams();

  const inputRef = useRef<string>("");
  const [userInfo, setUserInfo] = useState<[number, string, string, string]>();

  const fetchUserInfo = (uid: number) => {
    const url = `http://localhost:8000/home/user/get_user_info?user_id=${uid}`;

    axios
      .get(url)
      .then((res) => {
        setUserInfo(res.data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
  };

  const handleClick = () => {
    const url = `http://localhost:8000/home/group/add?user_id=${inputRef.current}`;
    axios
      .get(url)
      .then((res) => {
        // res.data : list{user_id:int, user_name:str}
        fetchUserInfo(res.data[0]);
      })
      .catch((err) => {
        // id が存在しない場合に 500 が返ってくる
        setUserInfo([-1, "ユーザーが存在しません", "###", "###"]);
      });
  };

  const handleImageClick = (uid: number) => {
    console.log(uid, id, "click!!!");
    axios
      .get(
        `http://localhost:8000/home/group/add_member?user_id=${uid}&group_id=${id}`
      )
      .then((res) => {
        setIsAddMember(false);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  };

  return (
    <>
      <p>メンバーの追加</p>
      <Stack spacing={4} direction="row" align="center">
        <VStack>
          <HStack>
            <Input
              placeholder="友達のID"
              bg="#FFFFFF"
              size="sm"
              borderRadius="md"
              onChange={(event) => {
                inputRef.current = event.target.value;
              }}
            />
            <IconButton
              aria-label="Search database"
              icon={<SearchIcon />}
              onClick={handleClick}
            />
          </HStack>
          {userInfo && (
            <Box>
              {userInfo[0] !== -1 && (
                <Image
                  src={userInfo[2]}
                  maxH={"150px"}
                  onClick={() => {
                    handleImageClick(userInfo[0]);
                  }}
                />
              )}
              <VSpacer size={4} />
              <Center>
                <Box>
                  <Text fontSize="3xl">{userInfo[1]}</Text>
                </Box>
              </Center>
            </Box>
          )}
          <Button
            bg="#EEA239"
            color="#FFFFFF"
            size="xs"
            onClick={() => {
              // //グループメンバー表示に戻りたい
              setIsAddMember(false);
            }}
          >
            戻る
          </Button>
        </VStack>
      </Stack>
    </>
  );
};
