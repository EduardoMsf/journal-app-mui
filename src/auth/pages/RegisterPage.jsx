import { Button, Grid, TextField, Link, Typography } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{pt:2}}>
            <TextField 
              label="Nombre" 
              type="text"
              placeholder="Nombre completo"
              fullWidth
            >
            </TextField>
          </Grid>
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
          <Grid item xs={12} sx={{mt:2}}>
            <TextField 
              label="Confirmar contraseña" 
              type="password"
              placeholder="Confirmar contraseña"
              fullWidth
            >
            </TextField>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt:1}}>
            <Grid item xs={12} >
              <Button variant='contained' fullWidth>Crear cuenta</Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="end"
          >
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="end"
          >
            <Typography sx={{mr:1}}>¿Ya tienes cuenta?</Typography>
            <Link 
              component={ RouterLink } 
              color="inherit" 
              to="/auth/login" 
              sx={{textDecoration:"none"}}
            >
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
