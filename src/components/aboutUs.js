import React from 'react';
import Img from '../data/images/logo.png';
import {
    CardImg,
    Container,
    Row,
    Col,
    Button,
  } from 'reactstrap';

function MyAboutUs() {
  return (
  <section className='aboutus--section' id='about'> 
      <Container>
          <Row>
              <Col md={6}>
                  <div className='aboutus--image--section'>
                      <CardImg
                          alt="Logo"
                          src={Img}
                          className='aboutus--card--image'
                      />
                      <div className='aboutus--image--button'>
                          <Button className='aboutus--button'>Learn More</Button>
                      </div>
                  </div>
              </Col>
              <Col md={6}>
                  <div className='aboutus--content--section'>
                      <div className='aboutus--content--heading'>
                          Who Are We?
                      </div>
                      <div className='aboutus--content--text'>
                          We manufacture good quality surgical stuff.
                      </div>
                  </div>
              </Col>
          </Row>
      </Container>
  </section>

)}

export default MyAboutUs