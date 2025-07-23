import { Group } from "@mui/icons-material";
import { Box, AppBar, Toolbar, Typography, Container, MenuItem } from "@mui/material";
import MenuItemLink from "../shared/components/menuItemLink";

export default function Navbar() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{
        backgroundImage:'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)'
      }}>
        <Container maxWidth='xl'>
            <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
                <Box>
                    <MenuItem sx={{display:'flex', gap:2}}>
                        <Group fontSize="large"></Group>
                        <Typography variant='h4' fontWeight='bold'>Companion</Typography>
                    </MenuItem>
                </Box>
                <Box sx={{display:'flex'}}>
                    <MenuItemLink to='/activities' >
                        Activities
                    </MenuItemLink>
                    <MenuItemLink to='/createActivity'>
                        Create Activity
                    </MenuItemLink>
                    <MenuItem sx={{
                        fontSize:'1.2rem', textTransform:'uppercase', fontWeight:'bold'
                    }}>
                        Contact
                    </MenuItem>
                </Box>
                <MenuItem>
                    User
                </MenuItem>
        </Toolbar>
        </Container>
      </AppBar>
    </Box>
    </div>
  )
}
