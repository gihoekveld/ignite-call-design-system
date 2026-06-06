import {
  colors,
  fonts,
  space,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
} from '@hoekveld-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },

  theme: {
    colors,
    space,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
  },
})
