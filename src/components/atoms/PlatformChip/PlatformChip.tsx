import { Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SocialMediaIcon, { SocialPlatform } from '../SocialMediaIcon/SocialMediaIcon';

const StyledChip = styled(Chip)<{ selected?: boolean; platformcolor?: string }>(({ theme, selected, platformcolor }) => ({
  display: 'flex',
  height: '32px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  border: `1px solid ${platformcolor || '#EEBA3D'}`,
  backgroundColor: '#FFF',
  '& .MuiChip-label': {
    color: '#1E002B',
    fontSize: '14px',
    fontWeight: 400,
    fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
    paddingLeft: '8px',
    paddingRight: selected ? '8px' : '16px'
  },
  '& .MuiChip-icon': {
    marginLeft: '16px',
    marginRight: 0
  },
  '& .MuiChip-deleteIcon': {
    marginLeft: '8px',
    marginRight: '16px',
    color: '#783C91'
  }
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

export interface PlatformChipProps {
  platform: SocialPlatform;
  selected?: boolean;
  onClick?: () => void;
}

export default function PlatformChip({ platform, selected, onClick }: PlatformChipProps) {
  return (
    <StyledChip
      icon={<SocialMediaIcon platform={platform} />}
      label={platformLabels[platform]}
      selected={selected}
      platformcolor={platformColors[platform]}
      deleteIcon={selected ? <CheckCircleIcon /> : undefined}
      onDelete={selected ? () => {} : undefined}
      onClick={onClick}
      clickable
    />
  );
}
