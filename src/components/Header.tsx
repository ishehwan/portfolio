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
      const headerHeight = 80;
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
    <Box sx={{ width: 250, pt: 8 }}> {/* pt를 8로 변경하여 헤더 아래에 표시 */}
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              selected={activeSection === item.id}
              onClick={() => scrollToSection(item.id)}
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
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', height:80 }}>
          <Typography 
            variant="h5" 
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
            Hwan Portfolio
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
            marginTop: '64px', // 헤더 높이만큼 마진 추가
            height: 'calc(100% - 64px)', // 헤더 높이만큼 높이 조정
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Header; 