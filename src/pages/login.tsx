import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Box, Container, Typography, TextField, Button, Divider, IconButton, InputAdornment } from '@mui/material';
import { styled } from '@mui/material/styles';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

const LoginContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: `linear-gradient(0deg, rgba(250, 249, 246, 0.70) 0%, rgba(250, 249, 246, 0.70) 100%), 
               linear-gradient(106deg, rgba(235, 188, 254, 0.30) 0%, rgba(240, 196, 105, 0.30) 100%), 
               #FFF`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 200px',
  [theme.breakpoints.down('lg')]: {
    padding: '0 100px',
  },
  [theme.breakpoints.down('md')]: {
    padding: '0 20px',
  },
}));

const MainCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  borderRadius: '8px',
  border: `1px solid ${theme.palette.grey[200]}`,
  overflow: 'hidden',
  maxWidth: '1000px',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

const TestimonialSide = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(225deg, #EAFFC2 0%, #FFD4F6 100%)',
  position: 'relative',
  flex: 1,
  padding: '60px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderTopLeftRadius: '8px',
  borderBottomLeftRadius: '8px',
  borderTop: `1px solid ${theme.palette.grey[200]}`,
  borderBottom: `1px solid ${theme.palette.grey[200]}`,
  borderLeft: `1px solid ${theme.palette.grey[200]}`,
  [theme.breakpoints.down('md')]: {
    borderRadius: '8px 8px 0 0',
    borderLeft: `1px solid ${theme.palette.grey[200]}`,
    borderRight: `1px solid ${theme.palette.grey[200]}`,
  },
}));

const TestimonialContent = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(153deg, rgba(255, 255, 255, 0.00) 0%, #FFF 99.23%)',
  backdropFilter: 'blur(10px)',
  padding: '60px',
  borderRadius: '8px',
  width: '100%',
  height: '728px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '32px',
  [theme.breakpoints.down('md')]: {
    height: 'auto',
    padding: '40px',
  },
}));

const GradientTitle = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(180deg, #F0C469 0%, #783C91 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontSize: '44px',
  fontWeight: 700,
  textAlign: 'center',
  lineHeight: 'normal',
  [theme.breakpoints.down('md')]: {
    fontSize: '32px',
  },
}));

const LoginSide = styled(Box)(({ theme }) => ({
  background: '#FFF',
  backdropFilter: 'blur(10px)',
  padding: '40px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderTopRightRadius: '8px',
  borderBottomRightRadius: '8px',
  borderTop: `1px solid ${theme.palette.grey[200]}`,
  borderRight: `1px solid ${theme.palette.grey[200]}`,
  borderBottom: `1px solid ${theme.palette.grey[200]}`,
  minWidth: '500px',
  [theme.breakpoints.down('md')]: {
    borderRadius: '0 0 8px 8px',
    borderLeft: `1px solid ${theme.palette.grey[200]}`,
    minWidth: 'unset',
  },
}));

const Logo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '32px',
}));

const QuoteIcon = () => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.72 23.136L13.44 20.256V16.896C13.44 14.784 13.792 12.736 14.496 10.752C15.2 8.704 16.224 6.784 17.568 4.992C18.912 3.2 20.48 1.536 22.272 0C22.848 0.256001 23.328 0.608 23.712 1.056C24.16 1.44 24.512 1.92 24.768 2.496C23.168 3.968 21.888 5.44 20.928 6.912C20.032 8.384 19.424 9.92 19.104 11.52L24 14.016V20.256L18.72 23.136ZM5.28 23.136L0 20.256V16.896C0 14.784 0.352 12.736 1.056 10.752C1.76 8.704 2.784 6.784 4.128 4.992C5.472 3.2 7.04 1.536 8.832 0C9.408 0.256001 9.888 0.608 10.272 1.056C10.72 1.44 11.072 1.92 11.328 2.496C9.728 3.968 8.448 5.44 7.488 6.912C6.592 8.384 5.984 9.92 5.664 11.52L10.56 14.016V20.256L5.28 23.136Z" fill="#CFCFCF"/>
  </svg>
);

const GoogleButton = styled(Button)(({ theme }) => ({
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: '4px',
  height: '56px',
  width: '100%',
  marginBottom: '32px',
  color: theme.palette.text.primary,
  textTransform: 'none',
  fontSize: '14px',
  fontWeight: 400,
  '&:hover': {
    backgroundColor: 'rgba(144, 120, 155, 0.04)',
  },
}));

const DotIndicator = styled(Box)(({ active }: { active?: boolean }) => ({
  width: active ? '12px' : '8px',
  height: active ? '12px' : '8px',
  borderRadius: '50%',
  backgroundColor: active ? '#783C91' : '#676767',
  opacity: active ? 1 : 0.5,
}));

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    // Simulate login and redirect to onboarding
    router.push('/onboarding');
  };

  const handleSignUp = () => {
    // Redirect to signup page for new users
    router.push('/signup');
  };

  return (
    <>
      <Head>
        <title>Login - Social Stratix</title>
      </Head>
      <LoginContainer>
        <MainCard>
          <TestimonialSide>
            <TestimonialContent>
              <Box sx={{ width: '442px', textAlign: 'center', mb: 4 }}>
                <GradientTitle>
                  Right Voices to Amplify Your Brand!
                </GradientTitle>
              </Box>
              
              <Box sx={{ width: '450px', display: 'flex', flexDirection: 'column', gap: '17px', alignItems: 'center' }}>
                <Typography variant="body1" sx={{ color: '#676767', fontSize: '14px', textAlign: 'center' }}>
                  Join the best influencer finding site
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, width: '100%' }}>
                  <QuoteIcon />
                  <Typography variant="body1" sx={{ color: '#1E002B', fontSize: '14px', flex: 1 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%' }}>
                  <Box
                    component="img"
                    src="https://api.builder.io/api/v1/image/assets/TEMP/f032098b5c092a33369c4cc5b81c6541bdc37489?width=100"
                    alt="Elon Musk"
                    sx={{ width: '50px', height: '50px', borderRadius: '50px' }}
                  />
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body1" sx={{ color: '#1E002B', fontSize: '14px', fontWeight: 700 }}>
                      Elon Musk
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#1E002B', fontSize: '14px' }}>
                      Tesla founder
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', justifyContent: 'center', mt: 2 }}>
                  <DotIndicator />
                  <DotIndicator />
                  <DotIndicator active />
                </Box>
              </Box>
            </TestimonialContent>
          </TestimonialSide>

          <LoginSide>
            <Logo>
              <Typography sx={{ fontSize: '33px', fontWeight: 700, color: '#1E002B' }}>ツ</Typography>
              <Typography sx={{ fontSize: '20px', fontWeight: 700, color: '#1E002B' }}>SOCIAL STRATIX</Typography>
            </Logo>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%', maxWidth: '442px' }}>
              <Typography variant="h2" sx={{ textAlign: 'center', mb: 2 }}>
                Welcome back!
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <TextField
                    label="Email"
                    placeholder="Ex: adameve@gmail.com"
                    variant="outlined"
                    fullWidth
                    sx={{ height: '56px' }}
                  />
                  <TextField
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    variant="outlined"
                    fullWidth
                    sx={{ height: '56px' }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                          >
                            <VisibilityOffIcon sx={{ color: '#676767' }} />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
                
                <Typography 
                  sx={{ 
                    color: '#783C91', 
                    fontSize: '14px', 
                    fontWeight: 700, 
                    textAlign: 'right',
                    cursor: 'pointer'
                  }}
                >
                  Forgot Password?
                </Typography>
              </Box>

              <Button variant="contained" fullWidth onClick={handleLogin}>
                Login
              </Button>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: '21px' }}>
                <Divider sx={{ flex: 1, borderColor: '#DCD0E1' }} />
                <Typography sx={{ color: '#676767', fontSize: '12px', fontWeight: 700 }}>Or</Typography>
                <Divider sx={{ flex: 1, borderColor: '#DCD0E1' }} />
              </Box>

              <GoogleButton variant="outlined" startIcon={
                <Box
                  component="img"
                  src="https://api.builder.io/api/v1/image/assets/TEMP/27318ef29005c6180e55c0dfe5a902782c151e3a?width=76"
                  alt="Google"
                  sx={{ width: '38px', height: '38px' }}
                />
              }>
                Continue with Google
              </GoogleButton>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: '21px' }}>
                <Divider sx={{ flex: 1, borderColor: '#DCD0E1' }} />
                <Typography sx={{ color: '#676767', fontSize: '12px', fontWeight: 700 }}>
                  Don't have a Stratix account?
                </Typography>
                <Divider sx={{ flex: 1, borderColor: '#DCD0E1' }} />
              </Box>

              <Button variant="outlined" fullWidth onClick={handleSignUp}>
                Sign up
              </Button>

              <Typography 
                sx={{ 
                  color: '#1E002B', 
                  fontSize: '12px', 
                  textAlign: 'center',
                  '& .link': {
                    color: '#783C91',
                    fontWeight: 700
                  }
                }}
              >
                By continuing, you agree to Social Stratix{' '}
                <span className="link">Terms of Service</span> and{' '}
                <span className="link">Privacy Policy</span>.
              </Typography>
            </Box>
          </LoginSide>
        </MainCard>
      </LoginContainer>
    </>
  );
}
