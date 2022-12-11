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
import axios from "axios";

//グループ退会ボタンのコンポーネント
//?ボタンをグループごとに対応させる方法
type Props = {
  grpid: string | number;
};
export const SecessionButton = ({ grpid }: Props) => {
  const handletaikai = () => {
    const url = `http://localhost:8000/home/group_delete?user_id=1&group_id=${grpid}`;
    axios
      .get(url)
      .then((res) => {
        // 本当は型判定とかしたほうがよいが…
        // 詳しくは zod とか調べてみるとよいかも！？
        // setName(res.data);
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };
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
              <Button colorScheme="red" onClick={handletaikai}>
                退会
              </Button>
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
