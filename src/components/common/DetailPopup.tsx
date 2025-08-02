import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Paper,
} from '@mui/material';
import { Close, ZoomIn } from '@mui/icons-material';
import { useTheme } from '../../contexts/ThemeContext';
import { colors } from '../../theme/colors';
import { getPopupData } from '../../data/popupData';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface DetailPopupProps {
  open: boolean;
  onClose: () => void;
  contentId: string;
  data?: PopupData;
}

interface PopupData {
  title: string;
  content: React.ReactNode;
  image?: string;
  imageAlt?: string;
}

const DetailPopup: React.FC<DetailPopupProps> = ({ open, onClose, contentId, data }) => {
  const { isDarkMode } = useTheme();
  const themeColors = isDarkMode ? colors.dark : colors.light;
  const settingColor = themeColors.text.secondary;
  const settingBorderColer = themeColors.primary;
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // 기본 콘텐츠 데이터 (기존 내용 유지)
  const defaultContents: { [key: string]: PopupData } = {
    'react-hooks': {
      title: 'react-hooks',
      content: (
        <Box>
          <Typography variant="body1" sx={{ color: settingColor }}>
            컴포넌트 간 Props 전달을 통해 재사용 가능한 UI 컴포넌트를 구현하였고, JSX 문법을 기반으로 구조적이고 선언적인 UI를 설계하였습니다.
          </Typography>
        </Box>
      ),
    },
    'props-jsx': {
      title: 'props-jsx',
      content: (
        <Box>
          <Typography variant="body1" sx={{color: settingColor }}>
            React Router를 사용한 싱글 페이지 애플리케이션(SPA) 라우팅 경험이 있으며, Context API를 활용하여 전역 상태 공유 및 권한 분기 처리 로직을 구현한 경험이 있습니다.
          </Typography>
        </Box>
      ),
    },
    'spa-router-context': {
      title: 'spa-router-context',
      content: (
        <Box>
          <Typography variant="body1" sx={{ color: settingColor }}>
            컴포넌트 간 Props 전달을 통해 재사용 가능한 UI 컴포넌트를 구현하였고, JSX 문법을 기반으로 구조적이고 선언적인 UI를 설계하였습니다.
          </Typography>
        </Box>
      ),
    },
    'axios-fetch': {
      title: 'axios-fetch',
      content: (
        <Box>
          <Typography variant="body1" sx={{ color: settingColor }}>
            Axios 및 Fetch API를 사용하여 RESTful API 연동을 수행했으며, 토큰 기반 인증, 에러 핸들링, 응답 데이터 처리 등 실무 환경에서 적용한 경험이 있습니다.
          </Typography>
        </Box>
      ),
    },
    'tanstack-query': {
      title: 'tanstack-query',
      content: (
        <Box> 
          <Typography variant="body1" sx={{ color: settingColor }}>
            TanStack Query를 활용하여 비동기 API 호출, 데이터 캐싱, 로딩/에러 상태 관리 등을 구성해, 사용자 경험과 성능을 모두 고려한 구현 경험이 있습니다.
          </Typography>
        </Box>
      ),
    },
    'mui': {          
      title: 'mui',
      content: (
        <Box>
          <Typography variant="body1" sx={{ color: settingColor }}>
            Material-UI 컴포넌트를 기반으로 한 일관된 UI 설계 및 빠른 개발 경험이 있으며 DataGrid및 ,커스텀 스타일링과 다크모드, 반응형 UI 구현을 함께 진행하였습니다.
          </Typography>   
        </Box>
      ),
    },
    'tailwind-css': {
      title: 'tailwind-css',
      content: (
        <Box>
          <Typography variant="body1" sx={{ color: settingColor }}>
            유틸리티 클래스 기반의 Tailwind CSS를 통해 빠른 스타일 적용 및 반응형 UI 설계를 구현하였으며, 코드 유지보수성과 디자인 일관성을 동시에 확보하였습니다.
          </Typography>
        </Box>
      ),
    },
    'eslint-prettier': {
      title: 'eslint-prettier',
      content: (
        <Box>
          <Typography variant="body1" sx={{ color: settingColor }}>
            ESLint와 Prettier를 통한 코드 품질 관리 및 일관된 코드 스타일 유지 경험이 있으며, 팀 프로젝트에서 코드 리뷰 및 협업 효율성을 높이는 데 기여하였습니다.
          </Typography>
        </Box>
      ),
    },
    'typescript': {
      title: 'typescript',
      content: (
        <Box>
          <Typography variant="body1" sx={{ color: settingColor }}>
            TypeScript를 활용한 타입 안전성 확보 및 개발 생산성 향상 경험이 있으며, 인터페이스 정의, 제네릭 활용, 유니온 타입 등을 통한 견고한 코드 작성 경험이 있습니다.
          </Typography>
        </Box>
      ),
    },
    'java-spring': {
      title: 'java-spring',
      content: (
        <Box>
          <Typography variant="body1" sx={{ color: settingColor }}>
            Spring Boot를 활용한 RESTful API 개발 경험이 있으며, Spring Security를 통한 인증/인가 처리, JPA를 활용한 데이터베이스 연동 등 백엔드 개발 경험이 있습니다.
          </Typography>
        </Box>
      ),
    },
    'node-express': {
      title: 'node-express',
      content: (
        <Box>
          <Typography variant="body1" sx={{ color: settingColor }}>
            Node.js와 Express.js를 활용한 서버 개발 경험이 있으며, 미들웨어 활용, 라우팅 처리, 에러 핸들링 등 백엔드 API 개발 경험이 있습니다.
          </Typography>
        </Box>
      ),
    },
    'postgresql-mongodb': {
      title: 'postgresql-mongodb',
      content: (
        <Box>
          <Typography variant="body1" sx={{ color: settingColor }}>
            PostgreSQL과 MongoDB를 활용한 데이터베이스 설계 및 쿼리 최적화 경험이 있으며, 관계형 및 NoSQL 데이터베이스의 특성을 이해하고 적절히 활용한 경험이 있습니다.
          </Typography>
        </Box>
      ),
    },
    'restful-api': {
      title: 'restful-api',
      content: (
        <Box>
          <Typography variant="body1" sx={{ color: settingColor }}>
            RESTful API 설계 원칙을 준수하여 개발한 경험이 있으며, HTTP 메서드 활용, 상태 코드 관리, API 문서화 등을 통한 표준화된 API 개발 경험이 있습니다.
          </Typography>
        </Box>
      ),
    },
    'session-state': {
      title: 'session-state',
      content: (
        <Box>
          <Typography variant="body1" sx={{ color: settingColor }}>
            세션 기반 인증 및 상태 관리 구현 경험이 있으며, JWT 토큰 활용, 세션 스토리지 관리, 보안을 고려한 상태 관리 등 실무 환경에서 적용한 경험이 있습니다.
          </Typography>
        </Box>
      ),
    },
    'aws-ec2': {
      title: 'aws-ec2',
      content: (
        <Box>
          <Typography variant="body1" sx={{ color: settingColor }}>
            AWS EC2를 활용한 클라우드 서버 구축 및 배포 경험이 있으며, 인스턴스 관리, 보안 그룹 설정, 로드 밸런싱 등 클라우드 인프라 관리 경험이 있습니다.
          </Typography>
        </Box>
      ),
    },
    'git-svn': {
      title: 'git-svn',
      content: (
        <Box>
          <Typography variant="body1" sx={{ color: settingColor }}>
            Git과 SVN을 활용한 버전 관리 및 협업 경험이 있으며, 브랜치 전략, 머지 충돌 해결, 코드 리뷰 등을 통한 팀 협업 효율성 향상 경험이 있습니다.
          </Typography>
        </Box>
      ),
    },
    'jenkins': {
      title: 'jenkins',
      content: (
        <Box>
          <Typography variant="body1" sx={{ color: settingColor }}>
            Jenkins를 활용한 CI/CD 파이프라인 구축 경험이 있으며, 자동화된 빌드, 테스트, 배포 프로세스 구축을 통한 개발 생산성 향상 경험이 있습니다.
          </Typography>
        </Box>
      ),
    },
    'ftp-ssh': {
      title: 'ftp-ssh',
      content: (
        <Box>
          <Typography variant="body1" sx={{ color: settingColor }}>
            FTP와 SSH를 활용한 파일 전송 및 서버 접속 관리 경험이 있으며, 보안을 고려한 접속 방식 설정 및 서버 관리 경험이 있습니다.
          </Typography>
        </Box>
      ),
    },
    'server-monitoring': {
      title: 'server-monitoring',
      content: (
        <Box>
          <Typography variant="body1" sx={{ color: settingColor }}>
            서버 모니터링 도구를 활용한 시스템 상태 관리 경험이 있으며, 로그 분석, 성능 모니터링, 알림 설정 등을 통한 안정적인 서비스 운영 경험이 있습니다.
          </Typography>
        </Box>
      ),
    },
    'slack-teams': {
      title: 'slack-teams',
      content: (
        <Box>
          <Typography variant="body1" sx={{ color: settingColor }}>
            Slack과 Teams를 활용한 팀 커뮤니케이션 및 협업 경험이 있으며, 채널 관리, 봇 활용, 파일 공유 등을 통한 효율적인 팀 협업 경험이 있습니다.
          </Typography>
        </Box>
      ),
    },
    'tech-documentation': {
      title: 'tech-documentation',
      content: (
        <Box>
          <Typography variant="body1" sx={{ color: settingColor }}>
            기술 문서 작성 및 관리 경험이 있으며, API 문서화, 사용자 가이드, 개발 가이드 등을 통한 지식 공유 및 유지보수성 향상 경험이 있습니다.
          </Typography>
        </Box>
      ),
    },
    'fast-learning': {
      title: 'fast-learning',
      content: (
        <Box>
          <Typography variant="body1" sx={{ color: settingColor }}>
            새로운 기술과 개념을 빠르게 습득하고 적용하는 능력을 보유하고 있으며, 지속적인 학습을 통해 최신 기술 트렌드를 파악하고 실무에 적용하는 경험이 있습니다.
          </Typography>
        </Box>
      ),
    },
    'collaboration-communication': {
      title: 'collaboration-communication',
      content: (
        <Box>
          <Typography variant="body1" sx={{ color: settingColor }}>
            팀원들과의 효과적인 소통과 협업을 통한 프로젝트 성공 경험이 있으며, 코드 리뷰, 페어 프로그래밍, 기술 공유 등을 통한 팀 성장 기여 경험이 있습니다.
          </Typography>
        </Box>
      ),
    },
    'proactive-development': {
      title: 'proactive-development',
      content: (
        <Box>
          <Typography variant="body1" sx={{ color: settingColor }}>
            프로젝트의 전체적인 흐름을 파악하고 주도적으로 개발을 진행하는 경험이 있으며, 문제 해결 능력과 의사결정 능력을 바탕으로 한 주도적 업무 수행 경험이 있습니다.
          </Typography>
        </Box>
      ),
    },
    'project-shinsegae': {
      title: '신세계 : 전자계약 온프레미스 구축',
      content: (
        <Box>
          <Typography variant="body1" sx={{ color: settingColor }}>
            Oracle_SQL, MyBatis 실무적용 및 비즈니스 로직 개발을 하며 좋은 경험이 되었던 프로젝트였다.
          </Typography>
        </Box>
      ),
    },
    'project-dorco': {
      title: '도루코 : 전자계약 온프레미스 구축',
      content: (
        <Box>
          <Typography variant="body1" sx={{ color: settingColor }}>
            react-excel-renderer, xlsx 등의 라이브러리를 사용하여 엑셀 데이터 읽기/쓰기 기능을 구현한 경험이 있으며, 사용자로부터 파일을 받아 화면 출력 및 서버 전송 처리까지 개발하였습니다.
          </Typography>
        </Box>
      ),
    },
    'project-dongkuk': {
      title: '동국제강 : 전자계약 온프레미스 구축',
      content: (
        <Box>
          <Typography>
            react-excel-renderer, xlsx 등의 라이브러리를 사용하여 엑셀 데이터 읽기/쓰기 기능을 구현한 경험이 있으며, 사용자로부터 파일을 받아 화면 출력 및 서버 전송 처리까지 개발하였습니다.
          </Typography>
        </Box>
      ),
    },
  };

  // data prop이 있으면 우선 사용, 없으면 외부 데이터에서 찾기, 마지막으로 기본 콘텐츠에서 찾기
  const externalData = getPopupData(contentId);
  const content: PopupData = data || (externalData ? {
    title: externalData.title,
    content: externalData.content,
    image: externalData.image,
    imageAlt: externalData.imageAlt
  } : null) || defaultContents[contentId] || { 
    title: '상세 내용', 
    content: <Typography>내용을 찾을 수 없습니다.</Typography> 
  };

  return (
    <>
      <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          backgroundColor: themeColors.background.paper,
          borderRadius: 3,
          border: `2px solid ${settingBorderColer}`,
        },
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: themeColors.text.primary,
          borderBottom: `1px solid ${settingBorderColer}`,
        }}
      >
        {content.title}
        <Button
          onClick={onClose}
          sx={{
            minWidth: 'auto',
            p: 0.5,
            color: settingColor,
            '&:hover': {
              backgroundColor: settingBorderColer,
              color: '#ffffff',
            },
          }}
        >
          <Close />
        </Button>
      </DialogTitle>
      <DialogContent sx={{ p: 3 }}>
        {content.image && (
          <Box sx={{ mb: 2, textAlign: 'center', position: 'relative' }}>
            <Box
              component="img"
              src={content.image}
              alt={content.imageAlt || content.title}
              sx={{
                maxWidth: '100%',
                maxHeight: '300px',
                borderRadius: 2,
                objectFit: 'contain',
                cursor: 'pointer',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.02)',
                },
              }}
              onClick={() => setLightboxOpen(true)}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                borderRadius: '50%',
                width: 32,
                height: 32,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease-in-out',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                },
              }}
              onClick={() => setLightboxOpen(true)}
            >
              <ZoomIn sx={{ color: 'white', fontSize: 18 }} />
            </Box>
          </Box>
        )}
        <Box sx={{ color: settingColor }}>
          {content.content}
        </Box>
      </DialogContent>
      <DialogActions sx={{ p: 2, borderTop: `1px solid ${settingBorderColer}` }}>
        <Button
          onClick={onClose}
          variant="contained"
          sx={{
            background: `linear-gradient(45deg, ${themeColors.primary}, ${themeColors.secondary})`,
            '&:hover': {
              background: `linear-gradient(45deg, ${themeColors.secondary}, ${themeColors.accent})`,
            },
          }}
        >
          닫기
        </Button>
      </DialogActions>
    </Dialog>
    
    {/* Lightbox for image zoom */}
    {content.image && (
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={[{ src: content.image!, alt: content.imageAlt || content.title || '' }]}
        carousel={{
          finite: true,
        }}
        animation={{
          fade: 300,
        }}
        controller={{
          closeOnBackdropClick: true,
          closeOnPullDown: true,
        }}
        render={{
          buttonPrev: lightboxOpen ? undefined : () => null,
          buttonNext: lightboxOpen ? undefined : () => null,
        }}
      />
    )}
  </>
  );
};

export default DetailPopup; 