import { useState } from 'react';
import { Box, Typography, Button, Menu, MenuItem, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SocialMediaIcon, { SocialPlatform } from '../../atoms/SocialMediaIcon/SocialMediaIcon';

const CardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '16px 8px 24px 8px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '10px',
  alignSelf: 'stretch',
  borderBottom: '1px solid #DFDFDF',
  backgroundColor: '#FFF'
}));

const CardContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '11px',
  alignSelf: 'stretch'
}));

const MainContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  flex: '1 0 0'
}));

const HeaderSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  alignSelf: 'stretch'
}));

const TimestampContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '20px',
  alignItems: 'center',
  gap: '8px',
  alignSelf: 'stretch'
}));

const Timestamp = styled(Typography)(({ theme }) => ({
  color: '#676767',
  fontSize: '12px',
  fontWeight: 400,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal'
}));

const TitleSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  alignSelf: 'stretch'
}));

const TitleContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '4px',
  flex: '1 0 0'
}));

const BrandSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '4px'
}));

const BrandName = styled(Typography)(({ theme }) => ({
  color: '#783C91',
  fontSize: '12px',
  fontWeight: 600,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline'
  }
}));

const CampaignTitle = styled(Typography)(({ theme }) => ({
  color: '#1E002B',
  fontSize: '24px',
  fontWeight: 400,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal'
}));

const Tags = styled(Typography)(({ theme }) => ({
  alignSelf: 'stretch',
  color: '#676767',
  fontSize: '14px',
  fontWeight: 400,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal'
}));

const ActionsSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '16px'
}));

const Description = styled(Typography)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flex: '1 0 0',
  alignSelf: 'stretch',
  overflow: 'hidden',
  color: '#1E002B',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  fontSize: '12px',
  fontWeight: 400,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal'
}));

const DetailsSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  alignSelf: 'stretch'
}));

const DetailItem = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 600,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal'
}));

const SocialSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
}));

const SocialLabel = styled(Typography)(({ theme }) => ({
  color: '#1E002B',
  fontSize: '14px',
  fontWeight: 600,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  lineHeight: 'normal'
}));

const SocialIcons = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '16px'
}));

const Separator = styled(Box)(({ theme }) => ({
  width: '24px',
  height: '24px',
  '&::before': {
    content: '"|"',
    color: '#676767',
    fontSize: '14px'
  }
}));

export interface CampaignCardProps {
  id: string;
  brandName: string;
  campaignName: string;
  tags: string;
  description: string;
  location: string;
  budget: string;
  platforms: SocialPlatform[];
  timestamp: string;
  onBrandClick?: (brandName: string) => void;
  onEdit?: (id: string) => void;
  onViewDetails?: (id: string) => void;
  onMenuAction?: (action: string, id: string) => void;
}

export default function CampaignCard({
  id,
  brandName,
  campaignName,
  tags,
  description,
  location,
  budget,
  platforms,
  timestamp,
  onBrandClick,
  onEdit,
  onViewDetails,
  onMenuAction
}: CampaignCardProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (action: string) => {
    onMenuAction?.(action, id);
    handleMenuClose();
  };

  return (
    <CardContainer>
      <CardContent>
        <MainContent>
          <HeaderSection>
            <TimestampContainer>
              <Timestamp>{timestamp}</Timestamp>
            </TimestampContainer>
            
            <TitleSection>
              <TitleContent>
                <BrandSection>
                  <BrandName onClick={() => onBrandClick?.(brandName)}>
                    {brandName}
                  </BrandName>
                  <OpenInNewIcon sx={{ width: 18, height: 18, color: '#783C91' }} />
                </BrandSection>
                <CampaignTitle
                  onClick={() => onViewDetails?.(id)}
                  sx={{ cursor: 'pointer', '&:hover': { color: '#783C91' } }}
                >
                  {campaignName}
                </CampaignTitle>
                <Tags>{tags}</Tags>
              </TitleContent>

              <ActionsSection>
                <Button
                  variant="contained"
                  startIcon={<EditIcon />}
                  onClick={() => onEdit?.(id)}
                  sx={{
                    height: '40px',
                    borderRadius: '100px',
                    backgroundColor: '#E8E2EB',
                    color: '#3F214C',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    fontSize: '14px',
                    '&:hover': {
                      backgroundColor: '#DCD0E1'
                    }
                  }}
                >
                  Edit
                </Button>
                
                <IconButton
                  onClick={handleMenuClick}
                  sx={{
                    height: '40px',
                    width: '40px',
                    border: '1px solid #783C91',
                    borderRadius: '100px'
                  }}
                >
                  <MoreVertIcon sx={{ color: '#783C91' }} />
                </IconButton>
              </ActionsSection>
            </TitleSection>
          </HeaderSection>

          <Box sx={{ display: 'flex', height: '34px', alignItems: 'flex-start', gap: '10px', alignSelf: 'stretch' }}>
            <Description>{description}</Description>
          </Box>
        </MainContent>
      </CardContent>

      <DetailsSection>
        <DetailItem sx={{ color: '#1E002B' }}>
          Location: <Box component="span" sx={{ color: '#755002' }}>{location}</Box>
        </DetailItem>
        <Separator />
        <DetailItem sx={{ color: '#1E002B' }}>
          Budget: <Box component="span" sx={{ color: '#755002' }}>{budget}</Box>
        </DetailItem>
        <Separator />
        <SocialSection>
          <SocialLabel>Post on:</SocialLabel>
          <SocialIcons>
            {platforms.map((platform) => (
              <SocialMediaIcon key={platform} platform={platform} />
            ))}
          </SocialIcons>
        </SocialSection>
      </DetailsSection>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            borderRadius: '0 0 8px 8px',
            boxShadow: '0 -1px 1px 0 rgba(30, 0, 43, 0.05), 0 2px 3px 0 rgba(30, 0, 43, 0.16)',
            width: '200px'
          }
        }}
      >
        <MenuItem onClick={() => handleMenuItemClick('complete')}>Mark as Complete</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('delete')}>Delete Campaign</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('other')}>Any other placeholder</MenuItem>
      </Menu>
    </CardContainer>
  );
}
