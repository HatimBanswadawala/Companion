import { Box, Button, ButtonGroup, List, ListItemText, Typography, Paper } from "@mui/material";
import { useStore } from "../../lib/hooks/useStore";
import { observer } from 'mobx-react-lite'


const counter =  observer(function Counter() {
    const { CounterStore } = useStore();
    return (

        <>

        <Box display='flex' justifyContent='space-between'>
            <Box sx={{width:'60%'}}>
                <Typography variant='h4' gutterBottom>{CounterStore.title}</Typography>
                <Typography variant='h6'>The Count is: {CounterStore.count}</Typography>
                    
                <ButtonGroup sx={{mt:3}}>
                    <Button onClick={()=>{CounterStore.decrementer()}} variant='contained' color='error'>Decrement by 1</Button>
                    <Button onClick={()=>{CounterStore.incrementer()}} variant='contained' color='primary'>Increment by 1</Button>
                    <Button onClick={()=>{CounterStore.incrementer(5)}} variant='contained' color='success'>Increment by 5</Button>
                </ButtonGroup>
            </Box>
            <Paper sx={{width:'40%', p:3}}>
                <Typography variant='h5'>Counter Events ({CounterStore.eventCount})</Typography>
                <List>
                    {CounterStore.events.map((event,index)=> (
                        <ListItemText key={index}>{event}</ListItemText>
                        ) )}
                </List>
            </Paper>
        </Box>
            
        </>
        
    )
});

export default counter;