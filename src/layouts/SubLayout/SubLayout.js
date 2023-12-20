import { SiteHeader, Footer } from "~/layouts/components";

function MainLayout({ children }) {
  return (
    <>
      <SiteHeader />
      <div className="container">
        <div className="content">{children}</div>
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
