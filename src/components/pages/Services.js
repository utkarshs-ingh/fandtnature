import React from 'react';
import '../../App.css';
import '../Button.css';
import { Card, Form, Button, Modal, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';

function sendEmail(e) {
  e.preventDefault();
  console.log(e.target);
  emailjs.sendForm('service_ajkp2cd', 'template_av7vkrn', e.target, 'user_zPE9wkqUAY4IulRjvdWuf')
    .then((result) => {
      alert("Order Recieved :)");
    }, (error) => {
        alert("Sorry could send Email :(");
    });
    e.target.reset();
}


export default function Services() {
  const [modalShow, setModalShow] = React.useState(false);
  const [ecoShow, setecoModalShow] = React.useState(false);
  const [vendShow, setvendModalShow] = React.useState(false);

  const cardData = [
    { image: "https://ae01.alicdn.com/kf/HTB1ty5TRVXXXXaVapXXq6xXFXXXH/400ml-Bamboo-Travel-Thermos-bottles-Stainless-Steel-Water-bottle-Vacuum-Flasks-Insulated-termos-mug-tea-bardak.jpg_q50.jpg", title: "Get a Custom Touch", onclick: () => setModalShow(true), button: "Customize", show: modalShow, onhide: () => setModalShow(false) },
    { image: "https://ae01.alicdn.com/kf/HTB1ty5TRVXXXXaVapXXq6xXFXXXH/400ml-Bamboo-Travel-Thermos-bottles-Stainless-Steel-Water-bottle-Vacuum-Flasks-Insulated-termos-mug-tea-bardak.jpg_q50.jpg", title: "ECO SPOT", onclick: () => setecoModalShow(true), button: "Visit us", show: ecoShow, onhide: () => setecoModalShow(false) },
    { image: "https://ae01.alicdn.com/kf/HTB1ty5TRVXXXXaVapXXq6xXFXXXH/400ml-Bamboo-Travel-Thermos-bottles-Stainless-Steel-Water-bottle-Vacuum-Flasks-Insulated-termos-mug-tea-bardak.jpg_q50.jpg", title: "ECO VEND", onclick: () => setvendModalShow(true), button: "Locate one", show: vendShow, onhide: () => setvendModalShow(false) },
  ];

  const renderCards = (card, index) => {
    return (
      <div >
      <Card  style={{width:'20rem', margin: "20px"}} key={index}>
        <Card.Img className='tc dib grow bw2 shadow-5' variant="top" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Button variant="primary" onClick={card.onclick}>
              {card.button}
          </Button>
        </Card.Body>
      </Card>
      <Modal
      size="lg"
      show={modalShow}
      onHide={() => setModalShow(false)}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Get a Custom Touch
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={sendEmail}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" name="email" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={1} name="message" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
      </Form>
      </Modal.Body>
    </Modal>

    <Modal
      size="lg"
      show={ecoShow}
      onHide={() => setecoModalShow(false)}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Visit an ECO SPOT
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        content
      </Modal.Body>
    </Modal>

    <Modal
      size="lg"
      show={vendShow}
      onHide={() => setvendModalShow(false)}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Locate an ECO VEND near you
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        content
      </Modal.Body>
    </Modal>

    </div>
    );
  }
  return (
    <div className='bg-light-green cards' >  
      <h1 className='tc f1 ttu'>Check out our Services</h1>
      <Container>
        <Row>{cardData.map(renderCards)}</Row>
      </Container>
    </div>
  );
}