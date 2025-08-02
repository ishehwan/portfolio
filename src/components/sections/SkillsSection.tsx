import React, { useState } from 'react';
import {
  Box,
  Typography,
  Chip,
} from '@mui/material';
import {
  Code,
  Storage,
  Cloud,
  Build,
} from '@mui/icons-material';
import { useTheme } from '../../contexts/ThemeContext';
import SectionWrapper from '../common/SectionWrapper';
import AnimatedCard from '../common/AnimatedCard';
import DetailPopup from '../common/DetailPopup';
import { colors } from '../../theme/colors';

const SkillsSection: React.FC = () => {
  const { isDarkMode } = useTheme();
  const themeColors = isDarkMode ? colors.dark : colors.light;
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedContentId, setSelectedContentId] = useState('');

  const handleChipClick = (contentId: string) => {
    setSelectedContentId(contentId);
    setPopupOpen(true);
  };

  const skillCategories = [
    {
      title: '프론트엔드',
      icon: <Code />,
      skills: [
        { name: 'React Hooks', clickable: true, id: 'react-hooks' },
        { name: 'Props & JSX', clickable: true, id: 'props-jsx' },
        { name: 'SPA Router & Context API', clickable: true, id: 'spa-router-context' },
        { name: 'Axios / Fetch', clickable: true, id: 'axios-fetch' },
        { name: 'TanStack Query', clickable: true, id: 'tanstack-query' },
        { name: 'MUI (Material-UI)', clickable: true, id: 'mui' },
        { name: 'Tailwind CSS', clickable: true, id: 'tailwind-css' },
        { name: 'ESLint/Prettier', clickable: true, id: 'eslint-prettier' },
        { name: 'React + TypeScript', clickable: true, id: 'typescript' },
        { name: 'Zustand', clickable: true, id: 'zustand' },
        { name: 'React Excel', clickable: true, id: 'react-excel' },
      ],
      color: 'primary' as const,
    },
    {
      title: '백엔드',
      icon: <Storage />,
      skills: [
        { name: 'Java (Spring + JPA)', clickable: true, id: 'java-spring' },
        { name: 'Node.js (Express)', clickable: true, id: 'node-express' },
        { name: 'PostgreSQL, MongoDB', clickable: true, id: 'postgresql-mongodb' },
        { name: 'RESTful API 설계', clickable: true, id: 'restful-api' },
        { name: '세션 및 상태 관리', clickable: true, id: 'session-state' },
      ],
      color: 'secondary' as const,
    },
    {
      title: 'DevOps',
      icon: <Cloud />,
      skills: [
        // { name: 'AWS EC2, GCP', clickable: true, id: 'aws-ec2' },
        { name: 'Git/SVN 협업', clickable: true, id: 'git-svn' },
        // { name: 'Jenkins 배포', clickable: true, id: 'jenkins' },
        { name: 'FTP, SSH', clickable: true, id: 'ftp-ssh' },
        // { name: '서버 모니터링', clickable: true, id: 'server-monitoring' },
      ],
      color: 'success' as const,
    },
    {
      title: '기타 역량',
      icon: <Build />,
      skills: [
        { name: 'Slack, Teams', clickable: true, id: 'slack-teams' },
        { name: '기술 문서 작성', clickable: true, id: 'tech-documentation' },
        { name: '빠른 학습력', clickable: true, id: 'fast-learning' },
        { name: '협업 및 소통', clickable: true, id: 'collaboration-communication' },
        { name: '주도적 개발', clickable: true, id: 'proactive-development' },
      ],
      color: 'info' as const,
    },
  ];

  return (
    <SectionWrapper id="skills" title="기술스택">
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {skillCategories.map((category, index) => (
          <AnimatedCard key={index}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                              <Box
                  sx={{
                    color: themeColors.primary,
                    mr: 2,
                    fontSize: '1.5rem',
                  }}
                >
                {category.icon}
              </Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  color: isDarkMode ? '#e8f5e8' : '#424242',
                }}
              >
                {category.title}
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {category.skills.map((skill, skillIndex) => (
                <Chip
                  key={skillIndex}
                  label={skill.name}
                  color={category.color}
                  variant="outlined"
                  size="small"
                  onClick={skill.clickable ? () => handleChipClick(skill.id || '') : undefined}
                  sx={{
                    borderColor: themeColors.primary,
                    color: themeColors.primary,
                    fontWeight: 'bold',
                    fontSize: '0.8rem',
                    cursor: skill.clickable ? 'pointer' : 'default',
                    '&:hover': skill.clickable ? {
                      backgroundColor: themeColors.primary,
                      // color: 'white',
                    } : {},
                  }}
                />
              ))}
            </Box>
          </AnimatedCard>
        ))}

      </Box>
      
      <DetailPopup
        open={popupOpen}
        onClose={() => setPopupOpen(false)}
        contentId={selectedContentId}
      />
    </SectionWrapper>
  );
};

export default SkillsSection; 