import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import HamburgerMenuLogo from '../svg/logo/header/hamburger-menu-logo';
import Image from "next/image";
import HokateiMenuRightArrow from '../svg/icon/hamburger-menu-right-arrow';
import HokateiMenuDownArrow from '../svg/icon/hamburger-menu-down-arrow';
import HeaderCloseButton from '../svg/icon/header-close-button';

interface MenuItem {
  text: string;
  link: string;
  group?: number;
  children?: MenuItem[];
}

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | false>(false);
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent|React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setIsOpen(open);
  };

  const handleAccordionChange = (panel: string) =>
    (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
  };

  const menuItems: MenuItem[] = isLgUp ? [
    // group2
    { text: '団体予約', link: '/', group: 2 },
    { text: 'よくあるご質問', link: '/', group: 2 },
    { text: 'お問い合わせ', link: '/', group: 2 },
    { text: 'フランチャイズオーナー募集', link: '/', group: 2 },
    { text: '採用情報', link: '/', group: 2 },
    { text: '社会との関わり', link: '/s', group: 2 },
    { text: '会社概要', link: '/', group: 2 },
    // group3
    { 
      text: 'English Menu', 
      link: '/#', 
      group: 3,
      children: [
        { text: 'West Japan Area Menu', link: 'https://www.hokkahokka-tei.jp/menu/emenu_w.html', group: 3 },
        { text: 'East Japan Area Menu', link: 'https://www.hokkahokka-tei.jp/menu/emenu_e.html', group: 3 },
        { text: 'Kyushu Japan Area Menu', link: 'https://www.hokkahokka-tei.jp/menu/emenu_s.html', group: 3 },
      ]
    },
  ] : [
    // group1
    { text: 'メニュー', link: '/menu', group: 1 },
    { text: '店舗', link: '/store', group: 1 },
    // group2
    { text: '団体予約', link: '/', group: 2 },
    { text: 'よくあるご質問', link: '/', group: 2 },
    { text: 'お問い合わせ', link: '/', group: 2 },
    { text: 'フランチャイズオーナー募集', link: '/', group: 2 },
    { text: '採用情報', link: '/', group: 2 },
    { text: '社会との関わり', link: '/s', group: 2 },
    { text: '会社概要', link: '/', group: 2 },
    // group3
    { 
      text: 'English Menu', 
      link: '/#', 
      group: 3,
      children: [
        { text: 'West Japan Area Menu', link: 'https://www.hokkahokka-tei.jp/menu/emenu_w.html', group: 3 },
        { text: 'East Japan Area Menu', link: 'https://www.hokkahokka-tei.jp/menu/emenu_e.html', group: 3 },
        { text: 'Kyushu Japan Area Menu', link: 'https://www.hokkahokka-tei.jp/menu/emenu_s.html', group: 3 },
      ]
    },
  ]

  const responsiveTypography = {
    fontSize: {
      xs: '14px',
      sm: '16px',
      md: '18px',
    },
  };

  const renderMenuItem = (item: MenuItem, index: number) => {
    if (item.children) {
      return (
        <Accordion
          key={item.text}
          expanded={expanded === `panel${index}`}
          onChange={handleAccordionChange(`panel${index}`)}
          elevation={0}
          sx={{
            backgroundColor: 'transparent',
            '&:before': {
              display: 'none',
            },
          }}
        >
          <AccordionSummary
            expandIcon={null}
            aria-controls={`panel${index}bh-content`}
            id={`panel${index}bh-header`}
            sx={{
              padding: 0,
              '& .MuiAccordionSummary-content': {
                margin: 0,
              },
            }}
          >
            <ListItem component="div">
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  sx: responsiveTypography
                }}
              />
              {
                expanded ? (
                  <HokateiMenuDownArrow />
                ) : (
                  <HokateiMenuRightArrow />
                )
              }
            </ListItem>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0 }}>
            <List>
              {item.children.map((child, childIndex) => (
                <ListItem
                  key={child.text}
                  component="a"
                  href={child.link}
                  sx={{
                    py: 1,
                    pl: 4,
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    },
                  }}
                >
                  <ListItemText
                    primary={child.text}
                    primaryTypographyProps={{
                      sx: responsiveTypography
                    }}
                  />
                  <HokateiMenuRightArrow />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      );
    }

    return (
      <ListItem 
        key={item.text}
        component="a" 
        href={item.link}
        sx={{
          py: 1,
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
          },
        }}
      >
        <ListItemText 
          primary={item.text}
          primaryTypographyProps={{
            sx: responsiveTypography
          }}
        />
        <HokateiMenuRightArrow />
      </ListItem>
    );
  };

  return (
    <Box>
      <Box
        component="button"
        onClick={toggleDrawer(true)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            toggleDrawer(true)(event);
          }
        }}
        aria-label="menu"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 1,
          margin: isOpen ? '0 5px' : 'unset',
          border: 'none',
          background: 'none',
          cursor: 'pointer',
          color: 'inherit',
          '&:hover': {
            opacity: 0.8,
          },
          '&:focus': {
            outline: '2px solid currentColor',
            outlineOffset: 2,
          },
        }}
      >
        {
          isOpen ? (
            <HeaderCloseButton />
          ) : (
            <HamburgerMenuLogo />
          )
        }
      </Box>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer(false)}
        // ModalProps={{ // 暗転効果
        //   BackdropProps: {
        //     style: { backgroundColor: 'transparent' }
        //   }
        // }}
        PaperProps={{
          sx: {
            width: 500,
            maxWidth: '100%',
            marginTop: {xs: '56px', sm: '64px'}, // ヘッダーの高さに応じて調整
            height: 'calc(100% - 60px)', // ヘッダーの高さを引いた高さ
            backgroundColor: 'transparent',
            boxShadow: 'none',
          },
        }}
      >
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: {xs: '25px', sm: '37.5px', md: '50px'},
              maxHeight: '100px',
              flexShrink: 0,
              backgroundColor: '#F7F0E8',
            }}
          >
            {
              isMdUp ? (
                <Image
                  src='/images/hokatei-hamburger-menu-mask.png'
                  alt='ほっかほっか亭のラベル'
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              ) : (
                <Image
                  src='/images/hokatei-mask.png'
                  alt='ほっかほっか亭のラベル'
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              )
            }
          </Box>
          <Box
            role="presentation"
            onClick={(event) => {
              if ((event.target as HTMLElement).tagName !== 'A') {
                // !== 'A' は、タグ名が 'A' （アンカータグ <a）でないかをチェック
                event.stopPropagation();
              }
            }}
            onKeyDown={toggleDrawer(false)}
            sx={{
              flexGrow: 1,
              backgroundColor: '#F7F0E8',
              overflowY: 'auto',
              padding: 2,
            }}
          >
            <List
              sx={{
                width: {xs: '100%', sm: '70%'},
                margin: '0 auto',
                paddingTop: '40px'
              }}
            >
              {menuItems.map((item, index) => (
                <React.Fragment key={item.text}>
                  {index > 0 && menuItems[index - 1].group !== item.group && (
                    <Box sx={{ my: {xs: 3, md: 6} }}/>
                  )}
                  {renderMenuItem(item, index)}
                </React.Fragment>
              ))}
            </List>
          </Box>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: {xs: '25px', sm: '37.5px', md: '50px'},
              maxHeight: '100px',
              flexShrink: 0,
              backgroundColor: '#F7F0E8',
            }}
          >
            {
              isMdUp ? (
                <Image
                  src='/images/hokatei-hamburger-menu-mask.png'
                  alt='ほっかほっか亭のラベル'
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              ) : (
                <Image
                  src='/images/hokatei-mask.png'
                  alt='ほっかほっか亭のラベル'
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              )
            }
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default HamburgerMenu;
