import React, {useState} from 'react';
import {
  Box,
  Typography,
  Chip,
} from '@mui/material';
import {
  Business,
  CalendarToday,
  Person,
  Code,
} from '@mui/icons-material';
import { useTheme } from '../../contexts/ThemeContext';
import SectionWrapper from '../common/SectionWrapper';
import AnimatedCard from '../common/AnimatedCard';
import DetailPopup from '../common/DetailPopup';
import { colors } from '../../theme/colors';

const ProjectsSection: React.FC = () => {
  const { isDarkMode } = useTheme();
  const themeColors = isDarkMode ? colors.dark : colors.light;
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedContentId, setSelectedContentId] = useState('');

  const handleProjectClick = (contentId: string) => {
    setSelectedContentId(contentId);
    setPopupOpen(true);
  };

  const projects = [
    {
      title: '신세계 홈쇼핑 프로모션 합의서 시스템',
      period: '2025.03 ~ 2025.07',
      client: '신세계 홈쇼핑',
      role: 'F/E(50%), B/E(100%)',
      description: '기존 프로모션 시스템에 합의서 기능 신규 구현',
      technologies: ['Extjs', 'Java', 'jQuery', 'OracleSQL', 'Mybatis', 'Jenkins'],
      id: 'project-shinsegae',
      tasks: [
        '합의서 생성 조건에 따른 자동 생성 로직 및 상태 관리 구현',
        '합의서 조회/교부/재교부/반려/승인 API 개발',
        '프론트엔드: 프로모션 합의서 목록 및 등록 페이지 추가',
      ],
    },
    {
      title: '계약 관리 시스템 기능 개선',
      period: '2024.11 ~ 2025.02',
      client: '도루코',
      role: 'F/E : 100%',
      description: '레거시 계약 관리 시스템 분석 및 요구사항 개발',
      technologies: ['React-typescript', 'Java (Spring Boot)', 'PostgreSQL'],
      id: 'project-dorco',
      tasks: [
        'UI 개선 작업 수행',
        '그룹웨어 SSO 로그인, 외부 수신자용 로그인 구현',
        '계약서 작성 시 내부결재 기능 프론트 반영',
        '오류 및 예외 처리 로직, Validation 로직 추가',
      ],
    },
    {
      title: '계약 관리 시스템',
      period: '2024.07 ~ 2024.11',
      client: '동국제강',
      role: 'F/E : 100%',
      description: '레거시 계약 관리 시스템 분석 및 요구사항 개발',
      technologies: ['React-typescript', 'Java (Spring Boot)', 'PostgreSQL'],
      id: 'project-dongkuk',
      tasks: [
        'UI 개선 작업 수행',
        '그룹웨어 SSO 로그인, 외부 수신자용 로그인 구현',
        '계약서 작성 시 내부결재 기능 프론트 반영',
        '오류 및 예외 처리 로직, Validation 로직 추가',
      ],
    },
  ];

  return (
    <SectionWrapper id="projects" title="프로젝트">
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {projects.map((project, index) => (
          <div onClick={project.id ? () => handleProjectClick(project.id || '') : undefined}>
            <AnimatedCard key={index}>
              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  fontWeight: 'bold',
                  color: themeColors.primary,
                }}
              >
                {project.title}
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CalendarToday sx={{ fontSize: '1rem', color: themeColors.primary }} />
                  <Typography variant="body2" sx={{ color: isDarkMode ? '#c8e6c9' : '#616161', fontWeight: 'bold', textAlign: 'left' }}>
                    {project.period}
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Business sx={{ fontSize: '1rem', color: themeColors.primary }} />
                  <Typography variant="body2" sx={{ color: isDarkMode ? '#c8e6c9' : '#616161', fontWeight: 'bold', textAlign: 'left' }}>
                    {project.client}
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Person sx={{ fontSize: '1rem', color: themeColors.primary }} />
                  <Typography variant="body2" sx={{ color: isDarkMode ? '#c8e6c9' : '#616161', fontWeight: 'bold', textAlign: 'left' }}>
                    {project.role}
                  </Typography>
                </Box>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  color: isDarkMode ? '#e8f5e8' : '#424242',
                  fontWeight: 'medium',
                  lineHeight: 1.5,
                  textAlign: 'left',
                }}
              >
                {project.description}
              </Typography>

              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <Code sx={{ fontSize: '1rem', color: themeColors.primary }} />
                  <Typography variant="subtitle2" sx={{ color: themeColors.primary, fontWeight: 'bold' }}>
                    활용 기술:
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {project.technologies.map((tech, techIndex) => (
                    <Chip
                      key={techIndex}
                      label={tech}
                      size="small"
                      color="primary"
                      variant="outlined"
                      sx={{
                        borderColor: themeColors.primary,
                        color: themeColors.primary,
                        fontWeight: 'bold',
                        fontSize: '0.7rem',
                        '&:hover': {
                          backgroundColor: themeColors.primary,
                          color: 'white',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>

              <Box>
                <Typography variant="subtitle2" sx={{ color: themeColors.primary, mb: 1, fontWeight: 'bold' }}>
                  담당업무:
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                  {project.tasks.map((task, taskIndex) => (
                    <Typography
                      key={taskIndex}
                      variant="body2"
                      sx={{
                        color: isDarkMode ? '#c8e6c9' : '#616161',
                        pl: 2,
                        position: 'relative',
                        lineHeight: 1.4,
                        textAlign: 'left',
                        '&::before': {
                          content: '"•"',
                          position: 'absolute',
                          left: 0,
                          color: themeColors.primary,
                          fontSize: '1.2rem',
                          fontWeight: 'bold',
                        },
                      }}
                    >
                      {task}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </AnimatedCard>
          </div>

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

export default ProjectsSection; 