import { Header, Footer } from "~/components/layouts/components";

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
