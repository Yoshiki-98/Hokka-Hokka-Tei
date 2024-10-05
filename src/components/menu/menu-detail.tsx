'use client'

import React, { useEffect, useState } from 'react';
import {
  Typography,
  Chip,
  Box,
  useMediaQuery,
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Menu } from '@/types/menu';
import axios from 'axios';
import Header from 'src/components/header';
import Footer from 'src/components/footer';
import NutritionInfo from './nutrition-info';
import MenuContainer from 'src/components/svg/container/menu-container';
import AllergenInfo from './allergen-info';
import TopLabel from 'src/components/menu/top-label-container';
import 'src/app/globals.css';

const theme = createTheme({
  palette: {
    background: {
      default: '#F7F0E8',
    },
    primary: {
      main: '#323232',
    },
    secondary: {
      main: '#ff0000',
    },
  },
});

export default function MenuDetail() {
  const [menuItem, setMenuItem] = useState<Menu>();
  const path = window.location.pathname;
  const pathSegments = path.split('/');
  const menuId = pathSegments[pathSegments.length - 1];

  const fetchMenu = async () => {
    try {
      const res = await axios.get('/api/menu', {
        params: {id: menuId} // 動作確認用 静的な生成になるので getStaticProps 
      });
      const menu = res.data;
      setMenuItem(menu);

      return menu;
    } catch (error) {
      console.error('メニューのフェッチに失敗しました:', error);
    }
  }

  useEffect(() => {
    fetchMenu();
  }, []);

  const partsOfDesc = menuItem?.desc?.split(/(?:<br\s*\/?>\s*|\n)/);
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <ThemeProvider theme={theme}>
      <Box
        className="flex flex-col text-black"
        sx={{
          color: theme.palette.primary.main,
          bgcolor: 'background.default'
        }}
      >
        <Header/>
        <TopLabel/>
        <Box
          className="mx-auto"
          sx={{
            width: '90%',
            marginBottom: { xs: '50px', md: '100px'}
          }}
        >
          <Box className='grow flex justify-center items-center'>
            <Box className="menu-info-wrapper mx-auto">
              <Box>
                <Box
                  className="top-container"
                  sx={{
                    marginBottom: '100px',
                    width: '100%'
                  }}
                >
                  <Box
                    className="top-panel-wrapper lg:flex items-center align-center justify-between"
                    sx={{
                      margin: isSmUp ? '0 auto': '0 auto 100px auto',
                    }}
                  >
                    <Box
                      className="top-left-wrapper lg:w-1/2"
                      sx={{
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        margin: '0 auto',
                        marginBottom: {xs: '30px', md: '50px', lg: 0}
                      }}
                    >
                      { menuItem && <MenuContainer item={menuItem}/> }
                    </Box>
                    <Box className="top-right-wrapper lg:ml-12">
                      <Box
                        className="label-wrapper flex items-center align-center justify-between"
                        sx={{marginBottom: '10px'}}
                      >
                        <Typography
                          sx={{
                            color: '#EE0026',
                            fontSize: {xs: '24px', sm: '32px', md: '36px'},
                            fontWeight: 'bold',
                            marginRight: '20px',
                            whitespace: 'nowrap'
                          }}
                        >
                          {menuItem?.name}
                        </Typography>
                        <Box
                          className="grow bg-[#EE0026]"
                          sx={{padding: {xs: '12px 0', sm: '16px 0', md: '18px 0'}}}
                        />
                      </Box>
                      <Typography
                        className="leading-3"
                        sx={{
                          marginBottom: '20px',
                          lineHeight: '30px',
                          fontSize: '14px'
                        }}
                        component="div"
                      >
                        {partsOfDesc && partsOfDesc.map((part, index) => ( // 改行を適切に行うための部品化
                          <Box
                            className="font-sans-jp"
                            key={index}
                          >
                            {part.trim()}
                          </Box>
                        ))}
                      </Typography>
                      <Box
                        className="flex items-center align-center mb-[50px]"
                        sx={{
                          marginBottom: {xs: '20px', md: '50px'}
                        }}
                      >
                        {menuItem?.isSideAloneOK && (
                          <Box className="mb-2 mr-[20px]">
                            <Chip
                              label="おかず単品OK"
                              variant="outlined"
                              sx={{
                                width: '140px',
                                height: '36px',
                                border: '3px solid #FFA600',
                                borderRadius: 1
                              }}
                            />
                          </Box>
                        )}
                        {menuItem?.isRiceReplacementOK && (
                          <Box className="mb-2">
                            <Chip
                              label="ライス入れ替えOK"
                              variant="outlined"
                              sx={{
                                width: '140px',
                                height: '36px',
                                border: '3px solid #FFA600',
                                borderRadius: 1
                              }}
                            />
                          </Box>
                        )}
                      </Box>
                      <Typography gutterBottom>
                        <span className="text-4xl font-bold font-noto-sans">{menuItem?.price}</span>
                        <span className="text-xl font-noto-sans">円 （税込{menuItem?.taxIncludedPrice}円）</span>
                      </Typography>
                      <Typography sx={{fontSize: '10px'}}>
                        ※店舗により商品の仕様が異なる場合や、取り扱いが無い場合がございます
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                {menuItem && <AllergenInfo menuItem={menuItem} />}
                {menuItem && <NutritionInfo menuItem={menuItem} />}
              </Box>
            </Box>
          </Box>
        </Box>
        <Footer/>
      </Box>
    </ThemeProvider>
  );
}
<Footer/>
