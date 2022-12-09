import React from "react";
import {
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
} from "@chakra-ui/react";

export const AddNewMember = () => {
  return (
    // Click the text to edit
    <Editable defaultValue="友達のユーザーID">
      <EditablePreview />
      <EditableInput />
    </Editable>
  );
};
