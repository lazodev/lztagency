import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import { configs } from "eslint-plugin-next";
import someConfig from "some-other-config-you-use";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  someConfig,
  eslintConfigPrettier,
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.browser }},
  {
    extends: [
      pluginJs.configs.recommended,
      ...tseslint.configs.recommended,
      configs.next,
      configs['next/core-web-vitals'],
    ], // Adicionando as configurações recomendadas do Next.js
  },
  {
    ignores: [
      ".next/**/*", "node_modules"
    ],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",  // Desabilita a regra de 'any'
      "@typescript-eslint/no-empty-object-type": "off", // Desabilita a regra para objetos vazios
      "next/no-img-element": "off",
    }
  },
];