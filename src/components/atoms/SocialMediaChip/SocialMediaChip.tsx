import { Chip, ChipProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledChip = styled(Chip, {
  shouldForwardProp: (prop) =>
    !['platform', 'count'].includes(prop as string)
})(({ theme }) => ({
  backgroundColor: '#FFF',
  border: '1px solid #000',
  borderRadius: '8px',
  padding: '4px',
  height: 'auto',
  '& .MuiChip-label': {
    color: '#1E002B',
    fontSize: '12px',
    fontWeight: 400,
    fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
    padding: '0 4px'
  },
  '& .MuiChip-icon': {
    margin: 0,
    width: '18px',
    height: '18px'
  },
  boxShadow: '0 -1px 1px 0 rgba(30, 0, 43, 0.05), 0 2px 3px 0 rgba(30, 0, 43, 0.16)'
}));

type SocialPlatform = 'x' | 'youtube' | 'facebook' | 'instagram' | 'tiktok';

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect width="18" height="18" rx="2" fill="#000"/>
    <path d="M7 7L17 17M17 7L7 17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect width="18" height="18" rx="3" fill="#FF0000"/>
    <path d="M8 12L15 8V16L8 12Z" fill="white"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect width="18" height="18" rx="2" fill="#1877F2"/>
    <path d="M12 8V11H9V14H12V22H15V14H18L18.5 11H15V9C15 8.5 15.4 8 16 8H18.5V5H16C13.8 5 12 6.8 12 9V8Z" fill="white"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="instagram-gradient">
        <stop offset="0%" stopColor="#F58529"/>
        <stop offset="50%" stopColor="#DD2A7B"/>
        <stop offset="100%" stopColor="#8134AF"/>
      </linearGradient>
    </defs>
    <rect width="18" height="18" rx="5" fill="url(#instagram-gradient)"/>
    <circle cx="9" cy="9" r="3" stroke="white" strokeWidth="1.5" fill="none"/>
    <circle cx="13.5" cy="4.5" r="1" fill="white"/>
  </svg>
);

const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect width="18" height="18" rx="3" fill="#000"/>
    <path d="M8 5V13C8 14.1 7.1 15 6 15S4 14.1 4 13 4.9 11 6 11V9C3.8 9 2 10.8 2 13S3.8 17 6 17 10 15.2 10 13V7C10.9 7.6 12 8 13 8V6C10.8 6 8 5 8 5Z" fill="#FF0050"/>
    <path d="M13 6V8C12 8 10.9 7.6 10 7V13C10 15.2 8.2 17 6 17S2 15.2 2 13 3.8 9 6 9V11C4.9 11 4 11.9 4 13S4.9 15 6 15 8 14.1 8 13V5" fill="white"/>
  </svg>
);

const platformConfig = {
  x: {
    borderColor: '#000',
    icon: XIcon
  },
  youtube: {
    borderColor: '#F00',
    icon: YouTubeIcon
  },
  facebook: {
    borderColor: '#0080FF',
    icon: FacebookIcon
  },
  instagram: {
    borderColor: '#EEBA3D',
    icon: InstagramIcon
  },
  tiktok: {
    borderColor: '#020202',
    icon: TikTokIcon
  }
};

export interface SocialMediaChipProps extends Omit<ChipProps, 'label'> {
  platform: SocialPlatform;
  count: string | number;
}

export default function SocialMediaChip({
  platform,
  count,
  sx,
  ...chipProps
}: SocialMediaChipProps) {
  const config = platformConfig[platform];
  const IconComponent = config.icon;

  return (
    <StyledChip
      icon={<IconComponent />}
      label={count}
      sx={{
        borderColor: config.borderColor,
        ...sx
      }}
      {...chipProps}
    />
  );
}
