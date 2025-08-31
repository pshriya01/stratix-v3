import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { 
  Box, 
  Typography, 
  Button, 
  Chip,
  IconButton
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FlagIcon from '@mui/icons-material/Flag';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Header from '../../components/organisms/Header/Header';
import Footer from '../../components/organisms/Footer/Footer';
import SocialMediaIcon, { SocialPlatform } from '../../components/atoms/SocialMediaIcon/SocialMediaIcon';

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

const BackButton = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  alignSelf: 'stretch',
  cursor: 'pointer',
  marginBottom: '16px',
  '&:hover': {
    '& .back-text': {
      textDecoration: 'underline'
    }
  }
}));

const BackText = styled(Typography)(({ theme }) => ({
  color: '#783C91',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: 'normal'
}));

const MainCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '1440px',
  padding: '16px 32px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  borderRadius: '8px',
  background: '#FFF',
  [theme.breakpoints.down('lg')]: {
    width: '100%',
    maxWidth: '1200px'
  },
  [theme.breakpoints.down('md')]: {
    padding: '16px 24px'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '16px 16px'
  }
}));

const CampaignHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  paddingBottom: '16px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  alignSelf: 'stretch',
  borderBottom: '1px solid #DFDFDF'
}));

const BrandSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  alignSelf: 'stretch',
  marginBottom: '16px'
}));

const BrandAvatar = styled('img')(({ theme }) => ({
  width: '40px',
  height: '40px',
  borderRadius: '168px',
  border: '5px solid #FFF'
}));

const BrandName = styled(Typography)(({ theme }) => ({
  color: '#1E002B',
  textAlign: 'center',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: 'normal'
}));

const CampaignContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '16px',
  alignSelf: 'stretch'
}));

const MainContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  alignSelf: 'stretch'
}));

const LeftColumn = styled(Box)(({ theme }) => ({
  display: 'flex',
  paddingRight: '24px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '16px',
  flex: '1 0 0',
  borderRight: '1px solid #DFDFDF'
}));

const CampaignTitleSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '1097px',
  paddingBottom: '16px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  borderBottom: '1px solid #DFDFDF',
  [theme.breakpoints.down('lg')]: {
    width: '100%'
  }
}));

const CampaignTitle = styled(Typography)(({ theme }) => ({
  color: '#1E002B',
  textAlign: 'center',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '33px',
  fontWeight: 400,
  lineHeight: 'normal',
  [theme.breakpoints.down('md')]: {
    fontSize: '28px'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px'
  }
}));

const MetaInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  alignSelf: 'stretch'
}));

const MetaText = styled(Typography)(({ theme }) => ({
  color: '#676767',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: 'normal'
}));

const VerifiedSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
}));

const VerifiedText = styled(Typography)(({ theme }) => ({
  color: '#676767',
  textAlign: 'center',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '12px',
  fontWeight: 600,
  lineHeight: 'normal'
}));

const DescriptionSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  alignSelf: 'stretch'
}));

const DescriptionText = styled(Typography)(({ theme }) => ({
  alignSelf: 'stretch',
  color: '#1E002B',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: 'normal'
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: '#1E002B',
  textAlign: 'center',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '24px',
  fontWeight: 600,
  lineHeight: 'normal'
}));

const PlatformChipsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  alignContent: 'center',
  gap: '16px',
  alignSelf: 'stretch',
  flexWrap: 'wrap'
}));

const PlatformChip = styled(Chip)<{ platformcolor?: string }>(({ theme, platformcolor }) => ({
  display: 'flex',
  height: '32px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  border: `1px solid ${platformcolor || '#EEBA3D'}`,
  background: '#FFF',
  '& .MuiChip-label': {
    color: '#1E002B',
    fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 'normal',
    paddingLeft: '8px',
    paddingRight: '16px'
  },
  '& .MuiChip-icon': {
    marginLeft: '16px',
    marginRight: 0
  }
}));

const TagsText = styled(Typography)(({ theme }) => ({
  alignSelf: 'stretch',
  color: '#1E002B',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '18px',
  fontWeight: 400,
  lineHeight: 'normal'
}));

const AttachmentsGrid = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  alignContent: 'flex-start',
  gap: '8px',
  alignSelf: 'stretch',
  flexWrap: 'wrap'
}));

const AttachmentCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '336px',
  padding: '16px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '10px',
  borderRadius: '8px',
  border: '1px solid #DFDFDF'
}));

const AttachmentOverlay = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '2px 12px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  borderRadius: '800px',
  background: '#DFDFDF'
}));

const AttachmentLabel = styled(Typography)(({ theme }) => ({
  color: '#783C91',
  textAlign: 'center',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '10px',
  fontWeight: 400,
  lineHeight: 'normal'
}));

const AttachmentUrl = styled(Typography)(({ theme }) => ({
  display: 'flex',
  height: '16px',
  flexDirection: 'column',
  justifyContent: 'center',
  flex: '1 0 0',
  overflow: 'hidden',
  color: '#676767',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: 'normal'
}));

const RightColumn = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '49px 0 24px 16px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '24px',
  background: '#FFF',
  [theme.breakpoints.down('md')]: {
    padding: '24px 0 24px 16px'
  }
}));

const ActionButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '16px'
}));

const SaveButton = styled(Button)(({ theme }) => ({
  height: '41px',
  borderRadius: '100px',
  border: '1px solid #783C91',
  padding: '10px 24px 10px 16px',
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
  height: '41px',
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

const InfoSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '16px'
}));

const InfoText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: 'normal'
}));

const Separator = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 20L12 4H14L14 20H12Z" fill="#676767"/>
  </svg>
);

const DetailSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  alignSelf: 'stretch'
}));

const DetailItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '8px',
  alignSelf: 'stretch'
}));

const DetailLabel = styled(Typography)(({ theme }) => ({
  flex: '1 0 0',
  color: '#1E002B',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: 'normal'
}));

const DetailValue = styled(Typography)(({ theme }) => ({
  color: '#1E002B',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: 'normal'
}));

const ReportSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  cursor: 'pointer'
}));

const ReportText = styled(Typography)(({ theme }) => ({
  color: '#783C91',
  textAlign: 'center',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: 'normal'
}));

const LinkCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '16px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '10px',
  alignSelf: 'stretch',
  borderRadius: '8px',
  border: '1px solid #DFDFDF'
}));

const LinkContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  alignSelf: 'stretch'
}));

const LinkText = styled(Typography)(({ theme }) => ({
  display: 'flex',
  height: '16px',
  flexDirection: 'column',
  justifyContent: 'center',
  flex: '1 0 0',
  overflow: 'hidden',
  color: '#676767',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: 'normal'
}));

const SimilarCampaignsSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  paddingTop: '40px',
  flexDirection: 'column',
  alignItems: 'center',
  alignSelf: 'stretch'
}));

const SimilarCampaignCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '16px 8px 24px 8px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '10px',
  alignSelf: 'stretch',
  borderBottom: '1px solid #DFDFDF',
  background: '#FFF'
}));

const platformColors: Record<SocialPlatform, string> = {
  youtube: '#F00',
  facebook: '#0080FF',
  instagram: '#EEBA3D',
  tiktok: '#020202',
  x: '#1E002B'
};

const platformLabels: Record<SocialPlatform, string> = {
  youtube: 'YouTube',
  facebook: 'Facebook',
  instagram: 'Instagram',
  tiktok: 'TikTok',
  x: 'X'
};

// Mock campaign data
const mockCampaignData = {
  id: '1',
  brandName: 'Brand name',
  brandAvatar: 'https://api.builder.io/api/v1/image/assets/TEMP/b9e5504945a01223adf71a1ae579aa26040ae6ad?width=80',
  campaignName: 'Campaign name',
  timestamp: 'Posted 3 hours ago',
  proposals: 'Over 100 applicants',
  verified: true,
  description: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'Turpis ex libero aliquam vulputate semper consectetur. Nunc accumsan diam hac purus, vel volutpat mauris. Vestibulum nunc feugiat phasellus tristique orci vitae efficitur duis. Maximus dis ante penatibus morbi lobortis neque duis pellentesque pharetra. Eu parturient habitant fusce non finibus ac. Class libero fringilla viverra; elit dictumst dui. Finibus consectetur et velit tempus sodales aptent fringilla praesent facilisi. Facilisi auctor donec praesent porta viverra lobortis per phasellus mollis. Rhoncus sed class ex quis; fermentum eros. Ex dapibus blandit mollis cubilia donec, proin interdum pretium. Blandit malesuada vehicula cursus dolor pretium vestibulum ornare per varius. Sit magnis faucibus massa rutrum aenean donec egestas; maximus congue. Ante malesuada pellentesque maecenas convallis malesuada lacinia curae. Dolor blandit morbi litora litora tellus lacus orci in. Proin vestibulum proin turpis ex nibh fames non.'
  ],
  platforms: ['youtube', 'facebook', 'instagram', 'tiktok', 'x'] as SocialPlatform[],
  tags: 'Lifestyle, Fashion, Beauty',
  attachments: [
    { label: 'Brief', url: 'https://www.stratix.com/campaign/brief' },
    { label: 'Brief', url: 'https://www.stratix.com/campaign/brief' },
    { label: 'Brief', url: 'https://www.stratix.com/campaign/brief' }
  ],
  location: 'Bangalore',
  budget: '₹ 1,000',
  costPerView: '₹0.25',
  minFollowers: '1,000',
  duration: '60 days',
  campaignLink: 'https://www.camp_name.com/campaign/brief'
};

const mockSimilarCampaigns = [
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

interface CampaignDetailProps {
  campaignId: string;
}

export default function CampaignDetail({ campaignId }: CampaignDetailProps) {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');

  const handleBack = () => {
    router.back();
  };

  const handleApply = () => {
    console.log('Apply to campaign:', campaignId);
  };

  const handleSave = () => {
    console.log('Save campaign:', campaignId);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(mockCampaignData.campaignLink);
  };

  const handleSimilarCampaignClick = (id: string) => {
    router.push(`/campaigns/${id}`);
  };

  return (
    <>
      <Head>
        <title>{mockCampaignData.campaignName} - Social Stratix</title>
        <meta name="description" content={`Campaign details for ${mockCampaignData.campaignName}`} />
      </Head>
      
      <PageContainer>
        <Header 
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          hasNotifications={true}
        />

        <ContentContainer>
          {/* Back Button */}
          <BackButton onClick={handleBack}>
            <ArrowBackIcon sx={{ width: 24, height: 24, color: '#676767' }} />
            <BackText className="back-text">Back to campaign listing</BackText>
          </BackButton>

          <MainCard>
            <CampaignHeader>
              {/* Brand Section */}
              <BrandSection>
                <BrandAvatar src={mockCampaignData.brandAvatar} alt={mockCampaignData.brandName} />
                <BrandName>{mockCampaignData.brandName}</BrandName>
              </BrandSection>

              <CampaignContent>
                <MainContent>
                  <LeftColumn>
                    {/* Campaign Title Section */}
                    <CampaignTitleSection>
                      <CampaignTitle>{mockCampaignData.campaignName}</CampaignTitle>
                      <MetaInfo>
                        <MetaText>{mockCampaignData.timestamp}</MetaText>
                        <Separator />
                        <MetaText>Proposal: {mockCampaignData.proposals}</MetaText>
                        <Separator />
                        {mockCampaignData.verified && (
                          <VerifiedSection>
                            <VerifiedIcon sx={{ width: 24, height: 24, color: '#D9CF00' }} />
                            <VerifiedText>Verified payment</VerifiedText>
                          </VerifiedSection>
                        )}
                      </MetaInfo>
                    </CampaignTitleSection>

                    {/* Description */}
                    <DescriptionSection>
                      {mockCampaignData.description.map((paragraph, index) => (
                        <DescriptionText key={index}>{paragraph}</DescriptionText>
                      ))}
                    </DescriptionSection>

                    {/* Post On Section */}
                    <Box sx={{ display: 'flex', paddingTop: '24px', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', alignSelf: 'stretch' }}>
                      <SectionTitle>Post on</SectionTitle>
                      <PlatformChipsContainer>
                        {mockCampaignData.platforms.map((platform) => (
                          <PlatformChip
                            key={platform}
                            icon={<SocialMediaIcon platform={platform} />}
                            label={platformLabels[platform]}
                            platformcolor={platformColors[platform]}
                          />
                        ))}
                      </PlatformChipsContainer>
                    </Box>

                    {/* Tags Section */}
                    <Box sx={{ display: 'flex', paddingTop: '24px', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', alignSelf: 'stretch' }}>
                      <SectionTitle>Tag</SectionTitle>
                      <TagsText>{mockCampaignData.tags}</TagsText>
                    </Box>

                    {/* Attachments Section */}
                    <Box sx={{ display: 'flex', paddingTop: '24px', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', alignSelf: 'stretch' }}>
                      <SectionTitle>Attachments</SectionTitle>
                      <AttachmentsGrid>
                        {mockCampaignData.attachments.map((attachment, index) => (
                          <AttachmentCard key={index}>
                            <Box sx={{ display: 'flex', padding: '4px 0', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', gap: '4px', alignSelf: 'stretch' }}>
                              <AttachmentOverlay>
                                <AttachmentLabel>{attachment.label}</AttachmentLabel>
                              </AttachmentOverlay>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', alignSelf: 'stretch' }}>
                                <AttachmentUrl>{attachment.url}</AttachmentUrl>
                                <IconButton size="small">
                                  <OpenInNewIcon sx={{ width: 18, height: 18, color: '#676767' }} />
                                </IconButton>
                              </Box>
                            </Box>
                          </AttachmentCard>
                        ))}
                      </AttachmentsGrid>
                    </Box>
                  </LeftColumn>

                  <RightColumn>
                    {/* Action Buttons */}
                    <ActionButtons>
                      <SaveButton 
                        startIcon={<FavoriteIcon />}
                        onClick={handleSave}
                      >
                        Save
                      </SaveButton>
                      <ApplyButton onClick={handleApply}>
                        Apply
                      </ApplyButton>
                    </ActionButtons>

                    {/* Location and Budget */}
                    <InfoSection>
                      <LocationOnIcon sx={{ width: 24, height: 24, color: '#676767' }} />
                      <InfoText sx={{ color: '#1E002B' }}>{mockCampaignData.location}</InfoText>
                      <Separator />
                      <InfoText sx={{ color: '#1E002B' }}>
                        Budget: <Box component="span" sx={{ color: '#1E002B' }}>{mockCampaignData.budget}</Box>
                      </InfoText>
                    </InfoSection>

                    {/* About Brand Link */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
                      <Typography
                        sx={{
                          color: '#783C91',
                          fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
                          fontSize: '12px',
                          fontWeight: 600,
                          lineHeight: 'normal'
                        }}
                      >
                        About Brand
                      </Typography>
                      <OpenInNewIcon sx={{ width: 14, height: 14, color: '#783C91' }} />
                    </Box>

                    {/* Pricing Section */}
                    <DetailSection>
                      <Typography
                        sx={{
                          color: '#1E002B',
                          textAlign: 'center',
                          fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
                          fontSize: '18px',
                          fontWeight: 600,
                          lineHeight: 'normal'
                        }}
                      >
                        Pricing
                      </Typography>
                      <DetailItem>
                        <DetailLabel>Costs per view:</DetailLabel>
                        <DetailValue>{mockCampaignData.costPerView}</DetailValue>
                      </DetailItem>
                    </DetailSection>

                    {/* Requirements Section */}
                    <DetailSection>
                      <Typography
                        sx={{
                          color: '#1E002B',
                          textAlign: 'center',
                          fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
                          fontSize: '18px',
                          fontWeight: 600,
                          lineHeight: 'normal'
                        }}
                      >
                        Requirements
                      </Typography>
                      <DetailItem>
                        <DetailLabel>Min number of followers:</DetailLabel>
                        <DetailValue>{mockCampaignData.minFollowers}</DetailValue>
                      </DetailItem>
                      <DetailItem>
                        <DetailLabel>Duration:</DetailLabel>
                        <DetailValue>{mockCampaignData.duration}</DetailValue>
                      </DetailItem>
                    </DetailSection>

                    {/* Report Campaign */}
                    <ReportSection>
                      <FlagIcon sx={{ width: 18, height: 18, color: '#783C91' }} />
                      <ReportText>Report campaign</ReportText>
                    </ReportSection>

                    {/* Campaign Link */}
                    <DetailSection>
                      <Typography
                        sx={{
                          color: '#1E002B',
                          textAlign: 'center',
                          fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
                          fontSize: '18px',
                          fontWeight: 600,
                          lineHeight: 'normal'
                        }}
                      >
                        Campaign link
                      </Typography>
                      <LinkCard>
                        <LinkContainer>
                          <LinkText>{mockCampaignData.campaignLink}</LinkText>
                          <IconButton onClick={handleCopyLink}>
                            <ContentCopyIcon sx={{ width: 24, height: 24, color: '#676767' }} />
                          </IconButton>
                        </LinkContainer>
                      </LinkCard>
                    </DetailSection>
                  </RightColumn>
                </MainContent>
              </CampaignContent>
            </CampaignHeader>
          </MainCard>

          {/* Similar Campaigns Section */}
          <SimilarCampaignsSection>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', alignSelf: 'stretch', marginBottom: '16px' }}>
              <SectionTitle>Similar Campaigns</SectionTitle>
            </Box>

            {mockSimilarCampaigns.map((campaign) => (
              <SimilarCampaignCard 
                key={campaign.id}
                onClick={() => handleSimilarCampaignClick(campaign.id)}
                sx={{ cursor: 'pointer' }}
              >
                {/* Similar campaign content - simplified version of campaign card */}
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '11px', alignSelf: 'stretch' }}>
                  <Box sx={{ display: 'flex', paddingTop: '20px', flexDirection: 'column', alignItems: 'center', gap: '10px', borderRadius: '100px' }}>
                    <img 
                      style={{ width: '60px', height: '60px', borderRadius: '168px', border: '2px solid #FFF' }}
                      src={campaign.avatar} 
                      alt={campaign.brandName} 
                    />
                  </Box>
                  
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', flex: '1 0 0' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', alignSelf: 'stretch' }}>
                      <Box sx={{ display: 'flex', height: '20px', alignItems: 'center', gap: '8px', alignSelf: 'stretch' }}>
                        <MetaText>{campaign.timestamp}</MetaText>
                      </Box>
                      
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', alignSelf: 'stretch' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '4px', flex: '1 0 0' }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <BrandName sx={{ fontSize: '12px' }}>{campaign.brandName}</BrandName>
                            <OpenInNewIcon sx={{ width: 14, height: 14, color: '#783C91' }} />
                          </Box>
                          <CampaignTitle sx={{ fontSize: '24px' }}>{campaign.campaignName}</CampaignTitle>
                          <Typography sx={{ color: '#676767', fontSize: '14px' }}>{campaign.tags}</Typography>
                        </Box>

                        <ActionButtons>
                          <SaveButton 
                            startIcon={<FavoriteIcon />}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSave();
                            }}
                          >
                            Save
                          </SaveButton>
                          <ApplyButton 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleApply();
                            }}
                          >
                            Apply
                          </ApplyButton>
                        </ActionButtons>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', height: '34px', alignItems: 'flex-start', gap: '10px', alignSelf: 'stretch' }}>
                      <Typography
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          flex: '1 0 0',
                          alignSelf: 'stretch',
                          overflow: 'hidden',
                          color: '#1E002B',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          fontSize: '12px',
                          fontWeight: 400
                        }}
                      >
                        {campaign.description}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px', alignSelf: 'stretch' }}>
                  <InfoText sx={{ color: '#1E002B' }}>
                    Location: <Box component="span" sx={{ color: '#755002' }}>{campaign.location}</Box>
                  </InfoText>
                  <Separator />
                  <InfoText sx={{ color: '#1E002B' }}>
                    Budget: <Box component="span" sx={{ color: '#755002' }}>{campaign.budget}</Box>
                  </InfoText>
                  <Separator />
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Typography sx={{ color: '#1E002B', fontSize: '14px', fontWeight: 600 }}>Post on:</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      {campaign.platforms.map((platform) => (
                        <SocialMediaIcon key={platform} platform={platform} />
                      ))}
                    </Box>
                  </Box>
                </Box>
              </SimilarCampaignCard>
            ))}

            {/* See More */}
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4px', cursor: 'pointer', padding: '16px' }}>
              <Typography
                sx={{
                  color: '#783C91',
                  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
                  fontSize: '14px',
                  fontWeight: 600,
                  lineHeight: 'normal'
                }}
              >
                See more
              </Typography>
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                style={{ transform: 'rotate(90deg)' }}
              >
                <path d="M12 12.6L16.6 8L18 9.4L12 15.4L6 9.4L7.4 8L12 12.6Z" fill="#783C91"/>
              </svg>
            </Box>
          </SimilarCampaignsSection>
        </ContentContainer>

        <Footer />
      </PageContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  
  return {
    props: {
      campaignId: id as string
    }
  };
};
