import { HomeHeader, Footer } from "~/layouts/components";

function MainLayout({ children }) {
  return (
    <>
      <HomeHeader />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
}

export default MainLayout;
