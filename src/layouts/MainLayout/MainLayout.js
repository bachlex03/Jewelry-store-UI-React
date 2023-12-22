import { SiteHeader, Footer, SideBar } from "~/layouts/components";

function MainLayout({ children }) {
  return (
    <>
      <SiteHeader />
      <main className="container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default MainLayout;
