import { Box, Image } from "@chakra-ui/react";
import { ChatList, MemberInfo0 } from "../data/dummyData";

//欲しいデータ　グループ内の誰が喋ったのか、icon画像のURK(繰り返しは外で実施する方がいい説)
//渡すデータなし(出力のみ)
export const ChatLeftIcon = () => {
  return (
    <>
      <Image
        borderRadius="full"
        boxSize={20}
        //喋った人の画像
        src={MemberInfo0[0]}
        //喋った人の名前(これがキーになるイメージ)
        alt={MemberInfo0[1]}
      />
    </>
  );
};
