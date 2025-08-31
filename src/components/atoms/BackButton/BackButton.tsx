import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const StyledBackButton = styled(IconButton)(({ theme }) => ({
  display: 'flex',
  padding: '4px 8px',
  alignItems: 'center',
  gap: '10px',
  borderRadius: '20px',
  background: '#DFDFDF',
  width: 'auto',
  height: 'auto',
  '&:hover': {
    background: '#CFCFCF'
  }
}));

export interface BackButtonProps {
  onClick?: () => void;
}

export default function BackButton({ onClick }: BackButtonProps) {
  return (
    <StyledBackButton onClick={onClick}>
      <ArrowBackIcon sx={{ width: 24, height: 24, color: '#676767' }} />
    </StyledBackButton>
  );
}
