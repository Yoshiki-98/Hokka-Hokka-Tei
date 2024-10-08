import { Box, useMediaQuery, Typography } from '@mui/material';
import { chunkArray } from '@/utils/array-utils';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { getSecondaryAllergenById } from '@/utils/theme/secondary-allergen-utils';
import { allergens } from '@/data/allergens';
import AllergenChip from './allergen-chip';
import { Allergen } from '@/types/allergen';
import WheatIcon from 'src/components/svg/icon/allergen/wheat';
import BuckWheatIcon from 'src/components/svg/icon/allergen/buckwheat';
import EggIcon from 'src/components/svg/icon/allergen/egg';
import MilkIcon from 'src/components/svg/icon/allergen/milk';
import PeanutIcon from 'src/components/svg/icon/allergen/peanut';
import WalnutIcon from 'src/components/svg/icon/allergen/walnut';
import ShrimpIcon from 'src/components/svg/icon/allergen/shrimp';
import CrabIcon from 'src/components/svg/icon/allergen/crab';
import { Menu } from '@/types/menu';

interface AllergenInfoProps {
  menuItem: Menu;
}

const AllergenInfo: React.FC<AllergenInfoProps> = ({ menuItem }) => {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

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
    <Box
      sx={{
        margin: isSmUp ? '0 0 100px 0': '0 auto 100px auto',
        width: '100%'
      }}
    >
      <Box className="label-wrapper flex items-center align-center justify-between mb-9">
        <Typography className="text-[#FFA600]">
          <span className="text-2xl font-bold whitespace-nowrap mr-[20px]">アレルギー情報</span>
        </Typography>
        <Box className="grow bg-[#FFA600] py-3"/>
      </Box>
      <Box sx={{marginBottom: {xs: '50px', md: '100px'}}}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: {xs: 'center', md: 'unset'},
            justifyContent: 'center',
            marginBottom: '30px',
          }}
        >
          {chunkArray(allergens, isMdUp ? 8 : 4).map((chunk, rowIndex) => (
            <Box
              key={`row_0${rowIndex}`}
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'unset' },
                flexWrap: 'wrap',
                gap: { xs: '10px', sm: '15px', md: 0 },
                margin:
                  isMdUp ? '0 0 20px 0' :
                  rowIndex === 0 ? '0 auto 20px auto' : '0 auto'
              }}
            >
              {chunk.map((allergen: Allergen, index, array) => {
                const ButtonComponent = iconComponents[allergen?.icon as keyof typeof iconComponents];

                return (
                  <AllergenChip
                    key={allergen.nameEn}
                    allergen={allergen}
                    index={index}
                    rowIndex={rowIndex}
                    array={array}
                    menuItem={menuItem}
                    iconButton={<ButtonComponent/>}
                  />
                )
              })}
            </Box>
          ))}
        </Box>
        <Box className="mb-3">
          <Typography variant="h6" gutterBottom>特定原材料に準ずるもの<span className="font-noto-sans font-weight-regular">18</span>品目（＋魚介類表示※<span className="font-noto-sans font-weight-regular">1</span>）</Typography>
          {menuItem?.secondaryAllergens && menuItem?.secondaryAllergens.map((secondaryAllergen, index, array) => (
            <React.Fragment key={secondaryAllergen}>
              {getSecondaryAllergenById(secondaryAllergen)?.name}
              {index !== array.length - 1 && ' / '}
            </React.Fragment>
          ))}
        </Box>
      </Box>
      <Box className="notes-on-allergies mb-3">
        <Box className="mb-[20px]">
          <Typography sx={{ fontSize: '12px'}}>
            ◆アレルギー物質の表示について <br/>
              ・表示している「アレルギー物質」の項目は、食品衛生法にて表示が義務付けられている特定原材料<span className="font-noto-sans">7</span>品目
              「小麦、そば、卵、乳、落花生(ビーナッツ)、くるみ、えび、かに」と、表示が推奨されている特定原材料に準じる<span className="font-noto-sans">18</span>品目
              「あわび、いか、いくら、オレンジ、カシューナッツ、キウイフルーツ、牛肉、ごま、さけ、さば、大豆、鶏肉、バナナ、豚肉、もも、やまいも、りんご、ゼラチン」です。
              このアレルギー情報は商品の原材料を精査、確認したものです。なお、店舗では他のアレルギー物質を含む原材料と共有の設備で調理しております。
              本来その商品に使用しない食材が付着・混入する可能性があり、絶対的なものではありません。アレルギー物質に対する感受性は個人差がありますので、最終的な
              ご購入につきましては専門医と相談のうえ、お客様ご自身で判断いただきますようお願い致します。※<span className="font-noto-sans">1</span>　魚介類表示は
              魚醤や魚介エキスなど無分別に網で捕獲した魚介を使用し、品目が特定できない場合に使用しています。<br/>
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
  );
};

export default AllergenInfo;
