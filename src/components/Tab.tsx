import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import exp from "constants";
import { Chat } from "./Chat";
import { MemberView } from "./MemberView";
import { PlusButtonMember } from "./PlusButton";
import { Cannedver, Stampver } from "./StampSelect";

export const Tab1 = () => {
  return (
    <>
      <Tabs variant="enclosed">
        <TabList>
          <Tab
            bg="#C8C8C8"
            color="gray"
            _selected={{ color: "black", bg: "#E5D1C8" }}
          >
            メンバー
          </Tab>
          <Tab
            bg="#C8C8C8"
            color="gray"
            _selected={{ color: "black", bg: "#E5D1C8" }}
          >
            チャット
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel p="0px">
            <Box bg={"#E5D1C8"}>
              <PlusButtonMember text={"メンバーの追加"} />
              <MemberView />
            </Box>
          </TabPanel>
          <TabPanel p="0px">
            <Box minW="390px" minH="5000px" bg={"#E5D1C8"}>
              <Chat />
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export const Tab2 = () => {
  return (
    <>
      <Tabs variant="enclosed" bg="#D9D9D9">
        <TabList>
          <Tab>ネコスタンプ</Tab>
          <Tab>定型文</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Stampver />
          </TabPanel>
          <TabPanel>
            <Cannedver />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};
