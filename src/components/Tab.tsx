import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import { Chat } from "./Chat";
import { MemberView } from "./MemberView";
import { PlusButtonMember } from "./PlusButton";

type Props = {
  memberList: [number, string, string, string][];
};

export const Tab1 = ({ memberList }: Props) => {
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
              <MemberView memberList={memberList} />
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
