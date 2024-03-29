import { useDispatch, useSelector } from "react-redux"
import { AddOutlined } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { startNewNote } from "../../store/journal/thunks"
import { JournalLayout } from "../Layout/JournalLayout"
import { NoteView } from "../views/NoteView"
import { NothingSelectedView } from "../views/NothingSelectedView"

export const JournalPage = () => {

  const dispatch = useDispatch()
  const { isSaving, active } = useSelector( state => state.journal)

  const onClickNewNote = () => {
    dispatch( startNewNote() )
  }
  return (
    <JournalLayout>
      { !!active ? <NoteView />
        : <NothingSelectedView />
       }
      {/* <NothingSelectedView /> */}
      {/* <NoteView /> */}

      <IconButton
        size='large'
        sx={{ 
          color:'white', 
          backgroundColor:'error.main',
          ':hover':{ backgroundColor:'error.main', opacity:0.9},
          position:'fixed',
          right:50,
          bottom:50
        }}
        onClick={onClickNewNote}
        disabled={isSaving}
      >
        <AddOutlined sx={{ fontSize:30 }}/>
      </IconButton>
    </JournalLayout>
  )
}
