import React from 'react';
import Image from 'next/image';
import { AppBar, Box, IconButton, Toolbar, useMediaQuery } from '@mui/material';
import HeaderLogo from 'src/components/svg/logo/header/site-logo';
import StoreLogo from 'src/components/svg/logo/header/store-logo';
import MenuLogo from 'src/components/svg/logo/header/menu-logo';
import { useTheme } from '@mui/material/styles';
import HamburgerMenu from './menu/hamburger-menu';

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
            <IconButton href='/'>
              <HeaderLogo/>
            </IconButton>
          </Box>
          <Box>
            {isMdUp && (
              <IconButton href='/menu'>
                <MenuLogo/>
              </IconButton>
            )}
            {isMdUp && (
              <IconButton href='/store'>
                <StoreLogo/>
              </IconButton>
            )}
            <IconButton href='#'>
              <HamburgerMenu/>
            </IconButton>
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
