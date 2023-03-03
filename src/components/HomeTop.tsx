import { Box, VStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { MemberInfo0 } from "../data/dummyData";
import { HStack, Text, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { MyAvatar } from "./MyAvatar";
import { useEffect, useState } from "react";
import axios from "axios";
import { HSpacer, VSpacer } from "./molecules/Spacer";

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
        <Box key={MemberInfo0[1]}>
          <HStack>
            <Image
              src={name[2]}
              alt="name1"
              boxSize={32}
              onClick={() => {
                navigate("/profile");
              }}
            />
            <VSpacer size={4} />
            <HSpacer size={28} />

            <Center>
              <Box>
                <Text fontSize="3xl">{name[1]}</Text>
                <MyAvatar name={name} setName={setName} />
              </Box>
            </Center>
          </HStack>
        </Box>
      )}
    </>
  );
};
