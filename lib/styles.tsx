import { StyleSheet } from 'react-native';

export const switchStyles = StyleSheet.create({
  wrapper: {
    alignSelf: 'center',
    position: 'relative',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  staticContainer: {
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  animatedPill: {
    position: 'absolute',
    alignSelf: 'center',
  },
  thumb: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  disabledOverlay: {
    position: 'absolute',
    backgroundColor: '#FFFFFF90',
  },
});
