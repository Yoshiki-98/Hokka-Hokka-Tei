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
      <img
        aria-hidden="true"
        className="sd"
        alt="ボタン1"
        src="https://storage.googleapis.com/studio-design-asset-files/projects/p6ao350gaR/s-852x272_v-fs_webp_c2354c44-c64c-4367-93f5-e7034e8c9018_small.webp"
        style={{ width: '100%', height: '100%' }}
      />
      <TopButton className="top-button">
        <img
          aria-hidden="true"
          className="sd"
          alt="ボタン2"
          src="https://storage.googleapis.com/studio-design-asset-files/projects/p6ao350gaR/s-852x272_v-fs_webp_4a2a2323-8fbf-4d6b-9527-5e24f33b5d9b_small.webp"
          style={{ width: '99.5%', height: '99.5%' }}
        />
        <ButtonText>{text}</ButtonText>
      </TopButton>
    </ButtonContainer>
  );
};

export default HoverButton;
