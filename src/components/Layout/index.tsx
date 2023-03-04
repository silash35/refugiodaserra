import type { NextFont } from "@next/font";

import Footer from "./Footer";
import Header from "./Header";

interface Props {
  font: NextFont;
  children: React.ReactNode;
}

const Layout = ({ font, children }: Props) => {
  return (
    <div className={font.className} style={{ display: "contents" }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
