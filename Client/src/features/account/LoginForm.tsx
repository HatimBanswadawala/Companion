import { loginSchema, type LoginSchema } from '../../lib/schemas/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Box, Button, Typography, Paper } from '@mui/material';
import { LockOpen } from '@mui/icons-material';
import TextInput from '../../app/shared/components/TextInput';
import { useAccount } from '../../lib/hooks/useAccount';
import { Link, useLocation, useNavigate } from 'react-router';

export default function LoginForm() {

    const { loginUser } = useAccount();
    const navigate = useNavigate();
    const location = useLocation();
    const { control, handleSubmit, formState: {isValid, isSubmitting} } = useForm<LoginSchema>({
        mode: 'onTouched',
        resolver: zodResolver(loginSchema)
    });

    const onSubmit = async (data:LoginSchema) => {
        await loginUser.mutateAsync(data,{
            onSuccess:()=>{
                navigate(location?.state?.from || '/activities');
            }
        });
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
                    <LockOpen fontSize='large'/>
                    <Typography variant='h4'>Sign In</Typography>
        </Box>
        <TextInput control={control} label='Email' name='email' />
        <TextInput control={control} type='password' label='Password' name='password' />
        <Button 
                        type='submit' 
                        size='large'
                        variant='contained'
                        disabled={!isValid || isSubmitting}>Login
        </Button>
        <Typography sx={{textAlign:'center'}}>
            Don't have an account already?
            <Typography component={Link} to='/register' color='primary' sx={{ml:1, textDecoration:'none'}}>
                Sign Up
            </Typography>
        </Typography>
    </Paper>
  )
}
