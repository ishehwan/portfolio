import React from 'react';
import { Card, CardContent, Box } from '@mui/material';
import { useTheme } from '../../contexts/ThemeContext';

interface AnimatedCardProps {
  children: React.ReactNode;
  sx?: any;
  onClick?: () => void;
  hoverEffect?: boolean;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  sx = {},
  onClick,
  hoverEffect = true
}) => {
  const { isDarkMode } = useTheme();

  return (
    <Card
      onClick={onClick}
      sx={{
        cursor: onClick ? 'pointer' : 'default',
        transition: 'all 0.3s ease-in-out',
        transform: 'translateY(0)',
        '&:hover': hoverEffect ? {
          transform: 'translateY(-8px)',
          boxShadow: isDarkMode 
            ? '0 12px 40px rgba(139, 92, 246, 0.3)' 
            : '0 12px 40px rgba(124, 58, 237, 0.2)',
        } : {},
        ...sx
      }}
    >
      <CardContent sx={{ p: 3 }}>
        {children}
      </CardContent>
    </Card>
  );
};

export default AnimatedCard; 