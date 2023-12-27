// uno.config.ts
import { defineConfig } from "unocss";

export default defineConfig({
  rules: [
    [/^w-([\.\d]+)-dvw$/, ([_, num]) => ({ width: `${num}dvw` })],
    [/^h-([\.\d]+)-dvh$/, ([_, num]) => ({ height: `${num}dvh` })],
  ],
});
