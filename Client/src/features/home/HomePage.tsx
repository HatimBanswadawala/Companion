import { Group } from '@mui/icons-material'
import { Box, Button, Paper, Typography } from '@mui/material'
import { useNavigate } from 'react-router'

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <Paper
        sx= {{
          color:'white',
          display:'flex',
          gap:6,
          flexDirection:'column',
          alignItems:'center',
          alignContent:'center',
          justifyContent:'center',
          height:'100vh',
          backgroundImage:'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)'

        }}>

          <Box 
                sx= {{
                color:'white',
                display:'flex',
                gap:3,
                alignItems:'center',
                alignContent:'center',

              }}>
                  <Group sx={{height:110, width:110}}/>
                  <Typography variant='h1'>Companion</Typography>
          </Box>
          <Typography variant='h3'>
            Champion your activities with Companion
          </Typography>
          <Button size='large' variant='contained' 
            onClick={() => navigate('/activities')}
           sx={{height: 80, borderRadius: 4, fontSize: '1.5rem'}}>
             Take me to my Activites!
          </Button>

    </Paper>
  )
}
