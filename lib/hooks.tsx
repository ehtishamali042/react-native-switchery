import { useCallback, useEffect, useMemo, useRef } from 'react';
import { Animated } from 'react-native';
import { UseSwitchAnimationParams, UseSwitchStylesParams } from './types';
import { resolveBorderStyle, resolveSwitchColors } from './utils';

export const useSwitchAnimation = ({
  value,
  pillWidth,
  thumbSize,
  thumbMargin,
}: UseSwitchAnimationParams) => {
  const scaleXAnim = useRef(new Animated.Value(value ? 0 : 1)).current;
  const scaleYAnim = useRef(new Animated.Value(value ? 0 : 1)).current;
  const thumbPosition = useRef(new Animated.Value(value ? 1 : 0)).current;
  const isFirstRender = useRef(true);

  const animateToggle = useCallback(
    (expand: boolean) => {
      const thumbToValue = expand ? 1 : 0;
      const scaleToValue = expand ? 0 : 1;

      Animated.parallel([
        Animated.timing(thumbPosition, {
          toValue: thumbToValue,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(scaleXAnim, {
          toValue: scaleToValue,
          duration: 350,
          delay: 50,
          useNativeDriver: true,
        }),
        Animated.timing(scaleYAnim, {
          toValue: scaleToValue,
          duration: 350,
          delay: 50,
          useNativeDriver: true,
        }),
      ]).start();
    },
    [scaleXAnim, scaleYAnim, thumbPosition],
  );

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    animateToggle(value);
  }, [animateToggle, value]);

  const thumbTranslateX = useMemo(
    () =>
      thumbPosition.interpolate({
        inputRange: [0, 1],
        outputRange: [0, pillWidth - thumbSize - thumbMargin],
      }),
    [pillWidth, thumbMargin, thumbPosition, thumbSize],
  );

  return {
    scaleXAnim,
    scaleYAnim,
    thumbTranslateX,
  } as const;
};

export const useSwitchStyles = ({
  variant,
  activeColor,
  inactiveColor,
  thumbColor,
  trackBorderColor,
  trackBorderWidth,
  thumbBorderColor,
  thumbBorderWidth,
  value,
  pillWidth,
  pillHeight,
  thumbSize,
}: UseSwitchStylesParams) => {
  const {
    activeColor: resolvedActiveColor,
    inactiveColor: resolvedInactiveColor,
    thumbColor: resolvedThumbColor,
  } = resolveSwitchColors({ variant, activeColor, inactiveColor, thumbColor });

  const trackBorder = useMemo(
    () =>
      resolveBorderStyle(
        trackBorderColor,
        trackBorderWidth,
        value ? 'rgba(0, 0, 0, 0.1)' : '#D1D1D6',
      ),
    [trackBorderColor, trackBorderWidth, value],
  );

  const thumbBorder = useMemo(
    () =>
      resolveBorderStyle(
        thumbBorderColor,
        thumbBorderWidth,
        'rgba(0, 0, 0, 0.1)',
      ),
    [thumbBorderColor, thumbBorderWidth],
  );

  const trackStyle = useMemo(
    () => ({
      width: pillWidth,
      height: pillHeight,
      borderRadius: pillHeight / 2,
      backgroundColor: resolvedInactiveColor,
      borderColor: trackBorder.borderColor,
      borderWidth: trackBorder.borderWidth,
    }),
    [pillHeight, pillWidth, resolvedInactiveColor, trackBorder],
  );

  const animatedPillStyle = useMemo(
    () => ({
      backgroundColor: resolvedActiveColor,
      width: pillWidth,
      height: pillHeight,
      borderRadius: pillHeight / 2,
    }),
    [pillHeight, pillWidth, resolvedActiveColor],
  );

  const thumbStyle = useMemo(
    () => ({
      width: thumbSize,
      height: thumbSize,
      borderRadius: thumbSize / 2,
      backgroundColor: resolvedThumbColor,
      borderWidth: thumbBorder.borderWidth,
      borderColor: thumbBorder.borderColor,
    }),
    [resolvedThumbColor, thumbBorder, thumbSize],
  );

  const disabledOverlayStyle = useMemo(
    () => ({
      width: pillWidth,
      height: pillHeight,
      borderRadius: pillHeight / 2,
    }),
    [pillHeight, pillWidth],
  );

  return {
    trackStyle,
    animatedPillStyle,
    thumbStyle,
    disabledOverlayStyle,
  };
};
