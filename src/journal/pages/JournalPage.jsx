import { useDispatch } from "react-redux"
import { AddOutlined } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { startNewNote } from "../../store/journal/thunks"
import { JournalLayout } from "../Layout/JournalLayout"
import { NoteView } from "../views/NoteView"
import { NothingSelectedView } from "../views/NothingSelectedView"

export const JournalPage = () => {

  const dispatch = useDispatch()

  const onClickNewNote = () => {
    dispatch( startNewNote() )
  }
  return (
    <JournalLayout>
      {/* <Typography>Texto text mucho texto</Typography> */}
      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
        sze='large'
        sx={{ 
          color:'white', 
          backgroundColor:'error.main',
          ':hover':{ backgroundColor:'error.main', opacity:0.9},
          position:'fixed',
          right:50,
          bottom:50
        }}
        onClick={onClickNewNote}
      >
        <AddOutlined sx={{ fontSize:30 }}/>
      </IconButton>
    </JournalLayout>
  )
}
