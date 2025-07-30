import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { useTheme } from '../../contexts/ThemeContext';

interface DetailPopupProps {
  open: boolean;
  onClose: () => void;
  contentId: string;
}

const DetailPopup: React.FC<DetailPopupProps> = ({ open, onClose, contentId }) => {
  const { isDarkMode } = useTheme();

  const getContent = (id: string) => {
    const contents: { [key: string]: { title: string; content: React.ReactNode } } = {
      'react-hooks': {
        title: 'react-hooks',
        content: (
          <Box>
            <Typography variant="body1" sx={{ color: isDarkMode ? '#c8e6c9' : '#616161' }}>
            컴포넌트 간 Props 전달을 통해 재사용 가능한 UI 컴포넌트를 구현하였고, JSX 문법을 기반으로 구조적이고 선언적인 UI를 설계하였습니다.
            </Typography>
          </Box>
        ),
      },
      'props-jsx': {
        title: 'props-jsx',
        content: (
          <Box>
            <Typography variant="body1" sx={{color: isDarkMode ? '#c8e6c9' : '#616161' }}>
            React Router를 사용한 싱글 페이지 애플리케이션(SPA) 라우팅 경험이 있으며, Context API를 활용하여 전역 상태 공유 및 권한 분기 처리 로직을 구현한 경험이 있습니다.
            </Typography>
          </Box>
        ),
      },
      'spa-router-context': {
        title: 'spa-router-context',
        content: (
          <Box>
            <Typography variant="body1" sx={{ color: isDarkMode ? '#c8e6c9' : '#616161' }}>
            컴포넌트 간 Props 전달을 통해 재사용 가능한 UI 컴포넌트를 구현하였고, JSX 문법을 기반으로 구조적이고 선언적인 UI를 설계하였습니다.
            </Typography>
          </Box>
        ),
      },
      'axios-fetch': {
        title: 'axios-fetch',
        content: (
          <Box>
            <Typography variant="body1" sx={{ color: isDarkMode ? '#c8e6c9' : '#616161' }}>
            Axios 및 Fetch API를 사용하여 RESTful API 연동을 수행했으며, 토큰 기반 인증, 에러 핸들링, 응답 데이터 처리 등 실무 환경에서 적용한 경험이 있습니다.
            </Typography>
          </Box>
        ),
      },
      'tanstack-query': {
        title: 'tanstack-query',
        content: (
          <Box> 
            <Typography variant="body1" sx={{ color: isDarkMode ? '#c8e6c9' : '#616161' }}>
            TanStack Query를 활용하여 비동기 API 호출, 데이터 캐싱, 로딩/에러 상태 관리 등을 구성해, 사용자 경험과 성능을 모두 고려한 구현 경험이 있습니다.
            </Typography>
          </Box>
        ),
      },
      'mui': {          
        title: 'mui',
        content: (
          <Box>
            <Typography variant="body1" sx={{ color: isDarkMode ? '#c8e6c9' : '#616161' }}>
            Material-UI 컴포넌트를 기반으로 한 일관된 UI 설계 및 빠른 개발 경험이 있으며, 커스텀 스타일링과 다크모드, 반응형 UI 구현을 함께 진행하였습니다.
            </Typography>   
          </Box>
        ),
      },
      'tailwind-css': {
        title: 'tailwind-css',
        content: (
          <Box>
            <Typography variant="body1" sx={{ color: isDarkMode ? '#c8e6c9' : '#616161' }}>
            유틸리티 클래스 기반의 Tailwind CSS를 통해 빠른 스타일 적용 및 반응형 UI 설계를 구현하였으며, 코드 유지보수성과 디자인 일관성을 동시에 확보하였습니다.
            </Typography>
          </Box>
        ),
      },
      'eslint-prettier': {
        title: 'eslint-prettier',
        content: (
          <Box>
            <Typography variant="body1" sx={{ color: isDarkMode ? '#c8e6c9' : '#616161' }}>
            🔹 Prettier
            팀 내 코드 스타일 일관성 유지를 위해 Prettier를 설정하고 적용하였으며, 자동 포맷팅을 통해 협업 생산성과 유지보수 효율성을 향상시켰습니다.
            </Typography>
            <Typography variant="body1" sx={{ color: isDarkMode ? '#c8e6c9' : '#616161' }}>
            🔹 ESLint
            ESLint를 활용하여 코드 품질을 체크하고, 불필요한 코드 제거 및 사전 오류 방지 작업을 통해 안정적인 코드 배포 경험이 있습니다.
            </Typography>
          </Box>
        ),
      },
      'react-typescript': {
        title: 'react-typescript',
        content: (
          <Box>
            <Typography variant="body1" sx={{ color: isDarkMode ? '#c8e6c9' : '#616161' }}>
            타입 안정성을 확보하기 위해 TypeScript를 적극 사용하였고, props, state, API 응답 객체 등 구조적 타입 정의를 통해 코드의 오류를 사전에 방지한 경험이 있습니다.
            </Typography>
          </Box>
        ),
      },
      'zustand': {
        title: 'zustand',
        content: (
          <Box>
            <Typography variant="body1" sx={{ color: isDarkMode ? '#c8e6c9' : '#616161' }}>
            Zustand를 사용한 간결한 상태 관리 구조를 설계하였고, 필요시 Redux 전환도 고려 가능한 구조로 구현한 경험이 있습니다. 전역 상태 공유, 모듈화 구조 등에 익숙합니다.
            </Typography>
          </Box>
        ),
      },
      'react-excel': {
        title: 'react-excel',
        content: (
          <Box>
            <Typography variant="body1" sx={{ color: isDarkMode ? '#c8e6c9' : '#616161' }}>
            react-excel-renderer, xlsx 등의 라이브러리를 사용하여 엑셀 데이터 읽기/쓰기 기능을 구현한 경험이 있으며, 사용자로부터 파일을 받아 화면 출력 및 서버 전송 처리까지 개발하였습니다.
            </Typography>
          </Box>
        ),
      },
    };

    return contents[id] || { title: '상세 내용', content: <Typography>내용을 찾을 수 없습니다.</Typography> };
  };

  const content = getContent(contentId);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          backgroundColor: isDarkMode ? '#1a2a1a' : '#ffffff',
          borderRadius: 3,
          border: `2px solid ${isDarkMode ? '#2e7d32' : '#4caf50'}`,
        },
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: isDarkMode ? '#e8f5e8' : '#424242',
          borderBottom: `1px solid ${isDarkMode ? '#2e7d32' : '#4caf50'}`,
        }}
      >
        {content.title}
        <Button
          onClick={onClose}
          sx={{
            minWidth: 'auto',
            p: 0.5,
            color: isDarkMode ? '#c8e6c9' : '#616161',
            '&:hover': {
              backgroundColor: isDarkMode ? '#2e7d32' : '#4caf50',
              color: '#ffffff',
            },
          }}
        >
          <Close />
        </Button>
      </DialogTitle>
      <DialogContent sx={{ p: 3 }}>
        {content.content}
      </DialogContent>
      <DialogActions sx={{ p: 2, borderTop: `1px solid ${isDarkMode ? '#2e7d32' : '#4caf50'}` }}>
        <Button
          onClick={onClose}
          variant="contained"
          sx={{
            background: isDarkMode 
              ? 'linear-gradient(45deg, #2e7d32, #4caf50)' 
              : 'linear-gradient(45deg, #4caf50, #66bb6a)',
            '&:hover': {
              background: isDarkMode 
                ? 'linear-gradient(45deg, #4caf50, #66bb6a)' 
                : 'linear-gradient(45deg, #2e7d32, #4caf50)',
            },
          }}
        >
          닫기
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DetailPopup; 