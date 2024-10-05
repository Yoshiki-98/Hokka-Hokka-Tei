'use client'

import React, { useState, useCallback } from 'react';
import { prefectures } from 'src/data/prefectures';
import { allergens as allergenArray } from 'src/data/allergens';
import {
  Typography,
  MenuItem, 
  FormControl, 
  Box,
  Checkbox,
  useMediaQuery,
  Link,
} from '@mui/material';
import {
  activeTextStyle,
  CustomSelect,
  StraightBottomButton,
  StyledLink,
  tabStyle,
  activeTabStyle
} from 'src/components/styled/styled-component';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import axios from 'axios';
import { Category } from 'src/types/category';
import { Menu } from '@/types/menu';
import Image from 'next/image';
import Header from 'src/components/header';
import Footer from 'src/components/footer';
import HandleFilterButton from 'src/components/svg/button/trigger/handle-filter';
import DownArrowIcon from 'src/components/svg/logo/main/down-arrow-icon';
import MenuListContainer from 'src/components/svg/container/menu-list-container';
import { chunkArray } from '@/utils/array-utils';
import BannerSlider from './banner-slider';
import FadeInSection from 'src/components/menu/fade-in-section';
import TopLabel from 'src/components/menu/top-label-container';

const theme = createTheme({
  palette: {
    background: {
      default: '#F7F0E8',
    },
    primary: {
      main: '#ff0000',
    },
    secondary: {
      main: '#323232',
    },
  },
});

export default function MentList() {
  const [selectedPrefCode, setSelectedPrefCode] = useState<number>(0);
  const [selectedAllergens, setSelectedAllergens] = useState<Array<number>>([]);
  const [menuItems, setMenuItems] = useState<Array<Menu>>();
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleFilterNewItems = useCallback((menu: any) => {
    const newItems = menu?.filter(
      (menuItem: { isNew: boolean; }) => menuItem.isNew === true
    );
    setMenuItems(newItems);
  }, []);

  const handleFilterMainItems = useCallback((menu: any) => {
    const mainItems = menu?.filter(
      (menuItem: { category: Category; }) => menuItem.category === Category.MAIN
    );
    setMenuItems(mainItems);
  }, []);

  const handleFilterSideItems = useCallback((menu: any) => {
    const sideItems = menu?.filter(
      (menuItem: { category: Category; }) => menuItem.category === Category.SIDE
    );
    setMenuItems(sideItems);
  }, []);

  const fetchMenuItems = async (prefCode: number, allergens?: number[]) => {
    try {
      const res = await axios.get('/api/menu', {
        params: allergens ? {
          prefecture: prefCode,
          allergens: allergens?.join(','), // 配列をカンマ区切りの文字列に変換
        } :
        {
          prefecture: prefCode,
        },
        paramsSerializer: params => { // カンマ区切りの文字列を&で整形
          return Object.entries(params)
            .map(([key, value]) => `${key}=${value}`)
            .join('&');
        }
      });
      const menu = res.data;
      setMenuItems(menu);

      return menu;
    } catch (error) {
      console.error('メニューのフェッチに失敗しました:', error);
    }
  }

  const fetchNewItems = useCallback(async (prefCode: number, allergens?: number[]) => {
    try {
      const res = await axios.get('/api/menu', {
        params: allergens ? {
          prefecture: prefCode,
          allergens: allergens?.join(','), // 配列をカンマ区切りの文字列に変換
        } :
        {
          prefecture: prefCode,
        },
        paramsSerializer: params => { // カンマ区切りの文字列を&で整形
          return Object.entries(params)
            .map(([key, value]) => `${key}=${value}`)
            .join('&');
        }
      });
      const menu = await res.data;
      handleFilterNewItems(menu);
    } catch (error) {
      console.error('新商品・期間限定メニューのフェッチに失敗しました:', error);
    }
  }, []);

  const fetchMainItems = useCallback(async (prefCode: number, allergens?: number[]) => {
    try {
      const res = await axios.get('/api/menu', {
        params: allergens ? {
          prefecture: prefCode,
          allergens: allergens?.join(','), // 配列をカンマ区切りの文字列に変換
        } :
        {
          prefecture: prefCode,
        },
        paramsSerializer: params => { // カンマ区切りの文字列を&で整形
          return Object.entries(params)
            .map(([key, value]) => `${key}=${value}`)
            .join('&');
        }
      });
      const menu = await res.data;
      handleFilterMainItems(menu);
    } catch (error) {
      console.error('お弁当メニューのフェッチに失敗しました:', error);
    }
  }, []);

  const fetchSideItems = useCallback(async (prefCode: number, allergens?: number[]) => {
    try {
      const res = await axios.get('/api/menu', {
        params: allergens ? {
          prefecture: prefCode,
          allergens: allergens?.join(','), // 配列をカンマ区切りの文字列に変換
        } :
        {
          prefecture: prefCode,
        },
        paramsSerializer: params => { // カンマ区切りの文字列を&で整形
          return Object.entries(params)
            .map(([key, value]) => `${key}=${value}`)
            .join('&');
        }
      });
      const menu = await res.data;
      handleFilterSideItems(menu);
    } catch (error) {
      console.error('おかずメニューのフェッチに失敗しました:', error);
    }
  }, []);

  const tabs = [
    { title: '新商品・期間限定', filter: handleFilterNewItems, fetch: fetchNewItems },
    { title: 'お弁当', filter: handleFilterMainItems, fetch: fetchMainItems },
    { title: 'おかずのみ', filter: handleFilterSideItems, fetch: fetchSideItems },
  ];

  const handleTabClick = async (index: number) => {
    setActiveTab(index);
    const menu = await fetchMenuItems(selectedPrefCode);
    tabs[index].filter(menu);
  };

  // アレルギー物質の選択の処理
  const handleSelectAllergens = async (allergenId: number) => {
    let newSelectedAllergenIds;
    if (selectedAllergens.includes(allergenId)) {
      newSelectedAllergenIds = selectedAllergens.filter((existingId) => existingId != allergenId);
    } else {
      newSelectedAllergenIds = [...selectedAllergens, allergenId];
    }
    setSelectedAllergens(newSelectedAllergenIds);
  };

  // 絞り込みの関数
  const handleFilter = async () => {
    tabs[activeTab].fetch(selectedPrefCode, selectedAllergens);
  };

  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: '100vh',
          color: theme.palette.secondary.main,
          bgcolor: 'background.default'
        }}
      >
        <Header/>
        <TopLabel/>
        <Box
          className="mx-auto"
          sx={{
            width: '100%',
            marginTop: { xs: '50px', md: '100px'},
            marginBottom: { xs: '50px', md: '100px'}
          }}
        >
          <Box
            className="menu-title mx-auto flex justify-center items-center"
            sx={{
              width: { sm: '43%', md: 223.95 },
              marginBottom: '56.17px'
            }}
          >
            <Image
              src={'/images/menu-title.png'}
              alt={'Menu Title'}
              width={isSmDown ? 167.55 : 223.95}
              height={isSmDown ? 66.83 : 50}
            />
          </Box>
          <Box
            sx={{
              textAlign: { xs: 'start', sm: 'center', md: 'start' }
            }}
          >
            <FadeInSection>
              <Box
                className="pref-select-container mx-auto"
                sx={{
                  marginBottom: { xs: '25px', md: '100px' },
                  width: { xs: '90%', sm: 600, md: 855 },
                }}
              >
                <Typography
                  sx={{fontSize: '24px'}}
                  className="whitespace-nowrap"
                  gutterBottom
                >
                  都道府県を選択する
                </Typography>
                <FormControl fullWidth>
                  <CustomSelect
                    sx={{
                      margin: {xs: '0 auto', md: '0'},
                      width: {xs: '100%', sm: '353px'},
                      height: '40px',
                      borderRadius: '10px',
                    }}
                    className="bg-white"
                    value={selectedPrefCode}
                    onChange={(e: any) => {
                      setSelectedPrefCode(e.target.value);
                      tabs[activeTab].fetch(e.target.value);
                    }}
                    IconComponent={() => <DownArrowIcon className="mr-4"/>}
                  >
                    <MenuItem
                      sx={{
                        color: selectedPrefCode === 0 ? '#C4C4C6' : 'inherit',
                        '&.Mui-selected': {
                          color: '#C4C4C6',
                        },
                      }} 
                      key='pref_00' 
                      value={0}
                    >
                      <span className="flex text-[#C4C4C6]">都道府県を選択</span>
                    </MenuItem>
                    {prefectures.map(pref => (
                      <MenuItem
                        key={`pref_${String(pref.code).padStart(2,'0')}`}
                        value={pref.code}
                      >
                        <span className="flex">{pref.name}</span>
                      </MenuItem>
                    ))}
                  </CustomSelect>
                </FormControl>
              </Box>
              <Box
                className="allergen-select-container mx-auto"
                sx={{ marginBottom: '100px' }}
                width={{xs: '90%', md: 855 }}
              >
                <Typography
                  className="whitespace-nowrap"
                  sx={{
                    fontSize: '24px',
                    marginBottom: 2,
                  }}
                >
                  アレルギー物質から絞り込む
                </Typography>
                <Box className="mx-auto flex justify-start items-center">
                  <Box
                    width={{ xs: '90%px', sm: '67.5%', md: '100%' }}
                    height={{ xs: 'auto', sm: 'auto', md: 133 }}
                    sx={{
                      padding: { xs: '25px 20px', md: '25px' },
                      borderRadius: '10px',
                      flexDirection: { xs: 'column', md: 'row' },
                      margin: { xs: '0 auto', sm: '0 auto', md: '0' }
                      // alignItems: { xs: 'center', md: 'left' }
                    }}
                    className="flex justify-between items-start bg-white"
                  >
                    <Box className="whitespace-nowrap mb-4">
                      <Box sx={{ marginBottom: { xs: '10px', md: '20px' } }}>
                        <Typography
                          sx={{
                            display: 'flex',
                            fontSize: { xs: '14px' },
                            marginBottom: 1
                          }}
                        >
                          除去したい品目を選択してください
                        </Typography>
                        <Typography
                          sx={{
                            display: 'flex',
                            fontSize: { xs: '10px', sm: '12px' },
                          }}
                        >
                          ※絞込み条件は特定原材料（8品目）のみとなっております
                        </Typography>
                      </Box>
                      <Box 
                        className="flex flex-wrap"
                        sx={{
                          justifyContent: 'center',
                          '& > *': {
                            flexBasis: { xs: '20%', md: 'auto' },
                            marginBottom: '8px',
                          },
                          '& > *:nth-of-type(4) ~ *': {
                            flexBasis: { xs: '20%', md: 'auto' },
                          },
                        }}
                      >
                        {allergenArray.map((allergen: {id: number, name: string}) => (
                          <Box
                            className="flex items-center justify-start mb-2"
                            key={allergen.id}
                            sx={{
                              marginRight: 1,
                              width: 'auto',
                              minWidth: 0,
                              flexShrink: 0,
                            }}
                          >
                            <Checkbox
                              id={String(allergen.id)}
                              checked={selectedAllergens.includes(allergen.id)}
                              onChange={async () => await handleSelectAllergens(allergen.id)}
                              sx={{
                                marginRight: { xs: 1, sm: 1.5 },
                                width: { xs: 2, md: 3 },
                                height: { xs: 2, md: 3 },
                                '& .MuiSvgIcon-root': {
                                  fontSize: { xs: 15, md: 17 },
                                },
                              }}
                            />
                            <label 
                              htmlFor={String(allergen.id)} 
                              className="
                                text-sm
                                font-medium leading-none
                                peer-disabled:cursor-not-allowed peer-disabled:opacity-70
                                whitespace-nowrap
                              "
                              style={{ maxWidth: 'calc(100% - 20px)' }}
                            >
                              {allergen.name}
                            </label>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                    <Box
                      sx={{margin: { xs: '0 auto', md: '0' }}}
                      className="shrink-0"
                    >
                      <HandleFilterButton
                        className="shrink-0 w-full md:w-auto"
                        onClick={async () => await handleFilter()}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </FadeInSection>
            <Box
              className="banner-container flex flex-col"
              sx={{
                marginBottom: '100px',
                textAlign: 'center',
              }}
            >
              <BannerSlider/>
              <Box
                className="desc-wrapper flex"
                sx={{
                  flexDirection: {xs: 'column', md: 'unset'},
                  justifyContent: {lg: 'center'},
                  margin: '0 auto',
                  width: {xs: '100%', sm: '350px', md: '855px', lg: '1000px'}
                }}
              >
                <Box
                  className="link-container"
                  sx={{
                    width: {xs: "92.5%", sm: '450px', md: "100%"},
                    display: 'flex',
                    justifyContent: 'end',
                    marginTop: {sm: '-25px', lg: '-20px'},
                    fontSize: '14px',
                  }}
                >
                  <Box
                    className="link-wrapper"
                    sx={{flexDirection: 'column'}}
                  >
                    <Typography
                      sx={{
                        fontSize: '14px',
                        display: 'flex',
                        justifyContent: 'end',
                      }}
                    >
                      栄養成分・アレルギー一覧は<Link href="#" sx={{ textDecoration: 'underline', color: theme.palette.secondary.main }}>こちら</Link>
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '14px',
                        display: 'flex',
                        justifyContent: 'end',
                      }}
                    >
                      メニュー表は<Link href="#" sx={{ textDecoration: 'underline', color: theme.palette.secondary.main }}>こちら</Link>
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '14px',
                        display: 'flex',
                        justifyContent: 'end',
                      }}
                    >
                      英語/中国語メニューは<Link href="#" sx={{ textDecoration: 'underline', color: theme.palette.secondary.main }}>こちら</Link>
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '12px',
                        display: 'flex',
                        justifyContent: 'end',
                      }}
                    >
                      ※一部、店舗によりメニューの価格・仕様が異なります。
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="main-container flex flex-col">
            <Box
              className="tab-wrapper mx-auto"
              sx={{
                width: {xs: '90%', sm: 'unset'},
                marginTop: 0,
                marginBottom: { sm: '25px', md: '100px' },
              }}
            >
              <Box
                className="flex"
                sx={{
                  width: '90%',
                  margin: '0 auto'
                }}
              >
                {tabs.map((tab, index) => (
                  <StraightBottomButton
                    key={index}
                    sx={{
                      fontSize: { xs: '14px', sm: '16px', md: '24px' },
                      margin: { xs: '4px 20px', sm: '4px 24px', md: '4px 50px' },
                    }}
                    onClick={async () => await handleTabClick(index)}
                    style={activeTab === index ? activeTabStyle : tabStyle}
                  >
                    <span
                      style={activeTab === index ? activeTextStyle : undefined}
                    >
                      {tab.title}
                    </span>
                  </StraightBottomButton>
                ))}
              </Box>
            </Box>
            <Box className="menu-container flex justify-center">
              <Box
                className="menu-wrapper flex-col"
                sx={{ 
                  maxWidth: '100%',
                  margin: '0 auto',
                  marginBottom: '100px',
                  gap: {xs: '10px', sm: '15px', md: '35px'}
                }}
              >
                {menuItems && chunkArray(menuItems, isLgUp ? 3 : 2).map((chunk, rowIndex) => (
                  <FadeInSection key={rowIndex} trigger={activeTab} delay={rowIndex * 300}>
                    <Box
                      key={`row_${rowIndex}`}
                      className="flex"
                      sx={{ marginBottom: {xs: '30px', sm: '100px', md: '140px'} }}
                    >
                      {chunk.map((item, index) => (
                        <Box
                          className="item-container"
                          key={index}
                          sx={{
                            width: { xs: '170px', sm: '250px', md: '300px' },
                            '@media (min-width: 1400px)': {
                              width: '380px !important'
                            },
                            maxWidth: '100%',
                            position: 'relative',
                            // CardContentのTopからの位置{xs:'75px',sm:'200px'}を考慮した設定
                            margin: {xs: '0 10px', sm: '0 30px'}
                          }}
                        >
                          <StyledLink href={`/menu/${item.id}`}>
                            <Box className="flex flex-col bg-transparent border-none shadow-none">
                              { item && <MenuListContainer item={item}/> }
                              <Box
                                className="grow"
                                sx={{
                                  position: 'absolute',
                                  left: {xs: 5, md: 10},
                                  top: {xs: '125px', sm: '147.5px', md: '180px'},
                                  '@media (min-width: 1400px)': {
                                    top: '237.5px !important',
                                  },
                                }}
                              >
                                <Typography
                                  className="inline-block text-white font-bold bg-[#EE0026]"
                                  sx={{
                                    px: 1,
                                    fontSize: {xs: '14px', sm: '18px', md: '24px'}
                                  }}
                                  gutterBottom
                                >
                                  {item.name}
                                </Typography>
                                <Typography
                                  className="whitespace-nowrap"
                                  color="#323232"
                                  gutterBottom
                                >
                                  <Typography
                                    component="span"
                                    variant="body2"
                                    className="font-noto-sans font-weight-black"
                                    sx={{ fontSize: {xs: '24px', sm: '30px', md: '36px'} }}
                                  >
                                    {item.price}
                                  </Typography>
                                  <Typography
                                    component="span"
                                    variant="body2"
                                    className="font-noto-sans"
                                    sx={{ fontSize: {xs: '14px', sm: '18px', md: '20px'} }}
                                  >
                                    円 (税込{item.taxIncludedPrice!}円)
                                  </Typography>
                                </Typography>
                              </Box>
                            </Box>
                          </StyledLink>
                        </Box>
                      ))}
                    </Box>
                  </FadeInSection>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
        <Footer/>
      </Box>
    </ThemeProvider>
  )
}
