import { Button, Grid, TextField, Link, Typography } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from '../../hooks'
import { AuthLayout } from '../layout/AuthLayout'

const formData = {
  email: 'eduardo@samaniego.com',
  password: '123456',
  passwordConfirmed: '123456',
  displayName: 'Eduardo Samaniego'
}

const formValidations = {
  email: [(value) => value.includes('@'),'El correo debe tener una @'],
  password: [(value) => value.length >= 8,'El password debe tener más de 6 letras'],
  displayName: [(value) => value.length >= 1,'El nombre es obligatorio']
}

export const RegisterPage = () => {

  const { email, password, onInputChange, displayName, passwordConfirmed} = useForm( formData, formValidations )

  const onSubmit = (e) =>{
    e.preventDefault()
  }
  return (
    <AuthLayout title="Register">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{pt:2}}>
            <TextField 
              label="Nombre" 
              type="text"
              placeholder="Nombre completo"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error
            >
            </TextField>
          </Grid>
          <Grid item xs={12} sx={{pt:2}}>
            <TextField 
              label="Correo" 
              type="email"
              placeholder="correogoogle@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            >
            </TextField>
          </Grid>
          <Grid item xs={12} sx={{mt:2}}>
            <TextField 
              label="Contraseña" 
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            >
            </TextField>
          </Grid>
          <Grid item xs={12} sx={{mt:2}}>
            <TextField 
              label="Confirmar contraseña" 
              type="password"
              placeholder="Confirmar contraseña"
              fullWidth
              name="passwordConfirmed"
              value={passwordConfirmed}
              onChange={onInputChange}
            >
            </TextField>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt:1}}>
            <Grid item xs={12} >
              <Button type='submit' variant='contained' fullWidth>Crear cuenta</Button>
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
