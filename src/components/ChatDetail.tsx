import { MyChat } from "./MyChat";
import { YourChat } from "./YourChat";

type Props = {
  chatList: [number, string, string, string, string, string][];
};

//ホーム画面のグループの状態一覧
export const ChatDetail = ({ chatList }: Props) => {
  return (
    <>
      {chatList.map((chat) => {
        return (
          <>
            {chat[0] !== 1 && (
              <YourChat
                id={chat[0]}
                name={chat[1]}
                icon={chat[2]}
                text={chat[3]}
                stamp={chat[4]}
              />
            )}
            {chat[0] === 1 && <MyChat text={chat[3]} stamp={chat[4]} />}
          </>
        );
      })}
    </>
  );
};
