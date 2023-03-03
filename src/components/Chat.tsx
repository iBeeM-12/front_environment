//チャット用画面

import { Box, VStack } from "@chakra-ui/react";
import { ChatTab } from "./ChatTab";
import { useEffect, useState } from "react";
import axios from "axios";
import { ChatDetail } from "./ChatDetail";
import { useParams } from "react-router-dom";

export const Chat = () => {
  const userId = 1;
  const { id } = useParams();
  const [record, setRecord] =
    useState<[number, string, string, string, string, string][]>();
  const [stamp, setStamp] = useState<[number, string][]>();
  const [phrase, setPhrase] = useState<[number, string][]>();
  const [flag, setFlag] = useState<boolean>(true);

  useEffect(() => {
    const url = `http://localhost:8000/home/chat/get_chat_record?user_id=${userId}&group_id=${id}`;
    axios
      .get(url)
      .then((res) => {
        setRecord(res.data);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  }, [flag]);

  useEffect(() => {
    const url2 = `http://localhost:8000/home/chat/get_sticker`;
    const url3 = `http://localhost:8000/home/chat/get_phrase`;

    axios
      .get(url2)
      .then((res) => {
        setStamp(res.data);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });

    axios
      .get(url3)
      .then((res) => {
        setPhrase(res.data);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  }, []);

  return (
    <>
      <Box bg="E5D1C8" w="100%" p={2}>
        <VStack bg="#FFFFFF" spacing={1}>
          {record && <ChatDetail chatList={record} />}
          {stamp && phrase && (
            <ChatTab
              stampList={stamp}
              phraseList={phrase}
              groupId={Number(id)}
              userId={userId}
              flag={flag}
              setFlag={setFlag}
            />
          )}
          <Box bg="#FFFFFF" w="100%" h="5px" p={4}></Box>
        </VStack>
      </Box>
    </>
  );
};
