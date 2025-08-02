// 공통 색상 변수 정의
export const colors = {
  // 다크 모드 색상
  dark: {
    primary: '#8B5CF6', // 보라색 계열
    secondary: '#A78BFA',
    accent: '#C4B5FD',
    background: {
      default: '#0F0F23',
      paper: '#1A1A2E',
      card: '#16213E',
    },
    text: {
      primary: '#E2E8F0',
      secondary: '#94A3B8',
      muted: '#64748B',
    },
    border: '#334155',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
  },
  
  // 라이트 모드 색상
  light: {
    primary: '#7C3AED',
    secondary: '#8B5CF6',
    accent: '#A78BFA',
    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF',
      card: '#F1F5F9',
    },
    text: {
      primary: '#1E293B',
      secondary: '#475569',
      muted: '#64748B',
    },
    border: '#E2E8F0',
    success: '#059669',
    warning: '#D97706',
    error: '#DC2626',
  }
};

// 그라데이션 설정
export const gradients = {
  primary: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
  secondary: 'linear-gradient(135deg, #A78BFA 0%, #C4B5FD 100%)',
  background: 'linear-gradient(135deg, #0F0F23 0%, #1A1A2E 100%)',
  card: 'linear-gradient(135deg, #1A1A2E 0%, #16213E 100%)',
};

// 그림자 설정
export const shadows = {
  small: '0 2px 8px rgba(139, 92, 246, 0.1)',
  medium: '0 4px 16px rgba(139, 92, 246, 0.15)',
  large: '0 8px 32px rgba(139, 92, 246, 0.2)',
  glow: '0 0 20px rgba(139, 92, 246, 0.3)',
}; 