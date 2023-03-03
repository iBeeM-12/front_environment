import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import { StampSelect } from "./StampSelect";
import { Cannedver } from "./Cannedver";
import { Dispatch, SetStateAction } from "react";

type Props = {
  stampList: [number, string][];
  phraseList: [number, string][];
  userId: number;
  groupId: number;
  flag: boolean;
  setFlag: Dispatch<SetStateAction<boolean>>;
};

export const ChatTab = ({
  stampList,
  phraseList,
  userId,
  groupId,
  flag,
  setFlag,
}: Props) => {
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
              flag={flag}
              setFlag={setFlag}
            />
          </TabPanel>
          <TabPanel>
            <Cannedver
              phraseList={phraseList}
              groupId={groupId}
              userId={userId}
              flag={flag}
              setFlag={setFlag}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};
