import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
}));

export type LogoProps = {
  size?: 'small' | 'medium' | 'large';
  color?: string;
};

const sizes = {
  small: { emoji: '15px', text: '12px' },
  medium: { emoji: '24.75px', text: '15px' },
  large: { emoji: '48px', text: '32px' },
};

export default function Logo({ size = 'medium', color = '#3F214C' }: LogoProps) {
  const { emoji, text } = sizes[size];

  return (
    <LogoContainer>
      <Typography sx={{ fontSize: emoji, fontWeight: 700, color }}>ツ</Typography>
      <Typography sx={{ fontSize: text, fontWeight: 700, color }}>SOCIAL STRATIX</Typography>
    </LogoContainer>
  );
}
