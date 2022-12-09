import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Home } from "./Home";
import { Group } from "./Group";

export const Tab1 = () => {
  return (
    <>
      <Tabs variant="soft-rounded" colorScheme="#F6C745">
        <TabList>
          <Tab>ホーム</Tab> {/*グループ？ホーム？figmaで言うpage1の左上 */}
          <Tab>メンバー</Tab>
          <Tab>チャット</Tab>
          {/*チャット画面については後々 */}
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>
              <Home />
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              <Group />
            </p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};
