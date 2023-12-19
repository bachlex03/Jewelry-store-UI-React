import { Header, Footer, SideBar } from "~/layouts/components";

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <div className="container">
        <SideBar />

        <div className="content">{children}</div>
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
