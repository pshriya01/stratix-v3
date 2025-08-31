import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const LinkContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '10px',
  alignSelf: 'stretch',
  borderRadius: '4px',
  border: '1px solid #755002',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  '&:hover': {
    borderColor: '#DB9400',
    backgroundColor: '#F9F9F9'
  }
}));

const StateLayer = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '8px 0 8px 16px',
  alignItems: 'center',
  gap: '8px',
  alignSelf: 'stretch',
  borderRadius: '4px 4px 0 0'
}));

const IconContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '24px',
  height: '24px',
  justifyContent: 'center',
  alignItems: 'center'
}));

const ContentArea = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '40px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  flex: '1 0 0'
}));

const LinkText = styled(Typography)(({ theme }) => ({
  color: '#755002',
  fontSize: '14px',
  fontWeight: 400,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal'
}));

const SocialIcon = styled('img')(({ theme }) => ({
  width: '24px',
  height: '24px',
  flexShrink: 0
}));

export interface SocialMediaLinkProps {
  platform: 'Instagram' | 'Facebook' | 'TikTok' | 'X' | 'YouTube';
  onClick?: () => void;
}

const platformConfig = {
  Instagram: {
    text: 'Link Instagram Account',
    iconSrc: 'https://api.builder.io/api/v1/image/assets/TEMP/4cc0ba0fa2b9f800faa505ef121cedcb508f17e2?width=48'
  },
  Facebook: {
    text: 'Link Facebook Account',
    iconSrc: 'https://api.builder.io/api/v1/image/assets/TEMP/3375389a700d5c66c5cd2ede686b23e114909f33?width=48'
  },
  TikTok: {
    text: 'Link TikTok Account',
    iconSrc: 'https://api.builder.io/api/v1/image/assets/TEMP/9a0b986c268b9a976f3999df3ad397df5bf69823?width=36'
  },
  X: {
    text: 'Link X Account',
    iconSrc: 'https://api.builder.io/api/v1/image/assets/TEMP/e2f424c3c0aa84d14635b97a57fd84a68ec64199?width=48'
  },
  YouTube: {
    text: 'Link YouTube Account',
    iconSrc: 'https://api.builder.io/api/v1/image/assets/TEMP/5a186903571fcf9612613ccc5438fe6173db104d?width=48'
  }
};

export default function SocialMediaLink({ platform, onClick }: SocialMediaLinkProps) {
  const config = platformConfig[platform];

  return (
    <LinkContainer onClick={onClick}>
      <StateLayer>
        <IconContainer>
          <SocialIcon src={config.iconSrc} alt={`${platform} icon`} />
        </IconContainer>
        <ContentArea>
          <LinkText>{config.text}</LinkText>
        </ContentArea>
      </StateLayer>
    </LinkContainer>
  );
}
