import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Avatar, 
  Tabs, 
  Tab, 
  IconButton,
  MenuItem,
  Select,
  FormControl
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import ShareIcon from '@mui/icons-material/Share';
import VerifiedIcon from '@mui/icons-material/Verified';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Header from '../../components/organisms/Header/Header';
import Footer from '../../components/organisms/Footer/Footer';
import StatsCard from '../../components/molecules/StatsCard/StatsCard';
import CampaignCard from '../../components/molecules/CampaignCard/CampaignCard';

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

const BrandContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '16px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '16px',
  alignSelf: 'stretch',
  borderRadius: '8px',
  backgroundColor: '#FFF'
}));

const BrandHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  paddingLeft: '16px',
  alignItems: 'center',
  gap: '16px',
  alignSelf: 'stretch'
}));

const BrandInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  position: 'relative'
}));

const BrandName = styled(Typography)(({ theme }) => ({
  color: '#1E002B',
  textAlign: 'center',
  fontSize: '33px',
  fontWeight: 400,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal'
}));

const BrandTags = styled(Typography)(({ theme }) => ({
  color: '#676767',
  textAlign: 'center',
  fontSize: '18px',
  fontWeight: 400,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal'
}));

const ActionsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '76px',
  padding: '13px 16px 8px 0',
  justifyContent: 'flex-end',
  alignItems: 'flex-start',
  gap: '8px',
  flex: '1 0 0'
}));

const DescriptionSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '0 16px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '16px',
  alignSelf: 'stretch'
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: '#1E002B',
  textAlign: 'center',
  fontSize: '24px',
  fontWeight: 600,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal'
}));

const DescriptionText = styled(Typography)(({ theme }) => ({
  alignSelf: 'stretch',
  color: '#1E002B',
  fontSize: '14px',
  fontWeight: 400,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal'
}));

const BadgesContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  paddingTop: '16px',
  alignItems: 'flex-start',
  gap: '8px',
  alignSelf: 'stretch'
}));

const Badge = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '8px 12px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '4px',
  borderRadius: '12px',
  border: '1px solid #DCD0E1',
  backgroundColor: '#FFF'
}));

const BadgeHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
}));

const BadgeTitle = styled(Typography)(({ theme }) => ({
  color: '#1E002B',
  textAlign: 'center',
  fontSize: '14px',
  fontWeight: 600,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal'
}));

const BadgeDescription = styled(Typography)(({ theme }) => ({
  color: '#1E002B',
  fontSize: '12px',
  fontWeight: 400,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal'
}));

const StatsSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  paddingTop: '24px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  alignSelf: 'stretch'
}));

const StatsGrid = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '8px',
  alignSelf: 'stretch',
  [theme.breakpoints.down('lg')]: {
    flexWrap: 'wrap'
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column'
  }
}));

const CampaignsSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  alignSelf: 'stretch'
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
const mockBrand = {
  id: 'brand-1',
  name: 'Brand name',
  profileImage: 'https://api.builder.io/api/v1/image/assets/TEMP/76f92ef0ffd70c6730df3e921de15e2ee9ba6e89?width=200',
  tags: 'Cooking, Unfiltered, Roastmaster, Gourmet, Roastmaster, placeholder, placeholder',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  stats: {
    campaigns: '12',
    avgBudget: '₹ 1,400',
    influencers: '20',
    highestBudget: '₹ 3,200',
    totalSpent: '₹ 1,32,250'
  }
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

export default function BrandOverviewPage() {
  const router = useRouter();
  const { id } = router.query;
  const [activeTab, setActiveTab] = useState(0);
  const [sortBy, setSortBy] = useState('Date Posted');

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handlePostCampaign = () => {
    router.push('/post-campaign');
  };

  const handleEditCampaign = (campaignId: string) => {
    // Handle edit campaign
    console.log('Edit campaign:', campaignId);
  };

  const handleCampaignMenuAction = (action: string, campaignId: string) => {
    console.log('Campaign action:', action, campaignId);
  };

  const handleViewCampaign = (campaignId: string) => {
    router.push(`/campaigns/${campaignId}`);
  };

  const handleBrandClick = (brandName: string) => {
    // Stay on the same page since we're already on the brand overview
    console.log('Brand clicked:', brandName);
  };

  return (
    <>
      <Head>
        <title>{mockBrand.name} - Brand Overview - Social Stratix</title>
        <meta name="description" content={`Brand overview for ${mockBrand.name}`} />
      </Head>
      
      <PageContainer>
        <Header hasNotifications={true} />

        <ContentContainer>
          {/* Back Navigation */}
          <BackNavigation>
            <ArrowBackIcon sx={{ width: 24, height: 24, color: '#676767' }} />
            <Link href="/brands" style={{ textDecoration: 'none' }}>
              <BackLink>Back to influencers listing</BackLink>
            </Link>
          </BackNavigation>

          {/* Brand Container */}
          <BrandContainer>
            {/* Brand Header */}
            <BrandHeader>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <Avatar
                  src={mockBrand.profileImage}
                  sx={{
                    width: 100,
                    height: 100,
                    border: '5px solid #FFF'
                  }}
                />
                <IconButton
                  sx={{
                    position: 'relative',
                    right: 4,
                    bottom: 4,
                    width: 40,
                    height: 40,
                    border: '1px solid #783C91',
                    backgroundColor: '#FFF',
                    '&:hover': {
                      backgroundColor: '#F5F5F5'
                    }
                  }}
                >
                  <EditIcon sx={{ width: 18, height: 18, color: '#783C91' }} />
                </IconButton>
              </Box>
              
              <BrandInfo>
                <BrandName>{mockBrand.name}</BrandName>
                <BrandTags>{mockBrand.tags}</BrandTags>
                <Box sx={{ display: 'flex', gap: '8px', mt: 1 }}>
                  <IconButton sx={{ border: '1px solid #783C91', backgroundColor: '#FFF', width: 40, height: 40 }}>
                    <EditIcon sx={{ width: 18, height: 18, color: '#783C91' }} />
                  </IconButton>
                  <IconButton sx={{ border: '1px solid #783C91', backgroundColor: '#FFF', width: 40, height: 40 }}>
                    <EditIcon sx={{ width: 18, height: 18, color: '#783C91' }} />
                  </IconButton>
                </Box>
              </BrandInfo>

              <ActionsContainer>
                <Button
                  variant="outlined"
                  startIcon={<ShareIcon />}
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
                  Share
                </Button>
                <Button
                  variant="contained"
                  onClick={handlePostCampaign}
                  sx={{
                    height: '41px',
                    borderRadius: '100px',
                    backgroundColor: '#783C91',
                    color: '#FFF',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    fontSize: '14px',
                    '&:hover': {
                      backgroundColor: '#3F214C'
                    }
                  }}
                >
                  Post Campaign
                </Button>
              </ActionsContainer>
            </BrandHeader>

            {/* Description Section */}
            <DescriptionSection>
              <Box sx={{ display: 'flex', paddingTop: '24px', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', alignSelf: 'stretch' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '150px', width: '100%' }}>
                  <SectionTitle>Description</SectionTitle>
                  <IconButton sx={{ border: '1px solid #783C91', backgroundColor: '#FFF', width: 40, height: 40 }}>
                    <EditIcon sx={{ width: 18, height: 18, color: '#783C91' }} />
                  </IconButton>
                </Box>
                <DescriptionText>{mockBrand.description}</DescriptionText>
              </Box>

              <BadgesContainer>
                <Badge>
                  <BadgeHeader>
                    <VerifiedIcon sx={{ width: 24, height: 24, color: '#D9CF00' }} />
                    <BadgeTitle>Verified payment</BadgeTitle>
                  </BadgeHeader>
                  <BadgeDescription>The profile has been successfully verified and authenticated.</BadgeDescription>
                </Badge>
                
                <Badge>
                  <BadgeHeader>
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/8c32e57b261dac77ed4416924aceba732396684f?width=48" 
                      alt="Top Campaign" 
                      style={{ width: 24, height: 24 }}
                    />
                    <BadgeTitle>Top Campaign</BadgeTitle>
                  </BadgeHeader>
                  <BadgeDescription>Lorem Ipsum is a placeholder text used as a placeholder.</BadgeDescription>
                </Badge>
              </BadgesContainer>
            </DescriptionSection>

            {/* Stats Section */}
            <StatsSection>
              <SectionTitle>Brief Stats about past campaigns</SectionTitle>
              <StatsGrid>
                <StatsCard title="Number of campaigns" value={mockBrand.stats.campaigns} borderColor="#EAFFC2" />
                <StatsCard title="AVG campaign budget" value={mockBrand.stats.avgBudget} borderColor="#FFD4F6" />
                <StatsCard title="Number of influencers" value={mockBrand.stats.influencers} borderColor="#EAFFC2" />
                <StatsCard title="Highest campaign budget" value={mockBrand.stats.highestBudget} borderColor="#FFE2B6" />
                <StatsCard title="Total money spent" value={mockBrand.stats.totalSpent} borderColor="#FFE2B6" />
              </StatsGrid>
            </StatsSection>

            {/* Campaigns Section */}
            <CampaignsSection>
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
                      <SortText>{sortBy}</SortText>
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
                    onViewDetails={handleViewCampaign}
                    onMenuAction={handleCampaignMenuAction}
                  />
                ))}
              </CampaignsList>

              <SeeMoreContainer>
                <SeeMoreLink>See more</SeeMoreLink>
                <KeyboardArrowDownIcon sx={{ width: 24, height: 24, color: '#783C91', transform: 'rotate(90deg)' }} />
              </SeeMoreContainer>
            </CampaignsSection>
          </BrandContainer>
        </ContentContainer>

        <Footer />
      </PageContainer>
    </>
  );
}
