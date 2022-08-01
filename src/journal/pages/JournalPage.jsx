import { AddOutlined } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../Layout/JournalLayout"
import { NoteView } from "../views/NoteView"
import { NothingSelectedView } from "../views/NothingSelectedView"

export const JournalPage = () => {
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
      >
        <AddOutlined sx={{ fontSize:30 }}/>
      </IconButton>
    </JournalLayout>
  )
}
