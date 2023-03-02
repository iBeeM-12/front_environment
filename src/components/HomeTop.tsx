import { Box, VStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { MemberInfo0 } from "../data/dummyData";
import { HStack, Text, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { MyAvatar } from "./MyAvatar";
import { useEffect, useState } from "react";
import axios from "axios";

//ホーム画面上部のコンポーネント
// string[] ["hoge", "foo", "bar"] ☆
// number[] [1, 2, 3] ☆
// [number, string][]
// type Temp = [number, string, number];

export const HomeTop = () => {
  const [name, setName] = useState<[number, string, string, string]>();
  const navigate = useNavigate();

  useEffect(() => {
    // FIXME: ユーザの情報取得の API を謎に多く叩いてエラーを吐く瞬間があるため、それを一時的に回避
    if (name === undefined) {
      const url = "http://localhost:8000/home/user/get_user_info?user_id=1";

      axios
        .get(url)
        .then((res) => {
          setName(res.data);
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error(error);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* FIXME: スタイルをピクセルで指定しているためもう少しいい感じにする */}
      {name && (
        <HStack bg="#F6C745" key={MemberInfo0[1]}>
          <Box w={"240px"} h={"150px"}>
            <Image
              src={name[2]}
              maxH={"150px"}
              alt="name1"
              onClick={() => {
                navigate("/profile");
              }}
            />
          </Box>

          <Box>
            <Text fontSize="3xl">{name[1]}</Text>
            <Center>
              <MyAvatar name={name} setName={setName} />
            </Center>
          </Box>
        </HStack>
      )}
    </>
  );
};
