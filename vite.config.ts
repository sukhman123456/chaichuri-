// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import fs from "node:fs";
import path from "node:path";

try {
  const publicDir = path.resolve(process.cwd(), "public");
  const aiImagePath = "C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\78a7fc96-095d-4468-9a21-38d4a7284d3b\\kulhad_chai_still_1791137769122.jpg";
  if (fs.existsSync(aiImagePath)) {
    fs.copyFileSync(aiImagePath, path.join(publicDir, "kulhad-chai.jpg"));
    fs.copyFileSync(aiImagePath, path.join(publicDir, "kulhad-chai-ai.jpg"));
    console.log("[AI Image Sync] Successfully installed new photorealistic Kulhad Chai image to public/kulhad-chai.jpg");
  }
} catch (e) {
  console.error("Config script error:", e);
}

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});

