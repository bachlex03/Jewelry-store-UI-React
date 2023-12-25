import style from "./Address.module.scss";
import classNames from "classnames/bind";

import { Input, Button } from "~/components";

const cx = classNames.bind(style);

function Address() {
  return (
    <div className={cx("wrapper")}>
      <h3 className={cx("heading")}>Billing Addresses</h3>
      <div className="flex">
        <div className="w-100 pl-10 pr-10">
          <Input
            label="First name"
            placeholder="First name..."
            isRequired
            required
          />
        </div>
        <div className="w-100 pl-10 pr-10">
          <Input
            label="Last name"
            placeholder="Last name..."
            isRequired
            required
          />
        </div>
      </div>
      <div className="w-100 pl-10 pr-10 mt-15">
        <Input selection isRequired label="Country" />
      </div>
      <div className="w-100 pl-10 pr-10 mt-20">
        <Input selection isRequired label="Town / City" />
      </div>
      <div className="w-100 pl-10 pr-10 mt-15">
        <Input
          label="Street address"
          placeholder="Street address..."
          isRequired
          required
        />
      </div>
      <div className="w-100 pl-10 pr-10 mt-15">
        <Input label="Phone number" placeholder="(+84)" isRequired required />
      </div>
      <div className="w-100 pl-10 pr-10 mt-15">
        <Input
          label="Email address"
          placeholder="email@gmail.com"
          type="email"
          isRequired
          required
        />
      </div>

      <div className="mt-20 text-right">
        <Button bold hover>
          SAVE ADDRESSES
        </Button>
      </div>
    </div>
  );
}

export default Address;
