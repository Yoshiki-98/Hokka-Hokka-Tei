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
import { getSecondaryAllergenById } from '@/utils/theme/secondary-allergen-utils';
import { allergens } from '@/data/allergens';
import Header from 'src/components/header';
import Footer from 'src/components/footer';
import NutritionInfo from './nutrition-info';
import AllergenChip from './allergen-chip';
import WheatIcon from 'src/components/svg/icon/allergen/wheat';
import BuckWheatIcon from 'src/components/svg/icon/allergen/buckwheat';
import EggIcon from 'src/components/svg/icon/allergen/egg';
import MilkIcon from 'src/components/svg/icon/allergen/milk';
import PeanutIcon from 'src/components/svg/icon/allergen/peanut';
import WalnutIcon from 'src/components/svg/icon/allergen/walnut';
import ShrimpIcon from 'src/components/svg/icon/allergen/shrimp';
import CrabIcon from 'src/components/svg/icon/allergen/crab';
import { Allergen } from '@/types/allergen';
import { chunkArray } from '@/utils/array-utils';
import MenuContainer from 'src/components/svg/container/menu-container';

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

  const iconComponents = {
    WheatIcon,
    BuckWheatIcon,
    EggIcon,
    MilkIcon,
    PeanutIcon,
    WalnutIcon,
    ShrimpIcon,
    CrabIcon
  };

  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <ThemeProvider theme={theme}>
      <Box className="flex flex-col text-black" sx={{ bgcolor: 'background.default' }}>
        <Header/>
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
                  className="md:flex items-center align-center justify-between"
                  sx={{
                    margin: isSmUp ? '0 0 100px 0': '0 auto 100px auto',
                    width: isSmUp ? '100%' : '95%'
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      margin: '0 auto',
                      marginRight: {sm: '50px'},
                      marginBottom: {xs: '30px', md: 0}
                    }}
                  >
                    <MenuContainer item={menuItem}/>
                  </Box>
                  <Box
                    sx={{
                      marginTop: {md: '-80px'}
                    }}
                  >
                    <Box className="flex items-center align-center justify-between mb-[10px]">
                      <Typography
                        className="text-[#EE0026]"
                        sx={{
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
                      {partsOfDesc && partsOfDesc.map((part, index) => (
                        <Box key={index}>
                          {part.trim()}
                        </Box>
                      ))}
                    </Typography>
                    <Box
                      className="flex items-center align-center mb-[50px]"
                      sx={{
                        marginBottom: {xs: '30px', md: '50px'}
                      }}
                    >
                      {menuItem?.isSideAloneOK && (
                        <Box className="mb-2 mr-[20px]">
                          <Chip
                            label="おかず単品OK"
                            variant="outlined"
                            sx={{
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
                              border: '3px solid #FFA600',
                              borderRadius: 1
                            }}
                          />
                        </Box>
                      )}
                    </Box>
                    <Typography gutterBottom>
                      <span className="text-4xl font-bold">{menuItem?.price}</span>
                      <span className="text-xl">円 (税込 {menuItem?.taxIncludedPrice} 円)</span>
                    </Typography>
                    <Typography sx={{fontSize: '10px'}} color="text.secondary">
                      ※店舗により商品の仕様が異なる場合や、取り扱いが無い場合がございます
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    margin: isSmUp ? '0 0 100px 0': '0 auto 100px auto',
                    width: isSmUp ? '100%' : '95%'
                  }}
                >
                  <Box className="flex items-center align-center justify-between mb-9">
                    <Typography className="text-[#FFA600]">
                      <span className="text-2xl font-bold whitespace-nowrap mr-[20px]">アレルギー情報</span>
                    </Typography>
                    <Box className="grow bg-[#FFA600] p-3"/>
                  </Box>
                  <Box sx={{marginBottom: {xs: '50px', md: '100px'}}}>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom: '50px',
                      }}
                    >
                      {chunkArray(allergens, isMdUp ? 8 : 4).map((chunk, rowIndex) => {
                        return (
                          <Box
                            key={`row_${rowIndex}`}
                            className="flex"
                            sx={{
                              margin:
                                isMdUp ? undefined :
                                rowIndex === 0 ? '0 auto 20px' : '0 auto'
                            }}
                          >
                            {chunk.map((allergen: Allergen, index, array) => {
                              const ButtonComponent = iconComponents[allergen?.icon as keyof typeof iconComponents];

                              return (
                                <AllergenChip
                                  key={allergen.nameEn}
                                  allergen={allergen}
                                  index={index}
                                  array={array}
                                  menuItem={menuItem}
                                  iconButton={<ButtonComponent/>}
                                />
                              )
                            })}
                          </Box>
                      )})}
                    </Box>
                    <Box className="mb-3">
                      <Typography variant="h6" gutterBottom>特定原材料に準ずるもの20品目（＋魚介類表示※1）</Typography>
                      {menuItem?.secondaryAllergens && menuItem?.secondaryAllergens.map((secondaryAllergen, index, array) => (
                        <React.Fragment key={secondaryAllergen}>
                          {getSecondaryAllergenById(secondaryAllergen)?.name}
                          {index !== array.length - 1 && ' / '}
                        </React.Fragment>
                      ))}
                    </Box>
                  </Box>
                  <Box className="mb-3">
                    <Box className="mb-[20px]">
                      <Typography sx={{ fontSize: '12px'}}>
                        ◆アレルギー物質の表示について <br/>
                          ・表示している「アレルギー物質」の項目は、食品衛生法にて表示が義務付けられている特定原材料7品目
                          「小麦、そば、卵、乳、落花生、えび、かに」と、表示が推奨されている特定原材料に準じる20品目
                          「あわび、いか、いくら、オレンジ、カシューナッツ、キウイフルーツ、牛肉、くるみ、ごま、さけ、さば、大豆、鶏肉、バナナ、豚肉、まつたけ、もも、やまいも、りんご、ゼラチン」です。
                          このアレルギー情報は商品の原材料を精査、確認したものです。なお、店舗では他のアレルギー物質を含む原材料と共有の設備で調理しております。
                          本来その商品に使用しない食材が付着・混入する可能性があり、絶対的なものではありません。アレルギー物質に対する感受性は個人差がありますので、最終的なご購入につきましては専門医と相談のうえ、お客様ご自身で判断いただきますようお願い致します。
                          ※1　魚介類表示は魚醤や魚介エキスなど無分別に網で捕獲した魚介を使用し、品目が特定できない場合に使用しています。<br/>
                      </Typography>
                    </Box>
                    <Box className="mb-[20px]">
                      <Typography sx={{ fontSize: '12px'}} className="mb-[20px]">
                        ◆栄養成分の表示について <br/>
                          検査機関で分析した数値および「日本食品標準成分表」に基づき算出しております。
                          ひとつひとつ手作りしているため、実際の商品は数値に誤差が出る場合がありますので、ご了承下さい。<br/>
                      </Typography>
                    </Box>
                    <Box className="mb-[20px]">
                      <Typography sx={{ fontSize: '12px'}} className="mb-[20px]">
                        ◆栄養成分・アレルギー物質情報は、商品の内容変更に伴い随時更新しておりますのでご注意下さい。
                      </Typography>
                    </Box> 
                  </Box>
                </Box>
                <Box className="mb-[100px]">
                  <Box
                    className="flex items-center align-center justify-between"
                    sx={{
                      margin: isSmUp ? '0': '0 auto',
                      width: isSmUp ? '100%' : '95%'
                    }}
                  >
                    <Typography className="text-[#FFA600]">
                      <span className="text-2xl text-[#FFA600] font-bold whitespace-nowrap mr-[20px]">栄養情報</span>
                    </Typography>
                    <Box className="grow bg-[#FFA600] p-3"/>
                  </Box>
                  <Box className="flex justify-center">
                    {menuItem && <NutritionInfo menuItem={menuItem} />}
                  </Box>
                </Box>
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
