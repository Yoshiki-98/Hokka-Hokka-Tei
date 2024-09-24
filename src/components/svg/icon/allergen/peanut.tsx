import React from 'react';
import { IconProps } from '@/types/element-prop';
import {
  useMediaQuery,
  useTheme
} from '@mui/material';

const PeanutIcon: React.FC<IconProps> = ({ onClick, disabled, className }) => {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));

  const width = isLgUp ? '35' : isMdUp ? '32' : isSmUp ? '30' : '27.24';
  const height = isLgUp ? '42' : isMdUp ? 'auto' : isSmUp ? 'auto' : '32.85';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative inline-block ${className}`}
      style={{ width: 'auto', height: '37.5px' }}
    >
      <svg width={width} height={height} viewBox="0 0 35 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_2678_13999)">
          <path d="M25.77 24.2597C27.29 19.1297 29.85 19.0797 32.28 15.7897C35.08 11.9997 34.97 4.92967 28.95 1.79967C23.41 -2.13033 17.08 0.99967 14.98 5.21967C13.16 8.87967 14.28 11.1897 10.41 14.8797C7.12 18.0097 2.73 19.2697 0.560004 25.2297C-1.07 29.6997 0.830004 35.9197 6.13 39.1497C11.43 42.3897 17.82 41.2297 21.06 37.7497C25.37 33.0997 24.49 28.6197 25.77 24.2597ZM21.28 6.87967C21.6 6.36967 22.27 6.21967 22.8 6.53967C23.31 6.85967 23.47 7.53967 23.14 8.05967L23.12 8.09967C22.84 8.55967 22.59 9.08967 22.3 9.81967C22.08 10.3897 21.44 10.6697 20.87 10.4497C20.81 10.4297 20.75 10.3997 20.69 10.3597C20.24 10.0897 20.04 9.52967 20.24 9.01967C20.46 8.43967 20.78 7.67967 21.23 6.93967L21.27 6.87967H21.28ZM18.17 16.3597C18.17 16.3597 18.11 16.3297 18.08 16.3097C17.6 16.0097 17.41 15.3997 17.67 14.8797L17.99 14.2297C18.21 13.7897 18.42 13.3497 18.64 12.9197C18.91 12.3697 19.58 12.1597 20.12 12.4297C20.67 12.7097 20.88 13.3697 20.61 13.9097C20.4 14.3297 20.19 14.7597 19.97 15.1897L19.65 15.8497C19.38 16.3997 18.72 16.6197 18.17 16.3497V16.3597ZM17.4 19.7797C16.81 20.5797 16.22 21.1697 15.6 21.5697C15.23 21.8097 14.78 21.7997 14.42 21.5897C14.29 21.5097 14.17 21.3897 14.07 21.2497C13.74 20.7397 13.88 20.0597 14.39 19.7297C14.78 19.4697 15.2 19.0497 15.62 18.4797C15.98 17.9897 16.67 17.8897 17.16 18.2497C17.65 18.6097 17.75 19.2997 17.39 19.7897L17.4 19.7797ZM16.43 14.5297C16.11 15.0297 15.74 15.5397 15.32 16.0297C14.97 16.4497 14.36 16.5397 13.91 16.2597C13.86 16.2297 13.82 16.1997 13.77 16.1597C13.31 15.7697 13.25 15.0697 13.64 14.6097C13.99 14.1997 14.3 13.7797 14.57 13.3597C14.89 12.8497 15.56 12.6897 16.08 12.9997C16.08 12.9997 16.09 12.9997 16.1 13.0097C16.61 13.3297 16.76 14.0197 16.44 14.5297H16.43ZM17.86 11.0297C17.72 11.6197 17.13 11.9997 16.54 11.8597C16.42 11.8297 16.31 11.7897 16.21 11.7297C15.82 11.4897 15.6 11.0197 15.71 10.5397C15.84 9.97967 16.02 9.38967 16.25 8.76967C16.46 8.19967 17.09 7.89967 17.66 8.10967C18.23 8.31967 18.52 8.94967 18.31 9.52967C18.11 10.0597 17.96 10.5697 17.85 11.0397L17.86 11.0297ZM18.52 4.46967C18.89 3.98967 19.59 3.90967 20.06 4.27967C20.54 4.64967 20.63 5.34967 20.25 5.82967C20.07 6.05967 19.89 6.32967 19.7 6.63967C19.38 7.15967 18.7 7.31967 18.19 6.99967C17.67 6.67967 17.51 5.99967 17.83 5.47967C18.06 5.09967 18.29 4.75967 18.52 4.46967ZM5.96 21.3097C6.35 20.8897 6.78 20.4597 7.24 20.0397C7.69 19.6297 8.39 19.6597 8.79 20.1097C9.2 20.5597 9.17 21.2497 8.72 21.6697C8.31 22.0397 7.92 22.4297 7.58 22.8097C7.22 23.1997 6.64 23.2697 6.2 23.0097C6.14 22.9697 6.08 22.9297 6.03 22.8797C5.58 22.4697 5.55 21.7697 5.97 21.3197L5.96 21.3097ZM2.98 25.9297C3.21 25.3597 3.48 24.7997 3.79 24.2597C4.09 23.7297 4.76 23.5397 5.29 23.8497C5.84 24.1497 6 24.8197 5.7 25.3497C5.44 25.8097 5.21 26.2797 5.02 26.7497C4.8 27.3097 4.15 27.5897 3.59 27.3597C3.53 27.3397 3.47 27.3097 3.42 27.2797C2.97 26.9997 2.77 26.4397 2.97 25.9297H2.98ZM3.18 31.8597C2.97 31.8597 2.77 31.7997 2.6 31.6997C2.28 31.5097 2.08 31.1597 2.07 30.7597C2.07 30.3597 2.08 29.9597 2.12 29.5597C2.17 28.9497 2.7 28.4997 3.31 28.5597C3.92 28.6097 4.36 29.1397 4.31 29.7497C4.28 30.0797 4.27 30.4197 4.27 30.7497C4.27 31.3597 3.78 31.8497 3.17 31.8597H3.18ZM11.3 19.5897C10.93 19.8597 10.44 19.8697 10.07 19.6397C9.95 19.5697 9.85 19.4697 9.76 19.3497C9.4 18.8597 9.5 18.1697 9.99 17.8097L10.54 17.4097C10.78 17.2297 11.05 17.0297 11.32 16.8097C11.8 16.4297 12.49 16.5097 12.87 16.9797C13.25 17.4597 13.17 18.1497 12.7 18.5297C12.4 18.7697 12.11 18.9797 11.84 19.1797L11.3 19.5797V19.5897ZM9.05 23.8597C9.55 23.2697 10.09 22.7097 10.67 22.1997C11.13 21.7997 11.82 21.8397 12.22 22.2897C12.62 22.7397 12.58 23.4397 12.13 23.8397C11.63 24.2797 11.16 24.7597 10.73 25.2697C10.38 25.6897 9.77 25.7797 9.32 25.4997C9.27 25.4697 9.23 25.4397 9.18 25.3997C8.71 25.0097 8.65 24.3097 9.05 23.8497V23.8597ZM6.73 31.3697C6.62 31.3397 6.51 31.2997 6.41 31.2397C6.01 30.9997 5.8 30.5197 5.92 30.0397C6.1 29.2797 6.34 28.5397 6.64 27.8197C6.87 27.2597 7.51 26.9897 8.08 27.2197C8.64 27.4497 8.91 28.0897 8.68 28.6597C8.43 29.2697 8.22 29.9097 8.07 30.5597C7.93 31.1497 7.33 31.5097 6.74 31.3697H6.73ZM6.77 36.7997C6.52 36.8297 6.28 36.7697 6.08 36.6497C5.8 36.4797 5.59 36.1797 5.56 35.8197C5.52 35.4297 5.49 35.0397 5.48 34.6597C5.45 34.0497 5.93 33.5397 6.53 33.5097C7.14 33.4797 7.65 33.9597 7.68 34.5597C7.7 34.8997 7.72 35.2397 7.76 35.5897C7.82 36.1897 7.38 36.7297 6.78 36.7997H6.77ZM26.84 5.33967C26.51 5.44967 26.2 5.56967 25.91 5.69967C25.57 5.85967 25.18 5.81967 24.88 5.63967C24.7 5.52967 24.55 5.35967 24.45 5.15967C24.2 4.60967 24.45 3.94967 25 3.69967C25.35 3.53967 25.73 3.38967 26.12 3.25967C26.7 3.05967 27.32 3.36967 27.52 3.94967C27.72 4.52967 27.41 5.14967 26.83 5.34967L26.84 5.33967ZM21.58 25.1597C22.18 25.2397 22.61 25.7897 22.53 26.3897C22.48 26.7797 22.41 27.1697 22.33 27.5597C22.21 28.1497 21.63 28.5397 21.03 28.4197C20.9 28.3897 20.78 28.3497 20.68 28.2797C20.3 28.0497 20.08 27.5897 20.18 27.1197C20.25 26.7897 20.31 26.4497 20.35 26.1097C20.43 25.5097 20.98 25.0797 21.58 25.1597ZM14.95 38.5097C14.61 38.7197 14.25 38.9197 13.9 39.0997C13.55 39.2797 13.15 39.2497 12.83 39.0597C12.66 38.9497 12.52 38.7997 12.42 38.6097C12.15 38.0697 12.37 37.4097 12.91 37.1297C13.2 36.9797 13.49 36.8197 13.78 36.6397C14.3 36.3197 14.98 36.4797 15.3 36.9897C15.62 37.5097 15.46 38.1897 14.95 38.5097ZM18.75 35.1097C18.39 35.5497 18.01 35.9797 17.62 36.3697C17.25 36.7397 16.69 36.7897 16.27 36.5297C16.2 36.4897 16.13 36.4297 16.07 36.3697C15.64 35.9397 15.64 35.2497 16.07 34.8097C16.41 34.4697 16.74 34.0997 17.05 33.7197C17.43 33.2497 18.13 33.1797 18.6 33.5597C19.07 33.9397 19.14 34.6397 18.76 35.1097H18.75ZM19.12 32.7597C19.12 32.7597 19.08 32.7397 19.06 32.7297C18.57 32.4297 18.39 31.7897 18.66 31.2697C18.89 30.8297 19.11 30.3897 19.3 29.9297C19.54 29.3697 20.18 29.1097 20.74 29.3397C21.3 29.5797 21.56 30.2197 21.33 30.7797C21.11 31.2897 20.87 31.8097 20.61 32.2997C20.32 32.8397 19.66 33.0397 19.12 32.7497V32.7597Z" fill="#323232"/>
        </g>
        <defs>
        <clipPath id="clip0_2678_13999">
          <rect width="34.05" height="41.06" fill="white"/>
        </clipPath>
        </defs>
      </svg>
    </button>
  );
};

export default PeanutIcon;
