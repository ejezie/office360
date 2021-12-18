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
          <h1
            ref={ref}
            style={{ animationDelay: "1s" }}
            className={`reveal ${inView && "uphero"}`}
          >
            Work your way<span>.</span>
          </h1>
          <p
            ref={ref}
            style={{ animationDelay: "1.3s" }}
            className={`reveal ${inView && "uphero"}`}
          >
            Our global network of workspaces enable you to work wherever you
            need to be, in a productive, professional environment. Create a
            workplace that’s right for your business today – and tomorrow – and
            thrive among a global business community.
          </p>
          <div
            ref={ref}
            style={{ animationDelay: "1.5s" }}
            className={`btn reveal ${inView && "uphero"}`}
          >
            <a href="tel:08142074224">Call Us</a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000} id="carousel-item">
        <img className="d-block w-100" src={imageone} alt="Second slide" />
        <Carousel.Caption className="text">
          <h1
            ref={ref1}
            style={{ animationDelay: "1s" }}
            className={`reveal ${inView1 && "uphero"}`}
          >
            Show your identity<span>.</span>
          </h1>
          <p
            ref={ref1}
            style={{ animationDelay: "1.3s" }}
            className={`reveal ${inView1 && "uphero"}`}
          >
            Our global network of workspaces enable you to work wherever you
            need to be, in a productive, professional environment. Create a
            workplace that’s right for your business today – and tomorrow – and
            thrive among a global business community.
          </p>
          <div
            ref={ref1}
            style={{ animationDelay: "1.5s" }}
            className={`btn reveal ${inView1 && "uphero"}`}
          >
            <a href="tel:08142074224">Call Us</a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000} id="carousel-item">
        <img className="d-block w-100" src={imageeight} alt="Third slide" />
        <Carousel.Caption className="text">
          <h1
            ref={ref2}
            style={{ animationDelay: "1s" }}
            className={`reveal ${inView2 && "uphero"}`}
          >
            Choose your growth<span>.</span>
          </h1>
          <p
            ref={ref2}
            style={{ animationDelay: "1.3s" }}
            className={`reveal ${inView2 && "uphero"}`}
          >
            Our global network of workspaces enable you to work wherever you
            need to be, in a productive, professional environment. Create a
            workplace that’s right for your business today – and tomorrow – and
            thrive among a global business community.
          </p>
          <div
            ref={ref2}
            style={{ animationDelay: "1.5s" }}
            className={`btn reveal ${inView2 && "uphero"}`}
          >
            <a href="tel:08142074224">Call Us</a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComp;
