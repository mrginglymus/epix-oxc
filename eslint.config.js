import importPlugin from "eslint-plugin-import-x";

export default [
  {
    ignores: [
      '.pnp*'
    ],
    settings: {
      "import-x/resolver-next": [
        importPlugin.createNodeResolver(),
      ],
    },
    plugins: {
      "import-x": importPlugin,
    },
     rules: {
       ...importPlugin.configs.recommended.rules,
     }
  }
]
