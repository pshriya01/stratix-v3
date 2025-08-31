import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRef } from 'react';

const UploadArea = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '200px',
  height: '200px',
  padding: '32px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  borderRadius: '100px',
  border: '3px dashed #783C91',
  background: '#FFF',
  cursor: 'pointer',
  textAlign: 'center',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: '#F9F9F9',
    borderColor: '#5A2A6B',
  },
  '&.dragover': {
    backgroundColor: '#F0E2F6',
    borderColor: '#783C91',
  },
}));

const HiddenInput = styled('input')({
  display: 'none',
});

export type FileUploadProps = {
  onFileSelect?: (file: File) => void;
  accept?: string;
  maxSize?: number; // in MB
  children?: React.ReactNode;
};

export default function FileUpload({ 
  onFileSelect, 
  accept = "image/*",
  maxSize = 10,
  children 
}: FileUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = React.useState(false);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && validateFile(file)) {
      onFileSelect?.(file);
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragOver(false);
    
    const file = event.dataTransfer.files?.[0];
    if (file && validateFile(file)) {
      onFileSelect?.(file);
    }
  };

  const validateFile = (file: File): boolean => {
    // Check file size
    if (file.size > maxSize * 1024 * 1024) {
      alert(`File size must be less than ${maxSize}MB`);
      return false;
    }
    
    // Check file type
    if (!file.type.match(accept.replace('*', '.*'))) {
      alert(`File type must be ${accept}`);
      return false;
    }
    
    return true;
  };

  return (
    <>
      <UploadArea
        className={isDragOver ? 'dragover' : ''}
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {children || (
          <Typography sx={{ fontSize: '18px', fontWeight: 700, color: '#1E002B' }}>
            Add or drop photo here
          </Typography>
        )}
      </UploadArea>
      
      <HiddenInput
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileChange}
      />
    </>
  );
}
