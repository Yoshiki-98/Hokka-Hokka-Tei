import {
  Box,
  styled,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Menu } from '@/types/menu';
import React from 'react';

// const SVGContainer = styled(Box)({
//   width: '380px',
//   height: '311px',
//   overflow: 'hidden'
// });

const SVGContainer = styled(Box)({
  maxWidth: '393px', // SVGの元の幅
});

const LgSVGContainer = styled(Box)({
  width: '170x',
  height: '163Zpx',
  overflow: 'hidden',
});

const MdSVGContainer = styled(Box)({
  width: '420px',
  height: '280px',
  overflow: 'hidden',
});

const SmSVGContainer = styled(Box)({
  width: '353px',
  height: '235.33px',
  overflow: 'hidden',
});

interface ThumbnailProp {
  item: any;
} 

const MenuListContainer: React.FC<ThumbnailProp> = ({ item }) => {
  const clipPathId = React.useId();

  const theme = useTheme();
  const isLgDown = useMediaQuery(theme.breakpoints.down('lg'));
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <SVGContainer>
      <svg width="100%" height="100%" viewBox="0 0 393 260" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id={clipPathId}>
          <path d="M376.856 238.354C376.196 242.981 372.419 246.533 367.76 246.909L205.546 259.996C204.934 260.046 204.318 260.038 203.707 259.975L45.3867 243.512C41.3392 243.091 37.9504 240.259 36.8168 236.351L13.7208 156.726C13.2481 155.096 13.1979 153.373 13.575 151.718L37.5278 46.6174C38.2568 43.4184 40.5088 40.7805 43.5539 39.5587L122.904 7.71924C124.089 7.24414 125.353 7 126.628 7L296.555 7C297.889 7 299.209 7.26688 300.438 7.78491L367.601 36.0899C370.538 37.3274 372.709 39.8903 373.446 42.9902L392.56 123.322C392.851 124.543 392.909 125.807 392.732 127.049L376.856 238.354Z" fill="#D84343"/>
          </clipPath>
        </defs>
        <image
          href={item.images[0] ? item.images[0] : '/images/no_image_thumbnail.webp' }
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          clipPath={`url(#${clipPathId})`}
        />
      </svg>
    </SVGContainer>
  );
};

export default MenuListContainer;
