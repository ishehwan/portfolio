import React, { useState, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box, useMediaQuery } from '@mui/material';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { createAppTheme } from './theme/theme';
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

  const theme = createAppTheme(isDarkMode);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            pt: '80px', // 헤더 높이만큼 패딩 추가
            backgroundColor: 'background.default',
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
