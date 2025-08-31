import { 
  AppBar, 
  Toolbar, 
  Box, 
  Typography, 
  TextField, 
  InputAdornment,
  IconButton,
  Avatar,
  Badge
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Link from 'next/link';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#FFF',
  boxShadow: 'none',
  borderBottom: '1px solid #DFDFDF',
  position: 'static'
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '126px',
  padding: '2px 20px',
  minHeight: '80px'
}));

const Logo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '7.5px',
  cursor: 'pointer'
}));

const SearchContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '40px',
  flex: 1
}));

const SearchField = styled(TextField)(({ theme }) => ({
  width: '272px',
  '& .MuiOutlinedInput-root': {
    height: '42px',
    borderRadius: '4px',
    '& fieldset': {
      borderColor: '#AA86B9'
    },
    '&:hover fieldset': {
      borderColor: '#783C91'
    },
    '&.Mui-focused fieldset': {
      borderColor: '#783C91'
    }
  },
  '& .MuiInputLabel-root': {
    color: '#3F214C',
    fontSize: '14px',
    fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif'
  },
  '& .MuiOutlinedInput-input': {
    fontSize: '14px',
    fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif'
  }
}));

const NavLink = styled(Typography)(({ theme }) => ({
  color: '#1E002B',
  fontSize: '14px',
  fontWeight: 400,
  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
  cursor: 'pointer',
  textDecoration: 'none',
  '&:hover': {
    color: '#783C91'
  }
}));

const StyledNotificationBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#DB9400',
    color: '#FFF',
    width: '8px',
    height: '8px',
    minWidth: '8px',
    borderRadius: '4px',
    border: '1px solid #FFF'
  }
}));

export interface HeaderProps {
  onLogoClick?: () => void;
  onSearchChange?: (value: string) => void;
  onFindWorkClick?: () => void;
  onMessagesClick?: () => void;
  onNotificationsClick?: () => void;
  onProfileClick?: () => void;
  searchValue?: string;
  hasNotifications?: boolean;
  profileImage?: string;
}

export default function Header({
  onLogoClick,
  onSearchChange,
  onPostCampaignClick,
  onMessagesClick,
  onNotificationsClick,
  onProfileClick,
  searchValue = '',
  hasNotifications = true,
  profileImage
}: HeaderProps) {
  return (
    <StyledAppBar>
      <StyledToolbar>
        {/* Logo */}
        <Logo onClick={onLogoClick}>
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '7.5px' }}>
            <Typography
              sx={{
                color: '#3F214C',
                fontSize: '24.75px',
                fontWeight: 700,
                fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif'
              }}
            >
              ツ
            </Typography>
            <Typography
              sx={{
                color: '#3F214C',
                fontSize: '15px',
                fontWeight: 700,
                fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif'
              }}
            >
              SOCIAL STRATIX
            </Typography>
          </Link>
        </Logo>

        {/* Navigation and Search */}
        <SearchContainer>
          {/* Search Bar */}
          <SearchField
            label="Search influencers"
            value={searchValue}
            onChange={(e) => onSearchChange?.(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton size="small">
                    <SearchIcon sx={{ color: '#676767' }} />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

          {/* Navigation Links */}
          <Link href="/influencers" style={{ textDecoration: 'none' }}>
            <NavLink>
              Find Work
            </NavLink>
          </Link>

          <NavLink onClick={onMessagesClick}>
            Messages
          </NavLink>

          {/* Notifications */}
          <IconButton onClick={onNotificationsClick} sx={{ p: 0 }}>
            <StyledNotificationBadge 
              variant="dot" 
              invisible={!hasNotifications}
            >
              <NotificationsIcon sx={{ color: '#676767', width: 24, height: 24 }} />
            </StyledNotificationBadge>
          </IconButton>

          {/* Profile Avatar */}
          <Avatar
            src={profileImage}
            onClick={onProfileClick}
            sx={{
              width: 40,
              height: 40,
              backgroundColor: '#464530',
              cursor: 'pointer'
            }}
          />
        </SearchContainer>
      </StyledToolbar>
    </StyledAppBar>
  );
}
