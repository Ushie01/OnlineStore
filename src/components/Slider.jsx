import React from 'react'
import { Carousel } from 'react-bootstrap'
import img from '../assets/eur45.jpg'


function Slider() {
  return (
      <div className='container' >
          <Carousel >
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=373940"
                    alt="First slide"
                   style={{marginTop: '100px'}}
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000} style={{backgroundColor:'#000'}}>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=373940"
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
                    src="holder.js/800x400?text=First slide&bg=373940"
                    alt="Third slide"
                   
                    />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                 </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
      
    </div>
  )
}

export default Slider
