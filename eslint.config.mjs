import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // Start with ESLint's base recommended rules
  eslint.configs.recommended,

  // Add type-aware rules from typescript-eslint
  tseslint.configs.recommendedTypeChecked,

  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parserOptions: {
        // Ensure ESLint uses the correct tsconfig
        project: ["./tsconfig.json"], // Can be an array if you want to support multiple configs

        // Required in dev containers to resolve paths correctly
        tsconfigRootDir: new URL(".", import.meta.url).pathname,

        // Prevent parsing errors if a file isn’t explicitly in the tsconfig
        allowDefaultProject: true,
      },
    },
  },
);
