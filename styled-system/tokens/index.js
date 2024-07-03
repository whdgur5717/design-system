const tokens = {
  "radii.sm": {
    "value": "3",
    "variable": "var(--bewZvn)"
  },
  "radii.lg": {
    "value": "5",
    "variable": "var(--dxfumK)"
  },
  "radii.rounded": {
    "value": "30",
    "variable": "var(--hSZQPi)"
  },
  "fontSizes.xs": {
    "value": "0.75rem",
    "variable": "var(--loLyxA)"
  },
  "fontSizes.sm": {
    "value": "1rem",
    "variable": "var(--eRgJXV)"
  },
  "fontSizes.lg": {
    "value": "1.5rem",
    "variable": "var(--gKFLFQ)"
  },
  "fontSizes.xl": {
    "value": "1.75rem",
    "variable": "var(--gFqSQX)"
  },
  "fontSizes.2xl": {
    "value": "2rem",
    "variable": "var(--dllMvh)"
  },
  "fontSizes.3xl": {
    "value": "3rem",
    "variable": "var(--jaXqkI)"
  },
  "colors.grey_100": {
    "value": "var(--QziUj)",
    "variable": "var(--QziUj)"
  },
  "colors.grey_200": {
    "value": "var(--gjmHMA)",
    "variable": "var(--gjmHMA)"
  },
  "colors.grey_300": {
    "value": "var(--gqpkYB)",
    "variable": "var(--gqpkYB)"
  },
  "colors.grey_400": {
    "value": "var(--cohrBy)",
    "variable": "var(--cohrBy)"
  },
  "colors.grey_500": {
    "value": "var(--cvjUNz)",
    "variable": "var(--cvjUNz)"
  },
  "colors.red_100": {
    "value": "var(--hSktyR)",
    "variable": "var(--hSktyR)"
  },
  "colors.red_200": {
    "value": "var(--fipqhS)",
    "variable": "var(--fipqhS)"
  },
  "colors.red_300": {
    "value": "var(--iEXHBT)",
    "variable": "var(--iEXHBT)"
  },
  "colors.blue_100": {
    "value": "var(--gszCHI)",
    "variable": "var(--gszCHI)"
  },
  "colors.blue_200": {
    "value": "var(--gpyXdP)",
    "variable": "var(--gpyXdP)"
  },
  "colors.blue_300": {
    "value": "var(--dkXhTa)",
    "variable": "var(--dkXhTa)"
  },
  "colors.bg_main": {
    "value": "var(--gvfPvd)",
    "variable": "var(--gvfPvd)"
  },
  "colors.bg_elevated": {
    "value": "var(--jGcBGc)",
    "variable": "var(--jGcBGc)"
  },
  "colors.border_basic": {
    "value": "var(--dziMDl)",
    "variable": "var(--dziMDl)"
  },
  "colors.border_basic2": {
    "value": "var(--jLXCzj)",
    "variable": "var(--jLXCzj)"
  },
  "colors.text_primary": {
    "value": "var(--jQxdsW)",
    "variable": "var(--jQxdsW)"
  },
  "colors.text_secondary": {
    "value": "var(--kxEeeU)",
    "variable": "var(--kxEeeU)"
  },
  "colors.text_danger": {
    "value": "var(--bjOpyV)",
    "variable": "var(--bjOpyV)"
  },
  "colors.white": {
    "value": "var(--RiClf)",
    "variable": "var(--RiClf)"
  },
  "colors.colorPalette": {
    "value": "var(--idUrcU)",
    "variable": "var(--idUrcU)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar