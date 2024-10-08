import React from 'react';
import { TriggerProps } from '@/types/element-prop';
import styled from 'styled-components';

interface HoverButtonSmallProps extends TriggerProps {
  direction?: string;
}

const ButtonContainer = styled.button`
  position: relative;
  width: 216px;
  height: 71px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  &:hover .top-button {
    transform: translate(2.75px, 2.75px);
  }
`;

const TopButton = styled.div`
  position: absolute;
  top: -3px;
  left: -3px;
  transition: transform 0.3s ease;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArrowIcon = styled.svg`
  position: absolute;
  z-index: 1000;
  pointer-events: none;
`;

const HoverButtonSmall: React.FC<HoverButtonSmallProps> = ({ onClick, disabled, className, direction }) => {
  return (
    <ButtonContainer className={`button sd appear ${className}`} onClick={onClick} disabled={disabled}>
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.2722 4.52789C12.8908 2.90931 15.0861 2 17.3751 2H52.2333C54.4638 2 56.6077 2.86348 58.2155 4.40943L65.3513 11.2709C67.0436 12.898 68 15.1445 68 17.4922V51.1019C68 53.3909 67.0907 55.5861 65.4721 57.2047L57.2047 65.4721C55.5861 67.0907 53.3909 68 51.1019 68H18.1047C15.7047 68 13.4132 67.0008 11.7801 65.242L4.30619 57.1932C2.82383 55.5968 2 53.4989 2 51.3204V17.3751C2 15.0861 2.90931 12.8908 4.52789 11.2722L11.2722 4.52789Z" fill="#DF9100" stroke="#DF9100" stroke-width="3"/>
      </svg>
      <TopButton className="top-button">
        <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.6421 1.5H50.9722C53.1689 1.5 55.2803 2.3504 56.8637 3.87292L63.8914 10.6304C65.5581 12.2329 66.5 14.4453 66.5 16.7575V49.8579C66.5 52.1122 65.6045 54.2742 64.0104 55.8683L55.8683 64.0104C54.2742 65.6045 52.1122 66.5 49.8579 66.5H17.3607C14.9971 66.5 12.7403 65.5159 11.132 63.7838L3.77125 55.8569C2.31135 54.2847 1.5 52.2186 1.5 50.0731V16.6421C1.5 14.3878 2.39553 12.2258 3.98959 10.6317L10.6317 3.98959C12.2258 2.39553 14.3878 1.5 16.6421 1.5Z" fill="#EE0026" stroke="#FFA600" stroke-width="3"/>
        </svg>
        {
          direction === 'left' ? (
            <ArrowIcon width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2512_13134)">
                <path d="M11.3494 18.9015L10.1188 20L8.13309 17.9879L6.13678 15.9335L4.15632 13.8632L1.92765 12.0412L1.1991e-07 9.94455L1.9699 7.90599L3.92395 5.80407L6.14207 3.97148L7.9324 1.71111L10.1452 1.20981e-07L11.3441 0.987589L8.91999 3.13177L6.62794 5.33932L4.37814 7.58912L2.35015 9.94455L4.37285 12.3L6.79166 14.3808L9.0573 16.6147L11.3494 18.9015Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_2512_13134">
                  <rect width="20" height="11.3494" fill="white" transform="translate(0 20) rotate(-90)"/>
                </clipPath>
                </defs>
            </ArrowIcon>
          ) : (
            <ArrowIcon width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_2595_17198)">
                <path d="M1.10417 0.688477L10.625 10.002L1.10417 19.3155" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_2595_17198">
                  <rect width="20" height="11.3494" fill="white" transform="translate(11.3496 0.00195312) rotate(90)"/>
                </clipPath>
              </defs>
            </ArrowIcon>
          )
        }
      </TopButton>
    </ButtonContainer>
  );
};

export default HoverButtonSmall;
