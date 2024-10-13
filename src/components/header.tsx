import React from 'react';
import { AppBar, Box, Toolbar, useMediaQuery } from '@mui/material';
import HeaderLogo from 'src/components/svg/logo/header/site-logo';
import StoreLogo from 'src/components/svg/logo/header/store-logo';
import MenuLogo from 'src/components/svg/logo/header/menu-logo';
import HamburgerMenu from './menu/hamburger-menu';
import { HoverIconButton } from 'src/components/hover-icon-button';
import { NoHoverIconButton } from 'src/components/no-hover-icon-button';

const Header: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:690px)');
  const isTabletAndUp = useMediaQuery('(min-width:691px)');

  return (
    <Box 
      sx={{
        marginBottom: { xs: '50px', md: '100px'},
        background: '#FFF',
        width: '100%',
        position: 'fixed',
        zIndex: 9999
      }}
    >
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar
          className="justify-between"
          sx={{
            minHeight: '60px !important',
            px: isMobile ? '15px !important' : '30px !important'
          }}
        >
          <Box className="grow">
            <NoHoverIconButton href='/'>
              <HeaderLogo/>
            </NoHoverIconButton>
          </Box>
          <Box>
            {isTabletAndUp && (
              <HoverIconButton href='/menu'>
                <MenuLogo/>
              </HoverIconButton>
            )}
            {isTabletAndUp && (
              <HoverIconButton href='/store'>
                <StoreLogo/>
              </HoverIconButton>
            )}
            <NoHoverIconButton href=''>
              <HamburgerMenu/>
            </NoHoverIconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
