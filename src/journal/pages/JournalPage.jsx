import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { startNewNote } from "../../store/journal/thunks";

export const JournalPage = () => {
  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        veniam nam corrupti vel neque quasi unde ab quibusdam, porro ad
        veritatis quod? Ad, deserunt voluptate. Ad nisi debitis odio quo?
      </Typography> */}
      <NothingSelectedView />
      {/*   <NoteView /> */}
      <IconButton
        onClick={onClickNewNote}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
