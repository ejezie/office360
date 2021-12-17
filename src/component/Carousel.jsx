import React from "react";
import { useInView } from "react-intersection-observer";
import imageone from "../assets/one.jpeg";
import imageeight from "../assets/eight.jpg";
import imagethirteen from "../assets/thirteen.jpg";
import { Carousel } from "react-bootstrap";

function CarouselComp({ rotateBar }) {

    const options = {
      rootMargin: "0px",
      treshold: 0.2,
      root: null,
    };

    const [ ref, inView] = useInView(options);
    const [ ref1, inView1] = useInView(options);
    const [ ref2, inView2] = useInView(options);

  return (
    <Carousel
      controls={false}
      className={`carousel ${rotateBar && "index"}`}
      fade={true}
    >
      <Carousel.Item interval={5000} id="carousel-item">
        <img className="d-block w-100" src={imagethirteen} alt="First slide" />
        <Carousel.Caption className="text">
          <h1 ref={ref} className={`reveal-up ${inView && "up1"}`}>
            Work your way<span>.</span>
          </h1>
          <p ref={ref} className={`reveal-up ${inView && "up2"}`}>
            Our global network of workspaces enable you to work wherever you
            need to be, in a productive, professional environment. Create a
            workplace that’s right for your business today – and tomorrow – and
            thrive among a global business community.
          </p>
          <div ref={ref} className={`btn reveal-up ${inView && "up3"}`}>
            <a href="tel:08142074224">Call Us</a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000} id="carousel-item">
        <img className="d-block w-100" src={imageone} alt="Second slide" />
        <Carousel.Caption className="text">
          <h1 ref={ref1} className={`reveal-up ${inView1 && "up1"}`}>
            Show your identity<span>.</span>
          </h1>
          <p ref={ref1} className={`reveal-up ${inView1 && "up2"}`}>
            Our global network of workspaces enable you to work wherever you
            need to be, in a productive, professional environment. Create a
            workplace that’s right for your business today – and tomorrow – and
            thrive among a global business community.
          </p>
          <div ref={ref1} className={`btn reveal-up ${inView1 && "up3"}`}>
            <a href="tel:08142074224">Call Us</a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000} id="carousel-item">
        <img className="d-block w-100" src={imageeight} alt="Third slide" />
        <Carousel.Caption className="text">
          <h1 ref={ref2} className={`reveal-up ${inView2 && "up1"}`}>
            Choose your growth<span>.</span>
          </h1>
          <p ref={ref2} className={`reveal-up ${inView2 && "up2"}`}>
            Our global network of workspaces enable you to work wherever you
            need to be, in a productive, professional environment. Create a
            workplace that’s right for your business today – and tomorrow – and
            thrive among a global business community.
          </p>
          <div
            ref={ref2}
            className={`btn reveal-up ${inView2 && "up3"}`}
          >
            <a href="tel:08142074224">Call Us</a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComp;
