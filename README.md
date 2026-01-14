# react-native-switchery

[![npm version](https://img.shields.io/npm/v/react-native-switchery.svg?color=0b7&label=npm)](https://www.npmjs.com/package/react-native-switchery)

An iOS-inspired, highly customizable switch component for React Native with smooth thumb glides, elastic pill fill, and first-class accessibility support.

## Demo

<img src="https://github.com/ehtishamali042/react-native-switchery/raw/main/docs/assets/switchery-demo.gif" alt="Switchery demo" width="520" />

## Features

- 🎨 **Variants & palettes** – Built-in `primary`, `info`, `success`, `warning`, `danger` presets or override the colors directly.
- ✨ **iOS-style animation** – Thumb glides first; pill fill collapses with a delayed scale for a native feel.
- 🛠️ **Fine-grained styling** – Control track/thumb borders, sizes, and shadows.
- 🧠 **Accessibility ready** – Switch role, disabled/checked state, custom labels and hints.

## Quick Start

### Installation

```sh
npm install react-native-switchery
# or
yarn add react-native-switchery
```

## Usage

```tsx
import React from 'react';
import { Switch } from 'react-native-switchery';

export const Demo = () => {
  const [value, setValue] = React.useState(false);

  return (
    <Switch
      value={value}
      onValueChange={setValue}
      variant="info"
      size="small"
    />
  );
};
```

### Props

| Prop                 | Type                                                        | Default           | Description                                               |
| -------------------- | ----------------------------------------------------------- | ----------------- | --------------------------------------------------------- |
| `value`              | `boolean`                                                   | –                 | Controlled value of the switch.                           |
| `onValueChange`      | `(value: boolean) => void`                                  | `() => {}`        | Callback fired after a press toggles the value.           |
| `variant`            | `'primary' \| 'info' \| 'success' \| 'warning' \| 'danger'` | `primary`         | Built-in palette presets (overridden by explicit colors). |
| `activeColor`        | `string`                                                    | variant color     | Fill color when expanded.                                 |
| `inactiveColor`      | `string`                                                    | variant color     | Track color when collapsed.                               |
| `thumbColor`         | `string`                                                    | variant color     | Thumb fill color.                                         |
| `size`               | `'mini' \| 'small' \| 'default' \| 'large'`                 | `default`         | Track/thumb preset dimensions.                            |
| `trackBorderColor`   | `string`                                                    | contextual        | Outline color for the pill.                               |
| `trackBorderWidth`   | `number`                                                    | `1`               | Outline width for the pill.                               |
| `thumbBorderColor`   | `string`                                                    | `rgba(0,0,0,0.1)` | Thumb outline color.                                      |
| `thumbBorderWidth`   | `number`                                                    | `1`               | Thumb outline width.                                      |
| `disabled`           | `boolean`                                                   | `false`           | Disables presses and shows a frosted overlay.             |
| `testID`             | `string`                                                    | `switch`          | Identifier for testing (overlay uses `testID-disabled`).  |
| `accessibilityLabel` | `string`                                                    | –                 | VoiceOver/TalkBack label.                                 |
| `accessibilityHint`  | `string`                                                    | –                 | VoiceOver/TalkBack hint.                                  |

## License

MIT © Ehtisham Ali
