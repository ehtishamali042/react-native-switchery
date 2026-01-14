# react-native-switchery

An iOS-inspired, highly customizable switch component for React Native with smooth thumb glides, elastic pill fill, and first-class accessibility support.

https://github.com/ehtishamali042/react-native-switchery

> Tip: Add a demo GIF at `docs/assets/switch-demo.gif` and GitHub will show it here once committed.

## Features

- 🎨 **Variants & palettes** – Built-in `primary`, `info`, `success`, `warning`, `danger` presets or override the colors directly.
- ✨ **iOS-style animation** – Thumb glides first; pill fill collapses with a delayed scale for a native feel.
- 🛠️ **Fine-grained styling** – Control track/thumb borders, sizes, and shadows.
- 🧠 **Accessibility ready** – Switch role, disabled/checked state, custom labels and hints.

## Installation

```sh
npm install react-native-switchery
# or
yarn add react-native-switchery
```

## Usage

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

| Prop                                           | Type                       | Default        | Description                                          |
| ---------------------------------------------- | -------------------------- | -------------- | ---------------------------------------------------- | --------- | --------- | -------------------------- | ------------------------- |
| `isExpanded`                                   | `boolean`                  | –              | Current value of the switch.                         |
| `onValueChange`                                | `(value: boolean) => void` | `() => {}`     | Callback when the switch toggles.                    |
| `variant`                                      | `'primary'                 | 'info'         | 'success'                                            | 'warning' | 'danger'` | `primary`                  | Built-in palette presets. |
| `activeColor` / `inactiveColor` / `thumbColor` | `string`                   | palette-driven | Override colors individually.                        |
| `size`                                         | `'mini'                    | 'small'        | 'default'                                            | 'large'`  | `default` | Track/thumb preset sizing. |
| `trackBorderColor` / `thumbBorderColor`        | `string`                   | contextual     | Customize border colors.                             |
| `trackBorderWidth` / `thumbBorderWidth`        | `number`                   | `1`            | Customize border widths.                             |
| `disabled`                                     | `boolean`                  | `false`        | Disables toggle interaction; shows overlay.          |
| `testID`                                       | `string`                   | `switch`       | Testing identifier (overlay uses `testID-disabled`). |
| `accessibilityLabel` / `accessibilityHint`     | `string`                   | –              | Accessibility metadata forwarded to `Pressable`.     |

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
