# React Native Switchery

Welcome to the documentation site. These docs mirror the highlights from the main [README](../README.md) so you can host them via GitHub Pages.

## Installation

```sh
npm install react-native-switchery
```

## Usage

```tsx
import React from 'react';
import { Switch } from 'react-native-switchery';

export const Demo = () => {
  const [value, setValue] = React.useState(false);

  return (
    <Switch
      isExpanded={value}
      onValueChange={setValue}
      variant="info"
      size="large"
    />
  );
};
```

## Props (summary)

| Prop                                                | Description                                                          |
| --------------------------------------------------- | -------------------------------------------------------------------- |
| `isExpanded`                                        | Current boolean value.                                               |
| `onValueChange`                                     | Callback invoked when toggled.                                       |
| `variant`                                           | Built-in palette: `primary`, `info`, `success`, `warning`, `danger`. |
| `size`                                              | `mini`, `small`, `default`, or `large`.                              |
| `activeColor` / `inactiveColor` / `thumbColor`      | Override colors individually.                                        |
| `trackBorderColor` / `trackBorderWidth`             | Customize track outline.                                             |
| `thumbBorderColor` / `thumbBorderWidth`             | Customize thumb outline.                                             |
| `disabled`                                          | Disables interaction and shows overlay.                              |
| `testID`, `accessibilityLabel`, `accessibilityHint` | Testing and accessibility helpers.                                   |

## Publishing checklist

1. `npm install`
2. `npm run pack:preview`
3. `npm version <bump>`
4. `npm publish --access public`
5. `git push --follow-tags`

After pushing to GitHub, enable **Settings → Pages → Branch: main / Folder: /docs** to host this site.
