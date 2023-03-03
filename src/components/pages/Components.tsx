import { Card, CardBody, Container, Heading, VStack } from "@chakra-ui/react";
import { VSpacer } from "../molecules/Spacer";
import { Chat } from "../Chat";
import { ButtonOfCreateGroup } from "../ButtonOfCreateGroup";
import { ChatBubble } from "../Chatbubble";
import { ChatLeftIcon } from "../ChatLeftIcon";
import { Chatname } from "../Chatname";
import { FreeText } from "../FreeText";
import { GroupIconSet } from "../GroupIconSet";
import { GroupTop } from "../GroupTop";
import { HistoryIconText } from "../HistoryIconText";
import { HomeGroup } from "../HomeGroup";
import { HomeTop } from "../HomeTop";
import { InputGroupName } from "../InputGroupName";
import { MakeNewGroup } from "../MakeNewGroup";
import { MemberView } from "../MemberView";
import { MyChat } from "../MyChat";
import { ReadOrNot } from "../ReadOrNot";
import { RemakeButton } from "../RemakeBottun";
import { ReturnButton } from "../ReturnButton";
import { SearchIcon } from "@chakra-ui/icons";
import { SecessionButton } from "../SecessionBottun";
import { StampSelect } from "../StampSelect";
import { UserIDSearch } from "../UserIDSearch";
import { YourChat } from "../YourChat";
import { PlusButton } from "../SearchIcon";
import { Tab1 } from "../Tab";
import { Cannedver } from "../Cannedver";
import { MakeGroupNI } from "../MakeGroupNameImage";
import { useState } from "react";
import { ExceptMyselfChat } from "../ExceptMyselfChat";

export const Components = () => {
  const memberList: [number, string, string, string][] = [
    [0, "image", "KJ", "2"],
    [1, "image2", "KJ2", "3"],
  ];
  const GroupInfo0: [number, string, string] = [
    1,
    "https://www.catcafemeow.com/wp/wp-content/uploads/2021/11/%E3%81%B2%E3%81%8B%E3%82%8B%E3%81%8F%E3%82%93_%E7%94%B7%E3%81%AE%E5%AD%90-2048x2048.jpeg",
    "例外太郎",
  ];
  const [isTemp, setIsTemp] = useState<boolean>(false);
  const stampList: [number, string][] = [
    [
      1,
      "https://cdn.discordapp.com/attachments/1038862997998817350/1051063653916495882/talk_neko.PNG",
    ],
    [
      2,
      "https://cdn.discordapp.com/attachments/1038862997998817350/1051063654235246632/walk_neko.PNG",
    ],
    [
      3,
      "https://cdn.discordapp.com/attachments/1038862997998817350/1051063654549827634/want_to_join_neko.PNG",
    ],
    [
      4,
      "https://cdn.discordapp.com/attachments/1038862997998817350/1051063654864408586/eat_neko.PNG",
    ],
  ];

  return (
    <>
      <VStack>
        <Container maxW="container.lg">
          <VSpacer size={4} />
          <Heading size="lg" textAlign="center">
            Components Mock Storybook
          </Heading>

          {/* ButtonOfCreateGroup */}
          <VSpacer size={8} />
          <Heading size="lg">ButtonOfCreateGroup</Heading>
          <Card variant="filled">
            <CardBody>
              <ButtonOfCreateGroup />
            </CardBody>
          </Card>

          {/* Cannedver */}
          <VSpacer size={8} />
          <Heading size="lg">Cannedver</Heading>
          <Card variant="filled">
            <CardBody>
              <Cannedver />
            </CardBody>
          </Card>

          {/* Chat */}
          <VSpacer size={8} />
          <Heading size="lg">Chat</Heading>
          <Card variant="filled">
            <CardBody>
              <Chat />
            </CardBody>
          </Card>

          {/* Chatbubble */}
          <VSpacer size={8} />
          <Heading size="lg">Chatbubble</Heading>
          <Card variant="filled">
            <CardBody>
              <ChatBubble text={"aaaa"} stamp={"0"} />
            </CardBody>
          </Card>

          {/* ChatLeftIcon */}
          <VSpacer size={8} />
          <Heading size="lg">ChatLeftIcon</Heading>
          <Card variant="filled">
            <CardBody>
              <ChatLeftIcon />
            </CardBody>
          </Card>

          {/* ExceptMyselfChat */}
          <VSpacer size={8} />
          <Heading size="lg">ExceptMyselfChat</Heading>
          <Card variant="filled">
            <CardBody>
              <ExceptMyselfChat
                id={GroupInfo0[0]}
                icon={GroupInfo0[1]}
                name={GroupInfo0[2]}
              />
            </CardBody>
          </Card>

          {/* Chatname */}
          <VSpacer size={8} />
          <Heading size="lg">Chatname</Heading>
          <Card variant="filled">
            <CardBody>
              <Chatname />
            </CardBody>
          </Card>

          {/* FreeText */}
          <VSpacer size={8} />
          <Heading size="lg">FreeText</Heading>
          <Card variant="filled">
            <CardBody>
              <FreeText />
            </CardBody>
          </Card>

          {/* GroupIconSet */}
          <VSpacer size={8} />
          <Heading size="lg">GroupIconSet</Heading>
          <Card variant="filled">
            <CardBody>
              <GroupIconSet />
            </CardBody>
          </Card>

          {/* GroupTop*/}
          <VSpacer size={8} />
          <Heading size="lg">GroupTop</Heading>
          <Card variant="filled">
            <CardBody>
              <GroupTop
                groupName="こんちわー"
                groupImage="https://media.discordapp.net/attachments/1038862997998817350/1080442085070602342/pubg.png"
              />
            </CardBody>
          </Card>

          {/* HistoryIconText */}
          <VSpacer size={8} />
          <Heading size="lg">HistoryIconText</Heading>
          <Card variant="filled">
            <CardBody>
              <HistoryIconText />
            </CardBody>
          </Card>

          {/* HomeGroup */}
          <VSpacer size={8} />
          <Heading size="lg">HomeGroup</Heading>
          <Card variant="filled">
            <CardBody>
              <HomeGroup />
            </CardBody>
          </Card>

          {/* HomeTop */}
          <VSpacer size={8} />
          <Heading size="lg">HomeTop</Heading>
          <Card variant="filled">
            <CardBody>
              <HomeTop />
            </CardBody>
          </Card>

          {/* InputGroupName */}
          <VSpacer size={8} />
          <Heading size="lg">InputGroupName</Heading>
          <Card variant="filled">
            <CardBody>
              <InputGroupName />
            </CardBody>
          </Card>

          {/* MakeNewGroup */}
          <VSpacer size={8} />
          <Heading size="lg">MakeNewGroup</Heading>
          <Card variant="filled">
            <CardBody>
              <MakeNewGroup />
            </CardBody>
          </Card>

          {/* MemberView */}
          <VSpacer size={8} />
          <Heading size="lg">MemberView</Heading>
          <Card variant="filled">
            <CardBody>
              <MemberView memberList={memberList} />
            </CardBody>
          </Card>

          {/* MyChat */}
          <VSpacer size={8} />
          <Heading size="lg">MyChat</Heading>
          <Card variant="filled">
            <CardBody>
              <MyChat text={"aaa"} stamp={"aaa"} />
            </CardBody>
          </Card>

          {/* PlusButton */}
          <VSpacer size={8} />
          <Heading size="lg">PlusButton</Heading>
          <Card variant="filled">
            <CardBody>
              <PlusButton text={"####"} />
            </CardBody>
          </Card>

          {/* ReadOrNot */}
          <VSpacer size={8} />
          <Heading size="lg">ReadOrNot</Heading>
          <Card variant="filled">
            <CardBody>
              <ReadOrNot />
            </CardBody>
          </Card>

          {/* RemakeButton */}
          <VSpacer size={8} />
          <Heading size="lg">RemakeButton</Heading>
          <Card variant="filled">
            <CardBody>
              <RemakeButton />
            </CardBody>
          </Card>

          {/* ReturnButton */}
          <VSpacer size={8} />
          <Heading size="lg">ReturnButton</Heading>
          <Card variant="filled">
            <CardBody>
              <ReturnButton />
            </CardBody>
          </Card>

          {/* SearchIcon */}
          <VSpacer size={8} />
          <Heading size="lg">SearchIcon</Heading>
          <Card variant="filled">
            <CardBody>
              <SearchIcon />
            </CardBody>
          </Card>

          {/* SecessionButton */}
          <VSpacer size={8} />
          <Heading size="lg">SecessionButton</Heading>
          <Card variant="filled">
            <CardBody>
              <SecessionButton grpid={"####"} />
            </CardBody>
          </Card>

          {/* StampSelect */}
          <VSpacer size={8} />
          <Heading size="lg">StampSelect</Heading>
          <Card variant="filled">
            <CardBody>
              <StampSelect stampList={stampList} groupId={2} userId={1} />
            </CardBody>
          </Card>

          {/* Tab */}
          <VSpacer size={8} />
          <Heading size="lg">Tab</Heading>
          <Card variant="filled">
            <CardBody>
              #Tab1
              <Tab1 memberList={memberList} />
            </CardBody>
          </Card>

          {/* UserIDSearch */}
          <VSpacer size={8} />
          <Heading size="lg">UserIDSearch</Heading>
          <Card variant="filled">
            <CardBody>
              <UserIDSearch />
            </CardBody>
          </Card>

          {/* YourChat */}
          <VSpacer size={8} />
          <Heading size="lg">YourChat</Heading>
          <Card variant="filled">
            <CardBody>
              <YourChat
                id={GroupInfo0[0]}
                icon={GroupInfo0[1]}
                name={GroupInfo0[2]}
                text={"aaa"}
                stamp={"bbb"}
              />
            </CardBody>
          </Card>

          {/* MakeGroupNI (InputGroupNameとGroupIconSetを一つにしたやつです。)*/}
          <VSpacer size={8} />
          <Heading size="lg">MakeGroupNameImage</Heading>
          <Card variant="filled">
            <CardBody>
              <MakeGroupNI />
            </CardBody>
          </Card>

          {/* MakeGroupNI (InputGroupNameとGroupIconSetを一つにしたやつです。)*/}
          <VSpacer size={8} />
          <Heading size="lg">MakeGroupNameImage</Heading>
          <Card variant="filled">
            <CardBody>
              <MakeGroupNI />
            </CardBody>
          </Card>

          {/* 追加のテンプレート：消さないでね！！ */}

          {/* --------------------*/}
          {/* メモ */}
          {/* ###/###/### の部分には components 以降のパスを記入する */}
          {/* コンポーネントの配置順番はファイルの位置順が嬉しい (性善説) */}

          {/* コード */}
          {/* ###/###/### */}
          {/* <VSpacer size={8} />
          <Heading size="lg">###/###/###</Heading>
          <Card variant="filled">
            <CardBody>
              // ここに追加するコンポーネントを書く
            </CardBody>
          </Card> */}
        </Container>
      </VStack>
    </>
  );
};
