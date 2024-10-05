import React, { FC } from 'react';
import { IconButton } from '@mui/material';
import styled from 'styled-components';

const StyledIconButton = styled(IconButton)`
  position: relative;
  height: 60px;
  border-radius: 0;
  overflow: hidden;
  padding: 0;

  // デフォルトのホバー効果を完全に無効化
  &.MuiIconButton-root {
    &:hover {
      background-color: transparent;
    }
    &:active {
      background-color: transparent;
    }
  }

  // フォーカス時の効果も無効化（必要に応じて）
  &.MuiIconButton-root.Mui-focusVisible {
    background-color: transparent;
  }
`;

interface HoverIconProps {
  children: React.ReactNode;
}

// 新しいコンポーネントを作成
export const NoHoverIconButton: React.FC<HoverIconProps> = ({ children }) => (
  <StyledIconButton>
    {children}
  </StyledIconButton>
);
