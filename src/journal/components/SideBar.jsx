import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useSelector } from 'react-redux'

export const SideBar = ({ drawerWidth }) => {
  const {displayName} = useSelector(state => state.auth)
  const { notes } = useSelector( state => state.journal)
  console.log(notes)
  return (
    <Box
      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }}}
    >
      <Drawer
        variant='permanent'//temporary
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
      >
        <Toolbar>
          <Typography
            variant='h6' noWrap component='div'
          >
            { displayName }
          </Typography>
        </Toolbar>
        <Divider />

        <List>
          {
            notes.map( note =>(
              <ListItem key={note.id} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <Grid container sx={{display:'block'}}>
                    <ListItemText primary={note.title} />
                    <ListItemText secondary={note.id}/>
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </Drawer>
    </Box>
  )
}
