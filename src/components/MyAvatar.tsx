import { Avatar, Button, Portal, VStack } from "@chakra-ui/react";
import React from "react";
import { MemberInfo0, MemberInfo1, MemberList } from "../data/dummyData";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

export const MyAvatar = () => {
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Button size="xl" rounded={"full"}>
            <Avatar src={MemberInfo1[2]}></Avatar>
          </Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>今どんな気分？</PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              {MemberList.map((member) => {
                return (
                  <VStack>
                    <Button size="xl" rounded={"full"}>
                      {/* 状態表示の画像にする */}
                      <Avatar key={member.name} src={member.stat} />
                      {/* keyの内容：ステータスの名前 crcの内容：ステータスの表示 */}
                    </Button>
                    {/* 状態の名前にする */}
                    <p>uuuu</p>
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
