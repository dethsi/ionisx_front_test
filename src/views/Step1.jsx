import React from "react";
import Highlight from 'react-highlight'
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";

class Step1 extends React.Component {
  render() {
    return (
      <>
               <div className="content">
          <Row>
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Step 1</CardTitle>
                </CardHeader>
                <CardBody>
                <Highlight language="javascript">
                {`
                  class App extends React.Component {  
                    constructor(props) {
                      super(props);
                      this.state = {
                        name: this.props.name || 'Anonymous'
                      }
                    }    

                    render() {
                      return (
                        <p>Hello {this.state.name}</p>
                      );  
                    }
                  }`}
                </Highlight>
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Exercice description</CardTitle>
                </CardHeader>
                <CardBody>
                  <p>What is wrong with this example, and how would you go</p>
                  <p>about fixing or improving the component? </p>
                  <br />
                  for realise this exercice go to <Highlight language="bash">{`src/Exercices/Step1/`}</Highlight>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Step1;
