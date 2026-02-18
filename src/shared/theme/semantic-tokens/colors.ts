import { defineSemanticTokens } from "@chakra-ui/react";

export const colors = defineSemanticTokens.colors({
  surface: {
    page: {
      value: { base: "{colors.neutral.50}", _dark: "{colors.neutral.950}" },
    },
    card: {
      value: { base: "#FFFFFF", _dark: "{colors.neutral.800}" },
    },
    elevated: {
      value: { base: "{colors.neutral.100}", _dark: "{colors.neutral.900}" },
    },
    hero: {
      value: { base: "{colors.neutral.200}", _dark: "{colors.neutral.900}" },
    },
    footer: {
      value: { base: "{colors.neutral.950}", _dark: "{colors.neutral.950}" },
    },
    overlay: {
      value: { base: "rgba(0,0,0,0.5)", _dark: "rgba(0,0,0,0.7)" },
    },
  },

  text: {
    primary: {
      value: { base: "{colors.neutral.950}", _dark: "{colors.neutral.100}" },
    },
    secondary: {
      value: { base: "{colors.neutral.500}", _dark: "{colors.neutral.500}" },
    },
    tertiary: {
      value: { base: "{colors.neutral.400}", _dark: "{colors.neutral.600}" },
    },
    inverse: {
      value: { base: "#FFFFFF", _dark: "{colors.neutral.950}" },
    },
    accent: {
      value: { base: "{colors.brand.500}", _dark: "{colors.brand.400}" },
    },
  },

  border: {
    subtle: {
      value: { base: "{colors.neutral.100}", _dark: "{colors.neutral.800}" },
    },
    default: {
      value: { base: "{colors.neutral.500}", _dark: "{colors.neutral.800}" },
    },
    strong: {
      value: { base: "{colors.neutral.300}", _dark: "{colors.neutral.700}" },
    },
    accent: {
      value: { base: "{colors.brand.500}", _dark: "{colors.brand.500}" },
    },
  },

  state: {
    hover: {
      value: { base: "rgba(0,0,0,0.04)", _dark: "rgba(255,255,255,0.04)" },
    },
    active: {
      value: { base: "rgba(0,0,0,0.08)", _dark: "rgba(255,255,255,0.08)" },
    },
    focus: {
      value: { base: "rgba(229,57,53,0.2)", _dark: "rgba(248,113,113,0.2)" },
    },
    disabled: {
      value: { base: "{colors.neutral.200}", _dark: "{colors.neutral.800}" },
    },
  },
});
