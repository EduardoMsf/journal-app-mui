import { useSelector } from 'react-redux'
import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"


export const NoteView = () => {

  const { active } = useSelector(state => state.journal)
  const { title, body, date} = active
  
  return (
    <Grid
      className='animate__animated animate__fadeIn animate__faster'
      container
      direction='row'
      justifyContent='space-between'
      sx={{ mb:1 }}
      alignItems='center'
    >
      <Grid item>
        <Typography fontSize={39} fontWeight='light'>{date}</Typography>
      </Grid>
      <Grid item >
        <Button color='primary' sx={{ padding:2 }}>
          <SaveOutlined sx={{ fontSize:30, mr:1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField 
          type='text'
          variant='filled'
          fullWidth
          placeholder="Note..."
          label={title}
          sx={{ border: 'none', mb:1 }}
        />
        <TextField 
          type='text'
          variant='filled'
          fullWidth
          multiline
          placeholder={body}
          minRows={ 5 }
        />
      </Grid>

      {/*Imagenes*/}
      <ImageGallery />
    </Grid>
  )
}
