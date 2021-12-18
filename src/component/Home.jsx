import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import siximage from "../assets/six.jpg";
import imageten from "../assets/ten.jpg";
import imagefive from "../assets/five.jpg";
import imagenine from "../assets/nine.jpg";
import imagefourteen from "../assets/fourteen.jpg";

function Home() {
  const options1 = {
    rootMargin: "0px",
    threshold: 0.5,
    root: null,
  };
  const options = {
    rootMargin: "0px",
    threshold: 0.2,
    root: null,
  };

  const [ref, inView] = useInView(options);
  const [ref1, inView1] = useInView(options);
  const [ref2, inView2] = useInView(options);
  const [ref3, inView3] = useInView(options);
  const [ref4, inView4] = useInView(options);
  const [ref5, inView5] = useInView(options);
  const [ref6, inView6] = useInView(options);
  const [ref7, inView7] = useInView(options);

  return (
    <div className="home">
      <section className="home-one">
        <div className="left">
          <div className="text-wrap">
            <div
              ref={ref}
              className={`sub-heading reveal ${inView && "up"}`}
              style={{ animationDelay: "0.2s" }}
            >
              Explore our beatiful offices <span>.</span>
            </div>
            <div
              ref={ref}
              className={`text reveal ${inView && "up"}`}
              style={{ animationDelay: "0.4s" }}
            >
              Our fully serviced private office spaces give teams of all sizes
              an inspiring environment to focus, collaborate, and do their best
              work.
            </div>
            <div className="icon-wrap">
              <div
                ref={ref}
                className={`icon reveal ${inView && "up"}`}
                style={{ animationDelay: "0.6s" }}
              >
                <i class="fal fa-chair-office"></i>
                <div className="text">
                  Personalize your workspace to your needs
                </div>
              </div>
              <div
                ref={ref}
                style={{ animationDelay: "1.5s" }}
                className={`icon reveal ${inView && "left"}`}
              >
                <i class="fal fa-mobile-android"></i>
                <div className="text">
                  {" "}
                  <a href="tel:08142074224">Get in touch with us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="img-wrap">
            <img
              ref={ref1}
              style={{ animationDelay: "0.8s" }}
              className={`reveal ${inView1 && "scale"}`}
              src={siximage}
              alt="office"
            />
          </div>
        </div>
      </section>

      {/* Home two */}

      <section className="home-two">
        <div
          ref={ref3}
          style={{ animationDelay: "0.2s" }}
          className={`sub-heading reveal ${inView3 && "up"}`}
        >
          View our new offices <span>.</span>
        </div>
        <div className="wrap">
          <div className="left">
            <div className="content" id="one">
              <img
                src={imageten}
                style={{ animationDelay: "0.8s" }}
                ref={ref3}
                className={`reveal ${inView3 && "scale"}`}
                alt="office"
              />
              <div
                ref={ref3}
                style={{ animationDelay: "1.5s" }}
                className={`icon-wrap reveal ${inView3 && "left"}`}
              >
                <div className="icon">
                  <Link to={"/"} className="icon">
                    <div className="text">View More</div>
                    <i class="fas fa-arrow-right arrw"></i>
                  </Link>
                </div>
                <div className="icon">
                  <i class="fal fa-mobile-android mob"></i>
                  <div className="text">
                    {" "}
                    <a href="tel:08142074224">Get in touch with us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="content" id="two">
              <img
                src={imagefive}
                style={{ animationDelay: "0.8s" }}
                ref={ref2}
                className={`reveal ${inView2 && "scale"}`}
                alt="office"
              />
              <div
                ref={ref2}
                style={{ animationDelay: "1.5s" }}
                className={`icon-wrap reveal ${inView2 && "left"}`}
              >
                <Link to={"/"} className="icon">
                  <div className="text">View More</div>
                  <i class="fas fa-arrow-right arrw"></i>
                </Link>
                <div className="icon">
                  <i class="fal fa-mobile-android mob"></i>
                  <div className="text">
                    {" "}
                    <a href="tel:08142074224">Get in touch with us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Three */}

      <section className="home-one" id="home-three">
        <div className="left">
          <div
            ref={ref4}
            style={{ animationDelay: "1.5s" }}
            className={`text-wrap reveal ${inView4 && "right"}`}
          >
            <div
              ref={ref4}
              style={{ animationDelay: "0.9s" }}
              className={`sub-heading reveal ${inView4 && "up"}`}
            >
              Choose your workspace<span>.</span>
            </div>
            <div
              ref={ref4}
              style={{ animationDelay: "1.1s" }}
              className={`text reveal ${inView4 && "up"}`}
            >
              Our fully serviced private office spaces give teams of all sizes
              an inspiring environment to focus, collaborate, and do their best
              work.
            </div>
            <div className="icon-wrap">
              <div
                ref={ref4}
                style={{ animationDelay: "1.3s" }}
                className={`icon reveal ${inView4 && "up"}`}
              >
                <i class="fal fa-chair-office"></i>
                <div className="text">
                  Personalize your workspace to your needs
                </div>
              </div>
              <div
                ref={ref4}
                style={{ animationDelay: "1.5s" }}
                className={`icon reveal ${inView4 && "up"}`}
              >
                <i class="fal fa-mobile-android"></i>
                <div className="text">
                  {" "}
                  <a href="tel:08142074224">Get in touch with us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div
            ref={ref5}
            style={{ animationDelay: "1.5s" }}
            className={`img-wrap reveal ${inView5 && "left"}`}
          >
            <img src={imagenine} alt="office" />
          </div>
        </div>
      </section>

      {/* Home Four */}

      <section className="home-one" id="home-four">
        <div className="left">
          <div className="text-wrap">
            <div
              ref={ref6}
              className={`sub-heading reveal ${inView6 && "up"}`}
              style={{ animationDelay: "0.2s" }}
            >
              {" "}
              Become more productive <span>.</span>
            </div>
            <div
              ref={ref6}
              className={`text reveal ${inView6 && "up"}`}
              style={{ animationDelay: "0.4s" }}
            >
              Our fully serviced private office spaces give teams of all sizes
              an inspiring environment to focus, collaborate, and do their best
              work.
            </div>
            <div className="icon-wrap">
              <div
                ref={ref6}
                className={`icon reveal ${inView6 && "up"}`}
                style={{ animationDelay: "0.6s" }}
              >
                <i class="fal fa-chair-office"></i>
                <div className="text">
                  Personalize your workspace to your needs
                </div>
              </div>
              <div
                ref={ref6}
                className={`icon reveal ${inView6 && "left"}`}
                style={{ animationDelay: "1.5s" }}
              >
                <i class="fal fa-mobile-android"></i>
                <div className="text">
                  {" "}
                  <a href="tel:08142074224">Get in touch with us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="img-wrap">
            <img
              ref={ref7}
              className={`reveal ${inView7 && "scale"}`}
              style={{ animationDelay: "0.8s" }}
              src={imagefourteen}
              alt="office"
            />
          </div>
        </div>
      </section>

      {/* Footer */}

      <section className="footer">
        <div className="left">
          <div className="content-wrap">
            <h1>
              Let's find you your <br /> dream office
            </h1>
            <div className="icon-wrap">
              <a href="http://twitter.com">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="http://instgram.com">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="http://facebook.com">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="http://linkedin.com">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="text-wrap">
            <div className="sub-heading">
              Contact us <span>!</span>
            </div>
            <div className="icon-wrap">
              {/* <div className="txt">Email :</div> */}
              <div className="icon">
                <i class="far fa-envelope-open"></i>
                <a className="text" href="mailto:shady07@gmail.com">
                  office@office360.com
                </a>
              </div>
            </div>
            <div className="icon-wrap">
              {/* <div className="txt">Phone :</div> */}
              <div className="icon">
                <i class="fas fa-phone-alt"></i>
                <a className="text" href="tel:08142074224">
                  +10166352672
                </a>
              </div>
            </div>
            <div className="icon-wrap">
              {/* <div className="txt">Address :</div> */}
              <div className="icon">
                <i class="fal fa-map-marker-alt"></i>
                <div className="text">
                  Western House, 10th Floor, 8-10 Broad St, Lagos Island 101301,
                  Lagos
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
