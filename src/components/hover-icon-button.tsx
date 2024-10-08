import React from 'react';
import Link from 'next/link';
import { IconButton } from '@mui/material';
import styled from 'styled-components';

const StyledIconButton = styled(IconButton)`
  position: relative !important;
  height: 60px !important;
  border-radius: 0 !important;
  overflow: hidden !important;
  padding: 0 !important;
  margin: 0 20px 0 -1px !important;

  // デフォルトのホバー効果を完全に無効化
  &.MuiIconButton-root {
    &:hover, &:active {
      background-color: transparent;
    }
  }

  // フォーカス時の効果も無効化（必要に応じて）
  &.MuiIconButton-root.Mui-focusVisible {
    background-color: transparent;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0%;
    transform: translateX(-50%);
    width: 0;
    height: 3px;
    background-color: red;
    transition: width 0.4s ease;
  }

  &:hover::after {
    width: 200%;
  }
`;

interface HoverIconProps {
  children: React.ReactNode;
  href: string;
}

// 新しいコンポーネントを作成
export const HoverIconButton: React.FC<HoverIconProps> = ({ children, href }) => (
  <Link href={href}>
    <StyledIconButton>
      {children}
    </StyledIconButton>
  </Link>
);
