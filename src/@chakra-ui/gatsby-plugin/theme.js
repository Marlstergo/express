import { extendTheme } from "@chakra-ui/react";

const theme = {
  // https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/foundations/typography.ts
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
  },
  // https://chakra-ui.com/docs/theming/customize-theme#customizing-global-styles
  // https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/styles.ts
  styles: {
    global: {
      body: {
        // bg: "gray.400",
      },
    },
  },
};

export default extendTheme(theme);