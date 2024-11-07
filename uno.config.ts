// uno.config.ts
import {
  defineConfig,
  presetUno,
  presetIcons,
  presetTypography,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      autoInstall: true,
    }),
  ],
  transformers: [transformerVariantGroup()],

  shortcuts: {
    btn: "px-4 py-2 sont-semibold rounded-lg",
  },
});
