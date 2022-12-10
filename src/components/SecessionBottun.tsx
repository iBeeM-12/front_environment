import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  Portal,
} from "@chakra-ui/react";

//グループ退会ボタンのコンポーネント

export const SecessionButton = () => {
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Button>退会</Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader fontSize="md">本当に退会しますか？</PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <Button colorScheme="red">退会</Button>
            </PopoverBody>
            <PopoverFooter fontSize="md">
              一度退会すると、メンバーに紹介されないと戻れません。また、メンバー人数が0人になるとグループは削除されます。
            </PopoverFooter>
          </PopoverContent>
        </Portal>
      </Popover>
    </>
  );
};
