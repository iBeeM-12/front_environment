import { ButtonOfCreateGroup } from "./ButtonOfCreateGroup";
import { InputGroupName } from "./InputGroupName";
import { ReturnButton } from "./ReturnButton";
import { UserSearch } from "./UserIDSearch";

export const CreateGroup = () => {
  return (
    <>
      <ReturnButton />
      <InputGroupName />
      <UserSearch />
      <ButtonOfCreateGroup />
    </>
  );
};
