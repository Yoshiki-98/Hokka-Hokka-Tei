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
} from '@mui/material';
import HamburgerMenuLogo from '../svg/logo/header/hamburger-menu-logo';
import Image from "next/image";
import HamburgerMenuRightArrow from '../svg/icon/hamburger-menu-right-arrow';
import HokateiMenuDownArrow from '../svg/icon/hamburger-menu-down-arrow';
import HokateiMenuUpArrow from '../svg/icon/hamburger-menu-up-arrow';
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isMobile = useMediaQuery('(max-width:690px)');

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

  const menuItems: MenuItem[] = isMobile ? [
    // group1
    { text: 'メニュー', link: '/menu', group: 1 },
    { text: '店舗', link: '/store', group: 1 },
    // group2
    { text: '団体予約', link: '/', group: 2 },
    { text: 'よくあるご質問', link: '/', group: 2 },
    { text: 'お問い合わせ', link: '/', group: 2 },
    { text: 'フランチャイズオーナー募集', link: '/', group: 2 },
    { text: '採用情報', link: '/', group: 2 },
    { text: '社会とのかかわり', link: '/s', group: 2 },
    { text: '会社概要', link: '/', group: 2 },
    // group3
    { 
      text: 'English/Chinese Menu', 
      link: '/#', 
      group: 3,
      children: [
        { text: 'WestJapanArea Menu', link: 'https://www.hokkahokka-tei.jp/menu/emenu_w.html', group: 3 },
        { text: 'EastJapanArea Menu', link: 'https://www.hokkahokka-tei.jp/menu/emenu_e.html', group: 3 },
        { text: 'KyushuArea Menu', link: 'https://www.hokkahokka-tei.jp/menu/emenu_s.html', group: 3 },
      ]
    },
  ] : [
    // group2
    { text: '団体予約', link: '/', group: 2 },
    { text: 'よくあるご質問', link: '/', group: 2 },
    { text: 'お問い合わせ', link: '/', group: 2 },
    { text: 'フランチャイズオーナー募集', link: '/', group: 2 },
    { text: '採用情報', link: '/', group: 2 },
    { text: '社会とのかかわり', link: '/s', group: 2 },
    { text: '会社概要', link: '/', group: 2 },
    // group3
    { 
      text: 'English/Chinese Menu', 
      link: '/#', 
      group: 3,
      children: [
        { text: 'WestJapanArea Menu', link: 'https://www.hokkahokka-tei.jp/menu/emenu_w.html', group: 3 },
        { text: 'EastJapanArea Menu', link: 'https://www.hokkahokka-tei.jp/menu/emenu_e.html', group: 3 },
        { text: 'KyushuJapanArea Menu', link: 'https://www.hokkahokka-tei.jp/menu/emenu_s.html', group: 3 },
      ]
    },
  ];

  const responsiveTypography = {
    fontSize: isMobile ? '14px' : '18px',
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
              minHeight: '0px !important',
              padding: 0,
              '& .MuiAccordionSummary-content': {
                margin: 0,
              },
              
            }}
          >
            <ListItem 
              key={item.text}
              component="a" 
              href={item.link}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              sx={{
                minHeight: '0px !important',
                position: 'relative',
                p: 0,
                overflow: 'hidden',
                color: '#323232',

                '&:hover': {
                  color: 'rgb(238, 0, 38)',
                  backgroundColor: 'transparent',

                  // カーソルが乗ったら子コンポーネントの ListItemText を太線にする
                  '& .MuiListItemText-primary': {
                    fontWeight: 'bold',
                  },
                },
              }}
            >
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  sx: responsiveTypography
                }}
              />
              {
                expanded ? (
                  <HokateiMenuUpArrow isHovered={hoveredIndex === index} />
                ) : (
                  <HokateiMenuDownArrow isHovered={hoveredIndex === index} />
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
                  onMouseEnter={() => {
                    setHoveredIndex(childIndex);
                  }}
                  onMouseLeave={() => setHoveredIndex(null)}
                  sx={{
                    position: 'relative',
                    p: 0,
                    mb: isMobile ? '10px' : '16px',
                    ml: '10px',
                    pl: '10px',
                    overflow: 'hidden',
                    color: '#323232',

                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '0%',
                      transform: 'translateX(-50%)',
                      width: 0,
                      height: '3px',
                      backgroundColor: 'rgb(238, 0, 38)',
                      transition: 'width 0.65s ease',
                    },

                    '&:hover': {
                      color: 'rgb(238, 0, 38)',
                      backgroundColor: 'transparent',
                      textDecorationColor: 'rgb(238, 0, 38)',

                      // カーソルが乗ったら子コンポーネントの ListItemText を太線にする
                      '& .MuiListItemText-primary': {
                        fontWeight: 'bold',
                      },

                      '&::after': {
                        width: '200%',
                      },
                    },
                  }}
                >
                  <ListItemText
                    primary={child.text}
                    primaryTypographyProps={{
                      sx: responsiveTypography
                    }}
                  />
                  <HamburgerMenuRightArrow isHovered={hoveredIndex === childIndex}/>
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
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        sx={{
          position: 'relative',
          p: 0,
          overflow: 'hidden',
          color: '#323232',
          marginBottom: isMobile ? '10px' : '16px',

          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: '0%',
            transform: 'translateX(-50%)',
            width: 0,
            height: '3px',
            backgroundColor: 'rgb(238, 0, 38)',
            transition: 'width 0.65s ease',
          },

          '&:hover': {
            color: 'rgb(238, 0, 38)',
            backgroundColor: 'transparent',
            textDecorationColor: 'rgb(238, 0, 38)',

            // カーソルが乗ったら子コンポーネントの ListItemText を太線にする
            '& .MuiListItemText-primary': {
              fontWeight: 'bold',
            },

            '&::after': {
              width: '200%',
            },
          },
        }}
      >
        <ListItemText 
          primary={item.text}
          primaryTypographyProps={{
            sx: responsiveTypography
          }}
        />
        <HamburgerMenuRightArrow isHovered={hoveredIndex === index}/>
      </ListItem>
    );
  };

  return (
    <Box>
      <Box
        onClick={toggleDrawer(!isOpen)}
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
        ModalProps={{
          BackdropProps: {
            style: { backgroundColor: 'rgba(0, 0, 0, 0.6)' } // 透明度を調整
          },
          keepMounted: true,
          disableScrollLock: true
        }}
        PaperProps={{
          sx: {
            width: isMobile ? '100%': 500,
            maxWidth: '100%',
            marginTop: '60px', // ヘッダーの高さに応じて調整
            height: expanded ? 'calc(100% - 20px)' : 'calc(100% - 60px)', // ヘッダーの高さを引いた高さ
            backgroundColor: 'transparent',
            boxShadow: 'none',
          },
        }}
      >
        <Box
          sx={{
            height: isMobile ? expanded ? '95.5%' : '77.5' : expanded ? '95.5%' : '100%',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: {xs: '25px', md: '30px'},
              maxHeight: '100px',
              flexShrink: 0,
              backgroundColor: '#F7F0E8',
            }}
          >
            {
              isMobile ? (
                <Image
                  src='/images/hokatei-mask.webp'
                  alt='ほっかほっか亭のラベル'
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              ) : (
                <Image
                  src='/images/hamburger-mask.webp'
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
                event.stopPropagation();
              }
            }}
            onKeyDown={toggleDrawer(false)}
            sx={{
              flexGrow: 1,
              backgroundColor: '#F7F0E8',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: expanded ? 'flex-start' : 'center', // アコーディオンが開いているときは上寄せ
              transition: 'justify-content 0.3s ease',
            }}
          >
            <List
              sx={{
                width: '100%',
                margin: expanded ? isMobile ? '10px auto 0 auto' : '100px auto 0 auto' : '0 auto',
                padding: isMobile ? '50px 20px 50px 20px' : '0px 90px 0px 90px',
                transition: 'height 0.3s ease', // スムーズな高さ変更のためのトランジション
              }}
            >
              {menuItems.map((item, index) => (
                <Box key={item.text}>
                  {!expanded && index > 0 && menuItems[index - 1].group !== item.group && (
                    <Box sx={{ py: 2 }}/>
                  )}
                  {expanded && index > 0 && menuItems[index - 1].group !== item.group &&  (
                    <Box sx={{ py: item.group === 3 ? 0.25 : 2 }}/>
                  )}
                  {renderMenuItem(item, index)}
                </Box>
              ))}
            </List>
          </Box>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: {xs: '25px', md: '30px'},
              maxHeight: '100px',
              flexShrink: 0,
              backgroundColor: '#F7F0E8',
            }}
          >
            {
              isMobile ? (
                <Image
                  src='/images/hokatei-mask.webp'
                  alt='ほっかほっか亭のラベル'
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              ) : (
                <Image
                  src='/images/hamburger-mask.webp'
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
