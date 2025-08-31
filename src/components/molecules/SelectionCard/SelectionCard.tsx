import * as React from 'react';
import { Card, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const StyledCard = styled(Card)<{ selected?: boolean }>(({ theme, selected }) => ({
  width: '368px',
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  borderRadius: '4px',
  background: selected ? '#F0E2F6' : '#FFF',
  border: selected ? `1px solid ${theme.palette.primary.light}` : 'none',
  boxShadow: '0 -1px 1px 0 rgba(30, 0, 43, 0.05), 0 2px 3px 0 rgba(30, 0, 43, 0.16)',
  cursor: 'pointer',
  position: 'relative',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    background: selected ? '#F0E2F6' : '#EFECF0',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    maxWidth: '350px',
  },
}));

const CheckIcon = styled(CheckCircleIcon)(({ theme }) => ({
  position: 'absolute',
  top: '24px',
  right: '24px',
  color: theme.palette.primary.light,
  fontSize: '24px',
}));

export type SelectionCardProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  selected?: boolean;
  onClick?: () => void;
};

export default function SelectionCard({
  title,
  description,
  image,
  imageAlt,
  selected = false,
  onClick,
}: SelectionCardProps) {
  return (
    <StyledCard selected={selected} onClick={onClick}>
      {selected && <CheckIcon />}
      <Box
        component="img"
        src={image}
        alt={imageAlt}
        sx={{ 
          width: selected && title === 'Brand' ? '252px' : '250px', 
          height: '208px', 
          objectFit: 'contain' 
        }}
      />
      <Box sx={{ width: '100%' }}>
        <Typography 
          variant="h3" 
          sx={{ 
            color: '#1E002B', 
            fontSize: '24px', 
            fontWeight: 700,
            marginBottom: '8px'
          }}
        >
          {title}
        </Typography>
        <Typography 
          sx={{ 
            color: '#676767', 
            fontSize: '14px',
            lineHeight: 'normal',
            display: '-webkit-box',
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {description}
        </Typography>
      </Box>
    </StyledCard>
  );
}
