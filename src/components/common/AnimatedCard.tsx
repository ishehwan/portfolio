import React from 'react';
import { Card, CardContent, Box } from '@mui/material';
import { useTheme } from '../../contexts/ThemeContext';

interface AnimatedCardProps {
  children: React.ReactNode;
  elevation?: number;
  sx?: any;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  children, 
  elevation = 4,
  sx = {} 
}) => {
  const { isDarkMode } = useTheme();

  return (
    <Card
      elevation={elevation}
      sx={{
        backgroundColor: isDarkMode ? '#1a2a1a' : '#ffffff',
        border: `2px solid ${isDarkMode ? '#2e7d32' : '#4caf50'}`,
        borderRadius: 3,
        transition: 'all 0.3s ease-in-out',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: isDarkMode 
            ? '0 12px 24px rgba(46, 125, 50, 0.3)' 
            : '0 12px 24px rgba(76, 175, 80, 0.2)',
          borderColor: isDarkMode ? '#4caf50' : '#2e7d32',
        },
        ...sx,
      }}
    >
      <CardContent sx={{ p: 3 }}>
        {children}
      </CardContent>
    </Card>
  );
};

export default AnimatedCard; 