import React from 'react';
import Image from 'next/image';
import { AppBar, Box, IconButton, Toolbar, useMediaQuery } from '@mui/material';
import HeaderLogo from 'src/components/svg/logo/header/site-logo';
import StoreLogo from 'src/components/svg/logo/header/store-logo';
import MenuLogo from 'src/components/svg/logo/header/menu-logo';
import { useTheme } from '@mui/material/styles';
import HamburgerMenu from './menu/hamburger-menu';
import { HoverIconButton } from 'src/components/hover-icon-button';
import { NoHoverIconButton } from 'src/components/no-hover-icon-button';

const Header: React.FC = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box 
      className="bg-white"
      sx={{ marginBottom: { xs: '50px', md: '100px'} }}
    >
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar className="justify-between">
          <Box className="grow">
            <NoHoverIconButton>
              <HeaderLogo/>
            </NoHoverIconButton>
          </Box>
          <Box>
            {isMdUp && (
              <HoverIconButton>
                <MenuLogo/>
              </HoverIconButton>
            )}
            {isMdUp && (
              <HoverIconButton>
                <StoreLogo/>
              </HoverIconButton>
            )}
            <NoHoverIconButton>
              <HamburgerMenu/>
            </NoHoverIconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: {xs: '25px', sm: '37.5px', md: '50px'},
          maxHeight: '100px'
        }}>
        <Image
          src='/images/hokatei-mask.png'
          alt='ほっかほっか亭のラベル'
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </Box>
    </Box>
  );
};

export default Header;
