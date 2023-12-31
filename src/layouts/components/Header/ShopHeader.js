import { SubHeader, Catalog, Breadcrumb, Action } from "./components";

function ShopHeader() {
  return (
    <header>
      <Action />
      <SubHeader />
      <Catalog />
      <Breadcrumb />
    </header>
  );
}

export default ShopHeader;
