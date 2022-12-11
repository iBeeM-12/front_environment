import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Portal,
} from "@chakra-ui/react";

//グループ退会ボタンのコンポーネント
//?ボタンをグループごとに対応させる方法

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
              {/* ボタンを押すと、押した人のユーザーIDと、グループの番号が返される */}
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
