import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Box, Button, Typography, Paper } from '@mui/material';
import { LockPerson } from '@mui/icons-material';
import TextInput from '../../app/shared/components/TextInput';
import { useAccount } from '../../lib/hooks/useAccount';
import { Link} from 'react-router';
import { registerSchema, type RegisterSchema } from '../../lib/schemas/registerSchema';

export default function RegisterForm() {

    const { registerUser } = useAccount();
    const { control, handleSubmit, setError, formState: {isValid, isSubmitting} } = useForm<RegisterSchema>({
        mode: 'onTouched',
        resolver: zodResolver(registerSchema)
    });

    const onSubmit = async (data:RegisterSchema) => {
        await registerUser.mutateAsync(data,{
            onError: (error) => {
                if(Array.isArray(error)){
                    error.forEach(err => {
                        if (err.includes('Email')) setError('email', {message:err});
                        else if (err.includes('Password')) setError('password', {message:err});
                    })
                }
            }
        })
    }
  return (
    <Paper
            component = 'form'
            onSubmit = {handleSubmit(onSubmit)}
            sx={{
                display:'flex',
                flexDirection:'column',
                mx:'auto',
                maxWidth:'md',
                p:3,
                gap:3,
                borderRadius:3
            }}
    >
        <Box display='flex' alignItems='center' justifyContent='center'
                gap={3} color='secondary.main'>
                    <LockPerson fontSize='large'/>
                    <Typography variant='h4'>Register</Typography>
        </Box>
        <TextInput control={control} label='Email' name='email' />
        <TextInput control={control} label='Display Name' name='displayName' />
        <TextInput control={control} type='password' label='Password' name='password' />
        <Button 
                        type='submit' 
                        size='large'
                        variant='contained'
                        disabled={!isValid || isSubmitting}>Register
        </Button>
        <Typography sx={{textAlign:'center'}}>
            Already have an account? 
            <Typography component={Link} to='/login' color='primary' sx={{ml:1, textDecoration:'none'}}>
                Sign In
            </Typography>
        </Typography>
    </Paper>
  )
}
