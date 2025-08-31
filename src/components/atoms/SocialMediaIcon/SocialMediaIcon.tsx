import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const IconContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '24px',
  height: '24px',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative'
}));

export type SocialPlatform = 'youtube' | 'facebook' | 'instagram' | 'tiktok' | 'x';

const platformIcons: Record<SocialPlatform, string> = {
  youtube: 'https://api.builder.io/api/v1/image/assets/TEMP/5a186903571fcf9612613ccc5438fe6173db104d?width=48',
  facebook: 'https://api.builder.io/api/v1/image/assets/TEMP/3375389a700d5c66c5cd2ede686b23e114909f33?width=48',
  instagram: 'https://api.builder.io/api/v1/image/assets/TEMP/4cc0ba0fa2b9f800faa505ef121cedcb508f17e2?width=48',
  tiktok: 'https://api.builder.io/api/v1/image/assets/TEMP/9a0b986c268b9a976f3999df3ad397df5bf69823?width=36',
  x: 'https://api.builder.io/api/v1/image/assets/TEMP/e2f424c3c0aa84d14635b97a57fd84a68ec64199?width=48'
};

export interface SocialMediaIconProps {
  platform: SocialPlatform;
  onClick?: () => void;
}

export default function SocialMediaIcon({ platform, onClick }: SocialMediaIconProps) {
  return (
    <IconContainer onClick={onClick} sx={{ cursor: onClick ? 'pointer' : 'default' }}>
      <img
        src={platformIcons[platform]}
        alt={platform}
        style={{
          width: platform === 'tiktok' ? '18px' : '24px',
          height: platform === 'tiktok' ? '18px' : '24px',
          borderRadius: platform === 'tiktok' ? '75px' : 'none',
          padding: platform === 'tiktok' ? '3px' : 0
        }}
      />
    </IconContainer>
  );
}
