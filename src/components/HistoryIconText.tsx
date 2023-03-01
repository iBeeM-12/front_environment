import { HStack, Text } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

//プロフィール画面の履歴のアイコンとテキスト
export const HistoryIconText = () => {
  const [historys, setHistorys] = useState<[string, string]>();

  useEffect(() => {
    const url_historys =
      "http://localhost:8000/home/user/get_user_record?user_id=1";
    axios
      .get(url_historys)
      .then((res) => {
        setHistorys([res.data[0], res.data[1]]);
      })

      .catch((err) => {
        console.error(err);
      });
  });

  return (
    <>
      {historys &&
        historys.map((history) => {
          return (
            <HStack>
              <Avatar key={history[1]} src={history[0]} />
              <Text fontSize="xl"> {`${history[1]}`}表示を開始しました</Text>
            </HStack>
          );
        })}
    </>
  );
};
