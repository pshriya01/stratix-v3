import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Step,
  Stepper as MuiStepper,
  StepLabel,
  StepContent
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Header from '../components/organisms/Header/Header';
import Footer from '../components/organisms/Footer/Footer';
import PlatformChip from '../components/atoms/PlatformChip/PlatformChip';
import FileUploadArea from '../components/atoms/FileUploadArea/FileUploadArea';
import { SocialPlatform } from '../components/atoms/SocialMediaIcon/SocialMediaIcon';

const PageContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: `linear-gradient(0deg, rgba(250, 249, 246, 0.70) 0%, rgba(250, 249, 246, 0.70) 100%),
               linear-gradient(106deg, rgba(235, 188, 254, 0.30) 0%, rgba(240, 196, 105, 0.30) 100%),
               #FFF`,
  display: 'flex',
  flexDirection: 'column'
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '26px 240px',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
  alignSelf: 'stretch',
  [theme.breakpoints.down('lg')]: {
    padding: '26px 120px'
  },
  [theme.breakpoints.down('md')]: {
    padding: '26px 60px'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '26px 20px'
  }
}));

const FormContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '16px 32px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  borderRadius: '8px',
  backgroundColor: '#FFF'
}));

const StepSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  paddingBottom: '16px',
  flexDirection: 'column',
  alignItems: 'flex-start'
}));

const StepHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '8px 0',
  alignItems: 'center',
  gap: '24px',
  alignSelf: 'stretch',
  borderBottom: '1px solid #DFDFDF'
}));

const StepIndicator = styled(Box, { shouldForwardProp: (prop) => prop !== 'active' })<{ active?: boolean }>(({ theme, active }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
}));

const StepNumber = styled(Box, { shouldForwardProp: (prop) => prop !== 'active' })<{ active?: boolean }>(({ theme, active }) => ({
  display: 'flex',
  width: '24px',
  height: '24px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  borderRadius: '12px',
  border: '1px solid #DB9400',
  backgroundColor: active ? '#1E002B' : '#F0E2C4',
  color: active ? '#FFF' : '#1E002B',
  fontSize: '14px',
  fontWeight: 600,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif'
}));

const StepTitle = styled(Typography, { shouldForwardProp: (prop) => prop !== 'active' })<{ active?: boolean }>(({ theme, active }) => ({
  color: active ? '#2B2B2B' : '#1E002B',
  fontSize: '14px',
  fontWeight: 400,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal'
}));

const FormContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '0 24px 16px 0',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px'
}));

const FormDescription = styled(Typography)(({ theme }) => ({
  alignSelf: 'stretch',
  color: '#676767',
  fontSize: '14px',
  fontWeight: 400,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal',
  padding: '16px 0',
  width: '800px'
}));

const FormField = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px'
}));

const FieldLabel = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '8px',
  alignSelf: 'stretch'
}));

const FieldTitle = styled(Typography)(({ theme }) => ({
  color: '#1E002B',
  textAlign: 'center',
  fontSize: '18px',
  fontWeight: 600,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal'
}));

const RequiredAsterisk = styled(Typography)(({ theme }) => ({
  color: '#B3261E',
  textAlign: 'center',
  fontSize: '18px',
  fontWeight: 600,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal'
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: '800px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '4px',
    '& fieldset': {
      borderColor: '#AA86B9'
    },
    '&:hover fieldset': {
      borderColor: '#783C91'
    },
    '&.Mui-focused fieldset': {
      borderColor: '#783C91'
    }
  },
  '& .MuiInputLabel-root': {
    color: '#3F214C',
    fontSize: '14px',
    fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif'
  }
}));

const PlatformSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '800px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px'
}));

const PlatformGrid = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  alignContent: 'center',
  gap: '16px',
  alignSelf: 'stretch',
  flexWrap: 'wrap'
}));

const AttachmentsSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '800px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px'
}));

const AttachmentsGrid = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '8px',
  alignSelf: 'stretch'
}));

const ActionsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '16px',
  alignSelf: 'stretch'
}));

const ActionButton = styled(Button)<{ disabled?: boolean }>(({ theme, disabled }) => ({
  height: '41px',
  borderRadius: '100px',
  padding: '10px 24px',
  textTransform: 'uppercase',
  fontWeight: 700,
  fontSize: '14px',
  backgroundColor: disabled ? '#DFDFDF' : '#783C91',
  color: disabled ? 'rgba(63, 33, 76, 0.38)' : '#FFF',
  '&:hover': {
    backgroundColor: disabled ? '#DFDFDF' : '#3F214C'
  }
}));

interface FormData {
  campaignName: string;
  description: string;
  platforms: SocialPlatform[];
  tags: string;
  budget: string;
  attachments: File[];
}

export default function PostCampaignPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    campaignName: '',
    description: '',
    platforms: [],
    tags: '',
    budget: '',
    attachments: []
  });

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePlatformToggle = (platform: SocialPlatform) => {
    setFormData(prev => ({
      ...prev,
      platforms: prev.platforms.includes(platform)
        ? prev.platforms.filter(p => p !== platform)
        : [...prev.platforms, platform]
    }));
  };

  const handleFileSelect = (files: FileList | null) => {
    if (files) {
      setFormData(prev => ({
        ...prev,
        attachments: [...prev.attachments, ...Array.from(files)]
      }));
    }
  };

  const handleNext = () => {
    if (currentStep === 0) {
      setCurrentStep(1);
    } else {
      // Submit form - redirect to the brand page for this campaign
      console.log('Form submitted:', formData);
      // In a real app, this would be the actual brand ID from the campaign creation response
      router.push('/brands/brand-1');
    }
  };

  const isStep1Valid = formData.campaignName.trim() !== '' && 
                      formData.description.trim() !== '' && 
                      formData.platforms.length > 0;

  const isStep2Valid = formData.budget.trim() !== '';

  const canProceed = currentStep === 0 ? isStep1Valid : isStep2Valid;

  return (
    <>
      <Head>
        <title>Post Campaign - Social Stratix</title>
        <meta name="description" content="Create a new campaign to find influencers" />
      </Head>
      
      <PageContainer>
        <Header hasNotifications={true} />

        <ContentContainer>
          <FormContainer>
            {/* Step 1: Campaign Details */}
            <StepSection>
              <StepHeader>
                <StepIndicator active={currentStep === 0}>
                  <StepNumber active={currentStep === 0}>1</StepNumber>
                  <StepTitle active={currentStep === 0}>Campaign details</StepTitle>
                </StepIndicator>
              </StepHeader>
              
              {currentStep === 0 && (
                <FormContent>
                  <FormDescription>
                    Share details about the influencers you'd like to target. We'll gather campaign specifics, including content needs and product descriptions, once your targeting is set.
                  </FormDescription>

                  {/* Campaign Name */}
                  <FormField>
                    <FieldLabel>
                      <FieldTitle>What is the Campaign name?</FieldTitle>
                      <RequiredAsterisk>*</RequiredAsterisk>
                    </FieldLabel>
                    <StyledTextField
                      label="Campaign name"
                      value={formData.campaignName}
                      onChange={(e) => handleInputChange('campaignName', e.target.value)}
                      variant="outlined"
                    />
                  </FormField>

                  {/* Campaign Description */}
                  <FormField>
                    <FieldLabel>
                      <FieldTitle>Write description of the Campaign?</FieldTitle>
                      <RequiredAsterisk>*</RequiredAsterisk>
                    </FieldLabel>
                    <StyledTextField
                      label="Description"
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      variant="outlined"
                      multiline
                      rows={4}
                    />
                  </FormField>

                  {/* Platform Selection */}
                  <PlatformSection>
                    <FieldLabel>
                      <FieldTitle>Where Campaign?</FieldTitle>
                      <RequiredAsterisk>*</RequiredAsterisk>
                    </FieldLabel>
                    <PlatformGrid>
                      {(['youtube', 'facebook', 'instagram', 'tiktok', 'x'] as SocialPlatform[]).map((platform) => (
                        <PlatformChip
                          key={platform}
                          platform={platform}
                          selected={formData.platforms.includes(platform)}
                          onClick={() => handlePlatformToggle(platform)}
                        />
                      ))}
                    </PlatformGrid>
                  </PlatformSection>

                  {/* Tags */}
                  <FormField>
                    <FieldLabel>
                      <FieldTitle>Add tags</FieldTitle>
                    </FieldLabel>
                    <StyledTextField
                      label="Description"
                      value={formData.tags}
                      onChange={(e) => handleInputChange('tags', e.target.value)}
                      variant="outlined"
                      multiline
                      rows={4}
                    />
                  </FormField>

                  {/* Attachments */}
                  <AttachmentsSection>
                    <FieldLabel>
                      <FieldTitle>Add Attachments</FieldTitle>
                    </FieldLabel>
                    <AttachmentsGrid>
                      <FileUploadArea onFileSelect={handleFileSelect} />
                      <FileUploadArea onFileSelect={handleFileSelect} />
                      <FileUploadArea onFileSelect={handleFileSelect} />
                    </AttachmentsGrid>
                  </AttachmentsSection>

                  <ActionsContainer>
                    <ActionButton
                      variant="contained"
                      onClick={handleNext}
                      disabled={!canProceed}
                    >
                      Next
                    </ActionButton>
                  </ActionsContainer>
                </FormContent>
              )}
            </StepSection>

            {/* Step 2: Pricing Details */}
            <StepSection>
              <StepHeader>
                <StepIndicator active={currentStep === 1}>
                  <StepNumber active={currentStep === 1}>2</StepNumber>
                  <StepTitle active={currentStep === 1}>Pricing details</StepTitle>
                </StepIndicator>
              </StepHeader>
              
              {currentStep === 1 && (
                <FormContent>
                  <FormDescription>
                    Provide your pricing details, and estimate costs based on your campaign goals and influencer reach. Get a clear breakdown to align with your targeting strategy.
                  </FormDescription>

                  {/* Campaign Budget */}
                  <FormField>
                    <FieldLabel>
                      <FieldTitle>What is the Campaign budget?</FieldTitle>
                      <RequiredAsterisk>*</RequiredAsterisk>
                    </FieldLabel>
                    <StyledTextField
                      label="Campaign name"
                      value={formData.budget}
                      onChange={(e) => handleInputChange('budget', e.target.value)}
                      variant="outlined"
                      placeholder="₹ 1,000"
                    />
                  </FormField>

                  <ActionsContainer>
                    <ActionButton
                      variant="contained"
                      onClick={handleNext}
                      disabled={!canProceed}
                    >
                      Post Campaign
                    </ActionButton>
                  </ActionsContainer>
                </FormContent>
              )}
            </StepSection>
          </FormContainer>
        </ContentContainer>

        <Footer />
      </PageContainer>
    </>
  );
}
