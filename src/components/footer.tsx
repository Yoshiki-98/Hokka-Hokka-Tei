import React, { useState } from 'react';
import Image from 'next/image';
import {
  Box,
  Divider,
  IconButton,
  Link,
  Typography,
  useMediaQuery,
  createTheme
} from '@mui/material';
import FooterLogo from 'src/components/svg/logo/footer/site-logo';
import RightArrowIcon from 'src/components/svg/logo/main/right-arrow-icon';
import 'src/app/globals.css';

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

const recruitmentLinks = [
  { label: 'フランチャイズオーナー募集'  },
  { label: 'パート・アルバイト募集' },
  { label: '採用情報' },
  { label: '店舗造り・維持管理提案募集' },
  { label: '物件募集' },
];

const companyLinks = [
  { label: '利用規約' },
  { label: 'プライバシーポリシー' },
  { label: 'お問い合わせ' },
  { label: '社会とのかかわり' },
  { label: '会社概要' },
];

const Footer: React.FC = () => {
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isMobile = useMediaQuery('(max-width:690px)');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Box
      className="bg-white font-sans-jp"
      sx={{
        paddingBottom: {xs: '20px', md: '0'},
        color: theme.palette.secondary.main,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: {xs: '25px', sm: '37.5px', md: '50px'},
          maxHeight: '100px'
        }}
      >
        <Image
          src='/images/hokatei-mask.webp'
          alt='ほっかほっか亭のラベル'
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </Box>
      <Box
        sx={{padding: isMobile ? '30px 30px 0 30px' : '40px 40px 0 40px'}}
      >
        <IconButton
          href='/'
          sx={{
            padding: 0,
            margin: '0 0 27px 0'
          }}
        >
          <FooterLogo className="grow"/>
        </IconButton>
        <Box sx={{ minWidth: '100%' }}>
          <Box
            className="flex justify-between items-center flex-wrap"
            sx={{ py: '13px', mb: '15px' }}
          >
            {
              isSmUp ? (
                <Box
                  className="flex flex-wrap"
                  sx={{
                    gap: isMobile ? '20px' : '40px',
                    flex: '1 1 80%',  // フレックス成長と縮小を許可し、幅の60%を占める
                    maxWidth: '80%'   // 最大幅を設定
                  }}
                >
                  {recruitmentLinks.map((item, index) => (
                    <Link 
                      key={index} 
                      href="#"
                      className="flex items-center"
                      underline="hover"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      sx={{
                        color: theme.palette.secondary.main,
                        textDecoration: 'none',
                        '&:hover': {
                          color: 'rgb(238, 0, 38)',
                          textDecoration: 'none',
                          backgroundColor: 'transparent',
                          fontWeight: 'bold'
                        },
                      }}
                    >
                      <RightArrowIcon
                        isHovered={hoveredIndex === index}
                        sx={{
                          marginRight: '10px',
                          marginBottom: '3px'
                        }}
                      />
                      {item.label}
                    </Link>
                  ))}
                </Box>
              ) : (
                <Box
                  className="flex flex-wrap"
                  sx={{
                    gap: isMobile ? '20px' : '40px',
                    flex: '1 1 80%',  // フレックス成長と縮小を許可し、幅の60%を占める
                    maxWidth: '80%'   // 最大幅を設定
                  }}
                >
                  {recruitmentLinks.map((item, index) => (
                    <Link 
                      key={index} 
                      href="#"
                      className="flex items-center"
                      underline="hover"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      sx={{ 
                        gap: 0.5,
                        width: '100%', // 各アイテムが全幅を占めるように設定
                        color: theme.palette.secondary.main,
                        textDecoration: 'none',
                        '&:hover': {
                          color: 'rgb(238, 0, 38)',
                          textDecoration: 'none',
                          backgroundColor: 'transparent',
                          fontWeight: 'bold'
                        },
                      }}
                    >
                      <RightArrowIcon
                        isHovered={hoveredIndex === index}
                        sx={{
                          marginRight: isMobile ? '1.7px' : 0,
                          marginBottom: isMobile ? 2 : 0,
                        }}
                      />
                        {item.label}
                    </Link>
                  ))}
                </Box>
              )
            }
          </Box>
          <Divider
            className="w-{1431px}"
            sx={{ mt: '0.25rem' }}
            color='#323232'
          />
          <Box
            className="flex justify-between items-start"
            sx={{ pt: '26px', pb: '27px' }}
          >
            <Box>
              <Box
                className="flex flex-wrap"
                sx={{ gap: isMobile ? '20px' : '30px' }}
              >
                {companyLinks.map((item, index) => (
                  <Link 
                    key={index} 
                    href="#"
                    className="flex items-center text-sm"
                    underline="hover"
                    sx={{
                      gap: 0.5,
                      width: isSmDown ? '100%' : undefined,
                      fontSize: '14px',
                      color: theme.palette.secondary.main,
                      textDecoration: 'none',
                        '&:hover': {
                          color: 'rgb(238, 0, 38)',
                          textDecoration: 'none',
                          backgroundColor: 'transparent',
                          fontWeight: 'bold'
                        },
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </Box>
            </Box>
            {!isMobile && (
              <Typography
                className="text-xs"
                variant="body2"
                color={theme.palette.secondary.main}
              >
                Copyright © 2024 Hokka-Hokka Tei Souhombu Corp All Rights Reserved
              </Typography>
            )}
          </Box>
          {isMobile && (
            <Typography
              className="text-xs"
              variant="body2"
            >
              Copyright © 2024 Hokka-Hokka Tei Souhombu Corp All Rights Reserved
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
