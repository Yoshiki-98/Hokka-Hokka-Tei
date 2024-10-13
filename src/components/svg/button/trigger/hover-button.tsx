import React from 'react';
import { TriggerProps } from '@/types/element-prop';
import styled from 'styled-components';

interface HoverButtonProps extends TriggerProps {
  text: string;
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

const ButtonText = styled.span`
  position: absolute;
  z-index: 1000;
  color: white;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  pointer-events: none;
  /* 長いテキストの場合、省略記号を表示 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const HoverButton: React.FC<HoverButtonProps> = ({ onClick, disabled, className, text }) => {
  return (
    <ButtonContainer className={`button sd appear ${className}`} onClick={onClick} disabled={disabled}>
      <svg width="213" height="68" viewBox="0 0 213 68" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.6421 1.5H195.972C198.169 1.5 200.28 2.3504 201.864 3.87292L208.891 10.6304C210.558 12.2329 211.5 14.4453 211.5 16.7575V49.8579C211.5 52.1122 210.604 54.2742 209.01 55.8683L200.868 64.0104C199.274 65.6045 197.112 66.5 194.858 66.5H17.3607C14.9971 66.5 12.7403 65.5159 11.132 63.7838L3.77125 55.8569C2.31135 54.2847 1.5 52.2186 1.5 50.0731V16.6421C1.5 14.3878 2.39553 12.2258 3.98959 10.6317L10.6317 3.98959C12.2258 2.39553 14.3878 1.5 16.6421 1.5Z" fill="#DF9100" stroke="#DF9100" stroke-width="3"/>
      </svg>
      <TopButton className="top-button">
        <svg width="213" height="68" viewBox="0 0 213 68" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.6421 1.5H195.972C198.169 1.5 200.28 2.3504 201.864 3.87292L208.891 10.6304C210.558 12.2329 211.5 14.4453 211.5 16.7575V49.8579C211.5 52.1122 210.604 54.2742 209.01 55.8683L200.868 64.0104C199.274 65.6045 197.112 66.5 194.858 66.5H17.3607C14.9971 66.5 12.7403 65.5159 11.132 63.7838L3.77125 55.8569C2.31135 54.2847 1.5 52.2186 1.5 50.0731V16.6421C1.5 14.3878 2.39553 12.2258 3.98959 10.6317L10.6317 3.98959C12.2258 2.39553 14.3878 1.5 16.6421 1.5Z" fill="#EE0026" stroke="#FFA600" stroke-width="3"/>
        </svg>
        <ButtonText>{text}</ButtonText>
      </TopButton>
    </ButtonContainer>
  );
};

export default HoverButton;
