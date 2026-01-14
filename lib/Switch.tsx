import React from 'react';
import { View, Animated, Pressable } from 'react-native';
import { SwitchProps } from './types';
import { switchStyles } from './styles';
import { getSwitchMetrics } from './utils';
import { useSwitchAnimation, useSwitchStyles } from './hooks';

export const Switch: React.FC<SwitchProps> = ({
  isExpanded,
  activeColor,
  inactiveColor,
  thumbColor,
  onValueChange = () => {},
  disabled = false,
  size = 'default',
  testID = 'switch',
  variant,
  trackBorderColor,
  trackBorderWidth,
  thumbBorderColor,
  thumbBorderWidth,
  accessibilityLabel,
  accessibilityHint,
}) => {
  const { pillWidth, pillHeight, thumbSize, thumbMargin } =
    getSwitchMetrics(size);

  const { scaleXAnim, scaleYAnim, thumbTranslateX } = useSwitchAnimation({
    isExpanded,
    pillWidth,
    thumbSize,
    thumbMargin,
  });

  const { trackStyle, animatedPillStyle, thumbStyle, disabledOverlayStyle } =
    useSwitchStyles({
      variant,
      activeColor,
      inactiveColor,
      thumbColor,
      trackBorderColor,
      trackBorderWidth,
      thumbBorderColor,
      thumbBorderWidth,
      isExpanded,
      pillWidth,
      pillHeight,
      thumbSize,
    });

  return (
    <View style={switchStyles.wrapper}>
      <Pressable
        style={switchStyles.container}
        onPress={() => !disabled && onValueChange(!isExpanded)}
        disabled={disabled}
        testID={testID}
        accessibilityRole="switch"
        accessibilityState={{ disabled, checked: isExpanded }}
        accessibilityLabel={accessibilityLabel}
        accessibilityHint={accessibilityHint}
      >
        <View style={[switchStyles.staticContainer, trackStyle]}>
          {/* Layer 2: Middle animated pill */}
          <Animated.View
            style={[
              switchStyles.animatedPill,
              animatedPillStyle,
              { transform: [{ scaleX: scaleXAnim }, { scaleY: scaleYAnim }] },
            ]}
          />

          {/* Layer 3: Top thumb */}
          <Animated.View
            style={[
              switchStyles.thumb,
              thumbStyle,
              { transform: [{ translateX: thumbTranslateX }] },
            ]}
          />
        </View>
      </Pressable>
      {disabled && (
        <View
          pointerEvents="none"
          style={[switchStyles.disabledOverlay, disabledOverlayStyle]}
          testID={`${testID}-disabled`}
        />
      )}
    </View>
  );
};
