import { Box, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

const ChipContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '32px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  background: '#DFDFDF',
  transition: 'all 0.2s ease',
  '&:hover': {
    background: '#CFCFCF'
  }
}));

const StateLayer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '32px',
  padding: '6px 16px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px'
}));

const ChipText = styled(Typography)(({ theme }) => ({
  color: '#1E002B',
  textAlign: 'center',
  fontSize: '14px',
  fontWeight: 400,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal'
}));

export interface TagChipProps {
  label: string;
  onRemove?: () => void;
  removable?: boolean;
}

export default function TagChip({ label, onRemove, removable = false }: TagChipProps) {
  return (
    <ChipContainer>
      <StateLayer>
        <ChipText>{label}</ChipText>
        {removable && (
          <IconButton
            size="small"
            onClick={onRemove}
            sx={{
              width: '16px',
              height: '16px',
              color: '#676767',
              '&:hover': {
                color: '#1E002B'
              }
            }}
          >
            <CloseIcon sx={{ fontSize: '12px' }} />
          </IconButton>
        )}
      </StateLayer>
    </ChipContainer>
  );
}
