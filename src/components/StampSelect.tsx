//チャットのスタンプ表示用吹き出し
//スタンプバージョンと、定型文バージョンを用意

import { Box, HStack, Image } from "@chakra-ui/react";
import { StampList } from "../data/dummyData";

//欲しいもの スタンプ画像のＵＲＬ
//出力するもの 選択されたスタンプに振られた番号
export const Stampver = () => {
  return (
    <>
      <Box w="390px" bg="C8C8C8" p={5}>
        <HStack spacing={2}>
          {StampList.map((stamp) => {
            return (
              <>
                <Image
                  boxSize={20}
                  src={stamp.img}
                  key={stamp.num}
                  onClick={() => {
                    console.log(stamp.num); //バックエンドに渡すように変える
                  }}
                />
              </>
            );
          })}
        </HStack>
      </Box>
    </>
  );
};
