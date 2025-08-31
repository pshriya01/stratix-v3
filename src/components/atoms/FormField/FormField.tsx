import * as React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    height: '56px',
    borderRadius: '4px',
    '& fieldset': {
      borderColor: theme.palette.primary.light,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.text.primary,
    fontSize: '14px',
    fontWeight: 400,
    '&.Mui-focused': {
      color: theme.palette.primary.main,
    },
  },
}));

export type FormFieldProps = TextFieldProps & {
  label: string;
};

export default function FormField({ label, ...props }: FormFieldProps) {
  return (
    <StyledTextField
      label={label}
      variant="outlined"
      fullWidth
      {...props}
    />
  );
}
