//チャットのスタンプ表示用吹き出し
//スタンプバージョンと、定型文バージョンを用意

import { Box, Button, Image, VStack } from "@chakra-ui/react";
import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";

//欲しいもの スタンプ画像のＵＲＬ
//出力するもの 選択されたスタンプに振られた番号

type Props = {
  stampList: [number, string][];
  groupId: number;
  userId: number;
  flag: boolean;
  setFlag: Dispatch<SetStateAction<boolean>>;
};

export const StampSelect = ({
  stampList,
  groupId,
  userId,
  flag,
  setFlag,
}: Props) => {
  const [stickerId, setStickerId] = useState<number>();

  const StampDone = () => {
    const url = `http://localhost:8000/home/chat/send_sticker?user_id=${userId}&group_id=${groupId}&sticker_id=${stickerId}`;
    axios
      .get(url)
      .then((res) => {
        setFlag(!flag);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  };

  return (
    <>
      <Box w="390px" bg="C8C8C8" p={5}>
        <VStack spacing={2}>
          {stampList.map((stamp) => {
            return (
              <>
                <Image
                  boxSize={20}
                  src={stamp[1]}
                  key={stamp[0]}
                  onClick={() => setStickerId(stamp[0])}
                />
              </>
            );
          })}
          <Button onClick={StampDone}>スタンプを送信</Button>
        </VStack>
      </Box>
    </>
  );
};
