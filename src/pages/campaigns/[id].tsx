import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { 
  Box, 
  Typography, 
  Button, 
  Avatar, 
  Tabs, 
  Tab, 
  IconButton,
  TextField,
  Chip,
  Divider
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FlagIcon from '@mui/icons-material/Flag';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import VerifiedIcon from '@mui/icons-material/Verified';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Header from '../../components/organisms/Header/Header';
import Footer from '../../components/organisms/Footer/Footer';
import PlatformChip from '../../components/atoms/PlatformChip/PlatformChip';
import CampaignCard from '../../components/molecules/CampaignCard/CampaignCard';
import { SocialPlatform } from '../../components/atoms/SocialMediaIcon/SocialMediaIcon';

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

const BackNavigation = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  alignSelf: 'stretch',
  marginBottom: '10px'
}));

const BackLink = styled(Typography)(({ theme }) => ({
  color: '#783C91',
  fontSize: '14px',
  fontWeight: 600,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline'
  }
}));

const CampaignContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '1440px',
  padding: '16px 32px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  borderRadius: '8px',
  backgroundColor: '#FFF'
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
  alignSelf: 'stretch'
}));

const BrandInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '6px',
  flex: '1 0 0',
  alignSelf: 'stretch'
}));

const BrandName = styled(Typography)(({ theme }) => ({
  color: '#1E002B',
  textAlign: 'center',
  fontSize: '14px',
  fontWeight: 600,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal'
}));

const CampaignDetails = styled(Box)(({ theme }) => ({
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
  borderBottom: '1px solid #DFDFDF'
}));

const TitleRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px'
}));

const CampaignTitle = styled(TextField)(({ theme }) => ({
  alignSelf: 'stretch',
  '& .MuiOutlinedInput-root': {
    borderRadius: '4px',
    '& fieldset': {
      borderColor: '#AA86B9'
    }
  },
  '& .MuiInputLabel-root': {
    color: '#3F214C',
    fontSize: '12px'
  },
  '& .MuiOutlinedInput-input': {
    color: '#1E002B',
    fontSize: '14px',
    fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif'
  }
}));

const StatusRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  alignSelf: 'stretch'
}));

const StatusText = styled(Typography)(({ theme }) => ({
  color: '#676767',
  fontSize: '12px',
  fontWeight: 400,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal'
}));

const DescriptionSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '8px',
  alignSelf: 'stretch'
}));

const DescriptionText = styled(Typography)(({ theme }) => ({
  flex: '1 0 0',
  color: '#1E002B',
  fontSize: '14px',
  fontWeight: 400,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal'
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: '#1E002B',
  textAlign: 'center',
  fontSize: '24px',
  fontWeight: 600,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal'
}));

const PlatformSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  paddingTop: '24px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  alignSelf: 'stretch'
}));

const PlatformGrid = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  alignContent: 'center',
  gap: '16px',
  alignSelf: 'stretch',
  flexWrap: 'wrap'
}));

const TagsSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  paddingTop: '24px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  alignSelf: 'stretch'
}));

const TagsText = styled(Typography)(({ theme }) => ({
  alignSelf: 'stretch',
  color: '#1E002B',
  fontSize: '18px',
  fontWeight: 400,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal'
}));

const AttachmentsSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  paddingTop: '24px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  alignSelf: 'stretch'
}));

const AttachmentsGrid = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  alignContent: 'flex-start',
  gap: '8px',
  alignSelf: 'stretch',
  flexWrap: 'wrap'
}));

const AttachmentItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '336px',
  padding: '12px 16px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '10px',
  borderRadius: '8px',
  border: '1px solid #DFDFDF'
}));

const AttachmentContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '4px 0',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'flex-start',
  gap: '4px',
  alignSelf: 'stretch'
}));

const AttachmentLink = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  alignSelf: 'stretch'
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
  fontSize: '14px',
  fontWeight: 400,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal'
}));

const RightColumn = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '49px 0 24px 16px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '24px',
  backgroundColor: '#FFF'
}));

const ActionButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '16px'
}));

const DetailsSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '16px'
}));

const DetailItem = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 600,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal'
}));

const InfoSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  alignSelf: 'stretch'
}));

const InfoTitle = styled(Typography)(({ theme }) => ({
  color: '#1E002B',
  textAlign: 'center',
  fontSize: '18px',
  fontWeight: 600,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal'
}));

const InfoRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '8px',
  alignSelf: 'stretch'
}));

const InfoLabel = styled(Typography)(({ theme }) => ({
  flex: '1 0 0',
  color: '#1E002B',
  fontSize: '14px',
  fontWeight: 400,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal'
}));

const InfoValue = styled(Typography)(({ theme }) => ({
  color: '#1E002B',
  fontSize: '14px',
  fontWeight: 600,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal'
}));

const CampaignLinkSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  alignSelf: 'stretch'
}));

const LinkContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '16px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '10px',
  alignSelf: 'stretch',
  borderRadius: '8px',
  border: '1px solid #DFDFDF'
}));

const LinkContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '4px 0',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'flex-start',
  gap: '4px',
  alignSelf: 'stretch'
}));

const LinkRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  alignSelf: 'stretch'
}));

const LinkUrl = styled(Typography)(({ theme }) => ({
  display: 'flex',
  height: '16px',
  flexDirection: 'column',
  justifyContent: 'center',
  flex: '1 0 0',
  overflow: 'hidden',
  color: '#676767',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  fontSize: '14px',
  fontWeight: 400,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal'
}));

const TabsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'stretch',
  borderBottom: '1px solid #DFDFDF'
}));

const SortContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '24px',
  flex: '1 0 0'
}));

const FilterContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
}));

const SortLabel = styled(Typography)(({ theme }) => ({
  color: '#1E002B',
  fontSize: '14px',
  fontWeight: 400,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal'
}));

const SortOption = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '4px'
}));

const SortText = styled(Typography)(({ theme }) => ({
  color: '#1E002B',
  fontSize: '14px',
  fontWeight: 600,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal'
}));

const CampaignsList = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  alignSelf: 'stretch'
}));

const SeeMoreContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4px',
  marginTop: '16px'
}));

const SeeMoreLink = styled(Typography)(({ theme }) => ({
  color: '#783C91',
  fontSize: '14px',
  fontWeight: 600,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline'
  }
}));

// Mock data
const mockCampaign = {
  id: 'campaign-1',
  brandName: 'Brand name',
  brandImage: 'https://api.builder.io/api/v1/image/assets/TEMP/b9e5504945a01223adf71a1ae579aa26040ae6ad?width=80',
  campaignName: 'Sports product campaign posts',
  description: `Turpis ex libero aliquam vulputate semper consectetur. Nunc accumsan diam hac purus, vel volutpat mauris. Vestibulum nunc feugiat phasellus tristique orci vitae efficitur duis. Maximus dis ante penatibus morbi lobortis neque duis pellentesque pharetra. Eu parturient habitant fusce non finibus ac. Class libero fringilla viverra; elit dictumst dui. Finibus consectetur et velit tempus sodales aptent fringilla praesent facilisi. Facilisi auctor donec praesent porta viverra lobortis per phasellus mollis.

Rhoncus sed class ex quis; fermentum eros. Ex dapibus blandit mollis cubilia donec, proin interdum pretium. Blandit malesuada vehicula cursus dolor pretium vestibulum ornare per varius. Sit magnis faucibus massa rutrum aenean donec egestas; maximus congue. Ante malesuada pellentesque maecenas convallis malesuada lacinia curae. Dolor blandit morbi litora litora tellus lacus orci in. Proin vestibulum proin turpis ex nibh fames non.`,
  tags: 'Lifestyle, Fashion, Beauty',
  platforms: ['youtube', 'facebook', 'instagram', 'tiktok', 'x'] as SocialPlatform[],
  attachments: [
    'https://www.stratix.com/campaign/brief',
    'https://www.stratix.com/campaign/brief',
    'https://www.stratix.com/campaign/brief'
  ],
  location: 'Bangalore',
  budget: '₹ 1,000',
  timestamp: 'Posted 3 hours ago',
  proposals: 'Over 100 applicants',
  pricing: {
    costPerView: '₹0.25'
  },
  requirements: {
    minFollowers: '1,000',
    duration: '60 days'
  },
  campaignLink: 'https://www.camp_name.com/campaign/brief'
};

const mockCampaigns = [
  {
    id: 'campaign-1',
    brandName: 'Brand name',
    campaignName: 'Campaign name',
    tags: 'Lifestyle, Fashion, Beauty',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla...',
    location: 'Bangalore',
    budget: '₹ 1,000',
    platforms: ['youtube', 'x', 'tiktok', 'instagram', 'facebook'] as const,
    timestamp: 'Posted 3 hours ago'
  },
  {
    id: 'campaign-2',
    brandName: 'Brand name',
    campaignName: 'Campaign name',
    tags: 'Lifestyle, Fashion, Beauty',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla...',
    location: 'Bangalore',
    budget: '₹ 1,000',
    platforms: ['youtube', 'x', 'tiktok', 'instagram', 'facebook'] as const,
    timestamp: 'Posted 3 hours ago'
  },
  {
    id: 'campaign-3',
    brandName: 'Brand name',
    campaignName: 'Campaign name',
    tags: 'Lifestyle, Fashion, Beauty',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla...',
    location: 'Bangalore',
    budget: '₹ 1,000',
    platforms: ['youtube', 'x', 'tiktok', 'instagram', 'facebook'] as const,
    timestamp: 'Posted 3 hours ago'
  }
];

export default function CampaignDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleEditCampaign = (campaignId: string) => {
    console.log('Edit campaign:', campaignId);
  };

  const handleCampaignMenuAction = (action: string, campaignId: string) => {
    console.log('Campaign action:', action, campaignId);
  };

  const handleBrandClick = (brandName: string) => {
    router.push(`/brands/${brandName}`);
  };

  const handleCloseCampaign = () => {
    console.log('Close campaign');
  };

  const handleReportCampaign = () => {
    console.log('Report campaign');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(mockCampaign.campaignLink);
  };

  return (
    <>
      <Head>
        <title>{mockCampaign.campaignName} - Campaign Details - Social Stratix</title>
        <meta name="description" content={`Campaign details for ${mockCampaign.campaignName}`} />
      </Head>
      
      <PageContainer>
        <Header hasNotifications={true} />

        <ContentContainer>
          {/* Back Navigation */}
          <BackNavigation>
            <ArrowBackIcon sx={{ width: 24, height: 24, color: '#676767' }} />
            <Link href={`/brands/${mockCampaign.brandName}`} style={{ textDecoration: 'none' }}>
              <BackLink>Back to campaign listing</BackLink>
            </Link>
          </BackNavigation>

          {/* Campaign Container */}
          <CampaignContainer>
            <CampaignHeader>
              <BrandSection>
                <Avatar
                  src={mockCampaign.brandImage}
                  sx={{ width: 40, height: 40 }}
                />
                <BrandInfo>
                  <BrandName>{mockCampaign.brandName}</BrandName>
                </BrandInfo>
              </BrandSection>

              <CampaignDetails>
                <MainContent>
                  <LeftColumn>
                    <CampaignTitleSection>
                      <TitleRow>
                        <CampaignTitle
                          label="Campaign name"
                          value={mockCampaign.campaignName}
                          variant="outlined"
                          size="small"
                          InputProps={{ readOnly: true }}
                        />
                        <Button
                          variant="outlined"
                          startIcon={<CheckIcon />}
                          sx={{
                            height: '40px',
                            borderRadius: '100px',
                            border: '1px solid #783C91',
                            color: '#783C91',
                            minWidth: 'auto',
                            padding: '8px'
                          }}
                        />
                      </TitleRow>

                      <StatusRow>
                        <StatusText>{mockCampaign.timestamp}</StatusText>
                        <Divider orientation="vertical" flexItem />
                        <StatusText>Proposal: {mockCampaign.proposals}</StatusText>
                        <Divider orientation="vertical" flexItem />
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <VerifiedIcon sx={{ width: 24, height: 24, color: '#D9CF00' }} />
                          <StatusText sx={{ fontWeight: 600 }}>Verified payment</StatusText>
                        </Box>
                      </StatusRow>
                    </CampaignTitleSection>

                    <DescriptionSection>
                      <DescriptionText>{mockCampaign.description}</DescriptionText>
                      <IconButton 
                        sx={{ 
                          border: '1px solid #783C91', 
                          backgroundColor: '#FFF',
                          width: 40, 
                          height: 40,
                          position: 'relative',
                          top: -16,
                          right: -24
                        }}
                      >
                        <EditIcon sx={{ width: 18, height: 18, color: '#783C91' }} />
                      </IconButton>
                    </DescriptionSection>

                    <PlatformSection>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: '100px', width: '100%' }}>
                        <SectionTitle>Post on</SectionTitle>
                        <IconButton sx={{ border: '1px solid #783C91', backgroundColor: '#FFF', width: 40, height: 40 }}>
                          <EditIcon sx={{ width: 18, height: 18, color: '#783C91' }} />
                        </IconButton>
                      </Box>
                      <PlatformGrid>
                        {mockCampaign.platforms.map((platform) => (
                          <PlatformChip key={platform} platform={platform} />
                        ))}
                      </PlatformGrid>
                    </PlatformSection>

                    <TagsSection>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: '55px', width: '100%' }}>
                        <SectionTitle>Tag</SectionTitle>
                        <IconButton sx={{ border: '1px solid #783C91', backgroundColor: '#FFF', width: 40, height: 40 }}>
                          <EditIcon sx={{ width: 18, height: 18, color: '#783C91' }} />
                        </IconButton>
                      </Box>
                      <TagsText>{mockCampaign.tags}</TagsText>
                    </TagsSection>

                    <AttachmentsSection>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: '170px', width: '100%' }}>
                        <SectionTitle>Attachments</SectionTitle>
                        <IconButton sx={{ border: '1px solid #783C91', backgroundColor: '#FFF', width: 40, height: 40 }}>
                          <EditIcon sx={{ width: 18, height: 18, color: '#783C91' }} />
                        </IconButton>
                      </Box>
                      <AttachmentsGrid>
                        {mockCampaign.attachments.map((url, index) => (
                          <AttachmentItem key={index}>
                            <AttachmentContent>
                              <AttachmentLink>
                                <AttachmentUrl>{url}</AttachmentUrl>
                                <OpenInNewIcon sx={{ width: 24, height: 24, color: '#676767' }} />
                              </AttachmentLink>
                            </AttachmentContent>
                          </AttachmentItem>
                        ))}
                      </AttachmentsGrid>
                    </AttachmentsSection>
                  </LeftColumn>

                  <RightColumn>
                    <ActionButtons>
                      <Button
                        variant="outlined"
                        onClick={handleCloseCampaign}
                        sx={{
                          height: '41px',
                          borderRadius: '100px',
                          border: '1px solid #783C91',
                          color: '#783C91',
                          textTransform: 'uppercase',
                          fontWeight: 700,
                          fontSize: '14px'
                        }}
                      >
                        Close Campaign
                      </Button>
                      <IconButton
                        sx={{
                          height: '38px',
                          width: '38px',
                          border: '1px solid #783C91',
                          borderRadius: '100px'
                        }}
                      >
                        <MoreVertIcon sx={{ color: '#783C91' }} />
                      </IconButton>
                    </ActionButtons>

                    <DetailsSection>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <LocationOnIcon sx={{ width: 24, height: 24, color: '#676767' }} />
                        <DetailItem sx={{ color: '#1E002B' }}>{mockCampaign.location}</DetailItem>
                      </Box>
                      <Divider orientation="vertical" flexItem />
                      <DetailItem sx={{ color: '#1E002B' }}>Budget: {mockCampaign.budget}</DetailItem>
                    </DetailsSection>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Link href={`/brands/${mockCampaign.brandName}`} style={{ textDecoration: 'none' }}>
                        <Typography sx={{ color: '#783C91', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>
                          About Brand
                        </Typography>
                      </Link>
                      <OpenInNewIcon sx={{ width: 18, height: 18, color: '#783C91' }} />
                    </Box>

                    <InfoSection>
                      <InfoTitle>Pricing</InfoTitle>
                      <InfoRow>
                        <InfoLabel>Costs per view:</InfoLabel>
                        <InfoValue>{mockCampaign.pricing.costPerView}</InfoValue>
                      </InfoRow>
                    </InfoSection>

                    <InfoSection>
                      <InfoTitle>Requirements</InfoTitle>
                      <InfoRow>
                        <InfoLabel>Min number of followers:</InfoLabel>
                        <InfoValue>{mockCampaign.requirements.minFollowers}</InfoValue>
                      </InfoRow>
                      <InfoRow>
                        <InfoLabel>Duration:</InfoLabel>
                        <InfoValue>{mockCampaign.requirements.duration}</InfoValue>
                      </InfoRow>
                    </InfoSection>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <FlagIcon sx={{ width: 18, height: 18, color: '#783C91' }} />
                      <Typography sx={{ color: '#783C91', fontSize: '14px', fontWeight: 600 }}>
                        Report campaign
                      </Typography>
                    </Box>

                    <CampaignLinkSection>
                      <InfoTitle>Campaign link</InfoTitle>
                      <LinkContainer>
                        <LinkContent>
                          <LinkRow>
                            <LinkUrl>{mockCampaign.campaignLink}</LinkUrl>
                            <ContentCopyIcon 
                              sx={{ width: 24, height: 24, color: '#676767', cursor: 'pointer' }} 
                              onClick={handleCopyLink}
                            />
                          </LinkRow>
                        </LinkContent>
                      </LinkContainer>
                    </CampaignLinkSection>
                  </RightColumn>
                </MainContent>
              </CampaignDetails>
            </CampaignHeader>
          </CampaignContainer>

          {/* Campaigns Section */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', alignSelf: 'stretch', mt: 2 }}>
            <TabsContainer>
              <Tabs value={activeTab} onChange={handleTabChange}>
                <Tab 
                  label="Active Campaigns" 
                  sx={{ 
                    textTransform: 'none',
                    fontWeight: activeTab === 0 ? 600 : 400,
                    fontSize: '14px',
                    color: '#1E002B'
                  }} 
                />
                <Tab 
                  label="Previous Campaigns" 
                  sx={{ 
                    textTransform: 'none',
                    fontWeight: activeTab === 1 ? 600 : 400,
                    fontSize: '14px',
                    color: '#1E002B'
                  }} 
                />
              </Tabs>
              
              <SortContainer>
                <FilterContainer>
                  <SortLabel>Sort by</SortLabel>
                  <SortOption>
                    <SortText>Date Posted</SortText>
                    <KeyboardArrowDownIcon sx={{ width: 24, height: 24, color: '#676767' }} />
                  </SortOption>
                </FilterContainer>
              </SortContainer>
            </TabsContainer>

            <CampaignsList>
              {mockCampaigns.map((campaign) => (
                <CampaignCard
                  key={campaign.id}
                  {...campaign}
                  onBrandClick={handleBrandClick}
                  onEdit={handleEditCampaign}
                  onMenuAction={handleCampaignMenuAction}
                />
              ))}
            </CampaignsList>

            <SeeMoreContainer>
              <SeeMoreLink>See more</SeeMoreLink>
              <KeyboardArrowDownIcon sx={{ width: 24, height: 24, color: '#783C91', transform: 'rotate(90deg)' }} />
            </SeeMoreContainer>
          </Box>
        </ContentContainer>

        <Footer />
      </PageContainer>
    </>
  );
}
