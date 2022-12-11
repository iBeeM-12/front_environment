import { Box } from "@chakra-ui/react";
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
  const [name, setName] = useState<[number, string, string, string]>([
    0,
    "hoge",
    "hogei",
    "hougei",
  ]);
  const navigate = useNavigate();
  useEffect(() => {
    const url = "http://localhost:8000/home/user/?user_id=1";
    // const url_icon = "http://localhost:8000/home/user/icon/";

    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        // 本当は型判定とかしたほうがよいが…
        // 詳しくは zod とか調べてみるとよいかも！？
        // response が2次元で返ってくる
        // const response: Temp[] = [
        //   [10, "hoge!!!", 10],
        //   [20, "foofoo", 20],
        // ]; //res.data で取得を想定
        setName([res.data[0], res.data[1], res.data[2], res.data[3]]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      {/* FIXME: スタイルをピクセルで指定しているためもう少しいい感じにする */}
      <HStack bg="#F6C745" h={"150px"} spacing={10} key={MemberInfo0[1]}>
        <Box w={"240px"} h={"150px"}>
          <Image
            //src=name[2]  自分のサムネにしたい
            src={
              "https://raw.githubusercontent.com/iBeeM-12/Backend/main/images/NEKO.png?token=GHSAT0AAAAAAB2477NMS4TVNJMV2VNU5TZAY4VGFLA"
            }
            alt="name1"
            onClick={() => {
              navigate("/profile");
            }}
          />
        </Box>

        <Box>
          <Text fontSize="3xl">{name[1]}</Text>
          <Center>
            <MyAvatar />
          </Center>
        </Box>
      </HStack>
    </>
  );
};
