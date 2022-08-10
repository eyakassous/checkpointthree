import React from "react";
import { Carousel } from "react-bootstrap";

export default function Slider(){
  return (
    <div>
        <Carousel className='container' style={{width:"3000px",height:"900px"}}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://techsathi.com/wp-content/uploads/2021/05/ReactJS.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://techsathi.com/wp-content/uploads/2021/05/ReactJS.png"
              alt="Second slide"
            />
    
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://techsathi.com/wp-content/uploads/2021/05/ReactJS.png"
              alt="Third slide"
            />
    
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>);
    }
    
   
   