import { GroupTop } from "../GroupTop";
import { Box, Container } from "@chakra-ui/react";
import { Tab1 } from "../Tab";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { VSpacer } from "../molecules/Spacer";
//グループ画面の枠

export const Group = () => {
  const { id } = useParams();
  const [groupName, setGroupName] = useState<string>("");
  const [groupImage, setGroupImage] = useState<string>("");
  const [memberList, setMemberList] =
    useState<[number, string, string, string][]>();

  const [isAddMember, setIsAddMember] = useState<boolean>(false);

  useEffect(() => {
    const url = `http://localhost:8000/home/group/detail?group_id=${id}`;
    const url2 = `http://localhost:8000/home/group/member?group_id=${id}`;

    axios
      .get(url)
      .then((res) => {
        setGroupName(res.data[1]);
        setGroupImage(res.data[2]);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });

    axios
      .get(url2)
      .then((res) => {
        setMemberList(res.data);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  }, [isAddMember]);

  return (
    <>
      <Container maxW="container.md">
        <Box bg="#F6C745">
          {groupName && groupImage && (
            <GroupTop groupName={groupName} groupImage={groupImage} />
          )}
          <VSpacer size={12} />
          {memberList && (
            <Tab1
              memberList={memberList}
              isAddMember={isAddMember}
              setIsAddMember={setIsAddMember}
            />
          )}
        </Box>
      </Container>
    </>
  );
};
