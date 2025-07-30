import React from 'react';
import {
  Box,
  Typography,
  // Grid,
  Chip,
  Avatar,
  Divider,
  IconButton,
} from '@mui/material';
import {
  Email,
  Phone,
  GitHub,
} from '@mui/icons-material';
import { useTheme } from '../../contexts/ThemeContext';
import SectionContainer from '../common/SectionContainer';
import AnimatedCard from '../common/AnimatedCard';
import notionIcon from '../../images/notion-logo.png';
import profile from '../../images/profile.jpg';


const ProfileSection: React.FC = () => {
  const { isDarkMode } = useTheme();

  const skills = [
    { label: "React-TypeScript", color: "primary" },
    { label: "Java-Spring", color: "secondary" },
    { label: "Node.js", color: "success" },
    { label: "PostgreSQL", color: "info" },
    { label: "MongoDB", color: "warning" },
    { label: "AWS", color: "error" },
  ];

  const contactInfo = [
    {
      icon: <Email />,
      title: '이메일',
      value: 'lgh1566@naver.com',
      link: 'mailto:lgh1566@naver.com',
    },
    {
      icon: <Phone />,
      title: '연락처',
      value: '010-3780-4905',
      link: 'tel:010-3780-4905',
    },
  ];

  const socialLinks = [
    {
      icon: <GitHub />,
      title: 'GitHub',
      link: 'https://github.com/ishehwan',
      color: '#333',
    },
    {
      icon: (
        <Box
          component="img"
          src={notionIcon}
          alt="notion logo"
          sx={{
            width: 24,
            height: 24,
            objectFit: 'contain',
          }}
        />
      ),
      title: 'Notion',
      link: 'https://www.notion.so/23beb6ba49cf8012b6aff5a23c3a5fe6?source=copy_link',
      color: '#000000',
    },
  ];

  return (
    <SectionContainer id="profile" title="프로필">
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
        <Box sx={{ width: { xs: '100%', md: '40%' } }}>
          <AnimatedCard sx={{ textAlign: 'center', height: '100%' }}>
            <Avatar
              src={profile}
              alt="profile"
              sx={{
                width: 120,
                height: 120,
                mx: 'auto',
                mb: 2,
                fontSize: '2.5rem',
                background: 'linear-gradient(45deg, #2e7d32, #4caf50)',
                border: '3px solid',
                borderColor: isDarkMode ? '#4caf50' : '#2e7d32',
              }}
            >
              LeeJihwan
            </Avatar>
            <Typography 
              variant="h4" 
              sx={{ 
                mb: 2, 
                fontWeight: 'bold',
                background: isDarkMode ? '#c8e6c9' : '#616161',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              이지환
            </Typography>
            <Chip
              label="풀스택 개발자"
              sx={{
                mb: 2,
                backgroundColor: isDarkMode ? '#2e7d32' : '#4caf50',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                padding: '6px 12px',
              }}
            />
            <Typography 
              variant="body1" 
              sx={{ 
                color: isDarkMode ? '#c8e6c9' : '#616161',
                fontSize: '1rem',
                lineHeight: 1.5,
                textAlign: 'left',
                mb: 2,
              }}
            >
               함께 일하고 싶은 풀스택 개발자
            </Typography>

            <Divider sx={{ my: 2, borderColor: isDarkMode ? '#2e7d32' : '#4caf50' }} />

            <Box sx={{ textAlign: 'left' }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: isDarkMode ? '#e8f5e8' : '#424242' }}>
                연락처
              </Typography>
              {contactInfo.map((info, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <Box sx={{ color: isDarkMode ? '#4caf50' : '#2e7d32' }}>
                    {info.icon}
                  </Box>
                  <Typography variant="body2" sx={{ color: isDarkMode ? '#c8e6c9' : '#616161' }}>
                    {info.value}
                  </Typography>
                </Box>
              ))}
              
              <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                {socialLinks.map((social, index) => (
                  <IconButton
                    key={index}
                    sx={{
                      color: social.color,
                      '&:hover': {
                        backgroundColor: isDarkMode ? '#2e7d32' : '#4caf50',
                        color: 'white',
                      },
                    }}
                    onClick={() => window.open(social.link, '_blank')}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </Box>
          </AnimatedCard>
        </Box>

        <Box sx={{ width: { xs: '100%', md: '60%' } }}>
          <AnimatedCard sx={{ height: '100%' }}>
            <Typography 
              variant="h5" 
              sx={{ 
                mb: 3, 
                fontWeight: 'bold',
                color: isDarkMode ? '#e8f5e8' : '#424242',
              }}
            >
              기본 정보
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, flexWrap: 'wrap', mb: 3 }}>
              <Box sx={{ width: { xs: '100%', sm: '48%' } }}>
                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    color: isDarkMode ? '#4caf50' : '#2e7d32', 
                    fontWeight: 'bold',
                    mb: 1,
                  }}
                >
                  이름
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1rem', textAlign: 'left' }}>
                  이지환
                </Typography>
              </Box>
              
              <Box sx={{ width: { xs: '100%', sm: '48%' } }}>
                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    color: isDarkMode ? '#4caf50' : '#2e7d32', 
                    fontWeight: 'bold',
                    mb: 1,
                  }}
                >
                  생년월일
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1rem', textAlign: 'left' }}>
                  1994.09.06
                </Typography>
              </Box>
              <Box sx={{ width: { xs: '100%', sm: '48%' } }}>
                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    color: isDarkMode ? '#4caf50' : '#2e7d32', 
                    fontWeight: 'bold',
                    mb: 1,
                  }}
                >
                  거주지
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1rem', textAlign: 'left' }}>
                  서울시 광진구 구의동
                </Typography>
              </Box>
              
              <Box sx={{ width: { xs: '100%', sm: '48%' } }}>
                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    color: isDarkMode ? '#4caf50' : '#2e7d32', 
                    fontWeight: 'bold',
                    mb: 1,
                  }}
                >
                  병역
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1rem', textAlign: 'left' }}>
                  군필(육군 만기전역)
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 3, borderColor: isDarkMode ? '#2e7d32' : '#4caf50' }} />

            <Box>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 2, 
                  fontWeight: 'bold',
                  color: isDarkMode ? '#e8f5e8' : '#424242',
                }}
              >
                주요 기술스택
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {skills.map((skill, index) => (
                  <Chip 
                    key={index}
                    label={skill.label} 
                    color={skill.color as any}
                    variant="outlined"
                    size="small"
                    sx={{
                      borderColor: isDarkMode ? '#4caf50' : '#2e7d32',
                      color: isDarkMode ? '#4caf50' : '#2e7d32',
                      fontWeight: 'bold',
                      fontSize: '0.8rem',
                      '&:hover': {
                        backgroundColor: isDarkMode ? '#2e7d32' : '#4caf50',
                        color: 'white',
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          </AnimatedCard>
        </Box>
      </Box>
    </SectionContainer>
  );
};

export default ProfileSection; 