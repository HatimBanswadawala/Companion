import { Box, Avatar, ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from "react-router";
import Menu from '@mui/material/Menu';
import { useState } from 'react';
import { useAccount } from '../../lib/hooks/useAccount';
import { Add, Logout, Person } from '@mui/icons-material';

export default function UserMenu() {
    const {currentUser,logoutUser} = useAccount();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        onClick={handleClick}
        color='inherit'
        size='large'
        sx={{fontSize:'1.1rem'}}
      >
        <Box display='flex' alignItems='center' gap={2}>
            <Avatar/>
            {currentUser?.displayName}
        </Box>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        <MenuItem component={Link} to='/createActivity' onClick={handleClose}>
            <ListItemIcon>
                <Add/>
            </ListItemIcon>
            <ListItemText>
                Create Activity
            </ListItemText>
        </MenuItem>
        <MenuItem component={Link} to='/profile' onClick={handleClose}>
            <ListItemIcon>
                <Person/>
            </ListItemIcon>
            <ListItemText>
                My Profile
            </ListItemText>
        </MenuItem>
        <MenuItem onClick={()=>{
            logoutUser.mutate();
            handleClose();
        }}>
            <ListItemIcon>
                <Logout/>
            </ListItemIcon>
            <ListItemText>
                Sign Out
            </ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}
