import { AppBar, IconButton, Toolbar, Typography, Box } from '@mui/material'
import { AccountCircle } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu';


export const Navbar = () => {
  return (

    <Box sx={{ flexGrow: 1 }}>

      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography alignItems='start' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Todo
          </Typography>

          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>

        </Toolbar>
      </AppBar>
    </Box>

  )
}


