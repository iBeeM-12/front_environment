import { Avatar, Button, Portal, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MemberInfo0, MemberInfo1, MemberList } from "../data/dummyData";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import axios from "axios";

export const MyAvatar = () => {
  const [name, setName] = useState<[number, string, string, string]>([
    0,
    "hoge",
    "hogei",
    "hougei",
  ]);
  const navigate = useNavigate();
  useEffect(() => {
    const url = "http://localhost:8000/home/user/get_user_info?user_id=1";
    // const url_icon = "http://localhost:8000/home/user/icon/";

    axios
      .get(url)
      .then((res) => {
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
        // eslint-disable-next-line no-console
        console.error(error);
      });
  }, []);

  return (
    <>
      <Popover key={name[0]}>
        <PopoverTrigger>
          <Button size="xl" rounded={"full"}>
            <Avatar src={name[3]}></Avatar>
          </Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>今どんな気分？</PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              {MemberList.map((member, i) => {
                return (
                  <VStack key={i}>
                    <Button size="xl" rounded={"full"}>
                      {/* 状態表示の画像にする */}
                      <Avatar key={member.name} src={member.stat} />
                      {/* keyの内容：ステータスの名前 crcの内容：ステータスの表示 */}
                    </Button>
                    {/* 状態の名前にする */}
                    <p>{member.statename}</p>
                  </VStack>
                );
              })}
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
    </>
  );
};
