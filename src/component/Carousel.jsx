import React from 'react'
import imageone from "../assets/one.jpeg";
import imageeight from "../assets/eight.jpg";
import imagethirteen from "../assets/thirteen.jpg";
import { Carousel } from "react-bootstrap";

function CarouselComp() {
    return (
      <Carousel controls={false} className="carousel" fade={true}>
        <Carousel.Item interval={5000} id="carousel-item">
          <img
            className="d-block w-100"
            src={imagethirteen}
            alt="First slide"
          />
          <Carousel.Caption className="text">
            <h1>
              Work your way<span>.</span>
            </h1>
            <p>
              Our global network of workspaces enable you to work wherever you
              need to be, in a productive, professional environment. Create a
              workplace that’s right for your business today – and tomorrow –
              and thrive among a global business community.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000} id="carousel-item">
          <img className="d-block w-100" src={imageone} alt="Second slide" />
          <Carousel.Caption className="text">
            <h1>
              Work your way<span>.</span>
            </h1>
            <p>
              Our global network of workspaces enable you to work wherever you
              need to be, in a productive, professional environment. Create a
              workplace that’s right for your business today – and tomorrow –
              and thrive among a global business community.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000} id="carousel-item">
          <img className="d-block w-100" src={imageeight} alt="Third slide" />
          <Carousel.Caption className="text">
            <h1>
              Work your way<span>.</span>
            </h1>
            <p>
              Our global network of workspaces enable you to work wherever you
              need to be, in a productive, professional environment. Create a
              workplace that’s right for your business today – and tomorrow –
              and thrive among a global business community.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

export default CarouselComp;
