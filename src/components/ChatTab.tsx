import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import { StampSelect } from "./StampSelect";
import { Cannedver } from "./Cannedver";

type Props = {
  stampList: [number, string][];
  phraseList: [number, string][];
  userId: number;
  groupId: number;
};

export const ChatTab = ({ stampList, phraseList, userId, groupId }: Props) => {
  return (
    <>
      <Tabs variant="enclosed" bg="#D9D9D9">
        <TabList>
          <Tab>ネコスタンプ</Tab>
          <Tab>定型文</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <StampSelect
              stampList={stampList}
              groupId={groupId}
              userId={userId}
            />
          </TabPanel>
          <TabPanel>
            <Cannedver
              phraseList={phraseList}
              groupId={groupId}
              userId={userId}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};
