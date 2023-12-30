import styles from "./Contact.module.scss";
import classNames from "classnames/bind";

import images from "~/assets/images";
import { ServiceItem, Input, Button } from "~/components";

const cx = classNames.bind(styles);

function Contact() {
  return (
    <div>
      <div className="section-1200">
        <div className={cx("wrapper")}>
          <div className="text-center">
            <h2 className={cx("title")}>Let us know what you have in mind</h2>
            <p className={cx("sub-title")}>
              Visit our shop to see amazing creations from our designers
            </p>
          </div>

          <div className={cx("service-wrapper", "flex justify-around")}>
            <ServiceItem
              heading="Store Location:"
              imgSrc={images.clock}
              desc="19749 London"
            />
            <ServiceItem
              heading="Call number:"
              imgSrc={images.clock}
              desc="+44 (0) 800 123 4567"
            />
            <ServiceItem
              heading="Email:"
              imgSrc={images.mail}
              desc="info@diamondcity.com"
            />
            <ServiceItem
              heading="Working hours:"
              imgSrc={images.clock}
              desc="Monday - Saturday 10.00am - 5.00pm."
            />
          </div>
        </div>
      </div>
      <div className={cx("container")}>
        <div className={cx("map")}>
          <iframe
            className={cx("map-iframe")}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.5868751595!2d-0.26674815641582517!3d51.528525719902056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2zTHXDom4gxJDDtG4sIFbGsMahbmcgUXXhu5FjIEFuaA!5e0!3m2!1svi!2s!4v1703927175433!5m2!1svi!2s"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={cx("contact")}>
          <h3 className={cx("heading")}>Contact us</h3>
          <p className={cx("note")}>
            Your email address will not be published. Required fields are marked
            *
          </p>
          <div className="flex">
            <div className={cx("input-wrapper", "w-100 mt-15")}>
              <Input placeholder="Your name..." type="text" />
            </div>
            <div className={cx("input-wrapper", "w-100 mt-15")}>
              <Input placeholder="Email..." type="email" />
            </div>
          </div>
          <div className={cx("input-wrapper", "w-100 mt-15")}>
            <Input placeholder="Subject..." type="text" />
          </div>
          <div className={cx("input-wrapper", "w-100 mt-15")}>
            <Input placeholder="Subject..." textarea styles={{ height: 250 }} />
          </div>

          <div className="mt-20">
            <Button hover small bold>
              SUBMIT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
