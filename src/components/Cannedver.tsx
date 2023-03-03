import { Box, Button, HStack } from "@chakra-ui/react";
import { CannedList } from "../data/dummyData";

export const Cannedver = () => {
  return (
    <>
      <HStack spacing={3}>
        {CannedList.map((canned) => {
          return (
            <>
              <Button
                fontSize="xs"
                colorScheme="orange"
                variant="solid"
                minW={40}
                key={canned.num}
                color="whitegray"
              >
                {/* バックエンドに渡す値 */}
                {canned.str}
              </Button>
            </>
          );
        })}
      </HStack>
    </>
  );
};
