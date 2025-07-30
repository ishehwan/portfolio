import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  useTheme as useMuiTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import {
  Brightness4,
  Brightness7,
  Menu as MenuIcon,
} from '@mui/icons-material';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const { isDarkMode, toggleTheme, activeSection } = useTheme();
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery('(max-width:768px)');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { text: '프로필', id: 'profile' },
    { text: '자기소개', id: 'about' },
    { text: '기술스택', id: 'skills' },
    { text: '프로젝트', id: 'projects' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 64;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setDrawerOpen(false);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerContent = (
    <Box sx={{ width: 250, pt: 2 }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              selected={activeSection === item.id}
              onClick={() => scrollToSection(item.id)}
              sx={{
                '&.Mui-selected': {
                  backgroundColor: isDarkMode ? '#2e7d32' : '#4caf50',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: isDarkMode ? '#4caf50' : '#2e7d32',
                  },
                },
                '&:hover': {
                  backgroundColor: isDarkMode ? '#1a2a1a' : '#f0f8f0',
                },
              }}
            >
              <ListItemText 
                primary={item.text}
                sx={{
                  '& .MuiListItemText-primary': {
                    fontWeight: activeSection === item.id ? 'bold' : 'normal',
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          zIndex: muiTheme.zIndex.drawer + 1,
          background: isDarkMode 
            ? 'linear-gradient(90deg, #0a1a0a, #1a2a1a)' 
            : 'linear-gradient(90deg, #2e7d32, #4caf50)',
          boxShadow: '0 2px 20px rgba(46, 125, 50, 0.3)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 0,
              fontWeight: 'bold',
              cursor: 'pointer',
              '&:hover': {
                textShadow: '0 0 10px rgba(255,255,255,0.5)',
              }
            }}
            onClick={() => scrollToSection('profile')}
          >
            Portfolio
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 1 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    color="inherit"
                    onClick={() => scrollToSection(item.id)}
                    sx={{
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        width: activeSection === item.id ? '100%' : '0%',
                        height: '2px',
                        backgroundColor: 'white',
                        transform: 'translateX(-50%)',
                        transition: 'width 0.3s ease-in-out',
                      },
                      '&:hover::after': {
                        width: '100%',
                      },
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>
            )}
            
            {isMobile && (
              <IconButton
                color="inherit"
                onClick={toggleDrawer}
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
            
            <IconButton
              color="inherit"
              onClick={toggleTheme}
              aria-label="toggle theme"
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  transform: 'rotate(180deg)',
                  transition: 'all 0.3s ease-in-out',
                },
              }}
            >
              {isDarkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: isDarkMode ? '#1a2a1a' : '#ffffff',
            color: isDarkMode ? '#e8f5e8' : '#1b5e20',
            borderLeft: `2px solid ${isDarkMode ? '#2e7d32' : '#4caf50'}`,
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Header; 