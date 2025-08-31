import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StepperContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '4px',
  width: '100%',
}));

const StepperBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  width: '100%',
}));

const StepLine = styled(Box, { shouldForwardProp: (prop) => prop !== 'active' })<{ active?: boolean }>(({ theme, active }) => ({
  width: '78.8px',
  height: '1px',
  background: active ? '#3F214C' : '#CFCFCF',
  flex: 1,
}));

export type StepperProps = {
  currentStep: number;
  totalSteps: number;
  label?: string;
};

export default function Stepper({ currentStep, totalSteps, label }: StepperProps) {
  return (
    <StepperContainer>
      <Typography 
        sx={{ 
          color: '#676767', 
          fontSize: '12px', 
          fontWeight: 400,
          width: '100%'
        }}
      >
        {label || `Question ${currentStep}/${totalSteps}`}
      </Typography>
      <StepperBar>
        {Array.from({ length: totalSteps }, (_, index) => (
          <StepLine key={index} active={index < currentStep} />
        ))}
      </StepperBar>
    </StepperContainer>
  );
}
