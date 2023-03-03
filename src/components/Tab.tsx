import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import { Cannedver } from "./Cannedver";
import { Chat } from "./Chat";
import { MemberView } from "./MemberView";
import { AddMamber } from "./pages/AddMember";
import { PlusButtonMember } from "./PlusButton";
import { StampSelect } from "./StampSelect";

type Props = {
  memberList: [number, string, string, string][];
  isAddMember: boolean;
  setIsAddMember: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Tab1 = ({ memberList, isAddMember, setIsAddMember }: Props) => {
  // 変数名要検討, この flag で描画する内容を変える

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
          <TabPanel>
            <Box bg={"#E5D1C8"}>
              {isAddMember ? (
                <>
                  <AddMamber setIsAddMember={setIsAddMember} />
                </>
              ) : (
                <>
                  <PlusButtonMember
                    text={"メンバーの追加"}
                    setState={setIsAddMember}
                  />
                  <MemberView memberList={memberList} />
                </>
              )}
            </Box>
          </TabPanel>
          <TabPanel>
            <Box bg={"#E5D1C8"}>
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
            <StampSelect />
          </TabPanel>
          <TabPanel>
            <Cannedver />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};
