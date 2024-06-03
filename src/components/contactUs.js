import React from 'react'
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from 'reactstrap';
import '../App.css'


function MyContactUs() {
  return (
    <div className='contactus--section' id='contact'>
      <div className='container'>
        <Card
          body
          outline
          style={{
            width: '18rem',
            alignItems: 'center'
          }}
        >
          <CardBody>
            <CardTitle tag="h5">
              Contact Us
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Card subtitle
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card‘s content.
            </CardText>
            <Button>
              Send
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default MyContactUs