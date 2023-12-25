import style from "./Detail.module.scss";
import classNames from "classnames/bind";

import { Input, Button } from "~/components";

const cx = classNames.bind(style);

function Detail() {
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
        <Input
          label="Display name"
          placeholder="example..."
          type="text"
          note="This will be how your name will be displayed in the account section and in reviews"
        />
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

      <div className={cx("wrapper", "password", "mt-15")}>
        <h3 className={cx("heading")}>Change password</h3>

        <div className="w-100 pl-10 pr-10 mt-15">
          <Input
            label="Current password"
            placeholder="Current password..."
            type="text"
          />
        </div>

        <div className="w-100 pl-10 pr-10 mt-15">
          <Input
            label="New password"
            placeholder="New password..."
            type="text"
          />
        </div>

        <div className="w-100 pl-10 pr-10 mt-15">
          <Input
            label="Confirm new password"
            placeholder="Confirm new password..."
            type="text"
          />
        </div>
      </div>

      <div className="mt-20 text-right">
        <Button bold hover>
          SAVE ACCOUNT
        </Button>
      </div>
    </div>
  );
}

export default Detail;
