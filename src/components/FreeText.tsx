import { Input } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

type User = {
  id: number;
  userProfile: string;
};

export const FreeText = () => {
  // list{user_id:int, user_name:str, user_img:str, user_profile:str, icon:str, user_record:str, user_time:str, user_state_id:int}
  // const [text, setText] = useState<[number, string]>();

  const [text, setText] = useState<User>({
    id: -1,
    userProfile: "プロフィールを入力してね",
  });

  useEffect(() => {
    const url_freetext =
      "http://localhost:8000/home/user/get_user_detail?user_id=1";

    axios
      .get(url_freetext)
      .then((res) => {
        setText({ id: res.data[0], userProfile: res.data[3] });
      })
      .catch((err) => {
        console.error(err);
      });
  });

  return (
    <>
      <Input
        placeholder={`${text?.userProfile}`}
        bg="#FFFFFF"
        size="sm"
        w="370px"
        borderRadius="md"
      />
    </>
  );
};
