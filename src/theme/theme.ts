import { createTheme, Textarea, TextInput, Button, Input } from "@mantine/core";

const themeOverride = createTheme({
  colorScheme: "dark",
  colors: {
    theme: [
      "#ffe7f2",
      "#ffcede",
      "#ff9bba",
      "#ff6494",
      "#fe3774",
      "#fe1c5f",
      "#ff0955",
      "#e40045",
      "#cc003d",
      "#b30033",
    ],
    green: [
      "#e0fff7",
      "#cbffef",
      "#9affde",
      "#64ffcc",
      "#3bffbd",
      "#21ffb3",
      "#09ffae",
      "#00e398",
      "#00ca86",
      "#00af71",
    ],
    yellow: [
      "#fffae1",
      "#fff4cb",
      "#ffe89a",
      "#ffdb64",
      "#ffd038",
      "#ffc91c",
      "#ffc509",
      "#e3ad00",
      "#ca9a00",
      "#af8400",
    ],
    orange: [
      "#ffebe4",
      "#ffd6cc",
      "#ffac9a",
      "#ff7f64",
      "#ff5936",
      "#ff4118",
      "#ff3307",
      "#e42500",
      "#cc1d00",
      "#b21100",
    ],
    blue: [
      "#ddfdff",
      "#c8f5ff",
      "#97e7ff",
      "#61daff",
      "#36ceff",
      "#18c7ff",
      "#00c4ff",
      "#00ace5",
      "#0099ce",
      "#0085b6",
    ],
    gray: [
      "#fff2f5",
      "#ece6e7",
      "#cfcdcd",
      "#b2b2b2",
      "#9a9a9a",
      "#8b8b8b",
      "#848484",
      "#737171",
      "#686465",
      "#5f5457",
    ],
    darkblue: [
      "#e5f3ff",
      "#cde3ff",
      "#9ac3ff",
      "#64a2ff",
      "#3886fe",
      "#1d74fe",
      "#096cff",
      "#005be4",
      "#0050cd",
      "#0045b5",
    ],
    red: [
      "#ffe7e8",
      "#ffcece",
      "#ff9b9b",
      "#ff6464",
      "#fe3736",
      "#fe1b19",
      "#ff0909",
      "#e40000",
      "#cb0000",
      "#b20000",
    ],
    pink: [
      "#ffe7f7",
      "#ffcee8",
      "#ff9bcd",
      "#ff64b1",
      "#fe3799",
      "#fe1c8b",
      "#ff0983",
      "#e40071",
      "#cc0064",
      "#b30056",
    ],
  },
  primaryColor: "green",
  primaryShade: 6,
  cursorType: "pointer",
  // Customizing the appearance of certain elements
  components: {
    Button: Button.extend({
      defaultProps: {
        size: "lg",
      },
      styles: {
        label: {
          fontSize: "small",
          fontWeight: 500,
        },
        root: {
          background: "#1A1B1E",
        },
      },
    }),
    TextInput: TextInput.extend({
      defaultProps: {
        size: "lg",
      },
      styles: {
        label: {
          fontSize: "small",
          marginBottom: 5,
          fontWeight: 500,
        },
        input: {
          fontSize: "small",
          "::placeholder": {
            fontSize: "small",
          },
          width: "100%",
        },
      },
    }),
    Input: Input.extend({
      defaultProps: {
        size: "lg",
      },
      styles: {
        input: {
          fontSize: "small",
          "::placeholder": {
            fontSize: "small",
          },
        },
      },
    }),
    Textarea: Textarea.extend({
      defaultProps: {
        size: "lg",
      },
      styles: {
        label: {
          fontSize: "small",
          marginBottom: 5,
          fontWeight: 500,
        },
        input: {
          fontSize: "small",
          width: "100%",
        },
      },
    }),
  },

  // Customize spacing, font size, shadows, etc.
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 24,
  },
  radius: {
    xs: 3,
    sm: 5,
    md: 8,
    lg: 12,
    xl: 16,
  },
  shadows: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.1)",
    sm: "0 2px 4px rgba(0, 0, 0, 0.1)",
    md: "0 4px 8px rgba(0, 0, 0, 0.15)",
    lg: "0 8px 16px rgba(0, 0, 0, 0.2)",
    xl: "0 12px 24px rgba(0, 0, 0, 0.25)",
  },
});

export default themeOverride;
