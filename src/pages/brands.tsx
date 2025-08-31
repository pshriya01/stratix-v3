import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Header from '../components/organisms/Header/Header';
import Footer from '../components/organisms/Footer/Footer';
import InfluencerCard from '../components/molecules/InfluencerCard/InfluencerCard';

const PageContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: `linear-gradient(0deg, rgba(250, 249, 246, 0.70) 0%, rgba(250, 249, 246, 0.70) 100%),
               linear-gradient(106deg, rgba(235, 188, 254, 0.30) 0%, rgba(240, 196, 105, 0.30) 100%),
               #FFF`,
  display: 'flex',
  flexDirection: 'column'
}));

const HeroSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '56px 298px 24px 298px',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '40px',
  [theme.breakpoints.down('lg')]: {
    padding: '56px 120px 24px 120px'
  },
  [theme.breakpoints.down('md')]: {
    padding: '56px 60px 24px 60px'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '56px 20px 24px 20px'
  }
}));

const TitleContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
  textAlign: 'center'
}));

const GradientTitle = styled(Typography)(({ theme }) => ({
  fontSize: '44px',
  fontWeight: 600,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  background: 'linear-gradient(90deg, #DD8AFF 0%, #783C91 20%, #DB9400 95%, #FFC244 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  lineHeight: 'normal',
  [theme.breakpoints.down('md')]: {
    fontSize: '36px'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '28px'
  }
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  color: '#443A48',
  fontSize: '24px',
  fontWeight: 400,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal',
  maxWidth: '800px',
  [theme.breakpoints.down('md')]: {
    fontSize: '20px'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px'
  }
}));

const ContentSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '1586px',
  padding: '24px 16px 0 16px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  backgroundColor: '#FFF',
  margin: '0 auto'
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: '#1E002B',
  fontSize: '24px',
  fontWeight: 600,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal',
  marginBottom: '16px'
}));

const InfluencersGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(376px, 1fr))',
  gap: '16px',
  width: '100%',
  justifyItems: 'center',
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr'
  }
}));

// Mock data for influencers
const mockInfluencers = [
  {
    id: 'gordon-ramsay',
    name: 'Gordon Ramsay',
    profileImage: 'https://api.builder.io/api/v1/image/assets/TEMP/8aa4e6040ffc932d9972b75f406b8504b2f7b8ba?width=56',
    coverImage: 'https://api.builder.io/api/v1/image/assets/TEMP/ec2fd95e98ab3314f00e2a829e7a74ac3b72f842?width=720',
    tags: 'Cooking, Unfiltered, Roastmaster, Gourmet, Placeholder',
    socialMedia: [
      { platform: 'x' as const, followers: '1.2K' },
      { platform: 'youtube' as const, followers: '1.2K' },
      { platform: 'facebook' as const, followers: '1.2K' },
      { platform: 'instagram' as const, followers: '1.2K' },
      { platform: 'tiktok' as const, followers: '1.2K' }
    ],
    isTopCreator: true,
    rating: 4.9
  },
  {
    id: 'deku',
    name: 'Deku',
    profileImage: 'https://api.builder.io/api/v1/image/assets/TEMP/e6eec2b2b017e830b1bab6adf7a5e40461d082ef?width=56',
    coverImage: 'https://api.builder.io/api/v1/image/assets/TEMP/ba00a44b00eaa82b2d9a6f445488f1177cdb2f50?width=720',
    tags: 'Cooking, Unfiltered, Roastmaster, Gourmet, Placeholder',
    socialMedia: [
      { platform: 'instagram' as const, followers: '1.2K' }
    ],
    isTopCreator: true,
    rating: 4.9
  },
  {
    id: 'baki-hanma',
    name: 'Baki Hanma',
    profileImage: 'https://api.builder.io/api/v1/image/assets/TEMP/77c56a7d3d5b2c164b52748d388090f695bc3cf7?width=56',
    coverImage: 'https://api.builder.io/api/v1/image/assets/TEMP/c4a6c10cbb8b27cdee785862c0bb64137592bcf0?width=720',
    tags: 'Cooking, Unfiltered, Roastmaster, Gourmet, Placeholder',
    socialMedia: [
      { platform: 'x' as const, followers: '1.2K' },
      { platform: 'facebook' as const, followers: '1.2K' },
      { platform: 'instagram' as const, followers: '1.2K' },
      { platform: 'tiktok' as const, followers: '1.2K' }
    ],
    rating: 4.1
  },
  {
    id: 'itachi-uchiha',
    name: 'Itachi Uchiha',
    profileImage: 'https://api.builder.io/api/v1/image/assets/TEMP/a27430ee8ac5ade5405cd56db473ee5d8bcc2f00?width=56',
    coverImage: 'https://api.builder.io/api/v1/image/assets/TEMP/b3ca1b60f5441781cea9fbe2b398ea7a19d1cd74?width=720',
    tags: 'Cooking, Unfiltered, Roastmaster, Gourmet, Placeholder',
    socialMedia: [
      { platform: 'x' as const, followers: '1.2K' },
      { platform: 'instagram' as const, followers: '1.2K' },
      { platform: 'tiktok' as const, followers: '1.2K' }
    ],
    rating: 4.3
  },
  {
    id: 'naruto-uzumaki',
    name: 'Naruto Uzumaki',
    profileImage: 'https://api.builder.io/api/v1/image/assets/TEMP/c63384b33d0608f382e2a8d26f1efff6b742e138?width=56',
    coverImage: 'https://api.builder.io/api/v1/image/assets/TEMP/a14e2a90278f3433113b85b804e95589c44e592d?width=720',
    tags: 'Cooking, Unfiltered, Roastmaster, Gourmet, Placeholder',
    socialMedia: [
      { platform: 'x' as const, followers: '1.2K' },
      { platform: 'youtube' as const, followers: '1.2K' },
      { platform: 'instagram' as const, followers: '1.2K' }
    ],
    rating: 4.9
  },
  {
    id: 'saul',
    name: 'Saul',
    profileImage: 'https://api.builder.io/api/v1/image/assets/TEMP/a27430ee8ac5ade5405cd56db473ee5d8bcc2f00?width=56',
    coverImage: 'https://api.builder.io/api/v1/image/assets/TEMP/3ff8b61f1f750045f62fac9377eb0652dfe9c60f?width=720',
    tags: 'Cooking, Unfiltered, Roastmaster, Gourmet, Placeholder',
    socialMedia: [
      { platform: 'x' as const, followers: '1.2K' },
      { platform: 'instagram' as const, followers: '1.2K' },
      { platform: 'tiktok' as const, followers: '1.2K' }
    ],
    rating: 4.9
  }
];

export default function BrandsPage() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');

  const handleInfluencerClick = (influencerId: string) => {
    router.push(`/brands/${influencerId}`);
  };

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  // Filter influencers based on search
  const filteredInfluencers = mockInfluencers.filter(influencer =>
    influencer.name.toLowerCase().includes(searchValue.toLowerCase()) ||
    influencer.tags.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Find Influencers - Social Stratix</title>
        <meta name="description" content="Find top influencers for your campaign from Instagram, YouTube, Facebook and other social platforms" />
      </Head>
      
      <PageContainer>
        <Header
          searchValue={searchValue}
          onSearchChange={handleSearchChange}
          hasNotifications={true}
        />

        <HeroSection>
          <TitleContainer>
            <GradientTitle>
              Right Voices to Amplify Your Brand!
            </GradientTitle>
            <Subtitle>
              Find top influencers for your campaign from Instagram, YouTube, facebook and other social platforms
            </Subtitle>
          </TitleContainer>

          <ContentSection>
            <SectionTitle>
              Top Influencers
            </SectionTitle>
            
            <InfluencersGrid>
              {filteredInfluencers.map((influencer) => (
                <InfluencerCard
                  key={influencer.id}
                  {...influencer}
                  onClick={() => handleInfluencerClick(influencer.id)}
                />
              ))}
            </InfluencersGrid>
          </ContentSection>
        </HeroSection>

        <Footer />
      </PageContainer>
    </>
  );
}
