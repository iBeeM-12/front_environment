import { Box, VStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { GroupInfo0 } from "../data/dummyData";
import { HStack, Text } from "@chakra-ui/react";
import { ReturnButton } from "./ReturnButton";
import { RemakeButton } from "./RemakeBottun";
import { useEffect, useState } from "react";
import axios from "axios";

//グループ画面
type Props = { id: string };
export const GroupTop = ({ id }: Props) => {
  const [grpid, setGrpid] = useState<[number, string | number, string]>([
    0,
    "dummy",
    "dummy2",
  ]);

  useEffect(() => {
    const url = "http://localhost:8000/home/group/detail?group_id=" + id;
    // const url_icon = "http://localhost:8000/home/user/icon/";

    axios
      .get(url)
      .then((res) => {
        // 本当は型判定とかしたほうがよいが…
        // 詳しくは zod とか調べてみるとよいかも！？
        setGrpid(res.data[0]);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
  }, [id]);

  return (
    <>
      {/* FIXME: スタイルをピクセルで指定しているためもう少しいい感じにする */}
      <HStack h={"150px"} key={grpid[0]}>
        <VStack>
          <Box h={"10px"}></Box>
          <Box w={"150px"} h={"150px"}>
            <Image src={grpid[2]} alt="name1" />
          </Box>
        </VStack>
        <Box>
          <VStack>
            <Box h="20px"></Box>
            <HStack>
              <Box w="125px"></Box>
              <RemakeButton />
              <ReturnButton />
            </HStack>
            <Box h={"30px"} />
            <Text fontSize="3xl">{grpid[1]}</Text>
            <Box h={"30px"} />
          </VStack>
        </Box>
      </HStack>
    </>
  );
};
