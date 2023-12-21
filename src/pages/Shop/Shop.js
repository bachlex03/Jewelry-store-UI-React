import "./Shop.module.scss";

import Sidebar from "~/layouts/components/Sidebar";
import Product from "~/components/Product";

function Shop() {
  return (
    <>
      <div className="grid wide">
        <div className="row">
          <div className="col l-3">
            <Sidebar />
          </div>
          <div className="col l-9">
            <div className="row">
              <div className="col l-4">
                <Product sale />
              </div>
              <div className="col l-4">
                <Product />
              </div>
              <div className="col l-4">
                <Product />
              </div>
              <div className="col l-4">
                <Product />
              </div>
              <div className="col l-4">
                <Product />
              </div>
              <div className="col l-4">
                <Product />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;

{
  /* <div className="flex justify-between align-center section-1200">
          <SideBar />
        </div> */
}
