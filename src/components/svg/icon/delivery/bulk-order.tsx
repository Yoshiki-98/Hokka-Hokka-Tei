import React from 'react';
import { IconProps } from '@/types/element-prop';

const BulkOrderIcon: React.FC<IconProps> = ({ onClick, disabled, className }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative inline-block ${className}`}
      style={{ width: '20px', height: '20px' }}
    />
  );
};

export default BulkOrderIcon;
