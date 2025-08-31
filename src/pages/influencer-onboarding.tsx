import * as React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Box, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel, Chip, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
import Stepper from '@/components/molecules/Stepper/Stepper';
import Logo from '@/components/atoms/Logo/Logo';

const OnboardingContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: `linear-gradient(0deg, rgba(250, 249, 246, 0.70) 0%, rgba(250, 249, 246, 0.70) 100%), 
               linear-gradient(106deg, rgba(235, 188, 254, 0.30) 0%, rgba(240, 196, 105, 0.30) 100%), 
               #FFF`,
  display: 'flex',
  flexDirection: 'column',
}));

const Header = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '80px',
  background: '#FFF',
  display: 'flex',
  alignItems: 'center',
  padding: '2px 20px',
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

const StepCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '40px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  border: `1px solid ${theme.palette.grey[200]}`,
  background: '#FFF',
  backdropFilter: 'blur(10px)',
  maxWidth: '600px',
  width: '100%',
  gap: '10px',
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
    maxWidth: '400px',
  },
}));

const BackButton = styled(IconButton)(({ theme }) => ({
  padding: '4px 8px',
  borderRadius: '20px',
  background: '#DFDFDF',
  '&:hover': {
    background: '#CFCFCF',
  },
}));

const SocialMediaButton = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '10px',
  width: '100%',
  borderRadius: '4px',
  border: '1px solid #755002',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgba(117, 80, 2, 0.04)',
  },
}));

const SocialMediaContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '8px 0 8px 16px',
  alignItems: 'center',
  gap: '8px',
  width: '100%',
  borderRadius: '4px',
}));

const UploadArea = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '200px',
  height: '200px',
  padding: '82px 31px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  borderRadius: '100px',
  border: '3px dashed #783C91',
  background: '#FFF',
  cursor: 'pointer',
  textAlign: 'center',
  '&:hover': {
    backgroundColor: '#F9F9F9',
  },
}));

type Step1Data = {
  countryCode: string;
  phone: string;
  country: string;
  state: string;
  pincode: string;
  city: string;
  address: string;
};

type Step2Data = {
  description: string;
};

type Step3Data = {
  tags: string[];
  tagInput: string;
};

type Step4Data = {
  socialMedia: {
    instagram: string;
    facebook: string;
    tiktok: string;
    x: string;
    youtube: string;
  };
};

type Step5Data = {
  profilePic: File | null;
};

export default function InfluencerOnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  // Form data for each step
  const [step1Data, setStep1Data] = useState<Step1Data>({
    countryCode: '🇮🇳',
    phone: '',
    country: '',
    state: '',
    pincode: '',
    city: '',
    address: '',
  });

  const [step2Data, setStep2Data] = useState<Step2Data>({
    description: '',
  });

  const [step3Data, setStep3Data] = useState<Step3Data>({
    tags: [],
    tagInput: '',
  });

  const [step4Data, setStep4Data] = useState<Step4Data>({
    socialMedia: {
      instagram: '',
      facebook: '',
      tiktok: '',
      x: '',
      youtube: '',
    },
  });

  const [step5Data, setStep5Data] = useState<Step5Data>({
    profilePic: null,
  });

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete onboarding
      router.push('/');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      router.push('/onboarding');
    }
  };

  const handleSkip = () => {
    handleNext();
  };

  const addTag = () => {
    if (step3Data.tagInput.trim() && !step3Data.tags.includes(step3Data.tagInput.trim())) {
      setStep3Data({
        ...step3Data,
        tags: [...step3Data.tags, step3Data.tagInput.trim()],
        tagInput: '',
      });
    }
  };

  const removeTag = (tagToRemove: string) => {
    setStep3Data({
      ...step3Data,
      tags: step3Data.tags.filter(tag => tag !== tagToRemove),
    });
  };

  const renderStep1 = () => (
    <StepContent>
      <Typography variant="h3" sx={{ fontSize: '24px', fontWeight: 700, textAlign: 'center' }}>
        Where are you from?
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
        <Box sx={{ display: 'flex', gap: '8px', width: '100%' }}>
          <TextField
            value={step1Data.countryCode}
            sx={{ width: '80px' }}
            InputProps={{
              endAdornment: <ArrowDropDownIcon sx={{ color: '#676767' }} />,
            }}
          />
          <TextField
            label=""
            placeholder="1234567890"
            value={step1Data.phone}
            onChange={(e) => setStep1Data({ ...step1Data, phone: e.target.value })}
            sx={{ flex: 1 }}
          />
        </Box>

        <FormControl fullWidth>
          <InputLabel>Select country</InputLabel>
          <Select
            value={step1Data.country}
            onChange={(e) => setStep1Data({ ...step1Data, country: e.target.value })}
            IconComponent={ArrowDropDownIcon}
          >
            <MenuItem value="India">India</MenuItem>
            <MenuItem value="USA">USA</MenuItem>
            <MenuItem value="UK">UK</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="State"
          value={step1Data.state}
          onChange={(e) => setStep1Data({ ...step1Data, state: e.target.value })}
          fullWidth
        />

        <TextField
          label="Pincode"
          value={step1Data.pincode}
          onChange={(e) => setStep1Data({ ...step1Data, pincode: e.target.value })}
          fullWidth
        />

        <TextField
          label="City"
          value={step1Data.city}
          onChange={(e) => setStep1Data({ ...step1Data, city: e.target.value })}
          fullWidth
        />

        <TextField
          label="Address(Optional)"
          value={step1Data.address}
          onChange={(e) => setStep1Data({ ...step1Data, address: e.target.value })}
          multiline
          rows={3}
          fullWidth
        />
      </Box>

      <Button variant="contained" fullWidth onClick={handleNext}>
        Next
      </Button>
    </StepContent>
  );

  const renderStep2 = () => (
    <StepContent>
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '8px', width: '100%' }}>
        <BackButton onClick={handleBack}>
          <ArrowBackIcon sx={{ color: '#676767' }} />
        </BackButton>
        <Typography variant="h3" sx={{ flex: 1, fontSize: '24px', fontWeight: 700 }}>
          Describe the kind of influencer you are
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', paddingLeft: '48px', justifyContent: 'flex-start', width: '100%' }}>
        <Typography sx={{ color: '#783C91', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}>
          View Example
        </Typography>
      </Box>

      <TextField
        label="Describe the kind of influencer you are"
        value={step2Data.description}
        onChange={(e) => setStep2Data({ ...step2Data, description: e.target.value })}
        fullWidth
        multiline
        rows={3}
      />

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
        <Button variant="contained" fullWidth onClick={handleNext}>
          Next
        </Button>
        <Button 
          variant="text" 
          fullWidth 
          onClick={handleSkip}
          sx={{ color: '#783C91', textTransform: 'uppercase' }}
        >
          Skip
        </Button>
      </Box>

      <Box
        component="img"
        src="https://api.builder.io/api/v1/image/assets/TEMP/f5f1c2f3f3fa87f8afc6e8998dced101d09bccde?width=884"
        alt="Illustration"
        sx={{ width: '100%', height: '199px', objectFit: 'contain' }}
      />
    </StepContent>
  );

  const renderStep3 = () => (
    <StepContent>
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '8px', width: '100%' }}>
        <BackButton onClick={handleBack}>
          <ArrowBackIcon sx={{ color: '#676767' }} />
        </BackButton>
        <Typography variant="h3" sx={{ flex: 1, fontSize: '24px', fontWeight: 700 }}>
          Add tags that clearly highlight your skills and expertise, making it easy for brands to understand you.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', paddingLeft: '48px', justifyContent: 'flex-start', width: '100%' }}>
        <Typography sx={{ color: '#783C91', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}>
          View Example
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: 1, width: '100%' }}>
        <TextField
          label="Add Tags"
          value={step3Data.tagInput}
          onChange={(e) => setStep3Data({ ...step3Data, tagInput: e.target.value })}
          onKeyPress={(e) => e.key === 'Enter' && addTag()}
          sx={{ flex: 1 }}
        />
        <Button variant="outlined" onClick={addTag}>Add</Button>
      </Box>

      {step3Data.tags.length > 0 && (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, width: '100%' }}>
          {step3Data.tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              onDelete={() => removeTag(tag)}
              color="primary"
              variant="outlined"
            />
          ))}
        </Box>
      )}

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
        <Button variant="contained" fullWidth onClick={handleNext}>
          Next
        </Button>
        <Button 
          variant="text" 
          fullWidth 
          onClick={handleSkip}
          sx={{ color: '#783C91', textTransform: 'uppercase' }}
        >
          Skip
        </Button>
      </Box>

      <Box
        component="img"
        src="https://api.builder.io/api/v1/image/assets/TEMP/bfad54c8e179bbd53541a47946f808493140c159?width=884"
        alt="Illustration"
        sx={{ width: '100%', height: '198px', objectFit: 'contain' }}
      />
    </StepContent>
  );

  const renderStep4 = () => (
    <StepContent>
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '8px', width: '100%' }}>
        <BackButton onClick={handleBack}>
          <ArrowBackIcon sx={{ color: '#676767' }} />
        </BackButton>
        <Typography variant="h3" sx={{ flex: 1, fontSize: '24px', fontWeight: 700 }}>
          Link your Social media Account
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
        {[
          { platform: 'Instagram', icon: 'https://api.builder.io/api/v1/image/assets/TEMP/4cc0ba0fa2b9f800faa505ef121cedcb508f17e2?width=48' },
          { platform: 'Facebook', icon: 'https://api.builder.io/api/v1/image/assets/TEMP/3375389a700d5c66c5cd2ede686b23e114909f33?width=48' },
          { platform: 'TikTok', icon: 'https://api.builder.io/api/v1/image/assets/TEMP/9a0b986c268b9a976f3999df3ad397df5bf69823?width=36' },
          { platform: 'X', icon: 'https://api.builder.io/api/v1/image/assets/TEMP/e2f424c3c0aa84d14635b97a57fd84a68ec64199?width=48' },
          { platform: 'YouTube', icon: 'https://api.builder.io/api/v1/image/assets/TEMP/5a186903571fcf9612613ccc5438fe6173db104d?width=48' },
        ].map((social) => (
          <SocialMediaButton key={social.platform}>
            <SocialMediaContent>
              <Box
                component="img"
                src={social.icon}
                alt={social.platform}
                sx={{ width: '24px', height: '24px' }}
              />
              <Typography sx={{ color: '#755002', fontSize: '14px', flex: 1 }}>
                Link {social.platform} Account
              </Typography>
            </SocialMediaContent>
          </SocialMediaButton>
        ))}
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
        <Button variant="contained" fullWidth onClick={handleNext}>
          Next
        </Button>
        <Button 
          variant="text" 
          fullWidth 
          onClick={handleSkip}
          sx={{ color: '#783C91', textTransform: 'uppercase' }}
        >
          Skip
        </Button>
      </Box>
    </StepContent>
  );

  const renderStep5 = () => (
    <StepContent>
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '8px', width: '100%' }}>
        <BackButton onClick={handleBack}>
          <ArrowBackIcon sx={{ color: '#676767' }} />
        </BackButton>
        <Typography variant="h3" sx={{ flex: 1, fontSize: '24px', fontWeight: 700 }}>
          Add your profile pic
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '32px', width: '100%', flexWrap: 'wrap' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
          <UploadArea>
            <Typography sx={{ fontSize: '18px', fontWeight: 700, color: '#1E002B' }}>
              Add or drop photo here
            </Typography>
          </UploadArea>
          <Typography sx={{ color: '#676767', fontSize: '14px' }}>
            200X200 Min/ 10 MB Max
          </Typography>
        </Box>

        <Box sx={{ padding: '24px', background: '#FFF', borderRadius: '4px', maxWidth: '280px' }}>
          <Typography sx={{ fontSize: '18px', fontWeight: 700, color: '#1E002B', mb: 2 }}>
            Show clients the best version of yourself!
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', mb: 2 }}>
            <Box sx={{ width: '50px', height: '50px', borderRadius: '50%', background: '#D9D9D9' }} />
            <Box sx={{ width: '37.5px', height: '37.5px', borderRadius: '50%', background: '#D9D9D9' }} />
            <Box sx={{ width: '25px', height: '25px', borderRadius: '50%', background: '#D9D9D9' }} />
            <Box sx={{ width: '12.5px', height: '12.5px', borderRadius: '50%', background: '#D9D9D9' }} />
          </Box>

          <Typography sx={{ fontSize: '12px', color: '#676767' }}>
            Must be an actual photo of you. Logos, clip-art, group photos, and digitally-altered images are not recommended.{' '}
            <span style={{ color: '#783C91', fontWeight: 700 }}>Learn more</span>
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
        <Button variant="contained" fullWidth onClick={handleNext}>
          Next
        </Button>
        <Button 
          variant="text" 
          fullWidth 
          onClick={handleSkip}
          sx={{ color: '#783C91', textTransform: 'uppercase' }}
        >
          Skip
        </Button>
      </Box>
    </StepContent>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1: return renderStep1();
      case 2: return renderStep2();
      case 3: return renderStep3();
      case 4: return renderStep4();
      case 5: return renderStep5();
      default: return renderStep1();
    }
  };

  return (
    <>
      <Head>
        <title>Influencer Onboarding - Social Stratix</title>
      </Head>
      <OnboardingContainer>
        <Header>
          <Logo size="medium" />
        </Header>

        <MainContent>
          <StepCard>
            <Stepper currentStep={currentStep} totalSteps={totalSteps} />
            {renderCurrentStep()}
          </StepCard>
        </MainContent>
      </OnboardingContainer>
    </>
  );
}
