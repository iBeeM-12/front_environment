import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import { MemberView } from "./MemberView";
import { PlusButtonMember } from "./PlusButton";

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
          {/*チャット画面については後々 */}
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
              <p>チャット</p>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};
