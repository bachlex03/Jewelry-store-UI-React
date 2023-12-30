import styles from "./About.module.scss";
import classNames from "classnames/bind";

import images from "~/assets/images";
import { MemberItem } from "~/components";

const cx = classNames.bind(styles);

function About() {
  return (
    <div>
      <div className="section-1200">
        <div className={cx("wrapper", "text-center")}>
          <div>
            <div className={cx("heading-section")}>
              <h2 className={cx("title")}>Our Story</h2>
            </div>
            <p className={cx("story")}>
              Hi guys! We were supposed to head to California this weekend but
              last minute had to cancel and I’m so bummed I was so ready for the
              beach!! These pictures were from last weekend when the weather was
              so nice! I got Beckam a bike for his birthday and he ended up
              loving it so much we go out riding every night its warm enough to
              go so I decided to get one for myself too so I could ride with
              him! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenean interdum cursus varius. Phasellus vitae congue tellus. Sed
              sapien enim, lobortis cursus tempus in, egestas quis lectus.
              Phasellus nec mi urna. Donec quis metus tincidunt, elementum dui
              in, imperdiet neque.
            </p>
          </div>
        </div>
      </div>
      <section className={cx("attachment")}></section>

      <div className="section-1200">
        <div className="flex mt-40">
          <div className={cx("duty-item")}>
            <figure>
              <img src={images.aboutImg1} className={cx("duty-img")} />
            </figure>
            <div className={cx("duty-body")}>
              <h4 className={cx("duty-heading")}>Our Mission</h4>
              <p className={cx("duty-desc")}>
                We aim to offer a final product that’s indistinguishable from
                the one you dreamed up. Watch your box concept take shape in
                real time and get exactly what you envisioned. The sky’s the
                limit!. Packwire offers nothing short
              </p>
            </div>
          </div>

          <div className={cx("duty-item")}>
            <figure>
              <img src={images.aboutImg2} className={cx("duty-img")} />
            </figure>
            <div className={cx("duty-body")}>
              <h4 className={cx("duty-heading")}>Our Vision</h4>
              <p className={cx("duty-desc")}>
                We see how much work you’ve put into your package design so when
                it comes to execution, Packwire offers nothing short of the
                best. Your ideal custom box comes to life with leading printing
                tools and the highest quality materials.
              </p>
            </div>
          </div>

          <div className={cx("duty-item")}>
            <figure>
              <img src={images.aboutImg3} className={cx("duty-img")} />
            </figure>
            <div className={cx("duty-body")}>
              <h4 className={cx("duty-heading")}>Our Credo</h4>
              <p className={cx("duty-desc")}>
                Top brand recognition sets you apart from the other guys. Guided
                by your drive for success, Packwire keeps a close look on the
                entire box design process, ensuring an eye-catching package.
                Packwire offers nothing short
              </p>
            </div>
          </div>
        </div>

        <section className={cx("about-section", "duty-section")}>
          <div className={cx("heading-section")}>
            <h2 className={cx("title")}>Our Team</h2>
            <p className={cx("sub-title")}>
              Visit our shop to see amazing creations from our designers
            </p>
          </div>

          <section className={cx("team-section")}>
            <div className="row">
              <div className="col l-4">
                <MemberItem
                  imgSrc={images.aboutTeam}
                  name="Bale Dev"
                  position="Designer"
                />
              </div>
              <div className="col l-4">
                <MemberItem
                  imgSrc={images.aboutTeam}
                  name="Bale Dev"
                  position="Front-end"
                />
              </div>
              <div className="col l-4">
                <MemberItem
                  imgSrc={images.aboutTeam}
                  name="Bale Dev"
                  position="Back-end"
                />
              </div>
              <div className="col l-4">
                <MemberItem
                  imgSrc={images.aboutTeam}
                  name="Bale Dev"
                  position="Fullstack"
                />
              </div>
              <div className="col l-4">
                <MemberItem
                  imgSrc={images.aboutTeam}
                  name="Bale Dev"
                  position="Project lead"
                />
              </div>
              <div className="col l-4">
                <MemberItem
                  imgSrc={images.aboutTeam}
                  name="Bale Dev"
                  position="Tester"
                />
              </div>
            </div>
          </section>
        </section>
      </div>

      <section className={cx("testimonial-section")}>
        <div className={cx("heading-section")}>
          <h2 className={cx("title")}>Testimonials</h2>
        </div>
        <div className={cx("review-item")}>
          <p className={cx("review-text")}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="">
            <img src={images.reviewUser} alt="" className={cx("review-img")} />
            <div className={cx("user-name")}>Bách Lê</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
