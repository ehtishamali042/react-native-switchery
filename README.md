# react-native-switchery

An iOS-inspired, highly customizable switch component for React Native with smooth thumb glides, elastic pill fill, and first-class accessibility support.

- Repo: https://github.com/ehtishamali042/react-native-switchery
- Docs: https://ehtishamali042.github.io/react-native-switchery

## Demo

<img src="https://github.com/ehtishamali042/react-native-switchery/raw/main/docs/assets/switchery-demo.gif" alt="Switchery demo" width="220" />

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

### Basic usage

```tsx
import React from 'react';
import { Switch } from 'react-native-switchery';

export const NotificationToggle = () => {
  const [enabled, setEnabled] = React.useState(false);

  return (
    <Switch
      isExpanded={enabled}
      onValueChange={setEnabled}
      variant="success"
      size="large"
      trackBorderWidth={2}
      thumbBorderColor="rgba(0,0,0,0.2)"
      accessibilityLabel="Notifications"
      accessibilityHint="Enable or disable push notifications"
    />
  );
};
```

### Props

| Prop                 | Type                                                        | Default           | Description                                               |
| -------------------- | ----------------------------------------------------------- | ----------------- | --------------------------------------------------------- |
| `isExpanded`         | `boolean`                                                   | –                 | Controlled value of the switch.                           |
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

## Development

```sh
npm install
npm run pack:preview # inspect npm package contents without publishing
```

## Release checklist

1. `npm run pack:preview` – ensure the tarball only contains `index.tsx`, `lib/`, `README.md`, and `LICENSE`
2. `npm version <patch|minor|major>`
3. `npm publish --access public`
4. `git push --follow-tags`

## Documentation site

This repo includes a `docs/` folder ready for GitHub Pages. After pushing to GitHub:

1. Go to **Settings → Pages**.
2. Choose **Deploy from branch** and set **Branch: `main` / Folder: `/docs`**.
3. The README content will be visible at `https://ehtishamali042.github.io/react-native-switchery`.

## License

MIT © Ehtisham Ali
