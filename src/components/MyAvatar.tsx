import { Avatar, Button, Portal, VStack } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

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

type Props = {
  name: [number, string, string, string];
  setName: Dispatch<SetStateAction<[number, string, string, string]>>;
};

export const MyAvatar = ({ name, setName }: Props) => {
  const [icons, setIcon] = useState<[number, string, string][]>();
  const [statusImg, setStatusImg] = useState<string>(name[3]);

  useEffect(() => {
    const url_icon = "http://localhost:8000/home/user/get_icon_list";
    axios
      .get(url_icon)
      .then((res) => {
        setIcon(res.data);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  }, []);

  const handleClick = (id: number, img: string) => {
    const url_update = `http://localhost:8000/home/user/get_user_detail?user_id=1&user_state_id=${id}`;
    axios
      .get(url_update)
      .then((res) => {
        // アイコンの画像が変わるレンダーが走る必要がありそう
        setStatusImg(img);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  };

  return (
    <>
      <Popover key={name[0]}>
        <PopoverTrigger>
          <Button size="xl" rounded={"full"}>
            <Avatar src={statusImg}></Avatar>
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
                          handleClick(icon[0], icon[2]);
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
