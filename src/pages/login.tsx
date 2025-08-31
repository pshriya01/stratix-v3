import * as React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Box, Typography, TextField, Button, IconButton, InputAdornment } from '@mui/material';
import { styled } from '@mui/material/styles';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

const LoginContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '0 200px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  flex: '1 0 0',
  alignSelf: 'stretch',
  minHeight: '100vh',
  [theme.breakpoints.down('lg')]: {
    padding: '0 100px',
  },
  [theme.breakpoints.down('md')]: {
    padding: '0 50px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '0 20px',
  },
}));

const MainWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  maxWidth: '1200px',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  alignSelf: 'stretch',
  background: 'linear-gradient(225deg, #EAFFC2 0%, #FFD4F6 100%)',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

const TestimonialSide = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '728px',
  padding: '20px 60px 40px 60px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  borderRadius: '8px 0 0 8px',
  borderTop: '1px solid #DCD0E1',
  borderBottom: '1px solid #DCD0E1',
  borderLeft: '1px solid #DCD0E1',
  background: 'linear-gradient(153deg, rgba(255, 255, 255, 0.00) 0%, #FFF 99.23%)',
  backdropFilter: 'blur(10px)',
  [theme.breakpoints.down('md')]: {
    height: 'auto',
    padding: '40px 30px',
    borderRadius: '8px 8px 0 0',
    borderLeft: '1px solid #DCD0E1',
    borderRight: '1px solid #DCD0E1',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '30px 20px',
  },
}));

const TestimonialContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '442px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '32px',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    maxWidth: '400px',
  },
}));

const GradientTitle = styled(Typography)(({ theme }) => ({
  alignSelf: 'stretch',
  color: '#1E002B',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '44px',
  fontWeight: 600,
  lineHeight: 'normal',
  background: 'linear-gradient(180deg, #F0C469 0%, #783C91 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  '& .normal-text': {
    color: '#1E002B',
    background: 'none',
    WebkitTextFillColor: '#1E002B',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '36px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '28px',
  },
}));

const TestimonialSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '450px',
  height: '308px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '17px',
  flexShrink: 0,
  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: 'auto',
  },
}));

const QuoteContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  alignSelf: 'stretch',
  gap: '16px',
}));

const ProfileContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  alignSelf: 'stretch',
}));

const SlideIndicator = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '8px',
  alignItems: 'flex-end',
  gap: '10px',
  flex: '1 0 0',
  justifyContent: 'center',
}));

const LoginSide = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '20px 40px 40px 40px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  borderRadius: '0 8px 8px 0',
  borderTop: '1px solid #DCD0E1',
  borderRight: '1px solid #DCD0E1',
  borderBottom: '1px solid #DCD0E1',
  background: '#FFF',
  backdropFilter: 'blur(10px)',
  minWidth: '500px',
  [theme.breakpoints.down('md')]: {
    borderRadius: '0 0 8px 8px',
    borderLeft: '1px solid #DCD0E1',
    minWidth: 'unset',
    width: '100%',
  },
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  alignSelf: 'stretch',
  marginBottom: '32px',
}));

const FormContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '32px',
  width: '442px',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    maxWidth: '400px',
  },
}));

const FormFieldsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '24px',
  alignSelf: 'stretch',
}));

const TextFieldContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  alignSelf: 'stretch',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  alignSelf: 'stretch',
  height: '56px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '4px',
    height: '56px',
    '& fieldset': {
      borderColor: '#AA86B9',
    },
    '&:hover fieldset': {
      borderColor: '#AA86B9',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#AA86B9',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#3F214C',
    fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
    fontSize: '14px',
    fontWeight: 400,
  },
  '& .MuiInputBase-input': {
    fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
    fontSize: '16px',
  },
}));

const LoginButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  height: '41px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  alignSelf: 'stretch',
  borderRadius: '100px',
  background: '#783C91',
  color: '#FFF',
  textAlign: 'center',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: 'normal',
  textTransform: 'uppercase',
  padding: '10px 24px',
  '&:hover': {
    background: '#5F2E75',
  },
}));

const DividerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '21px',
  alignSelf: 'stretch',
}));

const DividerLine = styled(Box)(({ theme }) => ({
  height: '1px',
  background: '#DCD0E1',
  flex: 1,
}));

const GoogleSignupContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '442px',
  height: '56px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '4px 4px 0 0',
  cursor: 'pointer',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

const GoogleTextField = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  alignSelf: 'stretch',
  borderRadius: '4px',
  border: '1px solid #90789B',
  height: '56px',
}));

const GoogleStateLayer = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '8px 0',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'stretch',
  borderRadius: '4px 4px 0 0',
}));

const GoogleContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '12px',
  flex: '1 0 0',
}));

const SignupButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  height: '41px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  alignSelf: 'stretch',
  borderRadius: '100px',
  border: '1px solid #783C91',
  background: 'transparent',
  color: '#783C91',
  textAlign: 'center',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: 'normal',
  textTransform: 'uppercase',
  padding: '10px 24px',
  '&:hover': {
    background: 'rgba(120, 60, 145, 0.04)',
  },
}));

const TermsText = styled(Typography)(({ theme }) => ({
  display: 'flex',
  width: '464px',
  height: '19px',
  flexDirection: 'column',
  justifyContent: 'center',
  color: '#1E002B',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '12px',
  fontWeight: 600,
  lineHeight: 'normal',
  textAlign: 'center',
  '& .link': {
    color: '#783C91',
    fontWeight: 700,
    cursor: 'pointer',
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

const QuoteIcon = () => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <path d="M18.72 23.136L13.44 20.256V16.896C13.44 14.784 13.792 12.736 14.496 10.752C15.2 8.704 16.224 6.784 17.568 4.992C18.912 3.2 20.48 1.536 22.272 0C22.848 0.256001 23.328 0.608 23.712 1.056C24.16 1.44 24.512 1.92 24.768 2.496C23.168 3.968 21.888 5.44 20.928 6.912C20.032 8.384 19.424 9.92 19.104 11.52L24 14.016V20.256L18.72 23.136ZM5.28 23.136L0 20.256V16.896C0 14.784 0.352 12.736 1.056 10.752C1.76 8.704 2.784 6.784 4.128 4.992C5.472 3.2 7.04 1.536 8.832 0C9.408 0.256001 9.888 0.608 10.272 1.056C10.72 1.44 11.072 1.92 11.328 2.496C9.728 3.968 8.448 5.44 7.488 6.912C6.592 8.384 5.984 9.92 5.664 11.52L10.56 14.016V20.256L5.28 23.136Z" fill="#CFCFCF"/>
  </svg>
);

const DotIndicator = ({ active }: { active?: boolean }) => (
  <svg width={active ? "12" : "8"} height={active ? "12" : "8"} viewBox={`0 0 ${active ? "12" : "8"} ${active ? "12" : "8"}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    {active ? (
      <circle cx="6" cy="6" r="6" fill="#783C91"/>
    ) : (
      <g opacity="0.5">
        <circle cx="4" cy="4" r="4" fill="#676767"/>
      </g>
    )}
  </svg>
);

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    router.push('/onboarding');
  };

  const handleSignUp = () => {
    router.push('/signup');
  };

  return (
    <>
      <Head>
        <title>Login - Social Stratix</title>
        <meta name="description" content="Login to Social Stratix - Connect with the right voices to amplify your brand" />
      </Head>
      <LoginContainer>
        <MainWrapper>
          <ContentContainer>
            <TestimonialSide>
              <TestimonialContent>
                <GradientTitle>
                  <span className="normal-text">Right </span>
                  Voices to Amplify
                  <span className="normal-text"> Your Brand!</span>
                </GradientTitle>
                
                <TestimonialSection>
                  <Typography 
                    sx={{ 
                      alignSelf: 'stretch',
                      color: '#676767',
                      fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
                      fontSize: '14px',
                      fontWeight: 400,
                      lineHeight: 'normal',
                      textAlign: 'center'
                    }}
                  >
                    Join the best influencer finding site
                  </Typography>
                  
                  <QuoteContainer>
                    <QuoteIcon />
                    <Typography 
                      sx={{ 
                        width: '388px',
                        color: '#1E002B',
                        fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: 'normal'
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                  </QuoteContainer>
                  
                  <ProfileContainer>
                    <Box
                      component="img"
                      src="https://api.builder.io/api/v1/image/assets/TEMP/f032098b5c092a33369c4cc5b81c6541bdc37489?width=100"
                      alt="Elon Musk"
                      sx={{ width: '50px', height: '50px', borderRadius: '100px' }}
                    />
                    <Box sx={{ display: 'flex', width: '388px', flexDirection: 'column', alignItems: 'flex-start' }}>
                      <Typography 
                        sx={{ 
                          alignSelf: 'stretch',
                          color: '#1E002B',
                          fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
                          fontSize: '14px',
                          fontWeight: 600,
                          lineHeight: 'normal'
                        }}
                      >
                        Elon Musk
                      </Typography>
                      <Typography 
                        sx={{ 
                          alignSelf: 'stretch',
                          color: '#1E002B',
                          fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
                          fontSize: '14px',
                          fontWeight: 400,
                          lineHeight: 'normal'
                        }}
                      >
                        Tesla founder
                      </Typography>
                    </Box>
                  </ProfileContainer>
                  
                  <SlideIndicator>
                    <DotIndicator />
                    <DotIndicator />
                    <DotIndicator active />
                  </SlideIndicator>
                </TestimonialSection>
              </TestimonialContent>
            </TestimonialSide>
          </ContentContainer>

          <LoginSide>
            <LogoContainer>
              <Typography 
                sx={{ 
                  color: '#1E002B',
                  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
                  fontSize: '33px',
                  fontWeight: 700,
                  lineHeight: 'normal'
                }}
              >
                ツ
              </Typography>
              <Typography 
                sx={{ 
                  color: '#1E002B',
                  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
                  fontSize: '20px',
                  fontWeight: 700,
                  lineHeight: 'normal'
                }}
              >
                SOCIAL STRATIX
              </Typography>
            </LogoContainer>

            <FormContainer>
              <Typography 
                sx={{ 
                  color: '#1E002B',
                  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
                  fontSize: '33px',
                  fontWeight: 600,
                  lineHeight: 'normal'
                }}
              >
                Welcome back!
              </Typography>

              <FormFieldsContainer>
                <TextFieldContainer>
                  <StyledTextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                  />
                </TextFieldContainer>
                
                <TextFieldContainer>
                  <StyledTextField
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                            sx={{ width: '48px', height: '48px' }}
                          >
                            <VisibilityOffIcon sx={{ color: '#676767', width: '24px', height: '24px' }} />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </TextFieldContainer>
                
                <Typography 
                  sx={{ 
                    alignSelf: 'stretch',
                    color: '#783C91',
                    textAlign: 'right',
                    fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
                    fontSize: '14px',
                    fontWeight: 600,
                    lineHeight: 'normal',
                    cursor: 'pointer'
                  }}
                >
                  Forgot Password?
                </Typography>
              </FormFieldsContainer>

              <LoginButton onClick={handleLogin}>
                Login
              </LoginButton>

              <DividerContainer>
                <DividerLine />
                <Typography 
                  sx={{ 
                    color: '#676767',
                    fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
                    fontSize: '12px',
                    fontWeight: 600,
                    lineHeight: 'normal'
                  }}
                >
                  Or
                </Typography>
                <DividerLine />
              </DividerContainer>

              <GoogleSignupContainer>
                <GoogleTextField>
                  <GoogleStateLayer>
                    <GoogleContent>
                      <Box sx={{ display: 'flex', width: '38px', height: '40px', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                        <Box
                          component="img"
                          src="https://api.builder.io/api/v1/image/assets/TEMP/27318ef29005c6180e55c0dfe5a902782c151e3a?width=76"
                          alt="Google"
                          sx={{ width: '38px', height: '38px', flexShrink: 0 }}
                        />
                      </Box>
                      <Box sx={{ display: 'flex', height: '40px', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Typography 
                          sx={{ 
                            color: '#3F214C',
                            fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
                            fontSize: '14px',
                            fontWeight: 400,
                            lineHeight: 'normal'
                          }}
                        >
                          Continue with Google
                        </Typography>
                      </Box>
                    </GoogleContent>
                  </GoogleStateLayer>
                </GoogleTextField>
              </GoogleSignupContainer>

              <DividerContainer>
                <DividerLine sx={{ width: '121.5px' }} />
                <Typography 
                  sx={{ 
                    color: '#676767',
                    fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
                    fontSize: '12px',
                    fontWeight: 600,
                    lineHeight: 'normal',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Don't have a Stratix account?
                </Typography>
                <DividerLine sx={{ width: '121.5px' }} />
              </DividerContainer>

              <SignupButton onClick={handleSignUp}>
                Sign up
              </SignupButton>

              <TermsText>
                By continuing, you agree to Social Stratix{' '}
                <span className="link">Terms of Service</span> and{' '}
                <span className="link">Privacy Policy</span>.
              </TermsText>
            </FormContainer>
          </LoginSide>
        </MainWrapper>
      </LoginContainer>
    </>
  );
}
