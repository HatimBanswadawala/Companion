import { Group } from "@mui/icons-material";
import { Box, AppBar, Toolbar, Typography, Container, MenuItem, LinearProgress } from "@mui/material";
import MenuItemLink from "../shared/components/menuItemLink";
import { useStore } from "../../lib/hooks/useStore";
import { Observer } from "mobx-react-lite";
import { useAccount } from "../../lib/hooks/useAccount";
import UserMenu from "./userMenu";

export default function Navbar() {
  const { UiStore } = useStore();
  const { currentUser } = useAccount();
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{
        backgroundImage:'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)',
        position:"relative"
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
                    <MenuItemLink to='/counter'>
                        Counter
                    </MenuItemLink>
                    <MenuItemLink to='/errors'>
                        Errors
                    </MenuItemLink>
                </Box>
                <Box display='flex' alignItems='center'>
                  {
                    currentUser ? <UserMenu/>:
                    (
                      <>
                        <MenuItemLink to='/login'>Login</MenuItemLink>
                        <MenuItemLink to='/register'>Register</MenuItemLink>
                      </>

                    )
                  }
                  
                </Box>
        </Toolbar>
        </Container>

        <Observer>
          { () => (
            UiStore.isLoading ? 
            <>
                <LinearProgress 
                          color='warning'
                          sx={{
                            position:'absolute',
                            left:0,
                            right:0,
                            bottom:0,
                            height:4
                          }}
                 />
                
             </> : null
            )  }
        </Observer>

      </AppBar>
    </Box>
    </div>
  )
}
