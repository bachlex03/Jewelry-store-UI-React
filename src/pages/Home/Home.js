import styles from "./Home.module.scss";
import classNames from "classnames/bind";

import * as productServices from "~/apiServices/productServices";
import * as siteServices from "~/apiServices/siteServices";
import * as userServices from "~/apiServices/userServices";

import images from "~/assets/images";
import {
  Button,
  ServiceItem,
  Collection,
  Product,
  Carousel,
  Slider,
} from "~/components";

const cx = classNames.bind(styles);

function Home() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    alert();

    let data = {
      firstName: "Tuyết",
      lastName: "Lưu",
    };

    let status = await userServices.updateInformation(data, "lxbach@gmail.com");

    console.log("status:", status);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
      {/* Slider */}
      <Slider />

      {/* Service */}
      <div className={cx("service-wrapper", "section-1200", "mt-40")}>
        <ServiceItem
          heading="Expert Support"
          imgSrc={images.phone}
          desc="support@domain.com"
        />
        <ServiceItem
          heading="Free Delivery"
          imgSrc={images.truck}
          desc="+44 (0) 800 123 4567"
        />
        <ServiceItem
          heading="Buyer discount"
          imgSrc={images.mail}
          desc="Special Offer Every Month"
        />
        <ServiceItem
          heading="Excellent quality"
          imgSrc={images.clock}
          desc="Over 4K happy clients"
        />
      </div>

      {/* Banner 1 */}
      <div className={cx("banner-wrapper", "section-1200", "mt-40")}>
        <div className={cx("banner-item")}>
          <img src={images.banner1} alt="" className={cx("banner-img")} />
          <div className={cx("banner-body", "pos-left")}>
            <p className={cx("text")}>
              She said <br></br> "YES"
            </p>
            <a className={cx("link")} href="#">
              Shop Now
            </a>
          </div>
        </div>
        <div className={cx("banner-item")}>
          <img src={images.banner2} alt="" className={cx("banner-img")} />
          <div className={cx("banner-body", "pos-center")}>
            <p className={cx("text")}>Happy Ever After</p>
            <a className={cx("link")} href="#">
              Click here
            </a>
          </div>
        </div>
      </div>

      {/* COLLECTION */}

      <div className={cx("collection-wrapper", "section-1200", "mt-60")}>
        <Collection heading="OUR LATEST COLLECTION">
          <Product />
          <Product />
          <Product />
          <Product />
        </Collection>
      </div>

      {/* Banner 2 */}
      <div className={cx("banner-wrapper-2", "section-1200", "mt-40")}>
        <div className={cx("banner", "banner-item-1")}>
          <figure className={cx("img-wrapper")}>
            <img src={images.banner3} alt="" className={cx("banner-img")} />
          </figure>
          <div className={cx("banner2-body")}>
            <p className={cx("banner2-desc")}>Collection Arrived</p>
            <p className={cx("banner2-text", "mt-15")}>Emilia Wolf​</p>
          </div>
        </div>
        <div className={cx("banner", "banner-item-2")}>
          <figure className={cx("img-wrapper")}>
            <img src={images.banner4} alt="" className={cx("banner-img")} />
          </figure>
          <div className={cx("banner2-body")}>
            <p className={cx("banner2-desc")}>New Collection</p>
            <p className={cx("banner2-text", "mt-20")}>
              Maybe You’ve <br /> Earned it​
            </p>
            <a className={cx("link")} href="#">
              Shop Now
            </a>
          </div>
        </div>
      </div>

      {/* COLLECTION */}

      <div className={cx("collection-wrapper", "section-1200", "mt-60")}>
        <Collection heading="OUR BESTSELLING ITEMS">
          <Product />
          <Product />
          <Product />
          <Product />
        </Collection>
      </div>

      {/* carousel */}

      <Carousel heading="OUR JOURNAL"></Carousel>
    </>
  );
}

export default Home;
