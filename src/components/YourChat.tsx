import { HStack } from "@chakra-ui/react";
import { ChatBubble } from "./Chatbubble";
import { ExceptMyselfChat } from "./ExceptMyselfChat";

type Props = {
  id: number;
  icon: string;
  name: string;
  text: string;
  stamp: string;
};

export const YourChat = ({ id, icon, name, text, stamp }: Props) => {
  return (
    <>
      <HStack>
        <ExceptMyselfChat id={id} icon={icon} name={name} />
        <ChatBubble text={text} stamp={stamp} />
      </HStack>
    </>
  );
};
