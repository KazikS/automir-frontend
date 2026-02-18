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
    50: { value: "#FAFAFA" }, // фон страницы (light)
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

  badge: {
    new: { value: "#E53935" }, // "новый" — красный
    used: { value: "#525252" }, // "с пробегом" — серый
    tradeIn: { value: "#F59E0B" }, // "trade-in" — жёлтый/янтарь
  },
});
