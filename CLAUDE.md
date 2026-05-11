# 프로젝트 컨텍스트 (CLAUDE.md)

## 개요
개인 개발 블로그. AstroPaper v5.5.1 템플릿 기반 정적 사이트.

- **URL**: https://ycw3320.github.io/
- **리포**: https://github.com/ycw3320/ycw3320.github.io (public)
- **소유자**: ycw3320

## 기술 스택
- **프레임워크**: Astro v5 (정적 사이트 생성)
- **템플릿**: AstroPaper v5.5.1
- **스타일**: Tailwind CSS v4 (`@tailwindcss/vite` 플러그인)
- **언어**: TypeScript
- **검색**: Pagefind (빌드 후 정적 인덱스 생성)
- **OG 이미지**: Satori + Sharp (동적 생성)
- **코드 하이라이트**: Shiki (min-light / night-owl 테마)

## 빌드 및 명령어
```bash
npm run dev        # 로컬 개발 서버 (http://localhost:4321)
npm run build      # 프로덕션 빌드 (astro check → astro build → pagefind)
npm run preview    # 빌드 결과 미리보기
npm run format     # Prettier 포맷팅
npm run lint       # ESLint 검사
```

## 배포
- **플랫폼**: GitHub Pages
- **방식**: GitHub Actions 자동 배포 (`.github/workflows/deploy.yml`)
- **트리거**: `main` 브랜치 푸시 시 자동 빌드·배포 (~1분 소요)
- **Actions**: `withastro/action@v6` → `actions/deploy-pages@v5`

## 프로젝트 구조 (주요 경로)
```
src/
├── config.ts          # SITE 전역 설정 (URL, 제목, 저자, 언어, 타임존 등)
├── constants.ts       # SOCIALS 링크, SHARE_LINKS
├── data/blog/         # 블로그 포스트 (.md 파일)
│   ├── examples/      # 예제 포스트
│   └── _releases/     # AstroPaper 릴리즈 노트 (정리 대상)
├── components/        # Astro/React 컴포넌트
├── layouts/           # 페이지 레이아웃
├── pages/             # 라우팅 페이지 (.astro)
├── styles/            # 전역 스타일
└── utils/             # 유틸리티 (슬러그, OG 템플릿, 포스트 필터 등)
```

## 설정 파일 위치
- `src/config.ts` — 사이트 메타데이터 (website, author, title, desc, lang, timezone)
- `src/constants.ts` — 소셜 링크 배열 (현재 GitHub만 활성, X/LinkedIn/Mail 주석 처리)
- `astro.config.ts` — Astro 빌드 설정, Shiki, Tailwind, 실험적 폰트
- `.claude/settings.local.json` — Claude Code 권한 (gitignore됨, PC별 별도 생성 필요)

## 포스트 작성 규칙
- 위치: `src/data/blog/` 에 `.md` 파일
- 프론트매터 필수: `title`, `description`, `pubDatetime`
- 선택: `tags`, `featured`, `draft`, `modDatetime`
- `draft: true` → 빌드에서 제외

## 현재 상태 및 남은 작업
- [x] 리포 생성 및 GitHub Pages 배포 완료
- [x] 사이트 정보 개인화 (config.ts, constants.ts)
- [x] GitHub Actions 자동 배포 워크플로 구성
- [ ] 샘플 포스트 정리 — `src/data/blog/` 의 AstroPaper 기본 포스트 삭제 또는 교체
- [ ] About 페이지 작성
- [ ] OG 이미지 교체 (`public/astropaper-og.jpg`)
- [ ] 커스텀 도메인 연결 (선택)
- [ ] Giscus 댓글 시스템 연동 (선택)

## 주의사항
- `gh` CLI 경로: `"C:\Program Files\GitHub CLI\gh.exe"` (PowerShell 에서 `&` 연산자로 호출)
- OAuth scope: `workflow` 추가 완료 상태여야 deploy.yml 푸시 가능 (`gh auth refresh --scopes workflow`)
- `.claude/settings.local.json` 은 gitignore됨. 새 PC에서는 별도 생성 필요 (권한 허용 룰 포함)
