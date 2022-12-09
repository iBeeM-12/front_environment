import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import { MemberView } from "./MemberView";
import { PlusButton } from "./PlusButton";

export const Tab1 = () => {
  return (
    <>
      <Tabs variant="enclosed">
        <TabList>
          <Tab _selected={{ color: "black", bg: "#E5D1C8" }}>メンバー</Tab>
          <Tab _selected={{ color: "black", bg: "#E5D1C8" }}> チャット</Tab>
          {/*チャット画面については後々 */}
        </TabList>
        <TabPanels>
          <TabPanel p="0px">
            <Box bg={"#E5D1C8"}>
              <PlusButton text={"メンバーの追加"} />
              <MemberView />
            </Box>
          </TabPanel>
          <TabPanel>
            <p>Chat</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};
