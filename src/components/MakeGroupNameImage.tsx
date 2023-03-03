import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { VSpacer } from "./molecules/Spacer";
import axios from "axios";
import { url } from "inspector";
import { useNavigate } from "react-router-dom";

export const MakeGroupNI = () => {
  const navigate = useNavigate();
  const [newgroup, setNewGroup] = useState<[string, string]>([
    "グループ名",
    "https://cdn.discordapp.com/attachments/1038862997998817350/1080867194583404594/Shaminer.png",
  ]);

  const [addMember, setAddMember] = useState<[number, number]>([1, 1]);
  //const uesr_id ##(決められたやつを取ってくる)→常に使える

  const handleClick = (group_name: string, group_img: string) => {
    // list{group_name:str, group_img:str}
    const url_newgroup = `http://localhost:8000/home/group/create_group?group_name=${group_name}&group_img=${group_img}`;

    axios
      .get(url_newgroup)
      .then((res) => {
        handleClick2(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleClick2 = (group_id: string) => {
    //(POST)list{user_id:int, group_id:int}
    const id = 1;
    const url_addMember = `http://localhost:8000/home/group/add_member?user_id=${id}&group_id=${group_id}`;
    //(したいこと)　user_id=${id}→user_id=${user_id}(グローバル変数)

    axios
      .get(url_addMember)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <Center>
        <VStack>
          <HStack spacing={1}>
            <Text fontSize="lx" whiteSpace={"nowrap"}>
              グループ名：
            </Text>
            <Input
              variant={"outline"}
              size="sm"
              bg="#FFFFFF"
              placeholder={`${newgroup[0]}`}
              onChange={(event) => {
                const _: [string, string] = [...newgroup];
                _[0] = event.target.value;
                setNewGroup(_);
                console.log(newgroup[0]);
              }}
              //TODO onChangeにする
            />
          </HStack>
          <VSpacer size={12} />

          <Text fontSize="xl">グループアイコンを設定</Text>
          <Box w={"150px"} h={"150px"}>
            <Image src={`${newgroup[1]}`} alt="name1" />
          </Box>
          <Button
            colorScheme="orange"
            size="xs"
            onClick={() => {
              handleClick(newgroup[0], newgroup[1]);
            }}
          >
            作成
          </Button>
        </VStack>
      </Center>
    </>
  );
};
