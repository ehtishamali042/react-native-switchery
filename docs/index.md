# React Native Switchery

[![npm version](https://img.shields.io/npm/v/react-native-switchery.svg?color=0b7&label=npm)](https://www.npmjs.com/package/react-native-switchery)
[![GitHub](https://img.shields.io/badge/github-react--native--switchery-181717?logo=github&logoColor=white)](https://github.com/ehtishamali042/react-native-switchery)

React Native Switchery is an iOS-inspired switch for React Native. This short guide pulls the key details from the main [README](../README.md) so you can see the API, and demos without digging.

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
