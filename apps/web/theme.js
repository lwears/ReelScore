import colors from 'tailwindcss/colors'

/**
 * Guide:
 * Surface colors map to components such as cards, sheets, and menus
 * Background color is found behind scrollable content
 * Primary colors map to components and elements, like app bars and buttons.
 * Secondary colors are most often used as accents on components, such as FABS and selection controls.
 * “On” colors are primarily applied to text, iconography, and strokes. Sometimes, they are also applied to surfaces.
 */

export const theme = {
  description:
    'TYPE: CUSTOM\nMaterial Theme Builder export 2024-02-13 07:54:30',
  seed: '#082F49',
  coreColors: {
    primary: '#082F49',
  },
  extendedColors: [],
  schemes: {
    // light: {
    //   primary: colors.blue[700],
    //   primaryHover: colors.blue[500],
    //   surfaceTint: colors.blue[700],
    //   onPrimary: colors.white,
    //   primaryContainer: colors.blue[200],
    //   onPrimaryContainer: colors.gray[800],
    //   secondary: colors.gray[700],
    //   secondaryHover: colors.gray[500],
    //   onSecondary: colors.white,
    //   secondaryContainer: colors.gray[300],
    //   onSecondaryContainer: colors.gray[800],
    //   tertiary: colors.purple[700],
    //   tertiaryHover: colors.purple[500],
    //   onTertiary: colors.white,
    //   tertiaryContainer: colors.purple[300],
    //   onTertiaryContainer: colors.gray[800],
    //   error: colors.red[700],
    //   errorHover: colors.red[500],
    //   onError: colors.white,
    //   errorContainer: colors.red[200],
    //   onErrorContainer: colors.gray[800],
    //   background: colors.white,
    //   onBackground: colors.gray[800],
    //   surface: colors.white,
    //   onSurface: colors.gray[800],
    //   surfaceVariant: colors.gray[300],
    //   onSurfaceVariant: colors.gray[800],
    //   outline: colors.gray[600],
    //   outlineVariant: colors.gray[800],
    //   shadow: colors.black,
    //   scrim: colors.black,
    //   inverseSurface: colors.gray[900],
    //   inverseOnSurface: colors.gray[300],
    //   inversePrimary: colors.blue[300],
    //   primaryFixed: colors.blue[200],
    //   onPrimaryFixed: colors.gray[800],
    //   primaryFixedDim: colors.blue[700],
    //   onPrimaryFixedVariant: colors.gray[800],
    //   secondaryFixed: colors.gray[300],
    //   onSecondaryFixed: colors.gray[800],
    //   secondaryFixedDim: colors.gray[500],
    //   onSecondaryFixedVariant: colors.gray[800],
    //   tertiaryFixed: colors.purple[300],
    //   onTertiaryFixed: colors.gray[800],
    //   tertiaryFixedDim: colors.purple[500],
    //   onTertiaryFixedVariant: colors.gray[800],
    //   surfaceDim: colors.gray[700],
    //   surfaceBright: colors.white,
    //   surfaceContainerLowest: colors.white,
    //   surfaceContainerLow: colors.gray[200],
    //   surfaceContainer: colors.gray[300],
    //   surfaceContainerHigh: colors.gray[400],
    //   surfaceContainerHighest: colors.gray[500],
    // },
    light: {
      primary: '#39608F',
      surfaceTint: '#39608F',
      onPrimary: '#FFFFFF',
      primaryContainer: '#D3E4FF',
      onPrimaryContainer: '#001C38',
      secondary: '#545F70',
      onSecondary: '#FFFFFF',
      secondaryContainer: '#D8E3F8',
      onSecondaryContainer: '#111C2B',
      tertiary: '#6C5677',
      onTertiary: '#FFFFFF',
      tertiaryContainer: '#F5D9FF',
      onTertiaryContainer: '#261430',
      error: '#BA1A1A',
      onError: '#FFFFFF',
      errorContainer: '#FFDAD6',
      onErrorContainer: '#410002',
      background: '#F8F9FF',
      onBackground: '#191C20',
      surface: '#F8F9FF',
      onSurface: '#191C20',
      surfaceVariant: '#DFE2EB',
      onSurfaceVariant: '#43474E',
      outline: '#73777F',
      outlineVariant: '#C3C6CF',
      shadow: '#000000',
      scrim: '#000000',
      inverseSurface: '#2E3035',
      inverseOnSurface: '#EFF0F7',
      inversePrimary: '#A3C9FE',
      primaryFixed: '#D3E4FF',
      onPrimaryFixed: '#001C38',
      primaryFixedDim: '#A3C9FE',
      onPrimaryFixedVariant: '#1E4876',
      secondaryFixed: '#D8E3F8',
      onSecondaryFixed: '#111C2B',
      secondaryFixedDim: '#BCC7DB',
      onSecondaryFixedVariant: '#3C4758',
      tertiaryFixed: '#F5D9FF',
      onTertiaryFixed: '#261430',
      tertiaryFixedDim: '#D8BDE3',
      onTertiaryFixedVariant: '#543F5E',
      surfaceDim: '#D8DAE0',
      surfaceBright: '#F8F9FF',
      surfaceContainerLowest: '#FFFFFF',
      surfaceContainerLow: '#F2F3FA',
      surfaceContainer: '#ECEDF4',
      surfaceContainerHigh: '#E7E8EE',
      surfaceContainerHighest: '#E1E2E8',
    },
    dark: {
      primary: colors.blue[300],
      surfaceTint: colors.blue[300],
      onPrimary: colors.blue[900],
      primaryContainer: colors.blue[700],
      onPrimaryContainer: colors.blue[200],
      secondary: colors.gray[400],
      onSecondary: colors.gray[900],
      secondaryContainer: colors.gray[500],
      onSecondaryContainer: colors.blue[300],
      tertiary: colors.purple[500],
      onTertiary: colors.gray[900],
      tertiaryContainer: colors.purple[700],
      onTertiaryContainer: colors.blue[300],
      error: colors.red[200],
      onError: colors.gray[900],
      errorContainer: colors.red[700],
      onErrorContainer: colors.red[200],
      background: colors.gray[900],
      onBackground: colors.gray[200],
      surface: colors.gray[900],
      onSurface: colors.gray[200],
      surfaceVariant: colors.gray[500],
      onSurfaceVariant: colors.gray[200],
      outline: colors.gray[700],
      outlineVariant: colors.gray[900],
      shadow: colors.black,
      scrim: colors.black,
      inverseSurface: colors.gray[200],
      inverseOnSurface: colors.gray[900],
      inversePrimary: colors.blue[700],
      primaryFixed: colors.blue[200],
      onPrimaryFixed: colors.blue[900],
      primaryFixedDim: colors.blue[300],
      onPrimaryFixedVariant: colors.blue[900],
      secondaryFixed: colors.gray[500],
      onSecondaryFixed: colors.blue[300],
      secondaryFixedDim: colors.gray[400],
      onSecondaryFixedVariant: colors.blue[300],
      tertiaryFixed: colors.purple[700],
      onTertiaryFixed: colors.blue[300],
      tertiaryFixedDim: colors.purple[500],
      onTertiaryFixedVariant: colors.blue[300],
      surfaceDim: colors.gray[900],
      surfaceBright: colors.gray[600],
      surfaceContainerLowest: colors.gray[100],
      surfaceContainerLow: colors.gray[300],
      surfaceContainer: colors.gray[500],
      surfaceContainerHigh: colors.gray[600],
      surfaceContainerHighest: colors.gray[700],
    },
  },
  palettes: {
    primary: {
      0: '#000000',
      5: '#001221',
      10: '#001D32',
      15: '#002841',
      20: '#0E334D',
      25: '#1C3E59',
      30: '#294A65',
      35: '#355571',
      40: '#41617E',
      50: '#5A7A98',
      60: '#7494B3',
      70: '#8EAFCE',
      80: '#A9CAEB',
      90: '#CDE5FF',
      95: '#E7F2FF',
      98: '#F7F9FF',
      99: '#FCFCFF',
      100: '#FFFFFF',
    },
    secondary: {
      0: '#000000',
      5: '#0B1218',
      10: '#161C23',
      15: '#20262D',
      20: '#2B3138',
      25: '#363C43',
      30: '#41474F',
      35: '#4D535B',
      40: '#585F67',
      50: '#717880',
      60: '#8B919A',
      70: '#A5ACB4',
      80: '#C1C7D0',
      90: '#DDE3EC',
      95: '#EBF1FA',
      98: '#F7F9FF',
      99: '#FCFCFF',
      100: '#FFFFFF',
    },
    tertiary: {
      0: '#000000',
      5: '#140E1C',
      10: '#1F1927',
      15: '#2A2332',
      20: '#352D3D',
      25: '#403848',
      30: '#4B4454',
      35: '#574F60',
      40: '#645B6C',
      50: '#7D7386',
      60: '#978DA0',
      70: '#B2A7BB',
      80: '#CEC2D6',
      90: '#EADEF3',
      95: '#F8EDFF',
      98: '#FFF7FF',
      99: '#FFFBFF',
      100: '#FFFFFF',
    },
    neutral: {
      0: '#000000',
      5: '#101112',
      10: '#1B1C1D',
      15: '#252627',
      20: '#303032',
      25: '#3B3B3D',
      30: '#464748',
      35: '#525254',
      40: '#5E5E5F',
      50: '#777778',
      60: '#919092',
      70: '#ACABAC',
      80: '#C7C6C7',
      90: '#E4E2E3',
      95: '#F2F0F1',
      98: '#FBF9FA',
      99: '#FEFCFD',
      100: '#FFFFFF',
    },
    'neutral-variant': {
      0: '#000000',
      5: '#0F1114',
      10: '#191C1F',
      15: '#242629',
      20: '#2E3134',
      25: '#393C3F',
      30: '#45474A',
      35: '#505256',
      40: '#5C5E62',
      50: '#75777A',
      60: '#8F9194',
      70: '#AAABAF',
      80: '#C5C6CA',
      90: '#E2E2E6',
      95: '#F0F0F4',
      98: '#F9F9FD',
      99: '#FCFCFF',
      100: '#FFFFFF',
    },
  },
}
