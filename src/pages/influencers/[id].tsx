import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import {
  Box,
  Container,
  Typography,
  Button,
  Avatar,
  IconButton,
  Chip,
  Card,
  CardContent,
  Divider,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShareIcon from '@mui/icons-material/Share';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import VerifiedIcon from '@mui/icons-material/Verified';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import StarIcon from '@mui/icons-material/Star';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Header from '../../components/organisms/Header/Header';
import Footer from '../../components/organisms/Footer/Footer';
import SocialMediaChip from '../../components/atoms/SocialMediaChip/SocialMediaChip';
import InfluencerCard from '../../components/molecules/InfluencerCard/InfluencerCard';

const PageContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: `linear-gradient(0deg, rgba(250, 249, 246, 0.70) 0%, rgba(250, 249, 246, 0.70) 100%),
               linear-gradient(106deg, rgba(235, 188, 254, 0.30) 0%, rgba(240, 196, 105, 0.30) 100%),
               #FFF`,
  display: 'flex',
  flexDirection: 'column'
}));

const BackNavigation = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '26px 240px',
  alignItems: 'center',
  gap: '4px',
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

const BackLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  textDecoration: 'none',
  color: '#783C91',
  fontSize: '14px',
  fontWeight: 600,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  '&:hover': {
    textDecoration: 'underline'
  }
}));

const ProfileContainer = styled(Card)(({ theme }) => ({
  display: 'flex',
  padding: '16px',
  flexDirection: 'column',
  gap: '16px',
  borderRadius: '8px',
  backgroundColor: '#FFF',
  margin: '0 240px',
  [theme.breakpoints.down('lg')]: {
    margin: '0 120px'
  },
  [theme.breakpoints.down('md')]: {
    margin: '0 60px'
  },
  [theme.breakpoints.down('sm')]: {
    margin: '0 20px'
  }
}));

const ImageGallery = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '504px',
  gap: '8px',
  borderRadius: '8px',
  overflow: 'hidden'
}));

const MainImage = styled('img')(({ theme }) => ({
  flex: 1,
  height: '100%',
  objectFit: 'cover',
  borderRadius: '8px 0 0 8px'
}));

const SideImages = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  width: '398px'
}));

const SideImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'calc(50% - 4px)',
  objectFit: 'cover'
}));

const RightImage = styled('img')(({ theme }) => ({
  flex: 1,
  height: '100%',
  objectFit: 'cover',
  borderRadius: '0 8px 8px 0'
}));

const ProfileSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  gap: '16px',
  marginTop: '-60px',
  paddingLeft: '16px',
  position: 'relative',
  zIndex: 2
}));

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: '168px',
  height: '168px',
  border: '5px solid #FFF'
}));

const ProfileInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  flex: 1,
  paddingBottom: '20px'
}));

const NameContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
}));

const ActionButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '8px',
  paddingRight: '16px',
  paddingBottom: '20px'
}));

const ContentSection = styled(Box)(({ theme }) => ({
  padding: '0 16px 16px 16px'
}));

const SocialMediaSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  marginBottom: '16px'
}));

const BadgesSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '8px',
  marginBottom: '24px'
}));

const StyledBadge = styled(Card)(({ theme }) => ({
  padding: '8px 12px',
  borderRadius: '12px',
  border: '1px solid #DCD0E1',
  backgroundColor: '#FFF'
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: '#1E002B',
  fontSize: '24px',
  fontWeight: 600,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  marginBottom: '8px'
}));

const StatsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '8px',
  marginTop: '24px'
}));

const StatCard = styled(Card)(({ theme }) => ({
  padding: '16px',
  borderRadius: '4px',
  border: '3px solid #EAFFC2',
  textAlign: 'center',
  minWidth: '200px'
}));

const SimilarInfluencersSection = styled(Box)(({ theme }) => ({
  padding: '24px 16px 0 16px',
  margin: '0 240px',
  [theme.breakpoints.down('lg')]: {
    margin: '0 120px'
  },
  [theme.breakpoints.down('md')]: {
    margin: '0 60px'
  },
  [theme.breakpoints.down('sm')]: {
    margin: '0 20px'
  }
}));

const SimilarInfluencersGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(296px, 1fr))',
  gap: '16px',
  marginTop: '8px'
}));

// Mock data for the influencer
const mockInfluencerData = {
  'gordon-ramsay': {
    id: 'gordon-ramsay',
    name: 'Gordon Ramsay',
    location: 'Bangalore',
    profileImage: 'https://api.builder.io/api/v1/image/assets/TEMP/cb7448e2b66e505fc37604859220923447b987a3?width=336',
    images: [
      'https://api.builder.io/api/v1/image/assets/TEMP/0a0ec94f30a584459fa9852f29a34fc6ce8f6b5f?width=994',
      'https://api.builder.io/api/v1/image/assets/TEMP/22786fe5882e6591ed2a473d0fb96034db685c84?width=797',
      'https://api.builder.io/api/v1/image/assets/TEMP/0b98213a9a7732bb67dfd166a95289adf84a0db0?width=797',
      'https://api.builder.io/api/v1/image/assets/TEMP/1b118863999e84651e17e78423f97d9aea0099d3?width=994'
    ],
    tags: 'Cooking, Unfiltered, Roastmaster, Gourmet, Roastmaster, placeholder, placeholder',
    socialMedia: [
      { platform: 'x' as const, followers: '1.2K Followers' },
      { platform: 'youtube' as const, followers: '1.2K Followers' },
      { platform: 'facebook' as const, followers: '1.2K Followers' },
      { platform: 'instagram' as const, followers: '1.2K Followers' },
      { platform: 'tiktok' as const, followers: '1.2K Followers' }
    ],
    isVerified: true,
    isTopCreator: true,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    stats: {
      campaigns: 12,
      avgBudget: '₹ 1,400'
    }
  }
};

const similarInfluencers = [
  {
    id: 'naruto-uzumaki',
    name: 'Naruto Uzumaki',
    profileImage: 'https://api.builder.io/api/v1/image/assets/TEMP/c63384b33d0608f382e2a8d26f1efff6b742e138?width=56',
    coverImage: 'https://api.builder.io/api/v1/image/assets/TEMP/9a8d8b87f54ee0978b872a165899f86830c44d4e?width=560',
    tags: 'Cooking, Unfiltered, Roastmaster, Gourmet, ......',
    socialMedia: [
      { platform: 'x' as const, followers: '1.2K' },
      { platform: 'youtube' as const, followers: '1.2K' },
      { platform: 'instagram' as const, followers: '1.2K' }
    ]
  },
  {
    id: 'itachi-uchiha',
    name: 'Itachi Uchiha',
    profileImage: 'https://api.builder.io/api/v1/image/assets/TEMP/a27430ee8ac5ade5405cd56db473ee5d8bcc2f00?width=56',
    coverImage: 'https://api.builder.io/api/v1/image/assets/TEMP/f0f20a4517564fa36fff7b8565251fe757f2de37?width=560',
    tags: 'Cooking, Unfiltered, Roastmaster, Gourmet, ......',
    socialMedia: [
      { platform: 'x' as const, followers: '1.2K' },
      { platform: 'instagram' as const, followers: '1.2K' },
      { platform: 'tiktok' as const, followers: '1.2K' }
    ]
  },
  {
    id: 'deku',
    name: 'Deku',
    profileImage: 'https://api.builder.io/api/v1/image/assets/TEMP/e6eec2b2b017e830b1bab6adf7a5e40461d082ef?width=56',
    coverImage: 'https://api.builder.io/api/v1/image/assets/TEMP/9e3b1c0d67ef2a7ecf139c4b8718f5207d01c280?width=560',
    tags: 'Cooking, Unfiltered, Roastmaster, Gourmet, ......',
    socialMedia: [
      { platform: 'instagram' as const, followers: '1.2K' }
    ],
    isTopCreator: true
  },
  {
    id: 'baki-hanma',
    name: 'Baki Hanma',
    profileImage: 'https://api.builder.io/api/v1/image/assets/TEMP/77c56a7d3d5b2c164b52748d388090f695bc3cf7?width=56',
    coverImage: 'https://api.builder.io/api/v1/image/assets/TEMP/1c87f878e1486b7c615b353cc712331cfb18ff59?width=560',
    tags: 'Cooking, Unfiltered, Roastmaster, Gourmet, ......',
    socialMedia: [
      { platform: 'x' as const, followers: '1.2K' },
      { platform: 'facebook' as const, followers: '1.2K' },
      { platform: 'instagram' as const, followers: '1.2K' },
      { platform: 'tiktok' as const, followers: '1.2K' }
    ]
  }
];

export default function InfluencerOverviewPage() {
  const router = useRouter();
  const { id } = router.query;
  const [selectedPlatform, setSelectedPlatform] = useState('instagram');

  // Get influencer data (in real app, this would be fetched from API)
  const influencer = mockInfluencerData[id as string] || mockInfluencerData['gordon-ramsay'];

  const handleSimilarInfluencerClick = (influencerId: string) => {
    router.push(`/influencers/${influencerId}`);
  };

  return (
    <>
      <Head>
        <title>{influencer.name} - Influencer Profile - Social Stratix</title>
        <meta name="description" content={`View ${influencer.name}'s influencer profile and statistics`} />
      </Head>
      
      <PageContainer>
        <Header hasNotifications={true} />

        <BackNavigation>
          <BackLink href="/brands">
            <ArrowBackIcon sx={{ width: 24, height: 24, color: '#676767' }} />
            Back to influencer listing
          </BackLink>
        </BackNavigation>

        <ProfileContainer>
          {/* Image Gallery */}
          <ImageGallery>
            <MainImage src={influencer.images[0]} alt="Main image" />
            <SideImages>
              <SideImage src={influencer.images[1]} alt="Side image 1" />
              <SideImage src={influencer.images[2]} alt="Side image 2" />
            </SideImages>
            <RightImage src={influencer.images[3]} alt="Right image" />
          </ImageGallery>

          {/* Profile Section */}
          <ProfileSection>
            <ProfileAvatar src={influencer.profileImage} alt={influencer.name} />
            <ProfileInfo>
              <NameContainer>
                <Typography variant="h3" sx={{ fontSize: '24px', fontWeight: 600 }}>
                  {influencer.name}
                </Typography>
                <Box sx={{ height: '24px', width: '1px', backgroundColor: '#676767' }} />
                <LocationOnIcon sx={{ color: '#676767', width: 24, height: 24 }} />
                <Typography sx={{ fontSize: '14px', fontWeight: 600, color: '#1E002B' }}>
                  {influencer.location}
                </Typography>
              </NameContainer>
              <Typography sx={{ fontSize: '18px', color: '#676767' }}>
                {influencer.tags}
              </Typography>
            </ProfileInfo>
            <ActionButtons>
              <Button
                startIcon={<ShareIcon />}
                sx={{ 
                  color: '#783C91', 
                  textTransform: 'uppercase',
                  fontWeight: 600
                }}
              >
                Share
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderColor: '#783C91',
                  color: '#783C91',
                  textTransform: 'uppercase',
                  fontWeight: 600
                }}
              >
                Shortlist
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#EFECF0',
                  color: '#783C91',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.30), 0 1px 3px 1px rgba(0, 0, 0, 0.15)'
                }}
              >
                Connect
              </Button>
            </ActionButtons>
          </ProfileSection>

          <ContentSection>
            {/* Social Media Section */}
            <SocialMediaSection>
              {influencer.socialMedia.map((social, index) => (
                <SocialMediaChip
                  key={index}
                  platform={social.platform}
                  count={social.followers.replace(' Followers', '')}
                />
              ))}
            </SocialMediaSection>

            {/* Badges Section */}
            <BadgesSection>
              {influencer.isVerified && (
                <StyledBadge>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                    <VerifiedIcon sx={{ color: '#D9CF00', width: 24, height: 24 }} />
                    <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>
                      Verified payment
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: '12px', color: '#1E002B' }}>
                    The profile has been successfully verified and authenticated.
                  </Typography>
                </StyledBadge>
              )}
              
              {influencer.isTopCreator && (
                <StyledBadge>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                    <WorkspacePremiumIcon sx={{ color: '#DB9400', width: 24, height: 24 }} />
                    <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>
                      Top Creator
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: '12px', color: '#1E002B' }}>
                    Top creators have high ratings and completed multiple orders.
                  </Typography>
                </StyledBadge>
              )}
            </BadgesSection>

            {/* Description */}
            <Box sx={{ mb: 3 }}>
              <SectionTitle>Description</SectionTitle>
              <Typography sx={{ fontSize: '14px', color: '#1E002B', lineHeight: 1.5 }}>
                {influencer.description}
              </Typography>
            </Box>

            {/* Social Media Dropdown */}
            <Box sx={{ mb: 3 }}>
              <FormControl sx={{ width: 232 }}>
                <InputLabel>Social media</InputLabel>
                <Select
                  value={selectedPlatform}
                  onChange={(e) => setSelectedPlatform(e.target.value)}
                  label="Social media"
                >
                  <MenuItem value="instagram">Instagram</MenuItem>
                  <MenuItem value="youtube">YouTube</MenuItem>
                  <MenuItem value="tiktok">TikTok</MenuItem>
                  <MenuItem value="facebook">Facebook</MenuItem>
                  <MenuItem value="x">X (Twitter)</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/* Stats Cards */}
            <StatsContainer>
              <StatCard>
                <Typography sx={{ fontSize: '14px', color: '#1E002B', mb: 1 }}>
                  Number of campaigns
                </Typography>
                <Typography sx={{ fontSize: '33px', fontWeight: 600, color: '#1E002B' }}>
                  {influencer.stats.campaigns}
                </Typography>
              </StatCard>
              <StatCard sx={{ borderColor: '#FFD4F6' }}>
                <Typography sx={{ fontSize: '14px', color: '#1E002B', mb: 1 }}>
                  AVG campaign budget
                </Typography>
                <Typography sx={{ fontSize: '33px', fontWeight: 600, color: '#1E002B' }}>
                  {influencer.stats.avgBudget}
                </Typography>
              </StatCard>
            </StatsContainer>

            {/* Campaign Stats */}
            <Box sx={{ mt: 3 }}>
              <SectionTitle>Campaign Stats</SectionTitle>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {[1, 2, 3, 4].map((stat) => (
                  <Chip
                    key={stat}
                    label={`Stats #${stat}`}
                    sx={{
                      backgroundColor: '#D9CF00',
                      color: '#1E002B',
                      fontSize: '14px'
                    }}
                  />
                ))}
              </Box>
            </Box>

            {/* Reviews Section */}
            <Box sx={{ mt: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <SectionTitle sx={{ mb: 0 }}>Reviews</SectionTitle>
                <Typography sx={{ fontSize: '18px', color: '#1E002B' }}>(10)</Typography>
              </Box>
              
              {/* Sample Reviews */}
              {[1, 2, 3].map((review) => (
                <Box key={review} sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Avatar sx={{ width: 32, height: 32 }} />
                    <Box>
                      <Typography sx={{ fontSize: '12px', color: '#1E002B' }}>
                        Nobita Nobi
                      </Typography>
                      <Typography sx={{ fontSize: '10px', color: '#676767' }}>
                        12th September 2024
                      </Typography>
                    </Box>
                  </Box>
                  <Typography sx={{ fontSize: '12px', color: '#1E002B' }}>
                    Nobita Nobi is the main character of the popular Japanese manga and anime series Doraemon.
                  </Typography>
                </Box>
              ))}
              
              <Typography 
                sx={{ 
                  color: '#783C91', 
                  fontSize: '14px', 
                  fontWeight: 600, 
                  cursor: 'pointer',
                  textAlign: 'center',
                  mt: 2
                }}
              >
                See more reviews ↓
              </Typography>
            </Box>
          </ContentSection>
        </ProfileContainer>

        {/* Similar Influencers */}
        <SimilarInfluencersSection>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
            <SectionTitle sx={{ mb: 0 }}>Similar influencers</SectionTitle>
            <Typography 
              sx={{ 
                color: '#783C91', 
                fontSize: '14px', 
                fontWeight: 600, 
                cursor: 'pointer'
              }}
            >
              See All
            </Typography>
          </Box>
          
          <SimilarInfluencersGrid>
            {similarInfluencers.map((similarInfluencer) => (
              <InfluencerCard
                key={similarInfluencer.id}
                {...similarInfluencer}
                onClick={() => handleSimilarInfluencerClick(similarInfluencer.id)}
              />
            ))}
          </SimilarInfluencersGrid>
        </SimilarInfluencersSection>

        <Footer />
      </PageContainer>
    </>
  );
}
