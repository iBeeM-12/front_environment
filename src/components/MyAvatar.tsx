import { Avatar, Button, Portal, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MemberList } from "../data/dummyData";

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

  const [icons, setIcon] = useState<[number, string, string][]>();

  const [nowstatus, setNowstatus] = useState<[number]>([0]);

  useEffect(() => {
    const url = "http://localhost:8000/home/user/get_user_info?user_id=1";
    const url_icon = "http://localhost:8000/home/user/icon/";
    // const url_update =
    //   "http://localhost:8000/home/user/update_user_info?user_id=1,user_state_id=${nowstatus}";

    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setName(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
    axios
      .get(url_icon)
      .then((res) => {
        setIcon(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleClick = (id: number) => {
    console.log(id);
    const url_update = `http://localhost:8000/home/user/update_user_info?user_id=1,user_state_id=${id}`;
    // const url = "http://localhost:8000/home/user/update_user_info?user_id=1,user_state_id=" + id
    axios
      .post(url_update)
      .then((res) => {
        // なんかする
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
              {icons &&
                icons.map((icon, i) => {
                  return (
                    <VStack key={i}>
                      <Button
                        size="xl"
                        rounded={"full"}
                        onClick={() => {
                          handleClick(icon[0]);
                        }}
                      >
                        {/* 状態表示の画像にする */}
                        <Avatar key={icon[0]} src={icon[2]} />
                        {/* keyの内容：ステータスの名前 crcの内容：ステータスの表示 */}
                      </Button>
                      {/* 状態の名前にする */}
                      <p>{icon[1]}</p>
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
