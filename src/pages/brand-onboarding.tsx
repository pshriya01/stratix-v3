import { useState } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../components/organisms/Header/Header';
import Stepper from '../components/molecules/Stepper/Stepper';
import FormField from '../components/atoms/FormField/FormField';
import ButtonPrimary from '../components/atoms/ButtonPrimary/ButtonPrimary';
import BackButton from '../components/atoms/BackButton/BackButton';
import CircularUpload from '../components/atoms/CircularUpload/CircularUpload';
import SocialMediaLink from '../components/atoms/SocialMediaLink/SocialMediaLink';
import TagChip from '../components/atoms/TagChip/TagChip';

const PageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100vw',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  background: 'linear-gradient(0deg, rgba(250, 249, 246, 0.70) 0%, rgba(250, 249, 246, 0.70) 100%), linear-gradient(106deg, rgba(235, 188, 254, 0.30) 0%, rgba(240, 196, 105, 0.30) 100%), #FFF'
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '140px 200px 0 200px',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
  flex: '1 0 0',
  alignSelf: 'stretch',
  [theme.breakpoints.down('md')]: {
    padding: '80px 40px 0 40px'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '40px 20px 0 20px'
  }
}));

const StepCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '20px 40px 40px 40px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  borderRadius: '8px',
  border: '1px solid #DCD0E1',
  background: '#FFF',
  backdropFilter: 'blur(10px)',
  maxWidth: '522px',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    padding: '20px 20px 40px 20px'
  }
}));

const StepContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '442px',
  paddingTop: '16px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '32px',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    minWidth: '280px'
  }
}));

const StepHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  alignSelf: 'stretch'
}));

const HeaderRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '8px',
  alignSelf: 'stretch'
}));

const StepTitle = styled(Typography)(({ theme }) => ({
  flex: '1 0 0',
  color: '#1E002B',
  fontSize: '24px',
  fontWeight: 600,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal',
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px'
  }
}));

const ViewExampleLink = styled(Typography)(({ theme }) => ({
  flex: '1 0 0',
  color: '#783C91',
  fontSize: '12px',
  fontWeight: 600,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline'
  }
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '16px',
  alignSelf: 'stretch'
}));

const SkipButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  height: '41px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  alignSelf: 'stretch',
  borderRadius: '100px',
  color: '#783C91',
  textTransform: 'uppercase',
  fontWeight: 700,
  fontSize: '14px',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  '&:hover': {
    backgroundColor: 'rgba(120, 60, 145, 0.04)'
  }
}));

const LogoUploadSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '32px',
  alignSelf: 'stretch',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

const InfoCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '24px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  borderRadius: '4px',
  background: '#FFF',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: '280px'
}));

const SocialMediaSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '16px',
  alignSelf: 'stretch'
}));

const TagsSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  alignSelf: 'stretch'
}));

const TagsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '10px',
  alignSelf: 'stretch',
  borderRadius: '4px',
  border: '1px solid #CFCFCF',
  background: '#FFF'
}));

const TagsContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '8px 0 8px 16px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '12px',
  alignSelf: 'stretch',
  borderRadius: '4px 4px 0 0'
}));

const TagsDisplay = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '0 1px 1px 0',
  alignItems: 'flex-start',
  alignContent: 'flex-start',
  gap: '10px',
  alignSelf: 'stretch',
  flexWrap: 'wrap'
}));

export type OnboardingStep = 1 | 2 | 3 | 4 | 5;

interface OnboardingData {
  otp: string;
  brandDescription: string;
  logo: File | null;
  socialMedia: Record<string, string>;
  tags: string[];
}

export default function BrandOnboarding() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<OnboardingStep>(1);
  const [data, setData] = useState<OnboardingData>({
    otp: '',
    brandDescription: '',
    logo: null,
    socialMedia: {},
    tags: []
  });
  const [newTag, setNewTag] = useState('');

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep((prev) => (prev + 1) as OnboardingStep);
    } else {
      // Complete onboarding
      console.log('Onboarding completed:', data);
      router.push('/brands');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as OnboardingStep);
    }
  };

  const handleSkip = () => {
    handleNext();
  };

  const handleAddTag = () => {
    if (newTag.trim() && !data.tags.includes(newTag.trim())) {
      setData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepContent>
            <StepHeader>
              <StepTitle>Verify your email</StepTitle>
              <Typography sx={{ color: '#1E002B', fontSize: '14px', fontWeight: 400 }}>
                We have sent an OTP to your email, please
              </Typography>
            </StepHeader>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px', alignSelf: 'stretch' }}>
              <FormField
                label="One Time Password"
                value={data.otp}
                onChange={(e) => setData(prev => ({ ...prev, otp: e.target.value }))}
                placeholder="Enter OTP"
              />
            </Box>

            <ButtonPrimary
              onClick={handleNext}
              disabled={!data.otp.trim()}
              sx={{ alignSelf: 'stretch' }}
            >
              Verify
            </ButtonPrimary>
          </StepContent>
        );

      case 2:
        return (
          <StepContent>
            <StepHeader>
              <HeaderRow>
                <BackButton onClick={handleBack} />
                <StepTitle>Describe about your Brand</StepTitle>
              </HeaderRow>
              <Box sx={{ display: 'flex', paddingLeft: '48px', alignSelf: 'stretch' }}>
                <ViewExampleLink>View Example</ViewExampleLink>
              </Box>
            </StepHeader>

            <FormField
              label="Describe what your company/brand does"
              value={data.brandDescription}
              onChange={(e) => setData(prev => ({ ...prev, brandDescription: e.target.value }))}
              multiline
              rows={4}
              placeholder="Tell us about your brand..."
            />

            <ButtonContainer>
              <ButtonPrimary
                onClick={handleNext}
                disabled={!data.brandDescription.trim()}
                sx={{ alignSelf: 'stretch' }}
              >
                Next
              </ButtonPrimary>
              <SkipButton onClick={handleSkip}>Skip</SkipButton>
            </ButtonContainer>
          </StepContent>
        );

      case 3:
        return (
          <StepContent>
            <StepHeader>
              <HeaderRow>
                <BackButton onClick={handleBack} />
                <StepTitle>Add your company logo</StepTitle>
              </HeaderRow>
            </StepHeader>

            <LogoUploadSection>
              <CircularUpload
                onFileSelect={(file) => setData(prev => ({ ...prev, logo: file }))}
              />

              <InfoCard>
                <Typography sx={{ fontSize: '18px', fontWeight: 600, color: '#1E002B' }}>
                  Help influencers recognise you easier!
                </Typography>
                <Box sx={{ display: 'flex', width: '280px', alignItems: 'center', gap: '8px' }}>
                  <Box sx={{ width: '50px', height: '50px', borderRadius: '100px', background: '#D9D9D9' }} />
                  <Box sx={{ width: '37.5px', height: '37.5px', borderRadius: '100px', background: '#D9D9D9' }} />
                  <Box sx={{ width: '25px', height: '25px', borderRadius: '100px', background: '#D9D9D9' }} />
                  <Box sx={{ width: '12.5px', height: '12.5px', borderRadius: '100px', background: '#D9D9D9' }} />
                </Box>
                <Typography sx={{ fontSize: '12px', fontWeight: 400, color: '#676767' }}>
                  Must be an actual photo of you. Logos, clip-art, group photos, and digitally-altered images are not recommended. <span style={{ fontWeight: 700, color: '#783C91' }}>Learn more</span>
                </Typography>
              </InfoCard>
            </LogoUploadSection>

            <ButtonContainer>
              <ButtonPrimary onClick={handleNext} sx={{ alignSelf: 'stretch' }}>
                Next
              </ButtonPrimary>
              <SkipButton onClick={handleSkip}>Skip</SkipButton>
            </ButtonContainer>
          </StepContent>
        );

      case 4:
        return (
          <StepContent>
            <StepHeader>
              <HeaderRow>
                <BackButton onClick={handleBack} />
                <StepTitle>Link your Social media Account</StepTitle>
              </HeaderRow>
            </StepHeader>

            <SocialMediaSection>
              <SocialMediaLink platform="Instagram" onClick={() => console.log('Link Instagram')} />
              <SocialMediaLink platform="Facebook" onClick={() => console.log('Link Facebook')} />
              <SocialMediaLink platform="TikTok" onClick={() => console.log('Link TikTok')} />
              <SocialMediaLink platform="X" onClick={() => console.log('Link X')} />
              <SocialMediaLink platform="YouTube" onClick={() => console.log('Link YouTube')} />
            </SocialMediaSection>

            <ButtonContainer>
              <ButtonPrimary onClick={handleNext} sx={{ alignSelf: 'stretch' }}>
                Next
              </ButtonPrimary>
              <SkipButton onClick={handleSkip}>Skip</SkipButton>
            </ButtonContainer>
          </StepContent>
        );

      case 5:
        return (
          <StepContent>
            <StepHeader>
              <HeaderRow>
                <BackButton onClick={handleBack} />
                <StepTitle>Add tags that clearly highlight your skills and expertise, making it easy for brands to understand you.</StepTitle>
              </HeaderRow>
              <Box sx={{ display: 'flex', paddingLeft: '48px', alignSelf: 'stretch' }}>
                <ViewExampleLink>View Example</ViewExampleLink>
              </Box>
            </StepHeader>

            <TagsSection>
              <Box sx={{ display: 'flex', gap: '8px', alignSelf: 'stretch' }}>
                <FormField
                  label="Add Tags"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddTag();
                    }
                  }}
                  placeholder="Enter a tag"
                  sx={{ flex: 1 }}
                />
                <Button 
                  onClick={handleAddTag}
                  disabled={!newTag.trim()}
                  sx={{ 
                    minWidth: '80px', 
                    height: '56px',
                    borderRadius: '4px',
                    backgroundColor: '#783C91',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#3F214C'
                    }
                  }}
                >
                  Add
                </Button>
              </Box>

              {data.tags.length > 0 && (
                <TagsContainer>
                  <TagsContent>
                    <TagsDisplay>
                      {data.tags.map((tag, index) => (
                        <TagChip
                          key={index}
                          label={tag}
                          removable
                          onRemove={() => handleRemoveTag(tag)}
                        />
                      ))}
                    </TagsDisplay>
                  </TagsContent>
                </TagsContainer>
              )}
            </TagsSection>

            <ButtonContainer>
              <ButtonPrimary onClick={handleNext} sx={{ alignSelf: 'stretch' }}>
                Complete
              </ButtonPrimary>
              <SkipButton onClick={handleSkip}>Skip</SkipButton>
            </ButtonContainer>
          </StepContent>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Head>
        <title>Brand Onboarding - Social Stratix</title>
        <meta name="description" content="Complete your brand onboarding process" />
      </Head>

      <PageContainer>
        <Header />
        
        <ContentContainer>
          <StepCard>
            <Stepper
              currentStep={currentStep}
              totalSteps={5}
              label={`Question ${currentStep}/5`}
            />
            
            {renderStep()}
          </StepCard>
        </ContentContainer>
      </PageContainer>
    </>
  );
}
