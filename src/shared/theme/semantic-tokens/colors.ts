import { defineSemanticTokens } from "@chakra-ui/react";

export const colors = defineSemanticTokens.colors({
  surface: {
    page: {
      value: {
        base: "{colors.surface.page}",
        _dark: "{colors.surfaceDark.page}",
      },
    },
    card: {
      value: {
        base: "{colors.surface.card}",
        _dark: "{colors.surfaceDark.card}",
      },
    },
    elevated: {
      value: {
        base: "{colors.surface.elevated}",
        _dark: "{colors.surfaceDark.elevated}",
      },
    },
    hero: {
      value: {
        base: "{colors.surface.hero}",
        _dark: "{colors.surfaceDark.hero}",
      },
    },
    footer: {
      value: {
        base: "{colors.surface.footer}",
        _dark: "{colors.surfaceDark.footer}",
      },
    },
    overlay: {
      value: {
        base: "{colors.surface.overlay}",
        _dark: "{colors.surfaceDark.overlay}",
      },
    },
  },
  text: {
    primary: {
      value: {
        base: "{colors.text.primary}",
        _dark: "{colors.textDark.primary}",
      },
    },
    secondary: {
      value: {
        base: "{colors.text.secondary}",
        _dark: "{colors.textDark.secondary}",
      },
    },
    tertiary: {
      value: {
        base: "{colors.text.tertiary}",
        _dark: "{colors.textDark.tertiary}",
      },
    },
    inverse: {
      value: {
        base: "{colors.text.inverse}",
        _dark: "{colors.textDark.inverse}",
      },
    },
    accent: {
      value: {
        base: "{colors.text.accent}",
        _dark: "{colors.textDark.accent}",
      },
    },
  },
  border: {
    subtle: {
      value: {
        base: "{colors.border.subtle}",
        _dark: "{colors.borderDark.subtle}",
      },
    },
    default: {
      value: {
        base: "{colors.border.default}",
        _dark: "{colors.borderDark.default}",
      },
    },
    strong: {
      value: {
        base: "{colors.border.strong}",
        _dark: "{colors.borderDark.strong}", 
      },
    },
    accent: {
      value: {
        base: "{colors.border.accent}",
        _dark: "{colors.borderDark.accent}",
      },
    },
  },
  state: {
    hover: {
      value: {
        base: "{colors.state.hover}",
        _dark: "{colors.stateDark.hover}",
      },
    },
    active: {
      value: {
        base: "{colors.state.active}",
        _dark: "{colors.stateDark.active}",
      },
    },
    focus: {
      value: {
        base: "{colors.state.focus}",
        _dark: "{colors.stateDark.focus}",
      },
    },
    disabled: {
      value: {
        base: "{colors.state.disabled}",
        _dark: "{colors.stateDark.disabled}",
      },
    },
  },
});
