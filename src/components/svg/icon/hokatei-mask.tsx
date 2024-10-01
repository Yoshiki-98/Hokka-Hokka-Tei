import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { LogoProps } from '@/types/element-prop';

const HokateiMask: React.FC<LogoProps> = ({ onClick, disabled, className }) => {
  const isMobile = useMediaQuery('(max-width:393px)');

  const bannerStyle: React.CSSProperties = {
    width: isMobile ? '100%' : '393px',
    height: 'auto',
    maxWidth: '100%',
    aspectRatio: '393 / 156',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative inline-block ${className || ''}`}
      style={bannerStyle as React.CSSProperties}
    >
      <svg width="500" height="60" viewBox="0 0 500 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
        <mask id="mask0_664_2719" style={"mask-type:alpha" as React.CSSProperties} maskUnits="userSpaceOnUse" x="0" y="0" width="500" height="60">
          <rect width="500" height="60" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_664_2719)">
          <rect x="-508" y="504.406" width="812.332" height="27.9305" transform="rotate(-45 -508 504.406)" fill="#FFA600"/>
          <rect x="-486.839" y="525.566" width="812.332" height="5.98511" transform="rotate(-45 -486.839 525.566)" fill="#B7D200"/>
          <rect x="-481.196" y="531.209" width="812.332" height="17.9553" transform="rotate(-45 -481.196 531.209)" fill="#EE0026"/>
          <rect x="-398" y="504.406" width="812.332" height="27.9305" transform="rotate(-45 -398 504.406)" fill="#FFA600"/>
          <rect x="-376.839" y="525.566" width="812.332" height="5.98511" transform="rotate(-45 -376.839 525.566)" fill="#B7D200"/>
          <rect x="-371.196" y="531.209" width="812.332" height="17.9553" transform="rotate(-45 -371.196 531.209)" fill="#EE0026"/>
          <rect x="-288" y="504.406" width="812.332" height="27.9305" transform="rotate(-45 -288 504.406)" fill="#FFA600"/>
          <rect x="-266.839" y="525.566" width="812.332" height="5.98511" transform="rotate(-45 -266.839 525.566)" fill="#B7D200"/>
          <rect x="-261.196" y="531.209" width="812.332" height="17.9553" transform="rotate(-45 -261.196 531.209)" fill="#EE0026"/>
          <rect x="-178" y="504.406" width="812.332" height="27.9305" transform="rotate(-45 -178 504.406)" fill="#FFA600"/>
          <rect x="-156.839" y="525.566" width="812.332" height="5.98511" transform="rotate(-45 -156.839 525.566)" fill="#B7D200"/>
          <rect x="-151.196" y="531.209" width="812.332" height="17.9553" transform="rotate(-45 -151.196 531.209)" fill="#EE0026"/>
          <rect x="-68" y="504.406" width="812.332" height="27.9305" transform="rotate(-45 -68 504.406)" fill="#FFA600"/>
          <rect x="-46.8389" y="525.566" width="812.332" height="5.98511" transform="rotate(-45 -46.8389 525.566)" fill="#B7D200"/>
          <rect x="-41.1963" y="531.209" width="812.332" height="17.9553" transform="rotate(-45 -41.1963 531.209)" fill="#EE0026"/>
          <rect x="42" y="504.406" width="812.332" height="27.9305" transform="rotate(-45 42 504.406)" fill="#FFA600"/>
          <rect x="63.1611" y="525.566" width="812.332" height="5.98511" transform="rotate(-45 63.1611 525.566)" fill="#B7D200"/>
          <rect x="68.8037" y="531.209" width="812.332" height="17.9553" transform="rotate(-45 68.8037 531.209)" fill="#EE0026"/>
          <rect x="152" y="504.406" width="812.332" height="27.9305" transform="rotate(-45 152 504.406)" fill="#FFA600"/>
          <rect x="173.161" y="525.566" width="812.332" height="5.98511" transform="rotate(-45 173.161 525.566)" fill="#B7D200"/>
          <rect x="178.804" y="531.209" width="812.332" height="17.9553" transform="rotate(-45 178.804 531.209)" fill="#EE0026"/>
          <rect x="262" y="504.406" width="812.332" height="27.9305" transform="rotate(-45 262 504.406)" fill="#FFA600"/>
          <rect x="283.161" y="525.566" width="812.332" height="5.98511" transform="rotate(-45 283.161 525.566)" fill="#B7D200"/>
          <rect x="288.804" y="531.209" width="812.332" height="17.9553" transform="rotate(-45 288.804 531.209)" fill="#EE0026"/>
          <rect x="372" y="504.406" width="812.332" height="27.9305" transform="rotate(-45 372 504.406)" fill="#FFA600"/>
          <rect x="393.161" y="525.566" width="812.332" height="5.98511" transform="rotate(-45 393.161 525.566)" fill="#B7D200"/>
          <rect x="398.804" y="531.209" width="812.332" height="17.9553" transform="rotate(-45 398.804 531.209)" fill="#EE0026"/>
          <rect x="482" y="504.406" width="812.332" height="27.9305" transform="rotate(-45 482 504.406)" fill="#FFA600"/>
        </g>
      </svg>
    </button>
  );
};

export default HokateiMask;
