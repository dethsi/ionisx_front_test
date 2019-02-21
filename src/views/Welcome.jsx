import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

class Welcome extends React.Component {

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col xs="12">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <CardTitle tag="h2">Welcome</CardTitle>
                      <p className="lead">You will start the technical test for IonisX.</p>
                      <p className="lead">We are here to find the best of you,</p>
                      <p className="lead">so give everything and especially have fun</p>
                    </Col>
                    <Col sm="6">
                      <p>When you are ready to start click on step 1 in the sidebar</p>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Welcome;
