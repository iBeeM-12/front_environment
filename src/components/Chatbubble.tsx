import { Card, Image, Text } from "@chakra-ui/react";
import { useState } from "react";

//受け取る情報　出力する画像(コメント)(chatlistがデーターベース)
//送る情報なし
type Props = {
  text: string;
  stamp: string;
};

export const ChatBubble = ({ text, stamp }: Props) => {
  const [flag, setFlag] = useState<string>(stamp);
  return (
    <>
      <Card>
        {flag === "0" && <Text>{text}</Text>}
        {flag !== "0" && <Image src={stamp} boxSize="100px" />}
      </Card>
    </>
  );
};
