import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import HokateiBanner from '../svg/icon/hokatei-banner';
import SmallHokateiBanner from '../svg/icon/small-hokatei-banner';
import LeftArrowButton from '../svg/button/trigger/left-arrow';
import RightArrowButton from '../svg/button/trigger/right-arrow';

interface ResponsiveBannerWrapperProps {
  isLgUp?: boolean;
  isSmUp?: boolean;
}

const ResponsiveBannerWrapper: React.FC<ResponsiveBannerWrapperProps> = ({ isLgUp, isSmUp }) => {
  const bannerWidth = 998; // バナーの幅（ピクセル）
  const arrowWidth = 216; // 矢印ボタンの幅（ピクセル）
  const minArrowWidth = 100; // 矢印ボタンの最小幅（ピクセル）

  const isMobile = useMediaQuery('(max-width:392px)');

  return isLgUp ? 
  (
    <Box
      className="banner-wrapper"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: { xs: '0 auto 10px auto', md: '0 auto 20px auto' },

        maxWidth: {xs: 'unset', lg: '1430px'},
        width: {xs: 'unset', lg: '100%'},
        overflow: {xs: 'unset', lg: 'hidden'},
        '& > .arrow-container': {
          flex: `0 0 ${arrowWidth}px`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '400px',
          transition: 'flex-basis 0.3s ease',
          [`@media (max-width: ${bannerWidth + 2 * arrowWidth}px)`]: {
            flexBasis: (theme) => `calc((100% - ${bannerWidth}px) / 2)`,
            minWidth: `${minArrowWidth}px`,
          },
        },
        '& > .banner-container': {
          flex: `0 0 ${bannerWidth}px`,
        },
      }}
    >
      {isLgUp && (
        <Box className="arrow-container">
          <LeftArrowButton className="flex justify-center" />
        </Box>
      )}
      <Box className="banner-container">
        {isMobile ? <SmallHokateiBanner/> : <HokateiBanner/>}
      </Box>
      {isLgUp && (
        <Box className="arrow-container">
          <RightArrowButton className="flex justify-center"/>
        </Box>
      )}
    </Box>
  ) : (
    <Box
      className="banner-wrapper"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: { xs: '0 auto 10px auto', md: '0 auto 20px auto' },
      }}
    >
      {isLgUp && (
        <Box className="arrow-container">
          <LeftArrowButton className="flex justify-center" />
        </Box>
      )}
      <Box className="banner-container">
        {isMobile ? <SmallHokateiBanner/> : <HokateiBanner/>}
      </Box>
      {isLgUp && (
        <Box className="arrow-container">
          <RightArrowButton className="flex justify-center"/>
        </Box>
      )}
    </Box>
  )
};

export default ResponsiveBannerWrapper;
