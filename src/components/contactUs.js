import {React , useState} from 'react'
import emailjs from '@emailjs/browser';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import '../App.css'


function MyContactUs() {

  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Phone: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.FirstName) newErrors.FirstName = 'First Name is required';
    if (!formData.LastName) newErrors.LastName = 'Last Name is required';
    if (!formData.Email) {
      newErrors.Email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.Email)) {
      newErrors.Email = 'Email is invalid';
    }
    if (!formData.Phone) newErrors.Phone = 'Phone Number is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
          console.log('FAILED...', err);
        });
    }
  };

  return (
    <section className='contactus--section' id='contact'>
      <div className='container'>
        <Card
          body
          outline
        >
          <CardBody>
            <CardTitle tag="h5">
              Contact Us
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Contact us at our email for further queries.
            </CardSubtitle>
            <CardText>
              We are also actively available on social media platforms
            </CardText>



            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="FirstName">First Name</Label>
                    <Input
                      id="FirstName"
                      name="FirstName"
                      placeholder="i.e Jhon"
                      type="text"
                      value={formData.FirstName}
                      onChange={handleChange}
                    />
                    {errors.FirstName && <div className="text-danger">{errors.FirstName}</div>}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="LastName">Last Name</Label>
                    <Input
                      id="LastName"
                      name="LastName"
                      placeholder="i.e Doe"
                      type="text"
                      value={formData.LastName}
                      onChange={handleChange}
                    />
                    {errors.LastName && <div className="text-danger">{errors.LastName}</div>}
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="Email">Email</Label>
                    <Input
                      id="Email"
                      name="Email"
                      placeholder="JhoneDoe@example.com"
                      type="email"
                      value={formData.Email}
                      onChange={handleChange}
                    />
                    {errors.Email && <div className="text-danger">{errors.Email}</div>}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="Phone">Phone Number</Label>
                    <Input
                      id="Phone"
                      name="Phone"
                      placeholder="i.e 123456789"
                      type="text"
                      value={formData.Phone}
                      onChange={handleChange}
                    />
                    {errors.Phone && <div className="text-danger">{errors.Phone}</div>}
                  </FormGroup>
                </Col>
              </Row>

              <Row className="justify-content-center">
                <Col md={6} style={{ alignItems: 'center' }}>
                  <FormGroup>
                    <Label for="dropdown">Subject ...</Label>
                    <div className="dropdown">
                      <button
                        id="dropdown"
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropdown button
                      </button>
                      <ul className="dropdown-menu dropdown-menu-dark">
                        <li>   Surgical Tools</li>
                        <li>   Barbery Catalogue</li>
                        <li>   Other</li>
                      </ul>
                    </div>
                  </FormGroup>
                </Col>
              </Row>

              <Button type="submit">Send</Button>
            </Form>


          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default MyContactUs