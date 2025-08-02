import React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';
import {
  Lightbulb,
  Group,
  TrendingUp,
} from '@mui/icons-material';
import { useTheme } from '../../contexts/ThemeContext';
import SectionWrapper from '../common/SectionWrapper';
import AnimatedCard from '../common/AnimatedCard';
import { colors } from '../../theme/colors';

const AboutSection: React.FC = () => {
  const { isDarkMode } = useTheme();
  const themeColors = isDarkMode ? colors.dark : colors.light;

  const competencies = [
    {
      title: '빠른 학습력 및 응용력',
      icon: <Lightbulb />,
      description: '새로운 기술과 개념을 빠르게 습득하고 실제 프로젝트에 적용하는 능력',
      points: [
        '배운 내용을 곧바로 실전에 활용합니다.',
        '짧은 시간 안에 핵심을 파악합니다.',
        '기술 트렌드를 지속적으로 학습합니다.',
      ],
      color: 'primary' as const,
    },
    {
      title: '협업 및 소통 역량',
      icon: <Group />,
      description: '팀원들과의 효과적인 소통과 협업을 통한 프로젝트 성공',
      points: [
        '틀릴 수 있다는 마음으로 늘 겸손하려 합니다.',
        '충분한 소통이 협업에 중요하다고 믿습니다.',
        '모호함은 질문으로 바로 해소합니다.',
      ],
      color: 'secondary' as const,
    },
    {
      title: '주도적 개발 역량',
      icon: <TrendingUp />,
      description: '프로젝트의 전체적인 흐름을 파악하고 주도적으로 개발을 진행',
      points: [
        '전체 흐름을 보고, 무엇을 먼저 구현해야 하는지 판단합니다.',
        '문제를 스스로 정의하고, 불명확한 요구사항을 명확히 정의합니다.',
        '코드 품질과 성능 최적화에 관심을 가집니다.',
      ],
      color: 'success' as const,
    },
  ];

  return (
    <SectionWrapper id="about" title="자기소개">
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <AnimatedCard>
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.6,
              color: isDarkMode ? '#c8e6c9' : '#616161',
              fontSize: '1rem',
              textAlign: 'left',
            }}
          >
            항상 배우는 자세를 유지하며, 협업의 가치를 중요하게 생각하고 주도적으로 업무에 임하는 개발자 이지환입니다. <br />
            새로운 기술에 대한 호기심과 학습 의지가 강하며, 팀원들과의 원활한 소통을 통해 더 나은 결과물을 만들어내는 것을 목표로 합니다.
          </Typography>
        </AnimatedCard>

        <AnimatedCard>
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.6,
              color: isDarkMode ? '#c8e6c9' : '#616161',
              fontSize: '1rem',
              textAlign: 'left',
            }}
          >
            "코드는 사람이 읽기 쉽게, 유지보수가 용이하게, 그리고 확장 가능하게 작성해야 한다"는 믿음으로 개발하고 있습니다. <br />
            새로운 기술을 배우는 것을 즐기며, 팀원들과의 협업을 통해 함께 성장하는 개발 문화를 만들어가고 싶습니다.
          </Typography>
        </AnimatedCard>

        <Typography
          variant="h4"
          sx={{
            mt: 5,
            mb: 2,
            color: isDarkMode ? '#e8f5e8' : '#424242',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          핵심 역량
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {competencies.map((competency, index) => (
            <AnimatedCard key={index}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box
                  sx={{
                    color: themeColors.primary,
                    mr: 2,
                    fontSize: '1.5rem',
                  }}
                >
                  {competency.icon}
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'bold',
                    color: isDarkMode ? '#e8f5e8' : '#424242',
                  }}
                >
                  {competency.title}
                </Typography>
              </Box>
              
              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  color: isDarkMode ? '#c8e6c9' : '#616161',
                  lineHeight: 1.5,
                  fontSize: '0.95rem',
                  textAlign: 'left',
                }}
              >
                {competency.description}
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                {competency.points.map((point, pointIndex) => (
                  <Typography
                    key={pointIndex}
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
                    {point}
                  </Typography>
                ))}
              </Box>
            </AnimatedCard>
          ))}
        </Box>
      </Box>
    </SectionWrapper>
  );
};

export default AboutSection; 