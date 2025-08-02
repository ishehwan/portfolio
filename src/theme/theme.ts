import { createTheme } from '@mui/material/styles';
import { colors, gradients, shadows } from './colors';

export const createAppTheme = (isDarkMode: boolean) => {
  const themeColors = isDarkMode ? colors.dark : colors.light;
  
  return createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: themeColors.primary,
        light: themeColors.secondary,
        dark: themeColors.accent,
      },
      secondary: {
        main: themeColors.secondary,
        light: themeColors.accent,
        dark: themeColors.primary,
      },
      background: {
        default: themeColors.background.default,
        paper: themeColors.background.paper,
      },
      text: {
        primary: themeColors.text.primary,
        secondary: themeColors.text.secondary,
      },
      success: {
        main: themeColors.success,
      },
      warning: {
        main: themeColors.warning,
      },
      error: {
        main: themeColors.error,
      },
    },
    typography: {
      fontFamily: '"Noto Sans KR", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 700,
        color: themeColors.text.primary,
      },
      h2: {
        fontWeight: 600,
        color: themeColors.text.primary,
      },
      h3: {
        fontWeight: 600,
        color: themeColors.text.primary,
      },
      h4: {
        fontWeight: 500,
        color: themeColors.text.primary,
      },
      h5: {
        fontWeight: 500,
        color: themeColors.text.primary,
      },
      h6: {
        fontWeight: 500,
        color: themeColors.text.primary,
      },
      body1: {
        color: themeColors.text.secondary,
      },
      body2: {
        color: themeColors.text.secondary,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            textTransform: 'none',
            fontWeight: 500,
            boxShadow: shadows.small,
            '&:hover': {
              boxShadow: shadows.medium,
            },
          },
          contained: {
            background: gradients.primary,
            '&:hover': {
              background: gradients.secondary,
            },
          },
          outlined: {
            borderColor: themeColors.primary,
            color: themeColors.primary,
            '&:hover': {
              backgroundColor: `${themeColors.primary}10`,
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            border: `1px solid ${themeColors.border}`,
            boxShadow: shadows.medium,
            background: themeColors.background.card,
            '&:hover': {
              boxShadow: shadows.large,
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            background: isDarkMode ? gradients.background : gradients.primary,
            boxShadow: shadows.glow,
            backdropFilter: 'blur(10px)',
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: themeColors.background.paper,
            borderLeft: `1px solid ${themeColors.border}`,
          },
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            margin: '4px 8px',
            '&.Mui-selected': {
              backgroundColor: `${themeColors.primary}20`,
              color: themeColors.primary,
              '&:hover': {
                backgroundColor: `${themeColors.primary}30`,
              },
            },
            '&:hover': {
              backgroundColor: `${themeColors.primary}10`,
            },
          },
        },
      },
    },
  });
}; 