import { GroupTop } from "../GroupTop";
import { Box, VStack } from "@chakra-ui/react";
import { Tab1 } from "../Tab";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
//グループ画面の枠

export const Group = () => {
  const { id } = useParams();
  const [groupName, setGroupName] = useState<string>("");
  const [groupImage, setGroupImage] = useState<string>("");
  const [memberList, setMemberList] = useState<
    {
      memberId: number;
      memberImage: string;
      memberName: string;
      statusIcon: string;
    }[]
  >();

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
  });

  return (
    <>
      <VStack bg="#F6C745" spacing={1}>
        {groupName && groupImage && (
          <GroupTop groupName={groupName} groupImage={groupImage} />
        )}
        <Box h={"10px"}></Box>
        {memberList && <Tab1 memberList={memberList} />}
      </VStack>
    </>
  );
};
