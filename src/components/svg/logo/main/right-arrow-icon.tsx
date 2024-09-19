import React from 'react';
import { IconProps } from '@/types/element-prop';

const RightArrowIcon: React.FC<IconProps> = ({ onClick, disabled, className }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative inline-block ${className}`}
      style={{ width: '14px', height: '9px' }}
    >
      <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.405063 0.768946L1.26643 -3.09616e-07L2.65645 1.4085L4.05386 2.84658L5.44018 4.29575L7.00026 5.57116L8.34961 7.03882L6.97068 8.4658L5.60284 9.93715L4.05016 11.22L2.79693 12.8022L1.24795 14L0.408759 13.3087L2.10562 11.8078L3.71005 10.2625L5.28491 8.68762L6.70451 7.03882L5.28861 5.39002L3.59545 3.93346L2.0095 2.36969L0.405063 0.768946Z" fill="#323232"/>
      </svg>
    </button>
  );
};

export default RightArrowIcon;
