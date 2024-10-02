import React from 'react';
import { IconProps } from '@/types/element-prop';

const RightArrowIcon: React.FC<IconProps> = ({ onClick, disabled, className }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative inline-block ${className}`}
      style={{ width: '8px', height: '13px' }}
    >
      <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-0.000210319 0.768946L0.861157 -3.09616e-07L2.25118 1.4085L3.64859 2.84658L5.03491 4.29575L6.59498 5.57116L7.94434 7.03882L6.56541 8.4658L5.19757 9.93715L3.64489 11.22L2.39166 12.8022L0.842673 14L0.00348605 13.3087L1.70034 11.8078L3.30478 10.2625L4.87964 8.68762L6.29923 7.03882L4.88334 5.39002L3.19018 3.93346L1.60423 2.36969L-0.000210319 0.768946Z" fill="#323232"/>
      </svg>
    </button>
  );
};

export default RightArrowIcon;
