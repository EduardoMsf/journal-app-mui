import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"

export const NoteView = () => {
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
        <Typography fontSize={39} fontWeight='light'>1 de Agosto de 2022</Typography>
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
          label='titulo'
          sx={{ border: 'none', mb:1 }}
        />
        <TextField 
          type='text'
          variant='filled'
          fullWidth
          multiline
          placeholder="What's up?"
          minRows={ 5 }
        />
      </Grid>

      {/*Imagenes*/}
      <ImageGallery />
    </Grid>
  )
}
