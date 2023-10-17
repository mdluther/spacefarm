import {
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
  useEditableControls,
  Flex,
  ButtonGroup,
  Input,
  IconButton,
} from "@chakra-ui/react";

import {
  AddIcon,
  LockIcon,
  UnlockIcon,
  CheckIcon,
  CloseIcon,
  EditIcon,
} from "@chakra-ui/icons";

import { useState } from "react";

const PlantRow = (props) => {
  const [isLocked, setLocked] = useState(false);

  const EditableControls = () => {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
        <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center" direction="row">
        <IconButton size="sm" icon={<EditIcon />} {...getEditButtonProps()} />
      </Flex>
    );
  };

  return (
    <>
      <IconButton
        aria-label="Lock Status"
        onClick={() => setLocked(!isLocked)}
        icon={isLocked ? <LockIcon /> : <UnlockIcon />}
      />

      {props.defaultValues.map((defaultValue) => (
        <Editable
          defaultValue={defaultValue}
          display="flex"
          flexDirection="row"
          textAlign="center"
          fontSize="1xl"
          isPreviewFocusable={false}
        >
          <EditablePreview />
          <Input as={EditableInput} />
          <EditableControls />
        </Editable>
      ))}
    </>
  );
};

export default PlantRow;
