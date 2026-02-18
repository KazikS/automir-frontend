import { defineTokens } from "@chakra-ui/react";

export const colors = defineTokens.colors({
  brand: {
    50: { value: "#FEF2F2" },
    100: { value: "#FEE2E2" },
    200: { value: "#FECACA" },
    300: { value: "#FCA5A5" },
    400: { value: "#F87171" },
    500: { value: "#E53935" }, // основной красный
    600: { value: "#D32F2F" },
    700: { value: "#C62828" },
    800: { value: "#B71C1C" },
    900: { value: "#7F1D1D" },
    950: { value: "#450A0A" },
  },

  neutral: {
    50: { value: "#FAFAFA" },  // фон страницы (light)
    100: { value: "#F5F5F5" }, // фон карточек услуг, секций
    200: { value: "#E8E8E8" }, // бордеры карточек, разделители
    300: { value: "#D4D4D4" }, // неактивные элементы
    400: { value: "#A3A3A3" }, // плейсхолдеры
    500: { value: "#737373" }, // вторичный текст
    600: { value: "#525252" }, // подписи
    700: { value: "#404040" }, // основной текст (dark mode)
    800: { value: "#262626" }, // фон карточек (dark)
    900: { value: "#171717" }, // фон страницы (dark)
    950: { value: "#0A0A0A" }, // footer, глубокий фон
  },

  surface: {
    page: { value: "#FAFAFA" },        // фон страницы
    card: { value: "#FFFFFF" },        // фон карточек
    elevated: { value: "#F5F5F5" },    // приподнятые секции (услуги)
    hero: { value: "#1A1A1A" },        // hero-баннер
    footer: { value: "#111111" },      // footer
    overlay: { value: "rgba(0,0,0,0.5)" }, // модальные оверлеи
  },

  surfaceDark: {
    page: { value: "#0D0D0D" },
    card: { value: "#141414" },
    elevated: { value: "#1A1A1A" },
    hero: { value: "#111111" },
    footer: { value: "#0A0A0A" },
    overlay: { value: "rgba(0,0,0,0.7)" },
  },

  text: {
    primary: { value: "#111111" },     // заголовки, основной текст
    secondary: { value: "#737373" },   // описания, подписи
    tertiary: { value: "#A3A3A3" },    // плейсхолдеры, мета-инфо
    inverse: { value: "#FFFFFF" },     // текст на тёмном фоне
    accent: { value: "#E53935" },      // цены, акцентный текст
  },

  textDark: {
    primary: { value: "#F5F5F5" },
    secondary: { value: "#737373" },
    tertiary: { value: "#525252" },
    inverse: { value: "#111111" },
    accent: { value: "#F87171" },
  },

  border: {
    subtle: { value: "#F0F0F0" },      // бордеры карточек (light)
    default: { value: "#E8E8E8" },     // обычные бордеры
    strong: { value: "#D4D4D4" },      // инпуты в фокусе
    accent: { value: "#E53935" },      // активный таб навигации
  },

  borderDark: {
    subtle: { value: "#1E1E1E" },
    default: { value: "#262626" },
    strong: { value: "#404040" },
    accent: { value: "#E53935" },
  },

  badge: {
    new: { value: "#E53935" },         // "новый" — красный
    used: { value: "#525252" },        // "с пробегом" — серый
    tradeIn: { value: "#F59E0B" },     // "trade-in" — жёлтый/янтарь
  },

  state: {
    hover: { value: "rgba(0,0,0,0.04)" },
    active: { value: "rgba(0,0,0,0.08)" },
    focus: { value: "rgba(229,57,53,0.2)" }, // ring вокруг инпутов
    disabled: { value: "#E8E8E8" },
  },

  stateDark: {
    hover: { value: "rgba(255,255,255,0.04)" },
    active: { value: "rgba(255,255,255,0.08)" },
    focus: { value: "rgba(248,113,113,0.2)" },
    disabled: { value: "#262626" },
  },
});
