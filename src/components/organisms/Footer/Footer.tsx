import { Box, Container, Typography, Link as MuiLink, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFF',
  borderTop: '1px solid #DFDFDF',
  paddingTop: '32px',
  paddingBottom: '16px'
}));

const FooterContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '240px',
  paddingLeft: '240px',
  paddingRight: '240px',
  marginBottom: '16px',
  [theme.breakpoints.down('lg')]: {
    gap: '120px',
    paddingLeft: '120px',
    paddingRight: '120px'
  },
  [theme.breakpoints.down('md')]: {
    gap: '60px',
    paddingLeft: '60px',
    paddingRight: '60px',
    flexWrap: 'wrap'
  },
  [theme.breakpoints.down('sm')]: {
    gap: '40px',
    paddingLeft: '20px',
    paddingRight: '20px',
    flexDirection: 'column'
  }
}));

const FooterColumn = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px'
}));

const FooterColumnTitle = styled(Typography)(({ theme }) => ({
  color: '#1E002B',
  fontSize: '14px',
  fontWeight: 600,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  textTransform: 'uppercase',
  marginBottom: '8px'
}));

const FooterLink = styled(MuiLink)(({ theme }) => ({
  color: '#676767',
  fontSize: '14px',
  fontWeight: 400,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  textDecoration: 'none',
  cursor: 'pointer',
  '&:hover': {
    color: '#783C91',
    textDecoration: 'none'
  }
}));

const BottomSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '117px',
  paddingLeft: '344px',
  paddingRight: '335px',
  paddingTop: '8px',
  borderTop: '1px solid #DFDFDF',
  [theme.breakpoints.down('lg')]: {
    paddingLeft: '120px',
    paddingRight: '120px',
    gap: '60px'
  },
  [theme.breakpoints.down('md')]: {
    paddingLeft: '60px',
    paddingRight: '60px',
    gap: '40px',
    flexWrap: 'wrap'
  },
  [theme.breakpoints.down('sm')]: {
    paddingLeft: '20px',
    paddingRight: '20px',
    gap: '20px',
    flexDirection: 'column'
  }
}));

const BottomLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '56px',
  flex: 1,
  [theme.breakpoints.down('md')]: {
    gap: '20px',
    flexWrap: 'wrap'
  }
}));

const SocialIcons = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  mixBlendMode: 'luminosity'
}));

const SocialIcon = styled('img')(({ theme }) => ({
  width: '24px',
  height: '24px',
  cursor: 'pointer',
  opacity: 0.7,
  transition: 'opacity 0.2s ease',
  '&:hover': {
    opacity: 1
  }
}));

const CopyrightText = styled(Typography)(({ theme }) => ({
  color: '#1E002B',
  fontSize: '12px',
  fontWeight: 400,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif'
}));

export interface FooterProps {
  onLinkClick?: (link: string) => void;
  onSocialClick?: (platform: string) => void;
}

export default function Footer({ onLinkClick, onSocialClick }: FooterProps) {
  const handleLinkClick = (link: string) => {
    onLinkClick?.(link);
  };

  const handleSocialClick = (platform: string) => {
    onSocialClick?.(platform);
  };

  return (
    <FooterContainer>
      <FooterContent>
        {/* About Column */}
        <FooterColumn>
          <FooterColumnTitle>About</FooterColumnTitle>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <FooterLink onClick={() => handleLinkClick('company')}>Company</FooterLink>
            <FooterLink onClick={() => handleLinkClick('careers')}>Careers</FooterLink>
            <FooterLink onClick={() => handleLinkClick('blog')}>Blog</FooterLink>
            <FooterLink onClick={() => handleLinkClick('placeholder1')}>Placeholder</FooterLink>
          </Box>
        </FooterColumn>

        {/* Discover Column */}
        <FooterColumn>
          <FooterColumnTitle>Discover</FooterColumnTitle>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <FooterLink onClick={() => handleLinkClick('instagram-influencers')}>Instagram influencers</FooterLink>
            <FooterLink onClick={() => handleLinkClick('facebook-influencers')}>Facebook influencers</FooterLink>
            <FooterLink onClick={() => handleLinkClick('youtube-influencers')}>YouTube influencers</FooterLink>
            <FooterLink onClick={() => handleLinkClick('x-influencers')}>X influencers</FooterLink>
            <FooterLink onClick={() => handleLinkClick('tiktok-influencers')}>TikTok influencers</FooterLink>
          </Box>
        </FooterColumn>

        {/* Stratix Column */}
        <FooterColumn>
          <FooterColumnTitle>Stratix</FooterColumnTitle>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <FooterLink onClick={() => handleLinkClick('pricing')}>Pricing</FooterLink>
            <FooterLink onClick={() => handleLinkClick('placeholder2')}>Placeholder</FooterLink>
            <FooterLink onClick={() => handleLinkClick('placeholder3')}>Placeholder</FooterLink>
          </Box>
        </FooterColumn>

        {/* Help Column */}
        <FooterColumn>
          <FooterColumnTitle>Help</FooterColumnTitle>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <FooterLink onClick={() => handleLinkClick('contact-us')}>Contact Us</FooterLink>
            <FooterLink onClick={() => handleLinkClick('faq')}>Frequently asked questions</FooterLink>
          </Box>
        </FooterColumn>
      </FooterContent>

      <BottomSection>
        <BottomLinks>
          <CopyrightText>© Stratix Inc.</CopyrightText>
          <FooterLink onClick={() => handleLinkClick('terms')}>Terms and Services</FooterLink>
          <FooterLink onClick={() => handleLinkClick('privacy')}>Privacy</FooterLink>
          <FooterLink onClick={() => handleLinkClick('placeholder4')}>Placeholder</FooterLink>
          <FooterLink onClick={() => handleLinkClick('placeholder5')}>Placeholder</FooterLink>
        </BottomLinks>

        <SocialIcons>
          <SocialIcon
            src="data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' fill='%23676767'/%3E%3C/svg%3E"
            alt="Instagram"
            onClick={() => handleSocialClick('instagram')}
          />
          <SocialIcon
            src="data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' fill='%23676767'/%3E%3C/svg%3E"
            alt="X (Twitter)"
            onClick={() => handleSocialClick('x')}
          />
          <SocialIcon
            src="data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' fill='%23676767'/%3E%3C/svg%3E"
            alt="YouTube"
            onClick={() => handleSocialClick('youtube')}
          />
        </SocialIcons>
      </BottomSection>
    </FooterContainer>
  );
}
