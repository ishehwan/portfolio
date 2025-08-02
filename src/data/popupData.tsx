import React from 'react';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import shinsegae from '../images/shinsegae.png';

// 팝업 데이터 타입 정의
export interface PopupDataItem {
  id: string;
  title: string;
  content: React.ReactNode;
  image?: string;
  imageAlt?: string;
}

// 팝업 데이터 정의
export const popupData: { [key: string]: PopupDataItem } = {
  // 기술 스택 관련 데이터
  'react-hooks': {
    id: 'react-hooks',
    title: 'React Hooks',
    content: (
      <Box>
        <Typography variant="body1" paragraph>
          컴포넌트 간 Props 전달을 통해 재사용 가능한 UI 컴포넌트를 구현하였고, JSX 문법을 기반으로 구조적이고 선언적인 UI를 설계하였습니다.
        </Typography>
        <Typography variant="body1">
          useState, useEffect, useContext 등 다양한 Hooks를 활용하여 상태 관리와 사이드 이펙트를 효율적으로 처리한 경험이 있습니다.
        </Typography>
      </Box>
    ),
  },
  'typescript': {
    id: 'typescript',
    title: 'TypeScript',
    content: (
      <Box>
        <Typography variant="body1" paragraph>
          TypeScript를 활용한 타입 안전성 확보 및 개발 생산성 향상 경험이 있으며, 인터페이스 정의, 제네릭 활용, 유니온 타입 등을 통한 견고한 코드 작성 경험이 있습니다.
        </Typography>
        <Typography variant="body1">
          props, state, API 응답 객체 등 구조적 타입 정의를 통해 코드의 오류를 사전에 방지한 경험이 있습니다.
        </Typography>
      </Box>
    ),
  },
  'java-spring': {
    id: 'java-spring',
    title: 'Java Spring',
    content: (
      <div>
        <p>Spring Boot를 활용한 RESTful API 개발 경험이 있으며, Spring Security를 통한 인증/인가 처리, JPA를 활용한 데이터베이스 연동 등 백엔드 개발 경험이 있습니다.</p>
        <p>MyBatis를 활용한 데이터베이스 연동 및 비즈니스 로직 개발 경험이 있습니다.</p>
      </div>
    ),
  },
  'node-express': {
    id: 'node-express',
    title: 'Node.js Express',
    content: (
      <div>
        <p>Node.js와 Express.js를 활용한 서버 개발 경험이 있으며, 미들웨어 활용, 라우팅 처리, 에러 핸들링 등 백엔드 API 개발 경험이 있습니다.</p>
        <p>비동기 처리와 이벤트 기반 프로그래밍을 통한 고성능 서버 구축 경험이 있습니다.</p>
      </div>
    ),
  },
  'postgresql-mongodb': {
    id: 'postgresql-mongodb',
    title: 'PostgreSQL & MongoDB',
    content: (
      <div>
        <p>PostgreSQL과 MongoDB를 활용한 데이터베이스 설계 및 쿼리 최적화 경험이 있으며, 관계형 및 NoSQL 데이터베이스의 특성을 이해하고 적절히 활용한 경험이 있습니다.</p>
        <p>인덱스 설계, 쿼리 최적화, 데이터 정규화 등을 통한 성능 향상 경험이 있습니다.</p>
      </div>
    ),
  },
  'aws-ec2': {
    id: 'aws-ec2',
    title: 'AWS EC2',
    content: (
      <div>
        <p>AWS EC2를 활용한 클라우드 서버 구축 및 배포 경험이 있으며, 인스턴스 관리, 보안 그룹 설정, 로드 밸런싱 등 클라우드 인프라 관리 경험이 있습니다.</p>
        <p>Auto Scaling, CloudWatch 등을 활용한 자동화된 인프라 관리 경험이 있습니다.</p>
      </div>
    ),
  },
  'git-svn': {
    id: 'git-svn',
    title: 'Git & SVN',
    content: (
      <div>
        <p>Git과 SVN을 활용한 버전 관리 및 협업 경험이 있으며, 브랜치 전략, 머지 충돌 해결, 코드 리뷰 등을 통한 팀 협업 효율성 향상 경험이 있습니다.</p>
        <p>Git Flow, GitHub Flow 등의 워크플로우를 활용한 체계적인 개발 프로세스 구축 경험이 있습니다.</p>
      </div>
    ),
  },
  'jenkins': {
    id: 'jenkins',
    title: 'Jenkins',
    content: (
      <div>
        <p>Jenkins를 활용한 CI/CD 파이프라인 구축 경험이 있으며, 자동화된 빌드, 테스트, 배포 프로세스 구축을 통한 개발 생산성 향상 경험이 있습니다.</p>
        <p>Docker와 연동한 컨테이너 기반 배포 및 Blue-Green 배포 전략 구현 경험이 있습니다.</p>
      </div>
    ),
  },
  'ftp-ssh': {
    id: 'ftp-ssh',
    title: 'FTP & SSH',
    content: (
      <div>
        <p>FTP와 SSH를 활용한 파일 전송 및 서버 접속 관리 경험이 있으며, 보안을 고려한 접속 방식 설정 및 서버 관리 경험이 있습니다.</p>
        <p>SSH 키 기반 인증 및 SFTP를 통한 안전한 파일 전송 시스템 구축 경험이 있습니다.</p>
      </div>
    ),
  },
  'server-monitoring': {
    id: 'server-monitoring',
    title: '서버 모니터링',
    content: (
      <div>
        <p>서버 모니터링 도구를 활용한 시스템 상태 관리 경험이 있으며, 로그 분석, 성능 모니터링, 알림 설정 등을 통한 안정적인 서비스 운영 경험이 있습니다.</p>
      </div>
    ),
  },
  'slack-teams': {
    id: 'slack-teams',
    title: 'Slack & Teams',
    content: (
      <div>
        <p>Slack과 Teams를 활용한 팀 커뮤니케이션 및 협업 경험이 있으며, 채널 관리, 봇 활용, 파일 공유 등을 통한 효율적인 팀 협업 경험이 있습니다.</p>
        <p>웹훅을 통한 자동 알림 시스템 구축 및 팀 생산성 향상을 위한 도구 활용 경험이 있습니다.</p>
      </div>
    ),
  },
  'tech-documentation': {
    id: 'tech-documentation',
    title: '기술 문서 작성',
    content: (
      <div>
        <p>기술 문서 작성 및 관리 경험이 있으며, API 문서화, 사용자 가이드, 개발 가이드 등을 통한 지식 공유 및 유지보수성 향상 경험이 있습니다.</p>
      </div>
    ),
  },
  'fast-learning': {
    id: 'fast-learning',
    title: '빠른 학습력',
    content: (
      <div>
        <p>새로운 기술과 개념을 빠르게 습득하고 적용하는 능력을 보유하고 있으며, 지속적인 학습을 통해 최신 기술 트렌드를 파악하고 실무에 적용하는 경험이 있습니다.</p>
        <p>온라인 강의, 기술 블로그, 오픈소스 프로젝트 참여 등을 통한 지속적인 자기계발을 실천하고 있습니다.</p>
      </div>
    ),
  },
  'collaboration-communication': {
    id: 'collaboration-communication',
    title: '협업 및 소통',
    content: (
      <div>
        <p>팀원들과의 효과적인 소통과 협업을 통한 프로젝트 성공 경험이 있으며, 코드 리뷰, 페어 프로그래밍, 기술 공유 등을 통한 팀 성장 기여 경험이 있습니다.</p>
      </div>
    ),
  },
  'proactive-development': {
    id: 'proactive-development',
    title: '주도적 개발',
    content: (
      <div>
        <p>프로젝트의 전체적인 흐름을 파악하고 주도적으로 개발을 진행하는 경험이 있으며, 문제 해결 능력과 의사결정 능력을 바탕으로 한 주도적 업무 수행 경험이 있습니다.</p>
        <p>기술적 의사결정, 아키텍처 설계, 코드 품질 개선 등을 주도적으로 수행한 경험이 있습니다.</p>
      </div>
    ),
  },
  'zustand': {
    id: 'zustand',
    title: 'Zustand',
    content: (
      <div>
        <p>Zustand를 사용한 간결한 상태 관리 구조를 설계하였고, 필요시 Redux 전환도 고려 가능한 구조로 구현한 경험이 있습니다.</p>
        <p>전역 상태 공유, 모듈화 구조 등에 익숙하며, React의 Context API와 비교하여 더 간단하고 효율적인 상태 관리 경험이 있습니다.</p>
      </div>
    ),
  },
  'react-excel': {
    id: 'react-excel',
    title: 'React Excel',
    content: (
      <div>
        <p>react-excel-renderer, xlsx 등의 라이브러리를 사용하여 엑셀 데이터 읽기/쓰기 기능을 구현한 경험이 있으며, 사용자로부터 파일을 받아 화면 출력 및 서버 전송 처리까지 개발하였습니다.</p>
        <p>엑셀 파일의 복잡한 데이터 구조를 파싱하고, 사용자 친화적인 인터페이스로 표시하는 기능을 구현한 경험이 있습니다.</p>
      </div>
    ),
  },

  // 프로젝트 관련 데이터
  'project-shinsegae': {
    id: 'project-shinsegae',
    title: '신세계 : 전자계약 온프레미스 구축',
    content: (
      <Box>
        <Typography variant="h6" gutterBottom>
          프로젝트 개요
        </Typography>
        <Typography variant="body1" paragraph>
          기존 프로모션 시스템에 합의서 기능을 신규 구현한 프로젝트입니다.
        </Typography>
        
        <Typography variant="h6" gutterBottom>
          담당 업무
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="합의서 생성 조건(프로모션 금액 변경 시)에 따라 자동 생성 로직 및 상태 관리 로직 구현" />
          </ListItem>
          <ListItem>
            <ListItemText primary="합의서 상태 및 변경에 따라 합의서 조회/교부/재교부/반려/승인 API 개발" />
          </ListItem>
          <ListItem>
            <ListItemText primary="프론트엔드 : 프로모션 합의서 목록 및 기존 프로모션 등록 페이지 합의서 정보 추가" />
          </ListItem>
        </List>
        
        <Typography variant="h6" gutterBottom>
          기술 스택
        </Typography>
        <Typography variant="body1" paragraph>
          Oracle SQL, MyBatis, Java Spring, React, TypeScript
        </Typography>
        
        <Typography variant="h6" gutterBottom>
          성과
        </Typography>
        <Typography variant="body1">
          Oracle_SQL, MyBatis 실무적용 및 비즈니스 로직 개발을 하며 좋은 경험이 되었던 프로젝트였습니다.
        </Typography>
      </Box>
    ),
    image: shinsegae,
    imageAlt: '신세계 프로젝트 스크린샷',
  },
  'project-dorco': {
    id: 'project-dorco',
    title: '도루코 : 전자계약 온프레미스 구축',
    content: (
      <Box>
        <Typography variant="h6" gutterBottom>
          프로젝트 개요
        </Typography>
        <Typography variant="body1" paragraph>
          도루코의 전자계약 시스템을 온프레미스 환경에 구축한 프로젝트입니다.
        </Typography>
        
        <Typography variant="h6" gutterBottom>
          담당 업무
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="그룹웨어 SSO 로그인, 외부 수신자용 로그인 (계약 조회)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="신규 내부결재 기능, 일부 화면(UI) 개선 작업 수행 (계약서 작성/조회 페이지 등)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="메뉴얼 / 테스트케이스 작성" />
          </ListItem>
        </List>
        
        <Typography variant="h6" gutterBottom>
          기술 스택
        </Typography>
        <Typography variant="body1">
          React-typescript, Java (Spring Boot), PostgreSQL, DBeaver
        </Typography>
      </Box>
    ),
    // image: '도루코',
    // imageAlt: '도루코 프로젝트 스크린샷',
  },
  'project-dongkuk': {
    id: 'project-dongkuk',
    title: '동국제강 : 전자계약 온프레미스 구축',
    content: (
      <Box>
        <Typography variant="h6" gutterBottom>
          프로젝트 개요
        </Typography>
        <Typography variant="body1" paragraph>
          동국제강의 전자계약 시스템을 온프레미스 환경에 구축한 프로젝트입니다.
        </Typography>
        
        <Typography variant="h6" gutterBottom>
          담당 업무
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="그룹웨어 SSO 로그인, 외부 수신자용 로그인 (계약 조회)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="신규 내부결재 기능, 일부 화면(UI) 개선 작업 수행 (계약서 작성/조회 페이지 등)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="메뉴얼 / 테스트케이스 작성" />
          </ListItem>
        </List>
        
        <Typography variant="h6" gutterBottom>
          기술 스택
        </Typography>
        <Typography variant="body1">
          React-typescript, Java (Spring Boot), PostgreSQL, DBeaver
        </Typography>
      </Box>
    ),
    // image: '동국제강',
    // imageAlt: '동국제강 프로젝트 스크린샷',
  },
};

// 데이터를 ID로 조회하는 함수
export const getPopupData = (id: string): PopupDataItem | undefined => {
  return popupData[id];
};

// 모든 데이터를 배열로 반환하는 함수
export const getAllPopupData = (): PopupDataItem[] => {
  return Object.values(popupData);
}; 