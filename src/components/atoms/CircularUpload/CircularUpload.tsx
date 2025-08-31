import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const UploadContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '200px',
  height: '200px',
  padding: '82px 31px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  borderRadius: '100px',
  border: '3px dashed #783C91',
  background: '#FFF',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  '&:hover': {
    borderColor: '#3F214C',
    background: '#F9F9F9'
  }
}));

const UploadText = styled(Typography)(({ theme }) => ({
  color: '#1E002B',
  textAlign: 'center',
  fontSize: '18px',
  fontWeight: 600,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal'
}));

const PreviewImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '100px'
}));

const SizeText = styled(Typography)(({ theme }) => ({
  color: '#676767',
  fontSize: '14px',
  fontWeight: 400,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
}));

export interface CircularUploadProps {
  onFileSelect?: (file: File | null) => void;
  accept?: string;
  maxSizeMB?: number;
  minSize?: string;
  maxSize?: string;
}

export default function CircularUpload({
  onFileSelect,
  accept = 'image/*',
  maxSizeMB = 10,
  minSize = '200X200 Min',
  maxSize = '10 MB Max'
}: CircularUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = accept;
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        // Check file size
        if (file.size > maxSizeMB * 1024 * 1024) {
          alert(`File size should be less than ${maxSizeMB}MB`);
          return;
        }

        setSelectedFile(file);
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
        onFileSelect?.(file);
      }
    };
    input.click();
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
      <UploadContainer onClick={handleClick}>
        {previewUrl ? (
          <PreviewImage src={previewUrl} alt="Selected logo" />
        ) : (
          <UploadText>Add or drop photo here</UploadText>
        )}
      </UploadContainer>
      <SizeText>{minSize}/ {maxSize}</SizeText>
    </Box>
  );
}
