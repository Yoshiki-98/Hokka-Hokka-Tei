export interface IconProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export interface IndicatorProps {
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  disabled?: boolean;
  className?: string;
}

export interface SVGMaskStyle extends React.CSSProperties {
  maskType?: 'alpha' | 'luminance';
}

export interface TriggerProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export interface LogoProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export interface ContainerProps {
  item: any;
}
