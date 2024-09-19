import React from 'react';
import Image from 'next/image';
import { AppBar, Box, Toolbar, Typography, Link, Container, Divider, IconButton } from '@mui/material';
import FooterLogo from 'src/components/svg/logo/footer/site-logo';
import CompanyLogo from 'src/components/svg/logo/footer/company-logo';
import RightArrowIcon from 'src/components/svg/logo/main/right-arrow-icon';

const recruitmentLinks = [
  { label: 'フランチャイズオーナー募集'  },
  { label: 'パート・アルバイト募集' },
  { label: '採用募集' },
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
  return (
    <Box className="bg-white">
      <Box sx={{ position: 'relative', width: '100%', height: '100px', maxHeight: '100px' }}>
        <Image
          src='/images/hokatei-mask.png'
          alt='ほっかほっか亭のラベル'
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </Box>
      <AppBar
        className="mt-10"
        position="static"
        color="transparent"
        elevation={0}
      >
        <Toolbar>
          <IconButton href='/'>
            <FooterLogo className="grow"/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container sx={{minWidth: '100%'}} className="text-black">
        <Box className="flex justify-between items-center flex-wrap"
          sx={{ py: 3}}
        >
          <Box className="flex flex-wrap"
          sx={{
            gap: 2,
            flex: '1 1 80%',  // フレックス成長と縮小を許可し、幅の60%を占める
            maxWidth: '80%'   // 最大幅を設定
          }}>
            {recruitmentLinks.map((item, index) => (
              <Link 
                key={index} 
                href="#"
                className="flex items-center"
                color="inherit" 
                underline="hover"
                sx={{ gap: 0.5 }}
              >
                <RightArrowIcon className="mr-[1.71px] mb-2"/>
                {item.label}
              </Link>
            ))}
          </Box>
          <Box
            className="flex justify-end items-center"
            sx={{
              flex: '1 1 20%',  // フレックス成長と縮小を許可し、幅の40%を占める
              maxWidth: '20%'   // 最大幅を設定
            }}
          >
            <CompanyLogo/>
          </Box>
        </Box>
        <Divider className="my-2 w-{1431px}" color='#323232'/>
        <Box
          className="flex justify-between items-start"
          sx={{ py: 3 }}
        >
          <Box>
            <Box className="flex flex-wrap"
              sx={{ gap: 3 }}
            >
              {companyLinks.map((item, index) => (
                <Link 
                  key={index} 
                  href="#"
                  className="flex items-center text-sm"
                  color="inherit" 
                  underline="hover"
                  sx={{ gap: 0.5 }}
                >
                  {item.label}
                </Link>
              ))}
            </Box>
          </Box>
          <Typography
            className="text-xs"
            variant="body2"
            color="text.secondary"
          >
            Copyright © 2024 HURXLEY CORPORATION All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;