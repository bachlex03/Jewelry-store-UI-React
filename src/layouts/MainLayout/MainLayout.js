import { SiteHeader, Footer, SideBar } from "~/layouts/components";

function MainLayout({ children }) {
  return (
    <>
      <SiteHeader />
      <main className="container flex">
        <div className="flex justify-between align-center section-1200">
          <SideBar />
          <div className="content">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
