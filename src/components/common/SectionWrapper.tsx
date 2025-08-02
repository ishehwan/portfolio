import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useTheme } from '../../contexts/ThemeContext';

interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  sx?: any;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  title,
  children,
  maxWidth = 'lg',
  sx = {}
}) => {
  const { isDarkMode } = useTheme();

  return (
    <Box
      id={id}
      component="section"
      sx={{
        py: { xs: 4, md: 6 },
        backgroundColor: isDarkMode ? 'background.default' : 'background.default',
        ...sx
      }}
    >
      <Container maxWidth={maxWidth}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            textAlign: 'center',
            mb: { xs: 3, md: 4 },
            fontWeight: 700,
            background: isDarkMode 
              ? 'linear-gradient(135deg, #ffffff, #f1f1f1)'
              : 'linear-gradient(135deg, #000000, #1a1a1a)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: { xs: '2rem', md: '2.5rem' },
          }}
        >
          {title}
        </Typography>
        {children}
      </Container>
    </Box>
  );
};

export default SectionWrapper; 