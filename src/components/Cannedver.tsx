import { Button, Input, VStack } from "@chakra-ui/react";
import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  phraseList: [number, string][];
  userId: number;
  groupId: number;
  flag: boolean;
  setFlag: Dispatch<SetStateAction<boolean>>;
};

export const Cannedver = ({
  phraseList,
  userId,
  groupId,
  flag,
  setFlag,
}: Props) => {
  const [text, setText] = useState<string>("");
  const [phrase, setPhraseId] = useState<number>();

  const PhraseDone = () => {
    const url = `http://localhost:8000/home/chat/send_message?user_id=${userId}&group_id=${groupId}&phrase_id=${phrase}&text=${text}`;
    axios
      .get(url)
      .then((res) => {
        setFlag(!flag);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  };

  return (
    <>
      <VStack spacing={3}>
        <Input
          value={text}
          placeholder={"文字を入力"}
          size="lg"
          onChange={(event) => setText(event.target.value)}
        />
        {phraseList.map((canned) => {
          return (
            <>
              <Button
                fontSize="xs"
                colorScheme="orange"
                variant="solid"
                minW={40}
                key={canned[0]}
                color="whitegray"
                onClick={() => setPhraseId(canned[0])}
              >
                {canned[1]}
              </Button>
            </>
          );
        })}
        <Button onClick={PhraseDone}>定型文の送信</Button>
      </VStack>
    </>
  );
};
