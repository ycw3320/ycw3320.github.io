export const SITE = {
  website: "https://ycw3320.github.io/", // 배포 도메인
  author: "ycw3320",
  profile: "https://github.com/ycw3320",
  desc: "개발 기록과 생각을 남기는 블로그.",
  title: "ycw3320's blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "수정하기",
    url: "https://github.com/ycw3320/ycw3320.github.io/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "ko", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Seoul", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
