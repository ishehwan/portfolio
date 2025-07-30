import React, { useState, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box, useMediaQuery } from '@mui/material';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Header from './components/Header';
import ScrollSpy from './components/common/ScrollSpy';
import ProfileSection from './components/sections/ProfileSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const isMobile = useMediaQuery('(max-width:768px)');

  const sections = ['profile', 'about', 'skills', 'projects'];

  return (
    <ThemeProvider>
      <AppContent 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        isMobile={isMobile}
        sections={sections}
      />
    </ThemeProvider>
  );
};

interface AppContentProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isMobile: boolean;
  sections: string[];
}

const AppContent: React.FC<AppContentProps> = ({ 
  activeSection, 
  setActiveSection, 
  isMobile,
  sections
}) => {
  const { isDarkMode, setIsMobile } = useTheme();

  useEffect(() => {
    setIsMobile(isMobile);
  }, [isMobile, setIsMobile]);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: '#2e7d32',
        light: '#4caf50',
        dark: '#1b5e20',
      },
      secondary: {
        main: '#66bb6a',
        light: '#81c784',
        dark: '#388e3c',
      },
      background: {
        default: isDarkMode ? '#0a1a0a' : '#f0f8f0',
        paper: isDarkMode ? '#1a2a1a' : '#ffffff',
      },
      text: {
        primary: isDarkMode ? '#e8f5e8' : '#424242',
        secondary: isDarkMode ? '#c8e6c9' : '#616161',
      },
    },
    typography: {
      fontFamily: '"Noto Sans KR", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 700,
        color: isDarkMode ? '#e8f5e8' : '#424242',
      },
      h2: {
        fontWeight: 600,
        color: isDarkMode ? '#e8f5e8' : '#424242',
      },
      h3: {
        fontWeight: 600,
        color: isDarkMode ? '#e8f5e8' : '#424242',
      },
      h4: {
        fontWeight: 500,
        color: isDarkMode ? '#e8f5e8' : '#424242',
      },
      h5: {
        fontWeight: 500,
        color: isDarkMode ? '#e8f5e8' : '#424242',
      },
      h6: {
        fontWeight: 500,
        color: isDarkMode ? '#e8f5e8' : '#424242',
      },
      body1: {
        color: isDarkMode ? '#c8e6c9' : '#616161',
      },
      body2: {
        color: isDarkMode ? '#c8e6c9' : '#616161',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            fontWeight: 500,
          },
          contained: {
            background: isDarkMode 
              ? 'linear-gradient(45deg, #2e7d32, #4caf50)' 
              : 'linear-gradient(45deg, #4caf50, #66bb6a)',
            '&:hover': {
              background: isDarkMode 
                ? 'linear-gradient(45deg, #4caf50, #66bb6a)' 
                : 'linear-gradient(45deg, #2e7d32, #4caf50)',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            border: `2px solid ${isDarkMode ? '#2e7d32' : '#4caf50'}`,
          },
        },
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            pt: '20px',
            backgroundColor: isDarkMode ? '#0a1a0a' : '#f0f8f0',
          }}
        >
          <ProfileSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
        </Box>
        <ScrollSpy sections={sections} onSectionChange={setActiveSection} />
      </Box>
    </MuiThemeProvider>
  );
};

export default App;
