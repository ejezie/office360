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
                Become more productive <span>.</span>
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
        <section className="footer">
          <div className="left">
            <div className="content-wrap">
              <h1>
                Lets find you your <br /> dream office
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
                    Western House, 10th Floor, 8-10 Broad St, Lagos Island
                    101301, Lagos
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Home
