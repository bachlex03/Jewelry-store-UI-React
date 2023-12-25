import style from "./CustomerLayout.module.scss";
import classNames from "classnames/bind";

import { CustomerSidebar, SiteHeader, Footer } from "~/layouts/components";

const cx = classNames.bind(style);

function CustomerLayout({ children }) {
  return (
    <>
      <SiteHeader />
      <main className="container">
        <div className="flex section-1200">
          <CustomerSidebar />
          <div className="w-100">{children}</div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default CustomerLayout;
