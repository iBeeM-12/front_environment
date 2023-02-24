import { Highlight } from "@chakra-ui/react";

export const ReadOrNot = () => {
  return (
    <>
      <Highlight
        query="未読"
        styles={{ px: "1", py: "1", rounded: "full", bg: "orange.100" }}
      >
        未読
      </Highlight>
    </>
  );
};
