import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { useTheme } from '../../contexts/ThemeContext';

interface SectionContainerProps {
  id: string;
  title: string;
  children: React.ReactNode;
  maxWidth?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ 
  id, 
  title, 
  children, 
  maxWidth = '1200px' 
}) => {
  const { isDarkMode } = useTheme();

  return (
    <Box
      id={id}
      component="section"
      sx={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        py: 6,
        px: 2,
        backgroundColor: isDarkMode ? '#0a1a0a' : '#f0f8f0',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          maxWidth,
          width: '100%',
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            mb: 4,
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #2e7d32, #4caf50)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          }}
        >
          {title}
        </Typography>
        <Paper
          elevation={isDarkMode ? 8 : 4}
          sx={{
            p: 3,
            backgroundColor: isDarkMode ? '#1a2a1a' : '#ffffff',
            borderRadius: 3,
            border: `2px solid ${isDarkMode ? '#2e7d32' : '#4caf50'}`,
          }}
        >
          {children}
        </Paper>
      </Box>
    </Box>
  );
};

export default SectionContainer; 