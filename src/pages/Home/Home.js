import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import { useState, useEffect } from "react";

import * as productServices from "~/apiServices/productServices";
import * as siteServices from "~/apiServices/siteServices";
import * as userServices from "~/apiServices/userServices";

import * as productFilter from "~/utils/productFilter";

import images from "~/assets/images";
import {
  ServiceItem,
  Collection,
  Product,
  Carousel,
  Slider,
} from "~/components";

const cx = classNames.bind(styles);

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = (async () => {
      const results = await productServices.products();

      const distinctProducts = productFilter.distinctBy(results, "slug");

      setProducts(distinctProducts);
    })();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert();

    let data1 = {
      name: "14K Gold 9 Diamond Ankle Bracelet",
      desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
      imageUrls: [
        "https://mldrbgfat3wx.i.optimole.com/SQPHnU0-FGk4D64U/w:auto/h:auto/q:auto/https://dici.themes.zone/main/wp-content/uploads/sites/8/2018/04/DC_Products_6.jpg",
        "https://mldrbgfat3wx.i.optimole.com/SQPHnU0-cBALG0EC/w:300/h:300/q:auto/rt:fill/g:ce/https://dici.themes.zone/main/wp-content/uploads/sites/8/2018/04/DC_Products_7.jpg",
        "https://mldrbgfat3wx.i.optimole.com/SQPHnU0-zBur7cjd/w:auto/h:auto/q:auto/https://dici.themes.zone/main/wp-content/uploads/sites/8/2018/04/DC_Products_2.jpg",
      ],
      price: 300,
      size: 1,
      color: 1,
      category: "bands",
      quantity: 1,
    };

    let data2 = {
      name: "Exquisit Silver 9 Diamond Cut Pearls",
      desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
      imageUrls: [
        "https://mldrbgfat3wx.i.optimole.com/SQPHnU0-cBALG0EC/w:300/h:300/q:auto/rt:fill/g:ce/https://dici.themes.zone/main/wp-content/uploads/sites/8/2018/04/DC_Products_7.jpg",
        "https://mldrbgfat3wx.i.optimole.com/SQPHnU0-FGk4D64U/w:auto/h:auto/q:auto/https://dici.themes.zone/main/wp-content/uploads/sites/8/2018/04/DC_Products_6.jpg",
        "https://mldrbgfat3wx.i.optimole.com/SQPHnU0-zBur7cjd/w:auto/h:auto/q:auto/https://dici.themes.zone/main/wp-content/uploads/sites/8/2018/04/DC_Products_2.jpg",
      ],
      price: 500,
      size: 1,
      color: 1,
      category: "bands",
      quantity: 1,
    };

    let data3 = {
      name: "Jason Segal Sterling 10-Facet Diamond",
      desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
      imageUrls: [
        "https://mldrbgfat3wx.i.optimole.com/SQPHnU0-zBur7cjd/w:auto/h:auto/q:auto/https://dici.themes.zone/main/wp-content/uploads/sites/8/2018/04/DC_Products_2.jpg",
        "https://mldrbgfat3wx.i.optimole.com/SQPHnU0-FGk4D64U/w:auto/h:auto/q:auto/https://dici.themes.zone/main/wp-content/uploads/sites/8/2018/04/DC_Products_6.jpg",
        "https://mldrbgfat3wx.i.optimole.com/SQPHnU0-cBALG0EC/w:300/h:300/q:auto/rt:fill/g:ce/https://dici.themes.zone/main/wp-content/uploads/sites/8/2018/04/DC_Products_7.jpg",
      ],
      price: 500,
      size: 1,
      color: 1,
      category: "bands",
      quantity: 1,
    };

    let data4 = {
      name: "Stainless Steel Cutout Station Ankle",
      desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
      imageUrls: [
        "https://mldrbgfat3wx.i.optimole.com/SQPHnU0-b4BhHcQy/w:auto/h:auto/q:auto/https://dici.themes.zone/main/wp-content/uploads/sites/8/2018/04/DC_Products_3.jpg",
        "https://mldrbgfat3wx.i.optimole.com/SQPHnU0-DwSCHIno/w:300/h:300/q:auto/rt:fill/g:ce/https://dici.themes.zone/main/wp-content/uploads/sites/8/2018/04/DC_Products_4.jpg",
        "https://mldrbgfat3wx.i.optimole.com/SQPHnU0-BMCOD1E9/w:300/h:300/q:auto/rt:fill/g:ce/https://dici.themes.zone/main/wp-content/uploads/sites/8/2018/04/DC_Products_5.jpg",
      ],
      price: 200,
      size: 1,
      color: 1,
      category: "bands",
      quantity: 1,
    };

    let data5 = {
      name: "Veronece 18K Clad 10 Diamond Cut",
      desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
      imageUrls: [
        "https://mldrbgfat3wx.i.optimole.com/SQPHnU0-DwSCHIno/w:300/h:300/q:auto/rt:fill/g:ce/https://dici.themes.zone/main/wp-content/uploads/sites/8/2018/04/DC_Products_4.jpg",
        "https://mldrbgfat3wx.i.optimole.com/SQPHnU0-b4BhHcQy/w:auto/h:auto/q:auto/https://dici.themes.zone/main/wp-content/uploads/sites/8/2018/04/DC_Products_3.jpg",
        "https://mldrbgfat3wx.i.optimole.com/SQPHnU0-BMCOD1E9/w:300/h:300/q:auto/rt:fill/g:ce/https://dici.themes.zone/main/wp-content/uploads/sites/8/2018/04/DC_Products_5.jpg",
      ],
      price: 350,
      size: 1,
      color: 1,
      category: "emerald-spring",
      quantity: 1,
    };

    let data6 = {
      name: "Arced Custom Ring Design 20k",
      desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
      imageUrls: [
        "https://mldrbgfat3wx.i.optimole.com/SQPHnU0-BMCOD1E9/w:300/h:300/q:auto/rt:fill/g:ce/https://dici.themes.zone/main/wp-content/uploads/sites/8/2018/04/DC_Products_5.jpg",
        "https://mldrbgfat3wx.i.optimole.com/SQPHnU0-DwSCHIno/w:300/h:300/q:auto/rt:fill/g:ce/https://dici.themes.zone/main/wp-content/uploads/sites/8/2018/04/DC_Products_4.jpg",
        "https://mldrbgfat3wx.i.optimole.com/SQPHnU0-b4BhHcQy/w:auto/h:auto/q:auto/https://dici.themes.zone/main/wp-content/uploads/sites/8/2018/04/DC_Products_3.jpg",
      ],
      price: 999,
      size: 1,
      color: 1,
      category: "emerald-spring",
      quantity: 1,
    };

    let data = {
      name: "Silver Reflections Gemston",
      desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
      imageUrls: [
        "https://mldrbgfat3wx.i.optimole.com/SQPHnU0-fDNzwSu7/w:auto/h:auto/q:auto/https://dici.themes.zone/main/wp-content/uploads/sites/8/2018/04/DC_Products_8.jpg",
        "https://mldrbgfat3wx.i.optimole.com/SQPHnU0-DwSCHIno/w:300/h:300/q:auto/rt:fill/g:ce/https://dici.themes.zone/main/wp-content/uploads/sites/8/2018/04/DC_Products_4.jpg",
        "https://mldrbgfat3wx.i.optimole.com/SQPHnU0-b4BhHcQy/w:auto/h:auto/q:auto/https://dici.themes.zone/main/wp-content/uploads/sites/8/2018/04/DC_Products_3.jpg",
      ],
      price: 333,
      size: 1,
      color: 1,
      category: "emerald-spring",
      quantity: 1,
    };

    let listData = [
      { ...data, size: 1, color: 1 },
      { ...data, size: 2, color: 2 },
      { ...data, size: 3, color: 3 },
      { ...data, size: 4, color: 1 },
      { ...data, size: 1, color: 1 },
      { ...data, size: 2, color: 2 },
      { ...data, size: 3, color: 3 },
      { ...data, size: 4, color: 2 },
      { ...data, size: 1, color: 1 },
      { ...data, size: 2, color: 2 },
      { ...data, size: 3, color: 3 },
      { ...data, size: 4, color: 4 },
    ];

    let quantityList = [0, 5, 10, 15, 0, 20, 2, 17, 8, 3, 11];

    let i = 0;

    let random;
    let mark = [];
    let c = [];

    while (i < 5) {
      random = Math.floor(Math.random() * 11);
      c[random] = random;

      if (mark[c[random]] === 1) continue;

      listData[random].quantity = quantityList[random];
      let status = await productServices.store(listData[random]);

      console.log("status:", status);

      mark[c[random]] = 1;
      i++;
    }
  };

  return (
    <>
      {/* <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form> */}
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
          {products ? <Product product={products[4]} /> : <Product />}
          {products ? <Product product={products[3]} /> : <Product />}
          {products ? <Product product={products[5]} /> : <Product />}
          {products ? <Product product={products[6]} /> : <Product />}
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
          {products ? <Product product={products[0]} /> : <Product />}
          {products ? <Product product={products[5]} /> : <Product />}
          {products ? <Product product={products[2]} /> : <Product />}
          {products ? <Product product={products[6]} /> : <Product />}
        </Collection>
      </div>

      {/* carousel */}

      <Carousel heading="OUR JOURNAL"></Carousel>
    </>
  );
}

export default Home;
