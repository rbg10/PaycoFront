import React, { useState,useContext } from 'react';
import { Button, Card, CardContent, TextField,  
        OutlinedInput,InputAdornment,IconButton} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import LoginIcon from '@mui/icons-material/Login';
import logo from '../../../assets/icon.png';    
import './login.css';
import { AuthContext } from '../../../auth/context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    
const [showPassword, setShowPassword] = useState(false);
const handleClickShowPassword = () => setShowPassword((show) => !show);
const handleMouseDownPassword = (event) => {event.preventDefault();};
const { login } = useContext( AuthContext );
const navigate = useNavigate();

const onLogin = () => {
    
    const lastPath = localStorage.getItem('lastPath') || '/';

    login( 'Renebravo10@gmail.com' );
    
    navigate( lastPath, {
      replace: true
    });
  }

return (
    <div className='background-gradient'>
        
        <Card className='contenedor'>
            <CardContent >
                <div className='contenedor-image'>
                    <img src={logo} className="image"/>
                </div>
                <h1 className='titulo' >
                    Inicio de sesión a Payco
                </h1>

                <form>
                    <label className='titulo'>Usuario:</label>
                    <TextField 
                        variant="outlined"
                        color   ="secondary"
                        margin="normal"
                        size="small"
                        fullWidth 
                    />
                    <label className='titulo'>Contraseña:</label>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        className="text-pass"
                        fullWidth
                        size='small'
                        margin="none"
                        variant="outlined"
                        color   ="secondary"

                    />                    
                    <Button fullWidth  variant="contained" startIcon={<LoginIcon />} color="secondary" className="button" onClick={onLogin}>
                            Iniciar sesion
                    </Button>              
                </form>               
            </CardContent>
            <div className='contenedor-contrasena'>
                    <a 
                    href="" className='text-contrasena'
                    // style={{cursor:"pointer", fontFamily:"roboto", textDecoration:"none"}}
                    >¿Olvidaste tu contraseña?</a>
             </div>
        </Card>
    </div>
  )
}
