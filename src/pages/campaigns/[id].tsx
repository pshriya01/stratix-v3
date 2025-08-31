import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Header from '../../components/organisms/Header/Header';
import Footer from '../../components/organisms/Footer/Footer';

const PageContainer = styled('div')({
  display: 'flex',
  width: '1920px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  background: 'linear-gradient(0deg, rgba(250, 249, 246, 0.70) 0%, rgba(250, 249, 246, 0.70) 100%), linear-gradient(106deg, rgba(235, 188, 254, 0.30) 0%, rgba(240, 196, 105, 0.30) 100%), #FFF',
  minHeight: '100vh',
  margin: '0 auto',
  maxWidth: '100vw',
  overflow: 'hidden'
});

const ContentContainer = styled('div')({
  display: 'flex',
  padding: '26px 240px',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
  alignSelf: 'stretch'
});

const BackButtonContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  alignSelf: 'stretch',
  cursor: 'pointer'
});

const BackIcon = styled('svg')({
  width: '24px',
  height: '24px'
});

const BackText = styled('div')({
  color: '#783C91',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '14px',
  fontWeight: 700,
  lineHeight: 'normal'
});

const MainCard = styled('div')({
  display: 'flex',
  width: '1440px',
  padding: '16px 32px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  borderRadius: '8px',
  background: '#FFF'
});

const CampaignHeader = styled('div')({
  display: 'flex',
  paddingBottom: '16px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  alignSelf: 'stretch',
  borderBottom: '1px solid #DFDFDF'
});

const BrandSection = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  alignSelf: 'stretch'
});

const BrandAvatar = styled('img')({
  width: '40px',
  height: '40px',
  borderRadius: '168px',
  border: '5px solid #FFF'
});

const BrandName = styled('div')({
  color: '#1E002B',
  textAlign: 'center',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '14px',
  fontWeight: 700,
  lineHeight: 'normal'
});

const CampaignContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '16px',
  alignSelf: 'stretch'
});

const MainContent = styled('div')({
  display: 'flex',
  alignItems: 'flex-start',
  alignSelf: 'stretch'
});

const LeftColumn = styled('div')({
  display: 'flex',
  paddingRight: '24px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '16px',
  flex: '1 0 0',
  borderRight: '1px solid #DFDFDF'
});

const CampaignTitleSection = styled('div')({
  display: 'flex',
  width: '1097px',
  paddingBottom: '16px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  borderBottom: '1px solid #DFDFDF'
});

const CampaignTitle = styled('div')({
  color: '#1E002B',
  textAlign: 'center',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '33px',
  fontWeight: 400,
  lineHeight: 'normal'
});

const MetaInfo = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  alignSelf: 'stretch'
});

const MetaText = styled('div')({
  color: '#676767',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: 'normal'
});

const Separator = styled('svg')({
  width: '24px',
  height: '24px'
});

const VerifiedSection = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
});

const VerifiedIcon = styled('svg')({
  width: '24px',
  height: '24px'
});

const VerifiedText = styled('div')({
  color: '#676767',
  textAlign: 'center',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '12px',
  fontWeight: 700,
  lineHeight: 'normal'
});

const DescriptionSection = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  alignSelf: 'stretch'
});

const DescriptionText = styled('div')({
  alignSelf: 'stretch',
  color: '#1E002B',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: 'normal'
});

const SectionContainer = styled('div')({
  display: 'flex',
  paddingTop: '24px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  alignSelf: 'stretch'
});

const SectionTitle = styled('div')({
  color: '#1E002B',
  textAlign: 'center',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '24px',
  fontWeight: 700,
  lineHeight: 'normal'
});

const PlatformChipsContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  alignContent: 'center',
  gap: '16px',
  alignSelf: 'stretch',
  flexWrap: 'wrap'
});

const PlatformChip = styled('div')<{ borderColor: string }>((props) => ({
  display: 'flex',
  height: '32px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  border: `1px solid ${props.borderColor}`,
  background: '#FFF'
}));

const ChipContent = styled('div')({
  display: 'flex',
  height: '32px',
  padding: '6px 16px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px'
});

const ChipIcon = styled('div')({
  display: 'flex',
  width: '24px',
  height: '24px',
  justifyContent: 'center',
  alignItems: 'center'
});

const ChipLabel = styled('div')({
  color: '#1E002B',
  textAlign: 'center',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: 'normal'
});

const TagsText = styled('div')({
  alignSelf: 'stretch',
  color: '#1E002B',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '18px',
  fontWeight: 400,
  lineHeight: 'normal'
});

const AttachmentsGrid = styled('div')({
  display: 'flex',
  alignItems: 'flex-start',
  alignContent: 'flex-start',
  gap: '8px',
  alignSelf: 'stretch',
  flexWrap: 'wrap'
});

const AttachmentCard = styled('div')({
  display: 'flex',
  width: '336px',
  padding: '16px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '10px',
  borderRadius: '8px',
  border: '1px solid #DFDFDF'
});

const AttachmentContainer = styled('div')({
  display: 'flex',
  padding: '4px 0',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'flex-start',
  gap: '4px',
  alignSelf: 'stretch'
});

const AttachmentOverlay = styled('div')({
  display: 'flex',
  padding: '2px 12px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  borderRadius: '800px',
  background: '#DFDFDF'
});

const AttachmentLabel = styled('div')({
  color: '#783C91',
  textAlign: 'center',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '10px',
  fontWeight: 400,
  lineHeight: 'normal'
});

const AttachmentUrlContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  alignSelf: 'stretch'
});

const AttachmentUrl = styled('div')({
  display: 'flex',
  height: '16px',
  flexDirection: 'column',
  justifyContent: 'center',
  flex: '1 0 0',
  overflow: 'hidden',
  color: '#676767',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: 'normal'
});

const OpenIcon = styled('div')({
  width: '24px',
  height: '24px',
  position: 'relative'
});

const RightColumn = styled('div')({
  display: 'flex',
  padding: '49px 0 24px 16px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '24px',
  background: '#FFF'
});

const ActionButtons = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '16px'
});

const SaveButton = styled('div')({
  display: 'flex',
  height: '41px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  borderRadius: '100px',
  border: '1px solid #783C91',
  cursor: 'pointer'
});

const SaveButtonContent = styled('div')({
  display: 'flex',
  padding: '10px 24px 10px 16px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px'
});

const SaveIcon = styled('svg')({
  width: '18px',
  height: '18px'
});

const SaveText = styled('div')({
  color: '#783C91',
  textAlign: 'center',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '14px',
  fontWeight: 700,
  lineHeight: 'normal',
  textTransform: 'uppercase'
});

const ApplyButton = styled('div')({
  display: 'flex',
  height: '41px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  borderRadius: '100px',
  background: '#783C91',
  cursor: 'pointer'
});

const ApplyButtonContent = styled('div')({
  display: 'flex',
  padding: '10px 24px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px'
});

const ApplyText = styled('div')({
  color: '#FFF',
  textAlign: 'center',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '14px',
  fontWeight: 700,
  lineHeight: 'normal',
  textTransform: 'uppercase'
});

const InfoSection = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '16px'
});

const LocationIcon = styled('svg')({
  width: '24px',
  height: '24px'
});

const InfoText = styled('div')({
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '14px',
  fontWeight: 700,
  lineHeight: 'normal'
});

const AboutBrandSection = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  cursor: 'pointer'
});

const AboutBrandText = styled('div')({
  color: '#783C91',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '12px',
  fontWeight: 700,
  lineHeight: 'normal'
});

const AboutBrandIcon = styled('div')({
  width: '18px',
  height: '18px',
  position: 'relative'
});

const DetailSection = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  alignSelf: 'stretch'
});

const DetailSectionTitle = styled('div')({
  color: '#1E002B',
  textAlign: 'center',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '18px',
  fontWeight: 700,
  lineHeight: 'normal'
});

const DetailItem = styled('div')({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '8px',
  alignSelf: 'stretch'
});

const DetailLabel = styled('div')({
  flex: '1 0 0',
  color: '#1E002B',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: 'normal'
});

const DetailValue = styled('div')({
  color: '#1E002B',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '14px',
  fontWeight: 700,
  lineHeight: 'normal'
});

const ReportSection = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  cursor: 'pointer'
});

const ReportIcon = styled('svg')({
  width: '18px',
  height: '18px'
});

const ReportText = styled('div')({
  color: '#783C91',
  textAlign: 'center',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '14px',
  fontWeight: 700,
  lineHeight: 'normal'
});

const LinkCard = styled('div')({
  display: 'flex',
  padding: '16px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '10px',
  alignSelf: 'stretch',
  borderRadius: '8px',
  border: '1px solid #DFDFDF'
});

const LinkContainer = styled('div')({
  display: 'flex',
  padding: '4px 0',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'flex-start',
  gap: '4px',
  alignSelf: 'stretch'
});

const LinkUrlContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  alignSelf: 'stretch'
});

const LinkUrl = styled('div')({
  display: 'flex',
  height: '16px',
  flexDirection: 'column',
  justifyContent: 'center',
  flex: '1 0 0',
  overflow: 'hidden',
  color: '#676767',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: 'normal'
});

const CopyIcon = styled('svg')({
  width: '24px',
  height: '24px'
});

const SimilarCampaignsSection = styled('div')({
  display: 'flex',
  paddingTop: '40px',
  flexDirection: 'column',
  alignItems: 'center',
  alignSelf: 'stretch'
});

const SimilarCampaignsHeader = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  alignSelf: 'stretch'
});

const SimilarCampaignCard = styled('div')({
  display: 'flex',
  padding: '16px 8px 24px 8px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '10px',
  alignSelf: 'stretch',
  borderBottom: '1px solid #DFDFDF',
  background: '#FFF',
  cursor: 'pointer'
});

const CampaignCardContent = styled('div')({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '11px',
  alignSelf: 'stretch'
});

const CampaignAvatar = styled('div')({
  display: 'flex',
  paddingTop: '20px',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
  borderRadius: '100px'
});

const AvatarImage = styled('img')({
  width: '60px',
  height: '60px',
  borderRadius: '168px',
  border: '2px solid #FFF'
});

const CampaignDetails = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  flex: '1 0 0'
});

const CampaignMeta = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  alignSelf: 'stretch'
});

const CampaignMetaTop = styled('div')({
  display: 'flex',
  height: '20px',
  alignItems: 'center',
  gap: '8px',
  alignSelf: 'stretch'
});

const CampaignMainInfo = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  alignSelf: 'stretch'
});

const CampaignInfoLeft = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '4px',
  flex: '1 0 0'
});

const BrandNameContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '4px'
});

const BrandNameLink = styled('div')({
  color: '#783C91',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '12px',
  fontWeight: 700,
  lineHeight: 'normal'
});

const BrandLinkIcon = styled('div')({
  width: '18px',
  height: '18px',
  position: 'relative'
});

const CampaignNameTitle = styled('div')({
  color: '#1E002B',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '24px',
  fontWeight: 400,
  lineHeight: 'normal'
});

const CampaignTags = styled('div')({
  alignSelf: 'stretch',
  color: '#676767',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: 'normal'
});

const CampaignDescription = styled('div')({
  display: 'flex',
  height: '34px',
  alignItems: 'flex-start',
  gap: '10px',
  alignSelf: 'stretch'
});

const DescriptionTextTruncated = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flex: '1 0 0',
  alignSelf: 'stretch',
  overflow: 'hidden',
  color: '#1E002B',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: 'normal'
});

const CampaignFooter = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  alignSelf: 'stretch'
});

const LocationText = styled('div')({
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '14px',
  fontWeight: 700,
  lineHeight: 'normal'
});

const PlatformsList = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
});

const PostOnText = styled('div')({
  color: '#1E002B',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '14px',
  fontWeight: 700,
  lineHeight: 'normal'
});

const PlatformIcons = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '16px'
});

const PlatformIcon = styled('div')({
  display: 'flex',
  width: '24px',
  height: '24px',
  justifyContent: 'center',
  alignItems: 'center'
});

const SeeMoreSection = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4px',
  cursor: 'pointer'
});

const SeeMoreText = styled('div')({
  color: '#783C91',
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '14px',
  fontWeight: 700,
  lineHeight: 'normal'
});

const ForwardIcon = styled('svg')({
  width: '24px',
  height: '24px',
  transform: 'rotate(90deg)'
});

// Mock data
const mockCampaignData = {
  brandName: 'Brand name',
  brandAvatar: 'https://api.builder.io/api/v1/image/assets/TEMP/b9e5504945a01223adf71a1ae579aa26040ae6ad?width=80',
  campaignName: 'Campaign name',
  timestamp: 'Posted 3 hours ago',
  proposals: 'Over 100 applicants',
  verified: true,
  description: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'Turpis ex libero aliquam vulputate semper consectetur. Nunc accumsan diam hac purus, vel volutpat mauris. Vestibulum nunc feugiat phasellus tristique orci vitae efficitur duis. Maximus dis ante penatibus morbi lobortis neque duis pellentesque pharetra. Eu parturient habitant fusce non finibus ac. Class libero fringilla viverra; elit dictumst dui. Finibus consectetur et velit tempus sodales aptent fringilla praesent facilisi. Facilisi auctor donec praesent porta viverra lobortis per phasellus mollis.\n\nRhoncus sed class ex quis; fermentum eros. Ex dapibus blandit mollis cubilia donec, proin interdum pretium. Blandit malesuada vehicula cursus dolor pretium vestibulum ornare per varius. Sit magnis faucibus massa rutrum aenean donec egestas; maximus congue. Ante malesuada pellentesque maecenas convallis malesuada lacinia curae. Dolor blandit morbi litora litora tellus lacus orci in. Proin vestibulum proin turpis ex nibh fames non.'
  ],
  platforms: [
    { name: 'YouTube', color: '#F00', icon: 'https://api.builder.io/api/v1/image/assets/TEMP/5a186903571fcf9612613ccc5438fe6173db104d?width=48' },
    { name: 'Facebook', color: '#0080FF', icon: 'https://api.builder.io/api/v1/image/assets/TEMP/3375389a700d5c66c5cd2ede686b23e114909f33?width=48' },
    { name: 'Instagram', color: '#EEBA3D', icon: 'https://api.builder.io/api/v1/image/assets/TEMP/4cc0ba0fa2b9f800faa505ef121cedcb508f17e2?width=48' },
    { name: 'TikTok', color: '#020202', icon: 'https://api.builder.io/api/v1/image/assets/TEMP/9a0b986c268b9a976f3999df3ad397df5bf69823?width=36' },
    { name: 'X', color: '#1E002B', icon: 'https://api.builder.io/api/v1/image/assets/TEMP/e2f424c3c0aa84d14635b97a57fd84a68ec64199?width=48' }
  ],
  tags: 'Lifestyle, Fashion, Beauty',
  attachments: [
    { label: 'Brief', url: 'https://www.stratix.com/campaign/brief' },
    { label: 'Brief', url: 'https://www.stratix.com/campaign/brief' },
    { label: 'Brief', url: 'https://www.stratix.com/campaign/brief' }
  ],
  location: 'Bangalore',
  budget: '₹ 1,000',
  costPerView: '₹0.25',
  minFollowers: '1,000',
  duration: '60 days',
  campaignLink: 'https://www.camp_name.com/campaign/brief'
};

const mockSimilarCampaigns = [
  {
    id: '2',
    brandName: 'Brand name',
    campaignName: 'Campaign name',
    tags: 'Lifestyle, Fashion, Beauty',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla...',
    location: 'Bangalore',
    budget: '₹ 1,000',
    platforms: [
      { icon: 'https://api.builder.io/api/v1/image/assets/TEMP/5a186903571fcf9612613ccc5438fe6173db104d?width=48' },
      { icon: 'https://api.builder.io/api/v1/image/assets/TEMP/e2f424c3c0aa84d14635b97a57fd84a68ec64199?width=48' },
      { icon: 'https://api.builder.io/api/v1/image/assets/TEMP/9a0b986c268b9a976f3999df3ad397df5bf69823?width=36' },
      { icon: 'https://api.builder.io/api/v1/image/assets/TEMP/4cc0ba0fa2b9f800faa505ef121cedcb508f17e2?width=48' },
      { icon: 'https://api.builder.io/api/v1/image/assets/TEMP/3375389a700d5c66c5cd2ede686b23e114909f33?width=48' }
    ],
    timestamp: 'Posted 3 hours ago',
    avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/a886c16b3b008955a2764cd226317cf690321858?width=120'
  },
  {
    id: '3',
    brandName: 'Brand name',
    campaignName: 'Campaign name',
    tags: 'Lifestyle, Fashion, Beauty',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla...',
    location: 'Bangalore',
    budget: '₹ 1,000',
    platforms: [
      { icon: 'https://api.builder.io/api/v1/image/assets/TEMP/5a186903571fcf9612613ccc5438fe6173db104d?width=48' },
      { icon: 'https://api.builder.io/api/v1/image/assets/TEMP/e2f424c3c0aa84d14635b97a57fd84a68ec64199?width=48' },
      { icon: 'https://api.builder.io/api/v1/image/assets/TEMP/9a0b986c268b9a976f3999df3ad397df5bf69823?width=36' },
      { icon: 'https://api.builder.io/api/v1/image/assets/TEMP/4cc0ba0fa2b9f800faa505ef121cedcb508f17e2?width=48' },
      { icon: 'https://api.builder.io/api/v1/image/assets/TEMP/3375389a700d5c66c5cd2ede686b23e114909f33?width=48' }
    ],
    timestamp: 'Posted 3 hours ago',
    avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/a886c16b3b008955a2764cd226317cf690321858?width=120'
  },
  {
    id: '4',
    brandName: 'Brand name',
    campaignName: 'Campaign name',
    tags: 'Lifestyle, Fashion, Beauty',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla...',
    location: 'Bangalore',
    budget: '₹ 1,000',
    platforms: [
      { icon: 'https://api.builder.io/api/v1/image/assets/TEMP/5a186903571fcf9612613ccc5438fe6173db104d?width=48' },
      { icon: 'https://api.builder.io/api/v1/image/assets/TEMP/e2f424c3c0aa84d14635b97a57fd84a68ec64199?width=48' },
      { icon: 'https://api.builder.io/api/v1/image/assets/TEMP/9a0b986c268b9a976f3999df3ad397df5bf69823?width=36' },
      { icon: 'https://api.builder.io/api/v1/image/assets/TEMP/4cc0ba0fa2b9f800faa505ef121cedcb508f17e2?width=48' },
      { icon: 'https://api.builder.io/api/v1/image/assets/TEMP/3375389a700d5c66c5cd2ede686b23e114909f33?width=48' }
    ],
    timestamp: 'Posted 3 hours ago',
    avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/a886c16b3b008955a2764cd226317cf690321858?width=120'
  }
];

interface CampaignDetailProps {
  campaignId: string;
}

export default function CampaignDetail({ campaignId }: CampaignDetailProps) {
  const router = useRouter();

  const handleBack = () => {
    router.push('/influencers');
  };

  const handleApply = () => {
    console.log('Apply to campaign:', campaignId);
  };

  const handleSave = () => {
    console.log('Save campaign:', campaignId);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(mockCampaignData.campaignLink);
  };

  const handleSimilarCampaignClick = (id: string) => {
    router.push(`/campaigns/${id}`);
  };

  return (
    <>
      <Head>
        <title>{mockCampaignData.campaignName} - Social Stratix</title>
        <meta name="description" content={`Campaign details for ${mockCampaignData.campaignName}`} />
      </Head>
      
      <PageContainer>
        <Header />

        <ContentContainer>
          {/* Back Button */}
          <BackButtonContainer onClick={handleBack}>
            <BackIcon viewBox="0 0 24 24" fill="none">
              <path d="M14 18L8 12L14 6L15.4 7.4L10.8 12L15.4 16.6L14 18Z" fill="#676767"/>
            </BackIcon>
            <BackText>Back to campaign listing</BackText>
          </BackButtonContainer>

          <MainCard>
            <CampaignHeader>
              {/* Brand Section */}
              <BrandSection>
                <BrandAvatar src={mockCampaignData.brandAvatar} alt={mockCampaignData.brandName} />
                <BrandName>{mockCampaignData.brandName}</BrandName>
              </BrandSection>

              <CampaignContent>
                <MainContent>
                  <LeftColumn>
                    {/* Campaign Title Section */}
                    <CampaignTitleSection>
                      <CampaignTitle>{mockCampaignData.campaignName}</CampaignTitle>
                      <MetaInfo>
                        <MetaText>{mockCampaignData.timestamp}</MetaText>
                        <Separator viewBox="0 0 24 24" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 20L12 4H14L14 20H12Z" fill="#676767"/>
                        </Separator>
                        <MetaText>Proposal: {mockCampaignData.proposals}</MetaText>
                        <Separator viewBox="0 0 24 24" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 20L12 4H14L14 20H12Z" fill="#676767"/>
                        </Separator>
                        {mockCampaignData.verified && (
                          <VerifiedSection>
                            <VerifiedIcon viewBox="0 0 24 24" fill="none">
                              <path d="M8.6 22.5L6.7 19.3L3.1 18.5L3.45 14.8L1 12L3.45 9.2L3.1 5.5L6.7 4.7L8.6 1.5L12 2.95L15.4 1.5L17.3 4.7L20.9 5.5L20.55 9.2L23 12L20.55 14.8L20.9 18.5L17.3 19.3L15.4 22.5L12 21.05L8.6 22.5ZM9.45 19.95L12 18.85L14.6 19.95L16 17.55L18.75 16.9L18.5 14.1L20.35 12L18.5 9.85L18.75 7.05L16 6.45L14.55 4.05L12 5.15L9.4 4.05L8 6.45L5.25 7.05L5.5 9.85L3.65 12L5.5 14.1L5.25 16.95L8 17.55L9.45 19.95ZM10.95 15.55L16.6 9.9L15.2 8.45L10.95 12.7L8.8 10.6L7.4 12L10.95 15.55Z" fill="#D9CF00"/>
                            </VerifiedIcon>
                            <VerifiedText>Verified payment</VerifiedText>
                          </VerifiedSection>
                        )}
                      </MetaInfo>
                    </CampaignTitleSection>

                    {/* Description */}
                    <DescriptionSection>
                      {mockCampaignData.description.map((paragraph, index) => (
                        <DescriptionText key={index}>{paragraph}</DescriptionText>
                      ))}
                    </DescriptionSection>

                    {/* Post On Section */}
                    <SectionContainer>
                      <SectionTitle>Post on</SectionTitle>
                      <PlatformChipsContainer>
                        {mockCampaignData.platforms.map((platform, index) => (
                          <PlatformChip key={index} borderColor={platform.color}>
                            <ChipContent>
                              <ChipIcon>
                                <img 
                                  src={platform.icon} 
                                  alt={platform.name}
                                  style={{ 
                                    width: platform.name === 'TikTok' ? '18px' : '24px', 
                                    height: platform.name === 'TikTok' ? '18px' : '24px',
                                    borderRadius: platform.name === 'TikTok' ? '75px' : '0'
                                  }} 
                                />
                              </ChipIcon>
                              <ChipLabel>{platform.name}</ChipLabel>
                            </ChipContent>
                          </PlatformChip>
                        ))}
                      </PlatformChipsContainer>
                    </SectionContainer>

                    {/* Tags Section */}
                    <SectionContainer>
                      <SectionTitle>Tag</SectionTitle>
                      <TagsText>{mockCampaignData.tags}</TagsText>
                    </SectionContainer>

                    {/* Attachments Section */}
                    <SectionContainer>
                      <SectionTitle>Attachments</SectionTitle>
                      <AttachmentsGrid>
                        {mockCampaignData.attachments.map((attachment, index) => (
                          <AttachmentCard key={index}>
                            <AttachmentContainer>
                              <AttachmentOverlay>
                                <AttachmentLabel>{attachment.label}</AttachmentLabel>
                              </AttachmentOverlay>
                              <AttachmentUrlContainer>
                                <AttachmentUrl>{attachment.url}</AttachmentUrl>
                                <OpenIcon>
                                  <div style={{ width: '24px', height: '24px', background: '#D9D9D9', position: 'absolute' }}></div>
                                  <svg style={{ width: '18px', height: '18px', fill: '#676767', position: 'absolute', left: '3px', top: '3px' }} viewBox="0 0 18 18" fill="none">
                                    <path d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H9V2H2V16H16V9H18V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM6.7 12.7L5.3 11.3L14.6 2H11V0H18V7H16V3.4L6.7 12.7Z" fill="#676767"/>
                                  </svg>
                                </OpenIcon>
                              </AttachmentUrlContainer>
                            </AttachmentContainer>
                          </AttachmentCard>
                        ))}
                      </AttachmentsGrid>
                    </SectionContainer>
                  </LeftColumn>

                  <RightColumn>
                    {/* Action Buttons */}
                    <ActionButtons>
                      <SaveButton onClick={handleSave}>
                        <SaveButtonContent>
                          <SaveIcon viewBox="0 0 18 19" fill="none">
                            <path d="M9 16.2498L7.9125 15.2748C6.65 14.1373 5.60625 13.1561 4.78125 12.3311C3.95625 11.5061 3.3 10.7654 2.8125 10.1092C2.325 9.45293 1.98438 8.8498 1.79063 8.2998C1.59688 7.7498 1.5 7.1873 1.5 6.6123C1.5 5.4373 1.89375 4.45605 2.68125 3.66855C3.46875 2.88105 4.45 2.4873 5.625 2.4873C6.275 2.4873 6.89375 2.6248 7.48125 2.8998C8.06875 3.1748 8.575 3.5623 9 4.0623C9.425 3.5623 9.93125 3.1748 10.5188 2.8998C11.1063 2.6248 11.725 2.4873 12.375 2.4873C13.55 2.4873 14.5313 2.88105 15.3188 3.66855C16.1063 4.45605 16.5 5.4373 16.5 6.6123C16.5 7.1873 16.4031 7.7498 16.2094 8.2998C16.0156 8.8498 15.675 9.45293 15.1875 10.1092C14.7 10.7654 14.0437 11.5061 13.2188 12.3311C12.3938 13.1561 11.35 14.1373 10.0875 15.2748L9 16.2498ZM9 14.2248C10.2 13.1498 11.1875 12.2279 11.9625 11.4592C12.7375 10.6904 13.35 10.0217 13.8 9.45293C14.25 8.88418 14.5625 8.37793 14.7375 7.93418C14.9125 7.49043 15 7.0498 15 6.6123C15 5.8623 14.75 5.2373 14.25 4.7373C13.75 4.2373 13.125 3.9873 12.375 3.9873C11.7875 3.9873 11.2437 4.15293 10.7437 4.48418C10.2437 4.81543 9.9 5.2373 9.7125 5.7498H8.2875C8.1 5.2373 7.75625 4.81543 7.25625 4.48418C6.75625 4.15293 6.2125 3.9873 5.625 3.9873C4.875 3.9873 4.25 4.2373 3.75 4.7373C3.25 5.2373 3 5.8623 3 6.6123C3 7.0498 3.0875 7.49043 3.2625 7.93418C3.4375 8.37793 3.75 8.88418 4.2 9.45293C4.65 10.0217 5.2625 10.6904 6.0375 11.4592C6.8125 12.2279 7.8 13.1498 9 14.2248Z" fill="#783C91"/>
                          </SaveIcon>
                          <SaveText>Save</SaveText>
                        </SaveButtonContent>
                      </SaveButton>
                      <ApplyButton onClick={handleApply}>
                        <ApplyButtonContent>
                          <ApplyText>Apply</ApplyText>
                        </ApplyButtonContent>
                      </ApplyButton>
                    </ActionButtons>

                    {/* Location and Budget */}
                    <InfoSection>
                      <LocationIcon viewBox="0 0 24 24" fill="none">
                        <path d="M12 22C10.2333 22 8.79167 21.7208 7.675 21.1625C6.55833 20.6042 6 19.8833 6 19C6 18.6 6.12083 18.2292 6.3625 17.8875C6.60417 17.5458 6.94167 17.25 7.375 17L8.95 18.475C8.8 18.5417 8.6375 18.6167 8.4625 18.7C8.2875 18.7833 8.15 18.8833 8.05 19C8.26667 19.2667 8.76667 19.5 9.55 19.7C10.3333 19.9 11.15 20 12 20C12.85 20 13.6708 19.9 14.4625 19.7C15.2542 19.5 15.7583 19.2667 15.975 19C15.8583 18.8667 15.7083 18.7583 15.525 18.675C15.3417 18.5917 15.1667 18.5167 15 18.45L16.55 16.95C17.0167 17.2167 17.375 17.5208 17.625 17.8625C17.875 18.2042 18 18.5833 18 19C18 19.8833 17.4417 20.6042 16.325 21.1625C15.2083 21.7208 13.7667 22 12 22ZM12.025 16.5C13.675 15.2833 14.9167 14.0625 15.75 12.8375C16.5833 11.6125 17 10.3833 17 9.15C17 7.45 16.4583 6.16667 15.375 5.3C14.2917 4.43333 13.1667 4 12 4C10.8333 4 9.70833 4.43333 8.625 5.3C7.54167 6.16667 7 7.45 7 9.15C7 10.2667 7.40833 11.4292 8.225 12.6375C9.04167 13.8458 10.3083 15.1333 12.025 16.5ZM12 19C9.65 17.2667 7.89583 15.5833 6.7375 13.95C5.57917 12.3167 5 10.7167 5 9.15C5 7.96667 5.2125 6.92917 5.6375 6.0375C6.0625 5.14583 6.60833 4.4 7.275 3.8C7.94167 3.2 8.69167 2.75 9.525 2.45C10.3583 2.15 11.1833 2 12 2C12.8167 2 13.6417 2.15 14.475 2.45C15.3083 2.75 16.0583 3.2 16.725 3.8C17.3917 4.4 17.9375 5.14583 18.3625 6.0375C18.7875 6.92917 19 7.96667 19 9.15C19 10.7167 18.4208 12.3167 17.2625 13.95C16.1042 15.5833 14.35 17.2667 12 19ZM12 11C12.55 11 13.0208 10.8042 13.4125 10.4125C13.8042 10.0208 14 9.55 14 9C14 8.45 13.8042 7.97917 13.4125 7.5875C13.0208 7.19583 12.55 7 12 7C11.45 7 10.9792 7.19583 10.5875 7.5875C10.1958 7.97917 10 8.45 10 9C10 9.55 10.1958 10.0208 10.5875 10.4125C10.9792 10.8042 11.45 11 12 11Z" fill="#676767"/>
                      </LocationIcon>
                      <InfoText style={{ color: '#1E002B' }}>{mockCampaignData.location}</InfoText>
                      <Separator viewBox="0 0 24 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 20L12 4H14L14 20H12Z" fill="#676767"/>
                      </Separator>
                      <InfoText style={{ color: '#1E002B' }}>Budget: {mockCampaignData.budget}</InfoText>
                    </InfoSection>

                    {/* About Brand Link */}
                    <AboutBrandSection>
                      <AboutBrandText>About Brand</AboutBrandText>
                      <AboutBrandIcon>
                        <div style={{ width: '18px', height: '18px', background: '#D9D9D9', position: 'absolute' }}></div>
                        <svg style={{ width: '14px', height: '14px', fill: '#783C91', position: 'absolute', left: '2px', top: '2px' }} viewBox="0 0 14 14" fill="none">
                          <path d="M1.75 13.75C1.3375 13.75 0.984375 13.6031 0.690625 13.3094C0.396875 13.0156 0.25 12.6625 0.25 12.25V1.75C0.25 1.3375 0.396875 0.984375 0.690625 0.690625C0.984375 0.396875 1.3375 0.25 1.75 0.25H7V1.75H1.75V12.25H12.25V7H13.75V12.25C13.75 12.6625 13.6031 13.0156 13.3094 13.3094C13.0156 13.6031 12.6625 13.75 12.25 13.75H1.75ZM5.275 9.775L4.225 8.725L11.2 1.75H8.5V0.25H13.75V5.5H12.25V2.8L5.275 9.775Z" fill="#783C91"/>
                        </svg>
                      </AboutBrandIcon>
                    </AboutBrandSection>

                    {/* Pricing Section */}
                    <DetailSection>
                      <DetailSectionTitle>Pricing</DetailSectionTitle>
                      <DetailItem>
                        <DetailLabel>Costs per view:</DetailLabel>
                        <DetailValue>{mockCampaignData.costPerView}</DetailValue>
                      </DetailItem>
                    </DetailSection>

                    {/* Requirements Section */}
                    <DetailSection>
                      <DetailSectionTitle>Requirements</DetailSectionTitle>
                      <DetailItem>
                        <DetailLabel>Min number of followers:</DetailLabel>
                        <DetailValue>{mockCampaignData.minFollowers}</DetailValue>
                      </DetailItem>
                      <DetailItem>
                        <DetailLabel>Duration:</DetailLabel>
                        <DetailValue>{mockCampaignData.duration}</DetailValue>
                      </DetailItem>
                    </DetailSection>

                    {/* Report Campaign */}
                    <ReportSection>
                      <ReportIcon viewBox="0 0 18 19" fill="none">
                        <path d="M3.75 16.25V3.5H10.5L10.8 5H15V12.5H9.75L9.45 11H5.25V16.25H3.75ZM10.9875 11H13.5V6.5H9.5625L9.2625 5H5.25V9.5H10.6875L10.9875 11Z" fill="#783C91"/>
                      </ReportIcon>
                      <ReportText>Report campaign</ReportText>
                    </ReportSection>

                    {/* Campaign Link */}
                    <DetailSection>
                      <DetailSectionTitle>Campaign link</DetailSectionTitle>
                      <LinkCard>
                        <LinkContainer>
                          <LinkUrlContainer>
                            <LinkUrl>{mockCampaignData.campaignLink}</LinkUrl>
                            <CopyIcon viewBox="0 0 24 24" fill="none" onClick={handleCopyLink} style={{ cursor: 'pointer' }}>
                              <path d="M9 18C8.45 18 7.97917 17.8042 7.5875 17.4125C7.19583 17.0208 7 16.55 7 16V4C7 3.45 7.19583 2.97917 7.5875 2.5875C7.97917 2.19583 8.45 2 9 2H18C18.55 2 19.0208 2.19583 19.4125 2.5875C19.8042 2.97917 20 3.45 20 4V16C20 16.55 19.8042 17.0208 19.4125 17.4125C19.0208 17.8042 18.55 18 18 18H9ZM9 16H18V4H9V16ZM5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V6H5V20H16V22H5Z" fill="#676767"/>
                            </CopyIcon>
                          </LinkUrlContainer>
                        </LinkContainer>
                      </LinkCard>
                    </DetailSection>
                  </RightColumn>
                </MainContent>
              </CampaignContent>
            </CampaignHeader>
          </MainCard>

          {/* Similar Campaigns Section */}
          <SimilarCampaignsSection>
            <SimilarCampaignsHeader>
              <SectionTitle>Similar Campaigns</SectionTitle>
            </SimilarCampaignsHeader>

            {mockSimilarCampaigns.map((campaign) => (
              <SimilarCampaignCard 
                key={campaign.id}
                onClick={() => handleSimilarCampaignClick(campaign.id)}
              >
                <CampaignCardContent>
                  <CampaignAvatar>
                    <AvatarImage src={campaign.avatar} alt={campaign.brandName} />
                  </CampaignAvatar>
                  
                  <CampaignDetails>
                    <CampaignMeta>
                      <CampaignMetaTop>
                        <MetaText>{campaign.timestamp}</MetaText>
                      </CampaignMetaTop>
                      
                      <CampaignMainInfo>
                        <CampaignInfoLeft>
                          <BrandNameContainer>
                            <BrandNameLink>{campaign.brandName}</BrandNameLink>
                            <BrandLinkIcon>
                              <div style={{ width: '18px', height: '18px', background: '#D9D9D9', position: 'absolute' }}></div>
                              <svg style={{ width: '14px', height: '14px', fill: '#783C91', position: 'absolute', left: '2px', top: '2px' }} viewBox="0 0 14 14" fill="none">
                                <path d="M1.75 13.75C1.3375 13.75 0.984375 13.6031 0.690625 13.3094C0.396875 13.0156 0.25 12.6625 0.25 12.25V1.75C0.25 1.3375 0.396875 0.984375 0.690625 0.690625C0.984375 0.396875 1.3375 0.25 1.75 0.25H7V1.75H1.75V12.25H12.25V7H13.75V12.25C13.75 12.6625 13.6031 13.0156 13.3094 13.3094C13.0156 13.6031 12.6625 13.75 12.25 13.75H1.75ZM5.275 9.775L4.225 8.725L11.2 1.75H8.5V0.25H13.75V5.5H12.25V2.8L5.275 9.775Z" fill="#783C91"/>
                              </svg>
                            </BrandLinkIcon>
                          </BrandNameContainer>
                          <CampaignNameTitle>{campaign.campaignName}</CampaignNameTitle>
                          <CampaignTags>{campaign.tags}</CampaignTags>
                        </CampaignInfoLeft>

                        <ActionButtons>
                          <SaveButton onClick={(e) => {
                            e.stopPropagation();
                            handleSave();
                          }}>
                            <SaveButtonContent>
                              <SaveIcon viewBox="0 0 18 18" fill="none">
                                <path d="M9 15.7498L7.9125 14.7748C6.65 13.6373 5.60625 12.6561 4.78125 11.8311C3.95625 11.0061 3.3 10.2654 2.8125 9.60918C2.325 8.95293 1.98438 8.3498 1.79063 7.7998C1.59688 7.2498 1.5 6.6873 1.5 6.1123C1.5 4.9373 1.89375 3.95605 2.68125 3.16855C3.46875 2.38105 4.45 1.9873 5.625 1.9873C6.275 1.9873 6.89375 2.1248 7.48125 2.3998C8.06875 2.6748 8.575 3.0623 9 3.5623C9.425 3.0623 9.93125 2.6748 10.5188 2.3998C11.1063 2.1248 11.725 1.9873 12.375 1.9873C13.55 1.9873 14.5313 2.38105 15.3188 3.16855C16.1063 3.95605 16.5 4.9373 16.5 6.1123C16.5 6.6873 16.4031 7.2498 16.2094 7.7998C16.0156 8.3498 15.675 8.95293 15.1875 9.60918C14.7 10.2654 14.0437 11.0061 13.2188 11.8311C12.3938 12.6561 11.35 13.6373 10.0875 14.7748L9 15.7498ZM9 13.7248C10.2 12.6498 11.1875 11.7279 11.9625 10.9592C12.7375 10.1904 13.35 9.52168 13.8 8.95293C14.25 8.38418 14.5625 7.87793 14.7375 7.43418C14.9125 6.99043 15 6.5498 15 6.1123C15 5.3623 14.75 4.7373 14.25 4.2373C13.75 3.7373 13.125 3.4873 12.375 3.4873C11.7875 3.4873 11.2437 3.65293 10.7437 3.98418C10.2437 4.31543 9.9 4.7373 9.7125 5.2498H8.2875C8.1 4.7373 7.75625 4.31543 7.25625 3.98418C6.75625 3.65293 6.2125 3.4873 5.625 3.4873C4.875 3.4873 4.25 3.7373 3.75 4.2373C3.25 4.7373 3 5.3623 3 6.1123C3 6.5498 3.0875 6.99043 3.2625 7.43418C3.4375 7.87793 3.75 8.38418 4.2 8.95293C4.65 9.52168 5.2625 10.1904 6.0375 10.9592C6.8125 11.7279 7.8 12.6498 9 13.7248Z" fill="#783C91"/>
                              </SaveIcon>
                            </SaveButtonContent>
                          </SaveButton>
                          <ApplyButton onClick={(e) => {
                            e.stopPropagation();
                            handleApply();
                          }}>
                            <ApplyButtonContent>
                              <ApplyText>Apply</ApplyText>
                            </ApplyButtonContent>
                          </ApplyButton>
                        </ActionButtons>
                      </CampaignMainInfo>
                    </CampaignMeta>

                    <CampaignDescription>
                      <DescriptionTextTruncated>{campaign.description}</DescriptionTextTruncated>
                    </CampaignDescription>
                  </CampaignDetails>
                </CampaignCardContent>

                <CampaignFooter>
                  <LocationText>
                    <span style={{ color: '#1E002B' }}>Location: </span>
                    <span style={{ color: '#755002' }}>{campaign.location}</span>
                  </LocationText>
                  <Separator viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 20L12 4H14L14 20H12Z" fill="#676767"/>
                  </Separator>
                  <LocationText>
                    <span style={{ color: '#1E002B' }}>Budget: </span>
                    <span style={{ color: '#755002' }}>{campaign.budget}</span>
                  </LocationText>
                  <Separator viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 20L12 4H14L14 20H12Z" fill="#676767"/>
                  </Separator>
                  <PlatformsList>
                    <PostOnText>Post on:</PostOnText>
                    <PlatformIcons>
                      {campaign.platforms.map((platform, index) => (
                        <PlatformIcon key={index}>
                          <img 
                            src={platform.icon} 
                            alt="platform" 
                            style={{ 
                              width: platform.icon.includes('9a0b986c') ? '18px' : '24px', 
                              height: platform.icon.includes('9a0b986c') ? '18px' : '24px',
                              borderRadius: platform.icon.includes('9a0b986c') ? '75px' : '0'
                            }} 
                          />
                        </PlatformIcon>
                      ))}
                    </PlatformIcons>
                  </PlatformsList>
                </CampaignFooter>
              </SimilarCampaignCard>
            ))}

            {/* See More */}
            <SeeMoreSection>
              <SeeMoreText>See more</SeeMoreText>
              <ForwardIcon viewBox="0 0 24 24" fill="none">
                <path d="M12 12.6L16.6 8L18 9.4L12 15.4L6 9.4L7.4 8L12 12.6Z" fill="#783C91"/>
              </ForwardIcon>
            </SeeMoreSection>
          </SimilarCampaignsSection>
        </ContentContainer>

        <Footer />
      </PageContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  
  return {
    props: {
      campaignId: id as string
    }
  };
};
