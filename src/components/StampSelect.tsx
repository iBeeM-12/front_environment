//チャットのスタンプ表示用吹き出し
//スタンプバージョンと、定型文バージョンを用意

import { Box, Button, HStack, Image } from "@chakra-ui/react";
import { CannedList, StampList } from "../data/dummyData";

//欲しいもの スタンプ画像のＵＲＬ
//出力するもの 選択されたスタンプに振られた番号
export const StampSelect = () => {
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

export const Cannedver = () => {
  return (
    <>
      <Box w="390px" bg="C8C8C8" p={0}>
        <HStack spacing={3}>
          {CannedList.map((canned) => {
            return (
              <>
                <Button
                  fontSize="md"
                  colorScheme="orange"
                  variant="solid"
                  size={"md"}
                  key={canned.num}
                  color="whitegray"
                >
                  {/* バックエンドに渡す値 */}
                  {canned.str}
                </Button>
              </>
            );
          })}
        </HStack>
      </Box>
    </>
  );
};
