import { SiteNoBreadcrumb, Footer } from "~/layouts/components";

function MainLayout({ children }) {
  return (
    <>
      <SiteNoBreadcrumb />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
}

export default MainLayout;
