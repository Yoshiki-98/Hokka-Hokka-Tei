'use client'

import React, { useState, useCallback } from 'react';
import { prefectures } from 'src/data/prefectures';
import { allergens as allergenArray } from 'src/data/allergens';
import { 
  Button,  
  Typography, 
  Card, 
  CardContent, 
  CardMedia, 
  Select, 
  MenuItem, 
  FormControl, 
  Box,
  Checkbox,
  Link,
  styled,
  Container,
  SelectProps,
} from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import axios from 'axios';
import { Category } from 'src/types/category';
import { Menu } from '@/types/menu';
import Image from 'next/image';
import Header from '../header';
import Footer from '../footer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HandleFilterButton from '../svg/button/trigger/handle-filter';
import DownArrowIcon from 'src/components/svg/logo/main/down-arrow-icon';

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

const tabStyle = {
  padding: 0,
  color: '#323232',
  cursor: 'pointer',
  borderBottom: '2px solid transparent',
};

const activeTabStyle = {
  ...tabStyle,
};

const activeTextStyle = {
  fontWeight: 'bold',
  borderBottom: '3px solid #EE0026',
}

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'none',
  },
  width: 'calc(33.333% - 16px)',
  marginBottom: '24px',
}));

const StraightBottomButton = styled(Button)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(1),
  whiteSpace: 'nowrap',
  borderRadius: '0',
}));

// カスタムセレクトコンポーネント
const CustomSelect = styled(Select)<SelectProps>(({ theme }) => ({
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
}));

const SVGContainer = styled(Box)({
  maxWidth: '393px', // SVGの元の幅
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
    { title: 'おかず', filter: handleFilterSideItems, fetch: fetchSideItems },
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

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        <Header/>
        <Container className="w-full mt-[100px] mb-[100px]">
          <Box className="menu-title flex justify-center items-center mb-[56.17px]">
            <Image
              src={'/images/menu-title.png'}
              alt={'Menu Title'}
              width={223.95}
              height={66.83}
            />
          </Box>
          <Box className="pb-[100px]">
            <Box
              className="mb-[100px] mx-auto"
              width={855}
            >
              <Typography className="text-2xl text-black whitespace-nowrap" gutterBottom>
                <LocationOnIcon fontSize="small" />
                ご利用の都道府県でお選びください
              </Typography>
              <FormControl fullWidth>
                <CustomSelect
                  className="w-[353px] h-[30px] bg-white rounded-[10px]"
                  value={selectedPrefCode}
                  onChange={(e: any) => {
                    setSelectedPrefCode(e.target.value);
                    tabs[activeTab].fetch(e.target.value);
                  }}
                  IconComponent={() =>
                    <DownArrowIcon className="mr-4"/>
                  }
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
                    <span className="text-[#C4C4C6]">都道府県を選択</span>
                  </MenuItem>
                  {prefectures.map(pref => (
                    <MenuItem
                      key={`pref_${String(pref.code).padStart(2,'0')}`}
                      value={pref.code}
                    >
                      {pref.name}
                    </MenuItem>
                  ))}
                </CustomSelect>
              </FormControl>
            </Box>
            <Box
              className="mx-auto"
              width={855}
            >
              <Typography className="text-2xl text-black mb-2 whitespace-nowrap">アレルギー物質から絞り込む</Typography>
              <Box className="mx-auto text-black mb-3 flex justify-center items-center">
                <Box
                  height={133}
                  className="mb-8 flex justify-between items-start bg-white p-[25px] rounded-[10px] border border-black shadow-lg"
                >
                  <Box className="whitespace-nowrap">
                    <Box className="mb-[20px]">
                      <Typography className="text-md mb-1">除去したい品目を選択して下さい</Typography>
                      <Typography
                        className="text-xs text-shadow"
                        sx={{ textShadow: '0px 4px 4px rgba(0,0,0,0.3)' }}
                      >
                        ※絞込み条件は特定原材料（8品目）のみとなっております
                      </Typography>
                    </Box>
                    <Box className="flex whitespace-nowrap">
                      {allergenArray.map((allergen: {id: number, name: string}) => (
                        <Box
                          className="mr-[20px] items-center inline-flex shrink-0 mb-2"
                          key={allergen.id}
                        >
                          <Checkbox
                            className="w-2.5 h-2.5 mr-2"
                            id={String(allergen.id)}
                            checked={selectedAllergens.includes(allergen.id)}
                            onChange={async () => await handleSelectAllergens(allergen.id)}
                            sx={{
                              '& .MuiSvgIcon-root': {
                                fontSize: 14,  // アイコンのサイズを変更
                              },
                            }}
                          />
                          <label 
                            htmlFor={String(allergen.id)} 
                            className="
                              text-black text-sm
                              font-medium leading-none
                              peer-disabled:cursor-not-allowed peer-disabled:opacity-70
                            "
                          >
                            {allergen.name}
                          </label>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                  <Box className="shrink-0">
                    <HandleFilterButton
                      className="shrink-0"
                      onClick={async () => await handleFilter()}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="mx-auto flex flex-col">
            <Box className="tab-wrapper mx-auto mt-[100px] mb-[113px]">
              <Box className="flex">
                {tabs.map((tab, index) => (
                  <StraightBottomButton
                    key={index}
                    className={`mx-[50px] my-1 text-black text-2xl`}
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
            <Box
              className="menu-wrapper w-full flex flex-wrap items-center gap-[0px] mb-[100px]"
              sx={{ 
                width: '1319px',  // (393px * 3) + (70px * 2) = 1319px
                maxWidth: '100%',
                margin: '0 auto',
              }}
            >
              {menuItems && menuItems.map((item, index) => (
                <Box className="w-[380px] max-w-full relative" key={index}>
                  <StyledLink href={`/menu/${item.id}`}>
                    <Card className="flex flex-col bg-transparent border-none shadow-none">
                      <SVGContainer>
                        <svg width="100%" height="100%" viewBox="0 0 393 260" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <clipPath id="svgShape">
                            <path d="M376.856 238.354C376.196 242.981 372.419 246.533 367.76 246.909L205.546 259.996C204.934 260.046 204.318 260.038 203.707 259.975L45.3867 243.512C41.3392 243.091 37.9504 240.259 36.8168 236.351L13.7208 156.726C13.2481 155.096 13.1979 153.373 13.575 151.718L37.5278 46.6174C38.2568 43.4184 40.5088 40.7805 43.5539 39.5587L122.904 7.71924C124.089 7.24414 125.353 7 126.628 7L296.555 7C297.889 7 299.209 7.26688 300.438 7.78491L367.601 36.0899C370.538 37.3274 372.709 39.8903 373.446 42.9902L392.56 123.322C392.851 124.543 392.909 125.807 392.732 127.049L376.856 238.354Z" fill="#D84343"/>
                            </clipPath>
                          </defs>
                          <image
                            href={item.images[0]}
                            width="100%"
                            height="100%"
                            preserveAspectRatio="xMidYMid slice"
                            clipPath="url(#svgShape)"
                          />
                        </svg>
                      </SVGContainer>
                      <CardContent className="absolute left-[-4px] top-52 grow">
                        <Typography
                          className="inline-block px-1 text-2xl text-white font-bold bg-[#EE0026] whitespace-nowrap"
                          gutterBottom
                        >
                          {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          <span className="text-4xl font-bold">
                            {item.price}
                          </span>
                          <span className="text-xl">
                            円 (税込{item.taxIncludedPrice ??  Math.round(item.price * 1.1)}円)
                          </span>
                        </Typography>
                      </CardContent>
                    </Card>
                  </StyledLink>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
        <Footer/>
      </Box>
    </ThemeProvider>
  )
}

