import Button, { ButtonProps } from '@mui/material/Button';

export type ButtonPrimaryProps = ButtonProps & { label?: string };

export default function ButtonPrimary({ label, children, ...props }: ButtonPrimaryProps) {
  return (
    <Button variant="contained" color="primary" {...props}>
      {label ?? children}
    </Button>
  );
}
