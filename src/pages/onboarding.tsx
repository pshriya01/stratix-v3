import * as React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Box, Typography, Button, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const OnboardingContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: `linear-gradient(0deg, rgba(250, 249, 246, 0.70) 0%, rgba(250, 249, 246, 0.70) 100%), 
               linear-gradient(106deg, rgba(235, 188, 254, 0.30) 0%, rgba(240, 196, 105, 0.30) 100%), 
               #FFF`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
}));

const Header = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '80px',
  background: '#FFF',
  display: 'flex',
  alignItems: 'center',
  padding: '2px 20px',
}));

const Logo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '7.5px',
}));

const MainContent = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '140px 200px 0 200px',
  [theme.breakpoints.down('lg')]: {
    padding: '100px 100px 0 100px',
  },
  [theme.breakpoints.down('md')]: {
    padding: '60px 20px 0 20px',
  },
}));

const MainCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '40px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  border: `1px solid ${theme.palette.grey[200]}`,
  background: '#FFF',
  backdropFilter: 'blur(10px)',
  maxWidth: '900px',
  width: '100%',
}));

const SelectionCard = styled(Card)<{ selected?: boolean }>(({ theme, selected }) => ({
  width: '368px',
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  borderRadius: '4px',
  background: selected ? '#F0E2F6' : '#FFF',
  border: selected ? `1px solid ${theme.palette.primary.light}` : 'none',
  boxShadow: '0 -1px 1px 0 rgba(30, 0, 43, 0.05), 0 2px 3px 0 rgba(30, 0, 43, 0.16)',
  cursor: 'pointer',
  position: 'relative',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    background: selected ? '#F0E2F6' : '#EFECF0',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    maxWidth: '350px',
  },
}));

const CheckIcon = styled(CheckCircleIcon)(({ theme }) => ({
  position: 'absolute',
  top: '24px',
  right: '24px',
  color: theme.palette.primary.light,
  fontSize: '24px',
}));

const ContinueButton = styled(Button)<{ enabled?: boolean }>(({ theme, enabled }) => ({
  borderRadius: '100px',
  height: '41px',
  padding: '10px 24px',
  background: enabled ? '#EFECF0' : '#DFDFDF',
  color: enabled ? theme.palette.primary.main : theme.palette.text.primary,
  boxShadow: enabled ? '0 1px 2px 0 rgba(0, 0, 0, 0.30), 0 1px 3px 1px rgba(0, 0, 0, 0.15)' : 'none',
  '&:hover': {
    background: enabled ? '#EFECF0' : '#DFDFDF',
  },
  '&:disabled': {
    opacity: 0.38,
  },
}));

type UserType = 'influencer' | 'brand' | null;

export default function OnboardingPage() {
  const [selectedType, setSelectedType] = useState<UserType>(null);
  const router = useRouter();

  const handleSelection = (type: UserType) => {
    setSelectedType(type);
  };

  const handleContinue = () => {
    if (selectedType) {
      // Navigate to specific onboarding flow based on user type
      if (selectedType === 'influencer') {
        router.push('/influencer-onboarding');
      } else if (selectedType === 'brand') {
        // For now, redirect to home page (brand onboarding can be added later)
        router.push('/');
      }
    }
  };

  return (
    <>
      <Head>
        <title>Tell us who you are - Social Stratix</title>
      </Head>
      <OnboardingContainer>
        <Header>
          <Logo>
            <Typography sx={{ fontSize: '24.75px', fontWeight: 700, color: '#3F214C' }}>ツ</Typography>
            <Typography sx={{ fontSize: '15px', fontWeight: 700, color: '#3F214C' }}>SOCIAL STRATIX</Typography>
          </Logo>
        </Header>

        <MainContent>
          <MainCard>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center', width: '100%' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', textAlign: 'center' }}>
                <Typography variant="h2" sx={{ color: '#1E002B', fontSize: '33px', fontWeight: 700 }}>
                  Tell us who you are
                </Typography>
                <Typography 
                  sx={{ 
                    color: '#676767', 
                    fontSize: '12px', 
                    textAlign: 'center',
                    maxWidth: '600px'
                  }}
                >
                  Knowing whether you're an influencer or a brand helps us tailor the platform experience to suit your needs.
                </Typography>
              </Box>

              <Box sx={{ 
                display: 'flex', 
                gap: '32px', 
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}>
                <SelectionCard 
                  selected={selectedType === 'influencer'}
                  onClick={() => handleSelection('influencer')}
                >
                  {selectedType === 'influencer' && <CheckIcon />}
                  <Box
                    component="img"
                    src="https://api.builder.io/api/v1/image/assets/TEMP/4ce28ef706efea80d3f130b3963689349b87383c?width=500"
                    alt="Influencer"
                    sx={{ width: '250px', height: '208px', objectFit: 'contain' }}
                  />
                  <Box sx={{ width: '100%' }}>
                    <Typography 
                      variant="h3" 
                      sx={{ 
                        color: '#1E002B', 
                        fontSize: '24px', 
                        fontWeight: 700,
                        marginBottom: '8px'
                      }}
                    >
                      Influencer
                    </Typography>
                    <Typography 
                      sx={{ 
                        color: '#676767', 
                        fontSize: '14px',
                        lineHeight: 'normal',
                        display: '-webkit-box',
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      A content creator with a dedicated following who influences their audience's opinions, behaviors, and purchasing decisions through social media and digital platforms.
                    </Typography>
                  </Box>
                </SelectionCard>

                <SelectionCard 
                  selected={selectedType === 'brand'}
                  onClick={() => handleSelection('brand')}
                >
                  {selectedType === 'brand' && <CheckIcon />}
                  <Box
                    component="img"
                    src="https://api.builder.io/api/v1/image/assets/TEMP/fbc7c1b082f25c9e767e17e9344d373eb0e12438?width=504"
                    alt="Brand"
                    sx={{ width: '252px', height: '208px', objectFit: 'contain' }}
                  />
                  <Box sx={{ width: '100%' }}>
                    <Typography 
                      variant="h3" 
                      sx={{ 
                        color: '#1E002B', 
                        fontSize: '24px', 
                        fontWeight: 700,
                        marginBottom: '8px'
                      }}
                    >
                      Brand
                    </Typography>
                    <Typography 
                      sx={{ 
                        color: '#676767', 
                        fontSize: '14px',
                        lineHeight: 'normal',
                        display: '-webkit-box',
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      A business or organization that creates a distinct identity through products, services, and marketing to build recognition, trust, and loyalty among its target audience.
                    </Typography>
                  </Box>
                </SelectionCard>
              </Box>

              <ContinueButton 
                enabled={!!selectedType}
                disabled={!selectedType}
                onClick={handleContinue}
              >
                Continue
              </ContinueButton>
            </Box>
          </MainCard>
        </MainContent>
      </OnboardingContainer>
    </>
  );
}
