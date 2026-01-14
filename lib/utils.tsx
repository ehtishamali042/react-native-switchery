import { SwitchMetrics, SwitchVariant } from './types';

type VariantColorConfig = {
  activeColor: string;
  inactiveColor: string;
  thumbColor: string;
};

const VARIANT_COLOR_MAP: Record<SwitchVariant, VariantColorConfig> = {
  primary: {
    activeColor: '#FFFFFF',
    inactiveColor: '#2196F3',
    thumbColor: '#FFFFFF',
  },
  danger: {
    activeColor: '#FFFFFF',
    inactiveColor: '#E53935',
    thumbColor: '#FFFFFF',
  },
  warning: {
    activeColor: '#FFFFFF',
    inactiveColor: '#FB8C00',
    thumbColor: '#FFFFFF',
  },
  success: {
    activeColor: '#FFFFFF',
    inactiveColor: '#43A047',
    thumbColor: '#FFFFFF',
  },
  info: {
    activeColor: '#FFFFFF',
    inactiveColor: '#1E88E5',
    thumbColor: '#FFFFFF',
  },
};

type ResolveColorParams = {
  variant?: SwitchVariant;
  activeColor?: string;
  inactiveColor?: string;
  thumbColor?: string;
};

export const resolveSwitchColors = ({
  variant,
  activeColor,
  inactiveColor,
  thumbColor,
}: ResolveColorParams) => {
  const variantColors = VARIANT_COLOR_MAP[variant ?? 'primary'];

  return {
    activeColor: activeColor ?? variantColors.activeColor,
    inactiveColor: inactiveColor ?? variantColors.inactiveColor,
    thumbColor: thumbColor ?? variantColors.thumbColor,
  };
};

export const resolveBorderStyle = (
  colorOverride: string | undefined,
  widthOverride: number | undefined,
  fallbackColor: string,
  fallbackWidth = 1,
) => ({
  borderColor: colorOverride ?? fallbackColor,
  borderWidth: widthOverride ?? fallbackWidth,
});

export const getSwitchMetrics = (
  size: 'mini' | 'small' | 'default' | 'large' = 'default',
): SwitchMetrics => {
  const presets: Record<'mini' | 'small' | 'default' | 'large', SwitchMetrics> =
    {
      mini: { pillWidth: 38, pillHeight: 20, thumbSize: 16, thumbMargin: 2 },
      small: { pillWidth: 48, pillHeight: 26, thumbSize: 22, thumbMargin: 2 },
      default: { pillWidth: 56, pillHeight: 30, thumbSize: 26, thumbMargin: 2 },
      large: { pillWidth: 68, pillHeight: 36, thumbSize: 32, thumbMargin: 2 },
    };

  return presets[size] ?? presets.default;
};
