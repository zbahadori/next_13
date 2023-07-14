import "../styles/globals.css";

export const metadata = {
  title: "Next 13 File Shop",
  description: "Next 13 File Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
