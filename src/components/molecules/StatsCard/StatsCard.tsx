import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StatsCardContainer = styled(Box)<{ borderColor: string }>(({ theme, borderColor }) => ({
  display: 'flex',
  height: '111px',
  padding: '16px',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  flex: '1 0 0',
  borderRadius: '4px',
  border: `3px solid ${borderColor}`,
  backgroundColor: '#FFF'
}));

const TitleContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  alignSelf: 'stretch'
}));

const Title = styled(Typography)(({ theme }) => ({
  flex: '1 0 0',
  color: '#1E002B',
  textAlign: 'center',
  fontSize: '14px',
  fontWeight: 400,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal'
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2px',
  alignSelf: 'stretch'
}));

const Value = styled(Typography)(({ theme }) => ({
  alignSelf: 'stretch',
  color: '#1E002B',
  textAlign: 'center',
  fontSize: '33px',
  fontWeight: 600,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal'
}));

export interface StatsCardProps {
  title: string;
  value: string;
  borderColor: string;
}

export default function StatsCard({ title, value, borderColor }: StatsCardProps) {
  return (
    <StatsCardContainer borderColor={borderColor}>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <ContentContainer>
        <Value>{value}</Value>
      </ContentContainer>
    </StatsCardContainer>
  );
}
