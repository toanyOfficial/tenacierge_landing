import "./globals.css";

export const metadata = {
  title: "Tenacierge | 숙소 현장 운영 관리",
  description:
    "Tenacierge는 체크아웃 후 다음 체크인까지 청소, 침구, 검수, 비품 확인, 시설 이슈를 연결해 관리하는 숙소 현장 운영 서비스입니다.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
