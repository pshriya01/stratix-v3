import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const HomeContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: `linear-gradient(0deg, rgba(250, 249, 246, 0.70) 0%, rgba(250, 249, 246, 0.70) 100%),
               linear-gradient(106deg, rgba(235, 188, 254, 0.30) 0%, rgba(240, 196, 105, 0.30) 100%),
               #FFF`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '40px 20px',
}));

const Logo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '48px',
}));

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Social Stratix - Connect with the Right Voices</title>
      </Head>
      <HomeContainer>
        <Container maxWidth="md">
          <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" gap={4}>
            <Logo>
              <Typography sx={{ fontSize: '48px', fontWeight: 700, color: '#1E002B' }}>ツ</Typography>
              <Typography sx={{ fontSize: '32px', fontWeight: 700, color: '#1E002B' }}>SOCIAL STRATIX</Typography>
            </Logo>

            <Typography variant="h1" sx={{ fontSize: '56px', fontWeight: 700, mb: 2 }}>
              Right Voices to Amplify Your Brand!
            </Typography>

            <Typography variant="body1" sx={{ fontSize: '18px', color: '#676767', mb: 4, maxWidth: '600px' }}>
              Join the best influencer finding site. Connect with authentic voices and build meaningful partnerships that amplify your brand's message.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="/brands" passHref>
                <Button variant="contained" size="large">
                  Find Influencers
                </Button>
              </Link>
              <Link href="/login" passHref>
                <Button variant="outlined" size="large">
                  Login
                </Button>
              </Link>
              <Link href="/signup" passHref>
                <Button variant="outlined" size="large">
                  Sign Up
                </Button>
              </Link>
              <Link href="/onboarding" passHref>
                <Button variant="text" size="large" sx={{ color: '#783C91' }}>
                  Get Started
                </Button>
              </Link>
            </Box>
          </Box>
        </Container>
      </HomeContainer>
    </>
  );
}
