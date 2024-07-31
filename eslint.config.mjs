import antfu from '@antfu/eslint-config'
// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  antfu({
    overrides: {
      typescript: {
        'node/prefer-global/process': 'off',
      },
    },
  }),
)
