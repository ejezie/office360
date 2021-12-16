import React from 'react'
import siximage from "../assets/six.jpg"

function Home() {
    return (
      <div className="home">
        <section className="one">
          <div className="left">
            <div className="text-wrap">
              <div className="sub-heading">Explore our beatiful offices <span>.</span></div>
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
              <img src={siximage} alt="" />
            </div>
          </div>
        </section>
      </div>
    );
}

export default Home
