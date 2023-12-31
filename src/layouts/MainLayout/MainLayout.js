import { ShopHeader, Footer } from "~/layouts/components";

function MainLayout({ children }) {
  return (
    <>
      <ShopHeader />
      <main className="container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default MainLayout;
