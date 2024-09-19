'use client'

import React, { useEffect, useState } from 'react';
import {
  Typography,
  Chip,
  Box,
  ThemeProvider,
  createTheme,
  Container,
  styled,
} from '@mui/material';
import { Menu } from '@/types/menu';
import axios from 'axios';
import { getSecondaryAllergenById } from '@/utils/theme/secondary-allergen-utils';
import { allergens } from '@/data/allergens';
import Header from '../header';
import Footer from '../footer';
import InlineNutritionInfo from './nutrition-info';
import AllergenChip from './allergen-chip';
import WheatIcon from 'src/components/svg/icon/allergen/wheat';
import BuckWheatIcon from 'src/components/svg/icon/allergen/buckwheat';
import EggIcon from 'src/components/svg/icon/allergen/egg';
import MilkIcon from 'src/components/svg/icon/allergen/milk';
import PeanutIcon from 'src/components/svg/icon/allergen/peanut';
import WalnutIcon from 'src/components/svg/icon/allergen/walnut';
import ShrimpIcon from 'src/components/svg/icon/allergen/shrimp';
import CrabIcon from 'src/components/svg/icon/allergen/crab';

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

const SVGContainer = styled(Box)({
  width: '660px',
  height: '440px',
  overflow: 'hidden',
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

  const partsOfDesc = menuItem?.desc.split(/(?:<br\s*\/?>\s*|\n)/);

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

  return (
    <ThemeProvider theme={theme}>
      <Box className="flex flex-col text-black" sx={{ bgcolor: 'background.default' }}>
        <Header/>
        <Container className="mb-[100px]">
          <Box className='grow flex justify-center items-center'>
            <Box className="menu-info-wrapper mx-auto w-[1280px]">
              <Box className="w-[1280px]">
                <Box className="flex items-center align-center justify-between mb-[100px]">
                  <Box className="mr-[50px]">
                    <SVGContainer>
                      <svg 
                        width="100%" 
                        height="100%" 
                        viewBox="0 0 660 440" 
                        preserveAspectRatio="xMidYMid meet" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <clipPath id="svgShape">
                            <path d="M42.8285 2.93838C44.7046 1.05724 47.2522 0 49.909 0L608.802 0C611.407 0 613.91 1.01688 615.777 2.83418L656.975 42.9355C658.909 44.8181 660 47.4024 660 50.1014L659.999 385.847C659.999 388.495 658.948 391.034 657.079 392.909L613.039 437.062C611.163 438.943 608.616 440 605.959 440H51.452C48.6969 440 46.0638 438.863 44.1743 436.858L2.72229 392.87C0.973786 391.015 5.88707e-06 388.562 1.64577e-05 386.012L0.00140956 50.0142C0.00142053 47.3667 1.05132 44.8273 2.9209 42.9527L42.8285 2.93838Z" />
                          </clipPath>
                        </defs>
                        <image
                          href={menuItem?.images[0]}
                          width="100%"
                          height="100%"
                          preserveAspectRatio="xMidYMid slice"
                          clipPath="url(#svgShape)"
                        />
                      </svg>
                    </SVGContainer>
                  </Box>
                  <Box className="mt-[-80px]">
                    <Box className="flex items-center align-center justify-between">
                      <Typography className="text-[#EE0026]">
                        <span className="text-4xl font-bold whitespace-nowrap mr-[20px]">{menuItem?.name}</span>
                      </Typography>
                      <Box className="grow bg-[#EE0026] p-[18px] mb-2"/>
                    </Box>
                    <Typography className="leading-3" sx={{lineHeight: '30px', fontSize: '14px'}} component="div">
                      {partsOfDesc && partsOfDesc.map((part, index) => (
                        <Box 
                          key={index} 
                          sx={{ 
                            marginTop: '10px', 
                            marginBottom: '10px',
                          }}
                        >
                          {part.trim()}
                        </Box>
                      ))}
                    </Typography>
                    <Box className="flex items-center align-center mb-[50px]">
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
                <Box className="mb-[100px]">
                  <Box className="flex items-center align-center justify-between mb-9">
                    <Typography className="text-[#FFA600]">
                      <span className="text-2xl font-bold whitespace-nowrap mr-[20px]">アレルギー情報</span>
                    </Typography>
                    <Box className="grow bg-[#FFA600] p-3 mb-2"/>
                  </Box>
                  <Box className="mb-[100px]">
                    <Box className="mb-[50px]">
                      {allergens.map((allergen: {id: number, name: string, nameEn: string, icon: string}, index, array) => {
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
                    <Box className="mb-3">
                      <Typography variant="h6" gutterBottom>特定原材料に準ずるもの20品目（＋魚介類表示※1）</Typography>
                      {menuItem?.secondaryAllergens.map((secondaryAllergen, index, array) => (
                        <React.Fragment key={secondaryAllergen}>
                          {getSecondaryAllergenById(secondaryAllergen)?.name}
                          {index !== array.length - 1 && ' / '}
                        </React.Fragment>
                      ))}
                    </Box>
                  </Box>
                  <Box className="mb-3">
                    <Typography sx={{ fontSize: '12px'}} className="mb-[20px]">
                      ◆アレルギー物質の表示について <br/>
                        ・表示している「アレルギー物質」の項目は、食品衛生法にて表示が義務付けられている特定原材料7品目
                        「小麦、そば、卵、乳、落花生、えび、かに」と、表示が推奨されている特定原材料に準じる20品目
                        「あわび、いか、いくら、オレンジ、カシューナッツ、キウイフルーツ、牛肉、くるみ、ごま、さけ、さば、大豆、鶏肉、バナナ、豚肉、まつたけ、もも、やまいも、りんご、ゼラチン」です。
                        このアレルギー情報は商品の原材料を精査、確認したものです。なお、店舗では他のアレルギー物質を含む原材料と共有の設備で調理しております。
                        本来その商品に使用しない食材が付着・混入する可能性があり、絶対的なものではありません。アレルギー物質に対する感受性は個人差がありますので、最終的なご購入につきましては専門医と相談のうえ、お客様ご自身で判断いただきますようお願い致します。
                        ※1　魚介類表示は魚醤や魚介エキスなど無分別に網で捕獲した魚介を使用し、品目が特定できない場合に使用しています。<br/>
                    </Typography>
                    <Typography sx={{ fontSize: '12px'}} className="mb-[20px]">
                      ◆栄養成分の表示について <br/>
                        検査機関で分析した数値および「日本食品標準成分表」に基づき算出しております。
                        ひとつひとつ手作りしているため、実際の商品は数値に誤差が出る場合がありますので、ご了承下さい。<br/>
                    </Typography>
                    <Typography sx={{ fontSize: '12px'}} className="mb-[20px]">
                      ◆栄養成分・アレルギー物質情報は、商品の内容変更に伴い随時更新しておりますのでご注意下さい。
                    </Typography>
                  </Box>
                </Box>
                <Box className="mb-[100px]">
                  <Box className="flex items-center align-center justify-between">
                    <Typography className="text-[#FFA600]">
                      <span className="text-2xl text-[#FFA600] font-bold whitespace-nowrap mr-[20px]">栄養情報</span>
                    </Typography>
                    <Box className="grow bg-[#FFA600] p-3 mb-2"/>
                  </Box>
                  <Box>
                    {menuItem && <InlineNutritionInfo menuItem={menuItem} />}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
        <Footer/>
      </Box>
    </ThemeProvider>
  );
}
<Footer/>
