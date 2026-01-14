# React Native Switchery

Welcome to the documentation site. These docs mirror the highlights from the main [README](../README.md) so you can host them via GitHub Pages.

## Demo

<img src="https://github.com/ehtishamali042/react-native-switchery/raw/main/docs/assets/switchery-demo.gif" alt="Switchery demo" width="520" />

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
      value={value}
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
| `value`                                             | Current boolean value.                                               |
| `onValueChange`                                     | Callback invoked when toggled.                                       |
| `variant`                                           | Built-in palette: `primary`, `info`, `success`, `warning`, `danger`. |
| `size`                                              | `mini`, `small`, `default`, or `large`.                              |
| `activeColor` / `inactiveColor` / `thumbColor`      | Override colors individually.                                        |
| `trackBorderColor` / `trackBorderWidth`             | Customize track outline.                                             |
| `thumbBorderColor` / `thumbBorderWidth`             | Customize thumb outline.                                             |
| `disabled`                                          | Disables interaction and shows overlay.                              |
| `testID`, `accessibilityLabel`, `accessibilityHint` | Testing and accessibility helpers.                                   |
