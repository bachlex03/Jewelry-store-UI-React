import { Header, Footer } from "~/layouts/components";

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
