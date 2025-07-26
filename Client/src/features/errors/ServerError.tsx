import { GppBad } from "@mui/icons-material";
import { Divider, Paper, Typography } from "@mui/material";
import { useLocation } from "react-router";

export default function ServerError() {
    const {state} = useLocation();
  return (
    <Paper>
        {
            state.error ? (
                <>
                <Typography gutterBottom variant="h4" 
                    sx={{display: 'flex', alignItems: 'center',px:4, pt:2}} color='error'>
                    <GppBad sx={{ fontSize: 50, verticalAlign: 'middle', mr: 1 }} />
                    {state.error?.message || 'There has been an Internal API Error'}
                </Typography>
                <Divider/>
                <Typography variant='body1' sx={{p:4}}>
                    {state.error?.details || 'Internal Server Error - 500'}
                </Typography>
                </>
            ) :
            (
                <Typography variant="h5">
                    Server Error
                </Typography>
            )
        }
        
    </Paper>
  )
}
