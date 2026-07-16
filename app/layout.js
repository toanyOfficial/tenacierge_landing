import "./globals.css";

export const metadata = {
  title: "컨시어지강남 | 숙소 현장 관리 서비스",
  description:
    "체크아웃 이후 다음 체크인 전까지 청소, 침구, 검수, 보고를 관리하는 숙소 현장 관리 서비스입니다.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
