import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Tilt from "react-tilt";
import Card from "react-bootstrap/Card";
import "./info.css";


const info = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3"> Our Mission</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Text className="text-center style">
                  We at F and T Nature provide an opportunity to have safe drinking water without adding more plastic to the eco system.
A completely plastic free, eco friendly, safe and economical alternative to PET single use plastic bottles.
Now, you can have drinking water anywhere anytime at the same price in a convenient manner without having the guilt of adding to 7 billion tonnes plastic already in the ecosystem
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default info;