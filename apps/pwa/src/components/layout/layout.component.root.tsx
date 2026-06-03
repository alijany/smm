import { Footer } from "@/components/layout/layout.component.footer";
import { Navbar } from "@/components/layout/layout.component.navbar";

interface RootLayoutProps {
  children: React.ReactNode;
  navbarTransparent?: boolean;
  heroBg?: boolean;
}

export function RootLayout({ children, navbarTransparent, heroBg }: RootLayoutProps) {
  return (
    <div className="overflow-x-hidden">
      <div
        className={
          heroBg
            ? "hero-wrapper"
            : undefined
        }
      >
        <Navbar transparent={navbarTransparent} />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
