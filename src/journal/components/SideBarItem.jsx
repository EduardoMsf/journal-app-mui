import { useDispatch } from 'react-redux'
import { TurnedIn, TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useMemo } from 'react'
import { setActiveNote } from '../../store/journal'

export const SideBarItem = ({ title = '', body, id, date, imageUrls = [] }) => {

  const dispatch = useDispatch()

  const onClickNote = () => {
    dispatch(setActiveNote({title, body, id, date, imageUrls}))
  }

  const newTitle = useMemo(() => { 
    return title.length > 15 
      ? title.substring(0,15) + '...'
      : title
  },[title])

  const newBody = useMemo(() => { 
    return body.length > 17 
      ? body.substring(0,17) + '...'
      : body
  },[body])
  
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onClickNote}>
        <ListItemIcon>
          <TurnedIn color='error' />
        </ListItemIcon>
        <Grid container sx={{display:'block'}}>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={newBody}/>
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}
