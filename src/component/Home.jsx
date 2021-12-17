import React from 'react'
import siximage from "../assets/six.jpg"
import imageten from "../assets/ten.jpg";
import imagefive from "../assets/five.jpg";
import imagenine from "../assets/nine.jpg";
import imagefourteen from "../assets/fourteen.jpg";
import { Link } from 'react-router-dom';

function Home() {
    return (
      <div className="home">
        <section className="home-one">
          <div className="left">
            <div className="text-wrap">
              <div className="sub-heading">
                Explore our beatiful offices <span>.</span>
              </div>
              <div className="text">
                Our fully serviced private office spaces give teams of all sizes
                an inspiring environment to focus, collaborate, and do their
                best work.
              </div>
              <div className="icon-wrap">
                <div className="icon">
                  <i class="fal fa-chair-office"></i>
                  <div className="text">
                    Personalize your workspace to your needs
                  </div>
                </div>
                <div className="icon">
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
              <img src={siximage} alt="office" />
            </div>
          </div>
        </section>
        <section className="home-two">
          <div className="sub-heading">
            View our new offices <span>.</span>
          </div>
          <div className="wrap">
            <div className="left">
              <div className="content" id="one">
                <img src={imageten} alt="office" />
                <div className="icon-wrap">
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
                <img src={imagefive} alt="office" />
                <div className="icon-wrap">
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
        <section className="home-one" id="home-three">
          <div className="left">
            <div className="text-wrap">
              <div className="sub-heading">
                Choose your workspace<span>.</span>
              </div>
              <div className="text">
                Our fully serviced private office spaces give teams of all sizes
                an inspiring environment to focus, collaborate, and do their
                best work.
              </div>
              <div className="icon-wrap">
                <div className="icon">
                  <i class="fal fa-chair-office"></i>
                  <div className="text">
                    Personalize your workspace to your needs
                  </div>
                </div>
                <div className="icon">
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
              <img src={imagenine} alt="office" />
            </div>
          </div>
        </section>
        <section className="home-one" id="home-four">
          <div className="left">
            <div className="text-wrap">
              <div className="sub-heading">
                Explore our beatiful offices <span>.</span>
              </div>
              <div className="text">
                Our fully serviced private office spaces give teams of all sizes
                an inspiring environment to focus, collaborate, and do their
                best work.
              </div>
              <div className="icon-wrap">
                <div className="icon">
                  <i class="fal fa-chair-office"></i>
                  <div className="text">
                    Personalize your workspace to your needs
                  </div>
                </div>
                <div className="icon">
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
              <img src={imagefourteen} alt="office" />
            </div>
          </div>
        </section>
      </div>
    );
}

export default Home
