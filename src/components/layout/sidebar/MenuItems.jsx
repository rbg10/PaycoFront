import React from 'react';

import {NavLink} from 'react-router-dom'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


const MenuItems = () => {
  
  const menu =[
    {
      menu_ID:1,
      nivel:1,
      nombre:"Catalogos",
      ruta:"/Catalogos",
      icono:"playlist_add_check_circle"
    },
    {
      menu_ID:2,
      nivel:1,
      nombre:"Clientes",
      ruta:"clientes",
      icono:"people_alt"
    },
    {
      menu_ID:3,
      nivel:1,
      nombre:"Configuracion",
      ruta:"configuracion",
      icono:"settings"
    },
  ]

  return (
    <>
        <List>
          {menu.map((item, index) => (
            <ListItem key={item.menu_ID}  disablePadding sx={{ display: 'block' }}>
              <ListItemButton 
                component={NavLink} to={item.ruta}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <i className='material-icons'>{item.icono} </i>
                </ListItemIcon>
                <ListItemText primary={item.nombre} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>




          ))}
        </List>
    
    
    
    </>
  )
}

export default MenuItems;