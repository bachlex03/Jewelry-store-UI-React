import { SiteHeader, Footer, SideBar } from "~/layouts/components";

function MainLayout({ children }) {
  return (
    <>
      <SiteHeader />
      <main className="container">
        <div className="w-100">{children}</div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default MainLayout;
