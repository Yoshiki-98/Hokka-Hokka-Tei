import React from 'react';
import Image from 'next/image';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import HeaderLogo from 'src/components/svg/logo/header/site-logo';
import StoreLogo from 'src/components/svg/logo/header/store-logo';
import MenuLogo from 'src/components/svg/logo/header/menu-logo';
import HamburgerMenuLogo from 'src/components/svg/logo/header/hamburger-menu-logo';

const Header: React.FC = () => {
  return (
    <Box className="bg-white mb-[100px]">
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar className="justify-between">
          <Box className="grow">
            <IconButton href='/'>
              <HeaderLogo/>
            </IconButton>
          </Box>
          <Box>
            <IconButton href='/menu'>
              <MenuLogo/>
            </IconButton>
            <IconButton href='/store'>
              <StoreLogo/>
            </IconButton>
            <IconButton href='#'>
              <HamburgerMenuLogo/>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ position: 'relative', width: '100%', height: '100px', maxHeight: '100px' }}>
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
