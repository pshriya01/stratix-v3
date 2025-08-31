import { Card, CardContent, CardMedia, Box, Typography, Chip, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SocialMediaChip from '../../atoms/SocialMediaChip/SocialMediaChip';

const StyledCard = styled(Card, {
  shouldForwardProp: (prop) =>
    !['isTopCreator', 'rating', 'socialMedia', 'tags', 'profileImage', 'coverImage'].includes(prop as string)
})(({ theme }) => ({
  width: '376px',
  borderRadius: '12px',
  border: '1px solid #DFDFDF',
  backgroundColor: '#FAF9F6',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  position: 'relative',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(30, 0, 43, 0.15)'
  }
}));

const CardImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '360px',
  height: '272px',
  margin: '8px',
  borderRadius: '4px',
  overflow: 'hidden'
}));

const ProfileOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '-20px',
  left: '16px',
  display: 'flex',
  alignItems: 'flex-end',
  gap: '16px',
  zIndex: 2
}));

const BadgeContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '8px',
  right: '8px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  zIndex: 2
}));

const SocialChipsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '4px',
  flexWrap: 'wrap',
  marginTop: '8px'
}));

const StyledBadge = styled(Chip)(({ theme }) => ({
  backgroundColor: '#FFF',
  border: '1px solid #000',
  borderRadius: '8px',
  boxShadow: '0 -1px 1px 0 rgba(30, 0, 43, 0.05), 0 2px 3px 0 rgba(30, 0, 43, 0.16)',
  '& .MuiChip-label': {
    color: '#1E002B',
    fontSize: '12px',
    fontWeight: 400,
    fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif'
  }
}));

interface SocialMedia {
  platform: 'x' | 'youtube' | 'facebook' | 'instagram' | 'tiktok';
  followers: string;
}

export interface InfluencerCardProps {
  id: string;
  name: string;
  profileImage: string;
  coverImage: string;
  tags: string;
  socialMedia: SocialMedia[];
  isTopCreator?: boolean;
  rating?: number;
  onClick?: () => void;
}

export default function InfluencerCard({
  id,
  name,
  profileImage,
  coverImage,
  tags,
  socialMedia,
  isTopCreator = false,
  rating,
  onClick
}: InfluencerCardProps) {
  return (
    <StyledCard onClick={onClick}>
      <CardImageContainer>
        <CardMedia
          component="img"
          height="272"
          image={coverImage}
          alt={`${name} cover image`}
          sx={{ borderRadius: '4px' }}
        />
        
        {/* Badges */}
        <BadgeContainer>
          {isTopCreator && (
            <StyledBadge
              icon={<WorkspacePremiumIcon sx={{ width: 18, height: 18, color: '#DB9400' }} />}
              label="Top Creator"
            />
          )}
          {rating && (
            <StyledBadge
              icon={<StarIcon sx={{ width: 18, height: 18, color: '#F0C469' }} />}
              label={rating.toString()}
            />
          )}
        </BadgeContainer>

        {/* Profile overlay */}
        <ProfileOverlay>
          <Avatar
            src={profileImage}
            alt={name}
            sx={{
              width: 56,
              height: 56,
              border: '3px solid #FFF'
            }}
          />
          <Box sx={{ pb: 1 }}>
            <Typography
              variant="h5"
              sx={{
                color: '#1E002B',
                fontSize: '14px',
                fontWeight: 600,
                lineHeight: 1
              }}
            >
              {name}
            </Typography>
          </Box>
        </ProfileOverlay>
      </CardImageContainer>

      <CardContent sx={{ pt: 3, pb: 2 }}>
        <Typography
          variant="body2"
          sx={{
            color: '#676767',
            fontSize: '12px',
            fontWeight: 400,
            mb: 1,
            lineHeight: 1.2
          }}
        >
          {tags}
        </Typography>

        <SocialChipsContainer>
          {socialMedia.map((social, index) => (
            <SocialMediaChip
              key={index}
              platform={social.platform}
              count={social.followers}
            />
          ))}
        </SocialChipsContainer>
      </CardContent>
    </StyledCard>
  );
}
