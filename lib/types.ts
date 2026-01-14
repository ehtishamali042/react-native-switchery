export type SwitchVariant =
  | 'primary'
  | 'danger'
  | 'warning'
  | 'success'
  | 'info';

export type SwitchProps = {
  isExpanded: boolean;
  activeColor?: string;
  inactiveColor?: string;
  thumbColor?: string;
  onValueChange?: (nextValue: boolean) => void;
  disabled?: boolean;
  size?: 'mini' | 'small' | 'default' | 'large';
  testID?: string;
  variant?: SwitchVariant;
  trackBorderColor?: string;
  trackBorderWidth?: number;
  thumbBorderColor?: string;
  thumbBorderWidth?: number;
  accessibilityLabel?: string;
  accessibilityHint?: string;
};

export type SwitchMetrics = {
  pillWidth: number;
  pillHeight: number;
  thumbSize: number;
  thumbMargin: number;
};

export type UseSwitchAnimationParams = {
  isExpanded: boolean;
  pillWidth: number;
  thumbSize: number;
  thumbMargin: number;
};

export type UseSwitchStylesParams = {
  variant?: SwitchVariant;
  activeColor?: string;
  inactiveColor?: string;
  thumbColor?: string;
  trackBorderColor?: string;
  trackBorderWidth?: number;
  thumbBorderColor?: string;
  thumbBorderWidth?: number;
  isExpanded: boolean;
  pillWidth: number;
  pillHeight: number;
  thumbSize: number;
};
