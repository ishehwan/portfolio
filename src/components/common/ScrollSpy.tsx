import React, { useState, useEffect } from 'react';
import { Box, Fab, Tooltip } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import { useTheme } from '../../contexts/ThemeContext';

interface ScrollSpyProps {
  sections: string[];
  onSectionChange: (section: string) => void;
}

const ScrollSpy: React.FC<ScrollSpyProps> = ({ sections, onSectionChange }) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // 헤더 높이 고려
      setShowScrollTop(scrollPosition > 500);

      // 현재 활성 섹션 찾기
      let currentSection = '';
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = sectionId;
            break;
          }
        }
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
        onSectionChange(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, activeSection, onSectionChange]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Tooltip title="맨 위로" placement="left">
        <Fab
          color="primary"
          size="medium"
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            zIndex: 1000,
            backgroundColor: isDarkMode ? '#2e7d32' : '#4caf50',
            color: 'white',
            opacity: showScrollTop ? 1 : 0,
            visibility: showScrollTop ? 'visible' : 'hidden',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              backgroundColor: isDarkMode ? '#4caf50' : '#2e7d32',
              transform: 'scale(1.1)',
            },
          }}
        >
          <KeyboardArrowUp />
        </Fab>
      </Tooltip>
    </>
  );
};

export default ScrollSpy; 