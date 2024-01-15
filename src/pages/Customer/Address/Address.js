import style from "./Address.module.scss";
import classNames from "classnames/bind";

import { useAuth } from "~/hooks/useAuth";
import { Input, Button } from "~/components";
import { useState } from "react";

const cx = classNames.bind(style);

function Address() {
  const auth = useAuth();
  let user = auth.user;

  const [form, setForm] = useState({
    firstName: user ? user.firstName : "",
    lastName: user ? user.lastName : "",
    addressLine: user ? user.addressLine : "",
    phoneNumber: user ? user.phoneNumber : "",
  });

  const { firstName, lastName, addressLine, phoneNumber } = form;

  const handleForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={cx("wrapper")}>
      <h3 className={cx("heading")}>Billing Addresses</h3>
      <div className="flex">
        <div className="w-100 pl-10 pr-10">
          <Input
            name="firstName"
            label="First name"
            placeholder="First name..."
            isRequired
            required
            value={firstName ? firstName : user ? user.firstName : firstName}
            onChange={handleForm}
          />
        </div>
        <div className="w-100 pl-10 pr-10">
          <Input
            name="lastName"
            label="Last name"
            placeholder="Last name..."
            isRequired
            required
            value={lastName ? lastName : user ? user.lastName : lastName}
            onChange={handleForm}
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
          name="addressLine"
          label="Street address"
          placeholder="Street address..."
          isRequired
          required
          value={
            addressLine ? addressLine : user ? user.addressLine : addressLine
          }
          onChange={handleForm}
        />
      </div>
      <div className="w-100 pl-10 pr-10 mt-15">
        <Input
          name="phoneNumber"
          label="Phone number"
          placeholder="(+84)"
          isRequired
          required
          value={
            phoneNumber ? phoneNumber : user ? user.phoneNumber : phoneNumber
          }
          onChange={handleForm}
        />
      </div>
      <div className="w-100 pl-10 pr-10 mt-15">
        <Input
          name="email"
          label="Email address"
          placeholder="email@gmail.com"
          type="email"
          isRequired
          required
          value={user ? user.email : ""}
          onChange={(e) => {}}
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
