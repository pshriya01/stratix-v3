import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { 
  Box, 
  Typography, 
  Button, 
  TextField,
  IconButton,
  InputAdornment,
  Tab,
  Tabs,
  Chip
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Header from '../components/organisms/Header/Header';
import Footer from '../components/organisms/Footer/Footer';
import SocialMediaIcon, { SocialPlatform } from '../components/atoms/SocialMediaIcon/SocialMediaIcon';

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
  padding: '56px 298px 24px 298px',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
  alignSelf: 'stretch',
  [theme.breakpoints.down('lg')]: {
    padding: '56px 150px 24px 150px'
  },
  [theme.breakpoints.down('md')]: {
    padding: '56px 60px 24px 60px'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '56px 20px 24px 20px'
  }
}));

const MainCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '8px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '10px',
  alignSelf: 'stretch',
  background: '#FFF',
  borderRadius: '8px'
}));

const HeroSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '24px 24px 40px 24px',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '12px',
  alignSelf: 'stretch',
  borderRadius: '8px',
  background: '#F2EBDC'
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  color: '#1E002B',
  textAlign: 'center',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '24px',
  fontWeight: 600,
  lineHeight: 'normal'
}));

const HeroGradientText = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '44px',
  fontWeight: 600,
  lineHeight: 'normal',
  background: 'linear-gradient(90deg, #FFC244 0.04%, #DB9400 20.27%, #783C91 72.66%, #DD8AFF 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  [theme.breakpoints.down('md')]: {
    fontSize: '36px'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '28px'
  }
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  color: '#443A48',
  textAlign: 'center',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '24px',
  fontWeight: 400,
  lineHeight: 'normal',
  [theme.breakpoints.down('md')]: {
    fontSize: '20px'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px'
  }
}));

const LearnMoreButton = styled(Button)(({ theme }) => ({
  height: '41px',
  borderRadius: '100px',
  background: '#DB9400',
  color: '#FFF',
  textAlign: 'center',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: 'normal',
  textTransform: 'uppercase',
  padding: '10px 24px',
  '&:hover': {
    background: '#C7850A'
  }
}));

const TabsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'stretch',
  borderBottom: '1px solid #DFDFDF'
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  '& .MuiTab-root': {
    height: '40px',
    minWidth: '56px',
    maxWidth: '350px',
    padding: '0 24px',
    color: '#1E002B',
    fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
    fontSize: '14px',
    fontWeight: 400,
    textTransform: 'none',
    borderBottom: '1px solid #CFCFCF'
  },
  '& .MuiTab-root.Mui-selected': {
    fontWeight: 600,
    borderBottom: '2px solid #783C91',
    background: '#FFF'
  },
  '& .MuiTabs-indicator': {
    display: 'none'
  }
}));

const FiltersContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '24px',
  flex: 1
}));

const FilterOption = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  cursor: 'pointer'
}));

const FilterText = styled(Typography)(({ theme }) => ({
  color: '#1E002B',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: 'normal'
}));

const CampaignsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  paddingTop: '16px',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  alignSelf: 'stretch'
}));

const CampaignCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '16px 8px 24px 8px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '10px',
  alignSelf: 'stretch',
  borderBottom: '1px solid #DFDFDF',
  background: '#FFF',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
  '&:hover': {
    backgroundColor: '#FAF9F6'
  }
}));

const CampaignContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '11px',
  alignSelf: 'stretch'
}));

const BrandAvatar = styled('img')(({ theme }) => ({
  width: '60px',
  height: '60px',
  borderRadius: '168px',
  border: '2px solid #FFF',
  marginTop: '20px'
}));

const CampaignDetails = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  flex: '1 0 0'
}));

const CampaignHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  alignSelf: 'stretch'
}));

const TimeStamp = styled(Typography)(({ theme }) => ({
  color: '#676767',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: 'normal'
}));

const CampaignTitleSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  alignSelf: 'stretch'
}));

const CampaignInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '4px',
  flex: '1 0 0'
}));

const BrandName = styled(Typography)(({ theme }) => ({
  color: '#783C91',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '12px',
  fontWeight: 600,
  lineHeight: 'normal',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline'
  }
}));

const CampaignTitle = styled(Typography)(({ theme }) => ({
  color: '#1E002B',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '24px',
  fontWeight: 400,
  lineHeight: 'normal'
}));

const CampaignTags = styled(Typography)(({ theme }) => ({
  alignSelf: 'stretch',
  color: '#676767',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: 'normal'
}));

const ActionButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '16px'
}));

const SaveButton = styled(Button)(({ theme }) => ({
  height: '40px',
  borderRadius: '100px',
  border: '1px solid #783C91',
  padding: '10px 16px',
  color: '#783C91',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '14px',
  fontWeight: 600,
  textTransform: 'uppercase',
  '&:hover': {
    backgroundColor: 'rgba(120, 60, 145, 0.04)'
  }
}));

const ApplyButton = styled(Button)(({ theme }) => ({
  height: '40px',
  borderRadius: '100px',
  background: '#783C91',
  color: '#FFF',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '14px',
  fontWeight: 600,
  textTransform: 'uppercase',
  padding: '10px 24px',
  '&:hover': {
    background: '#5F2E75'
  }
}));

const CampaignDescription = styled(Typography)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flex: '1 0 0',
  alignSelf: 'stretch',
  overflow: 'hidden',
  color: '#1E002B',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: 'normal'
}));

const CampaignMeta = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  alignSelf: 'stretch'
}));

const MetaItem = styled(Typography)(({ theme }) => ({
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: 'normal'
}));

const SocialPlatforms = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
}));

const SocialLabel = styled(Typography)(({ theme }) => ({
  color: '#1E002B',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: 'normal'
}));

const SocialIconsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '16px'
}));

const Separator = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 20L12 4H14L14 20H12Z" fill="#676767"/>
  </svg>
);

const SeeMoreContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4px',
  cursor: 'pointer',
  padding: '16px'
}));

const SeeMoreText = styled(Typography)(({ theme }) => ({
  color: '#783C91',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: 'normal'
}));

// Mock data
const mockCampaigns = [
  {
    id: '1',
    brandName: 'Brand name',
    campaignName: 'Campaign name',
    tags: 'Lifestyle, Fashion, Beauty',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla...',
    location: 'Bangalore',
    budget: '₹ 1,000',
    platforms: ['youtube', 'x', 'tiktok', 'instagram', 'facebook'] as SocialPlatform[],
    timestamp: 'Posted 3 hours ago',
    avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/a886c16b3b008955a2764cd226317cf690321858?width=120'
  },
  {
    id: '2',
    brandName: 'Brand name',
    campaignName: 'Campaign name',
    tags: 'Lifestyle, Fashion, Beauty',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla...',
    location: 'Bangalore',
    budget: '₹ 1,000',
    platforms: ['youtube', 'x', 'tiktok', 'instagram', 'facebook'] as SocialPlatform[],
    timestamp: 'Posted 3 hours ago',
    avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/a886c16b3b008955a2764cd226317cf690321858?width=120'
  },
  {
    id: '3',
    brandName: 'Brand name',
    campaignName: 'Campaign name',
    tags: 'Lifestyle, Fashion, Beauty',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla...',
    location: 'Bangalore',
    budget: '₹ 1,000',
    platforms: ['youtube', 'x', 'tiktok', 'instagram', 'facebook'] as SocialPlatform[],
    timestamp: 'Posted 3 hours ago',
    avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/a886c16b3b008955a2764cd226317cf690321858?width=120'
  },
  {
    id: '4',
    brandName: 'Brand name',
    campaignName: 'Campaign name',
    tags: 'Lifestyle, Fashion, Beauty',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla...',
    location: 'Bangalore',
    budget: '₹ 1,000',
    platforms: ['youtube', 'x', 'tiktok', 'instagram', 'facebook'] as SocialPlatform[],
    timestamp: 'Posted 3 hours ago',
    avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/a886c16b3b008955a2764cd226317cf690321858?width=120'
  }
];

export default function InfluencersPage() {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState(0);
  const [searchValue, setSearchValue] = useState('');

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const handleCampaignClick = (campaignId: string) => {
    router.push(`/campaigns/${campaignId}`);
  };

  const handleApply = (campaignId: string) => {
    // Handle apply logic
    console.log('Apply to campaign:', campaignId);
  };

  const handleSave = (campaignId: string) => {
    // Handle save logic
    console.log('Save campaign:', campaignId);
  };

  return (
    <>
      <Head>
        <title>Find Work - Social Stratix</title>
        <meta name="description" content="Discover campaigns tailored to your profile and enhance your visibility" />
      </Head>
      
      <PageContainer>
        <Header 
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          hasNotifications={true}
        />

        <ContentContainer>
          <MainCard>
            {/* Hero Section */}
            <HeroSection>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <HeroTitle>Let brands connect with you.</HeroTitle>
                <HeroGradientText>Get Discovered. Earn more!</HeroGradientText>
              </Box>
              <HeroSubtitle>
                Find campaigns that are tailored to your profile, increase your earnings, and enhance your visibility.
              </HeroSubtitle>
              <LearnMoreButton>
                Learn more
              </LearnMoreButton>
            </HeroSection>

            {/* Tabs and Filters */}
            <TabsContainer>
              <StyledTabs value={selectedTab} onChange={handleTabChange}>
                <Tab label="All Listing" />
                <Tab label="Suggested" />
                <Tab label="Saved" />
              </StyledTabs>

              <FiltersContainer>
                <FilterOption>
                  <FilterText>Clear Filter</FilterText>
                  <CloseIcon sx={{ width: 24, height: 24, color: '#676767' }} />
                </FilterOption>

                <FilterOption>
                  <Typography sx={{ color: '#1E002B', fontSize: '14px', fontWeight: 400 }}>
                    Filter:
                  </Typography>
                  <FilterText sx={{ color: '#783C91' }}>
                    Filter1 <Box component="span" sx={{ color: '#783C91' }}>+2</Box>
                  </FilterText>
                  <ArrowDropDownIcon sx={{ width: 24, height: 24, color: '#676767' }} />
                </FilterOption>

                <FilterOption>
                  <Typography sx={{ color: '#1E002B', fontSize: '14px', fontWeight: 400 }}>
                    Sort by:
                  </Typography>
                  <FilterText>Date Posted</FilterText>
                  <ArrowDropDownIcon sx={{ width: 24, height: 24, color: '#676767' }} />
                </FilterOption>
              </FiltersContainer>
            </TabsContainer>

            {/* Campaigns List */}
            <CampaignsContainer>
              {mockCampaigns.map((campaign) => (
                <CampaignCard key={campaign.id} onClick={() => handleCampaignClick(campaign.id)}>
                  <CampaignContent>
                    <BrandAvatar src={campaign.avatar} alt={campaign.brandName} />
                    
                    <CampaignDetails>
                      <CampaignHeader>
                        <Box sx={{ display: 'flex', height: '20px', alignItems: 'center', gap: '8px', alignSelf: 'stretch' }}>
                          <TimeStamp>{campaign.timestamp}</TimeStamp>
                        </Box>
                        
                        <CampaignTitleSection>
                          <CampaignInfo>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                              <BrandName>{campaign.brandName}</BrandName>
                              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M1.75 13.75C1.3375 13.75 0.984375 13.6031 0.690625 13.3094C0.396875 13.0156 0.25 12.6625 0.25 12.25V1.75C0.25 1.3375 0.396875 0.984375 0.690625 0.690625C0.984375 0.396875 1.3375 0.25 1.75 0.25H7V1.75H1.75V12.25H12.25V7H13.75V12.25C13.75 12.6625 13.6031 13.0156 13.3094 13.3094C13.0156 13.6031 12.6625 13.75 12.25 13.75H1.75ZM5.275 9.775L4.225 8.725L11.2 1.75H8.5V0.25H13.75V5.5H12.25V2.8L5.275 9.775Z" fill="#783C91"/>
                              </svg>
                            </Box>
                            <CampaignTitle>{campaign.campaignName}</CampaignTitle>
                            <CampaignTags>{campaign.tags}</CampaignTags>
                          </CampaignInfo>

                          <ActionButtons>
                            <SaveButton 
                              startIcon={<FavoriteIcon />}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSave(campaign.id);
                              }}
                            >
                              Save
                            </SaveButton>
                            <ApplyButton 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleApply(campaign.id);
                              }}
                            >
                              Apply
                            </ApplyButton>
                          </ActionButtons>
                        </CampaignTitleSection>
                      </CampaignHeader>

                      <Box sx={{ display: 'flex', height: '34px', alignItems: 'flex-start', gap: '10px', alignSelf: 'stretch' }}>
                        <CampaignDescription>{campaign.description}</CampaignDescription>
                      </Box>
                    </CampaignDetails>
                  </CampaignContent>

                  <CampaignMeta>
                    <MetaItem sx={{ color: '#1E002B' }}>
                      Location: <Box component="span" sx={{ color: '#755002' }}>{campaign.location}</Box>
                    </MetaItem>
                    <Separator />
                    <MetaItem sx={{ color: '#1E002B' }}>
                      Budget: <Box component="span" sx={{ color: '#755002' }}>{campaign.budget}</Box>
                    </MetaItem>
                    <Separator />
                    <SocialPlatforms>
                      <SocialLabel>Post on:</SocialLabel>
                      <SocialIconsContainer>
                        {campaign.platforms.map((platform) => (
                          <SocialMediaIcon key={platform} platform={platform} />
                        ))}
                      </SocialIconsContainer>
                    </SocialPlatforms>
                  </CampaignMeta>
                </CampaignCard>
              ))}

              {/* Disabled Campaign Example */}
              <CampaignCard 
                sx={{ 
                  background: '#FAF9F6',
                  '& *': { opacity: 0.7 },
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(103, 103, 103, 0.70)',
                    pointerEvents: 'none'
                  }
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '16px'
                  }}
                >
                  <Typography
                    sx={{
                      color: '#FFF',
                      fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
                      fontSize: '24px',
                      fontWeight: 600,
                      lineHeight: 'normal'
                    }}
                  >
                    Campaign has been closed
                  </Typography>
                  <Button
                    sx={{
                      height: '40px',
                      borderRadius: '100px',
                      background: '#E8E2EB',
                      color: '#3F214C',
                      fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
                      fontSize: '14px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      padding: '10px 24px'
                    }}
                  >
                    Remove
                  </Button>
                </Box>
                {/* Same campaign content as above but will be visually disabled */}
                <CampaignContent>
                  <BrandAvatar src={mockCampaigns[0].avatar} alt="Brand name" />
                  <CampaignDetails>
                    <CampaignHeader>
                      <Box sx={{ display: 'flex', height: '20px', alignItems: 'center', gap: '8px', alignSelf: 'stretch' }}>
                        <TimeStamp>Posted 3 hours ago</TimeStamp>
                      </Box>
                      <CampaignTitleSection>
                        <CampaignInfo>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <BrandName>Brand name</BrandName>
                          </Box>
                          <CampaignTitle>Campaign name</CampaignTitle>
                          <CampaignTags>Lifestyle, Fashion, Beauty</CampaignTags>
                        </CampaignInfo>
                      </CampaignTitleSection>
                    </CampaignHeader>
                    <Box sx={{ display: 'flex', height: '34px', alignItems: 'flex-start', gap: '10px', alignSelf: 'stretch' }}>
                      <CampaignDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</CampaignDescription>
                    </Box>
                  </CampaignDetails>
                </CampaignContent>
                <CampaignMeta>
                  <MetaItem sx={{ color: '#1E002B' }}>
                    Location: <Box component="span" sx={{ color: '#755002' }}>Bangalore</Box>
                  </MetaItem>
                  <Separator />
                  <MetaItem sx={{ color: '#1E002B' }}>
                    Budget: <Box component="span" sx={{ color: '#755002' }}>₹ 1,000</Box>
                  </MetaItem>
                  <Separator />
                  <SocialPlatforms>
                    <SocialLabel>Post on:</SocialLabel>
                    <SocialIconsContainer>
                      {['youtube', 'x', 'tiktok', 'instagram', 'facebook'].map((platform) => (
                        <SocialMediaIcon key={platform} platform={platform as SocialPlatform} />
                      ))}
                    </SocialIconsContainer>
                  </SocialPlatforms>
                </CampaignMeta>
              </CampaignCard>

              {/* See More */}
              <SeeMoreContainer>
                <SeeMoreText>See more</SeeMoreText>
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  style={{ transform: 'rotate(90deg)' }}
                >
                  <path d="M12 12.6L16.6 8L18 9.4L12 15.4L6 9.4L7.4 8L12 12.6Z" fill="#783C91"/>
                </svg>
              </SeeMoreContainer>
            </CampaignsContainer>
          </MainCard>
        </ContentContainer>

        <Footer />
      </PageContainer>
    </>
  );
}
