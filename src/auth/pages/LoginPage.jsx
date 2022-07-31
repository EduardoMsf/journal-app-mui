import { Grid, TextField, Typography } from '@mui/material'
import React from 'react'

export const LoginPage = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor:"primary.main", padding: 4}}
    >
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{ backgroundColor:"white", padding:3, borderRadius:2}}
      >
        <Typography variant="h5" sx={{mb:5}}>Login</Typography>

        <form>
          <Grid container>
            <Grid item xs={12} sx={{pt:2}}>
              <TextField 
                label="Correo" 
                type="email"
                placeholder="correogoogle@google.com"
                fullWidth
              >
              </TextField>
            </Grid>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
                label="Contraseña" 
                type="password"
                placeholder="Contraseña"
                fullWidth
              >
              </TextField>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  )
}
