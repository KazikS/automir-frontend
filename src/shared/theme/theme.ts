import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { tokens } from "./tokens";

export const config = defineConfig({
  theme: {
    tokens,
  },
});

export const system = createSystem(defaultConfig, config);
