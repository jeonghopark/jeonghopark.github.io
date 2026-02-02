# JeongHo Park's Portfolio & Blog

**Astro**, **Tailwind CSS**, **Three.js**로 구축된 모던 포트폴리오 웹사이트입니다.

## 주요 기능 (Features)
- 🚀 **고성능**: Astro의 SSG(Static Site Generation)를 통한 빠른 로딩 속도.
- 🎨 **모던 디자인**: 미니멀한 흑백(Monochrome) 테마와 깔끔한 타이포그래피.
- 🧊 **인터랙티브 3D**: Three.js를 활용한 크리에이티브 코딩 쇼케이스 통합.
- 📝 **MDX 지원**: 블로그 포스트 내에서 인터랙티브 컴포넌트(React/Three.js 등) 바로 사용 가능.
- 📱 **반응형**: 모바일 및 데스크탑 최적화.

## 시작하기 (Getting Started)

1. **의존성 설치 (Install dependencies):**
   ```bash
   npm install
   ```

2. **개발 서버 실행 (Start the development server):**
   ```bash
   npm run dev
   ```
   브라우저에서 [http://localhost:4321](http://localhost:4321)을 열어 확인하세요.

3. **프로덕션 빌드 (Build for production):**
   ```bash
   npm run build
   ```
   `dist/` 폴더에 정적 파일이 생성됩니다. 이 폴더를 GitHub Pages 등에 배포하면 됩니다.

## 프로젝트 구조 (Project Structure)
- `src/content/blog`: 블로그 게시물 (Markdown/MDX).
- `src/components`: 재사용 가능한 컴포넌트 (Header, Footer, ThreeCanvas 등).
- `src/pages`: 웹사이트 페이지 (`index.astro`, `blog/[...slug].astro`).
- `src/styles`: 전역 CSS 및 Tailwind 설정.
