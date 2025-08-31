import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const UploadContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '10px',
  flex: '1 0 0',
  borderRadius: '4px',
  border: '1px solid #755002',
  cursor: 'pointer',
  '&:hover': {
    borderColor: '#DB9400',
    backgroundColor: '#F9F9F9'
  }
}));

const StateLayer = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '8px 0 8px 16px',
  alignItems: 'center',
  gap: '8px',
  alignSelf: 'stretch',
  borderRadius: '4px 4px 0 0'
}));

const ContentArea = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '40px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  flex: '1 0 0'
}));

const UploadText = styled(Typography)(({ theme }) => ({
  color: '#755002',
  fontSize: '14px',
  fontWeight: 400,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal'
}));

export interface FileUploadAreaProps {
  onFileSelect?: (files: FileList | null) => void;
  accept?: string;
  multiple?: boolean;
}

export default function FileUploadArea({ onFileSelect, accept, multiple = false }: FileUploadAreaProps) {
  const handleClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = accept || '*/*';
    input.multiple = multiple;
    input.onchange = (e) => {
      const files = (e.target as HTMLInputElement).files;
      onFileSelect?.(files);
    };
    input.click();
  };

  return (
    <UploadContainer onClick={handleClick}>
      <StateLayer>
        <AttachFileIcon sx={{ width: 24, height: 24, color: '#676767' }} />
        <ContentArea>
          <UploadText>Attach files</UploadText>
        </ContentArea>
      </StateLayer>
    </UploadContainer>
  );
}
