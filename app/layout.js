import "./globals.css";

export const metadata = {
  title: "컨시어지강남 | 숙소 현장 관리 서비스",
  description:
    "에어비앤비·부킹닷컴 호스트를 위한 숙소 현장 관리 서비스입니다. 체크아웃 이후 다음 체크인 전까지 청소, 침구, 검수, 보고를 하나의 흐름으로 관리합니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
