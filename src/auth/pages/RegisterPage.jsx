import { Button, Grid, TextField, Link, Typography } from '@mui/material'
import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from '../../hooks'
import { AuthLayout } from '../layout/AuthLayout'

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [(value) => value.includes('@'),'El correo debe tener una @'],
  password: [(value) => value.length >= 8,'El password debe tener más de 8 letras'],
  displayName: [(value) => value.length >= 1,'El nombre es obligatorio']
}

export const RegisterPage = () => {

  const [formSubmitted, setFormSubmitted] = useState(false)

  const { formState, email, password, onInputChange, displayName, isFormValid, emailValid, passwordValid, displayNameValid } = useForm( formData, formValidations )

  console.log(displayNameValid)

  const onSubmit = (e) =>{
    e.preventDefault()
    setFormSubmitted(true)
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
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
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
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
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
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
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
