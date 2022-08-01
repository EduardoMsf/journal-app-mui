import { Typography } from "@mui/material"
import { JournalLayout } from "../Layout/JournalLayout"
import { NothingSelectedView } from "../views/NothingSelectedView"

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Texto text mucho texto</Typography> */}
      <NothingSelectedView />
    </JournalLayout>
  )
}
