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

class Step2 extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Step 2</CardTitle>
                </CardHeader>
                <CardBody>
                  <Highlight language="javascript">
                    {`
  class App extends React.Component {
    constructor() {
      super(); 
      this.name = 'MyComponent';
                        
      this.handleClick2 = this.handleClick1.bind(this);
    }
                      
    handleClick1() {
      alert(this.name);
    }
                      
    handleClick3 = () => alert(this.name);
                    
    render() {
      return (
        <div>
          <button onClick={this.handleClick1()}>click 1</button>
          <button onClick={this.handleClick1}>click 2</button>
          <button onClick={this.handleClick2}>click 3</button>
          <button onClick={this.handleClick3}>click 4</button>
        </div>
      );
    }
  }
                    `}
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
                  <p>Can you explain the differences between all those ways</p>
                  <p>of passing function to a component?</p>
                  <p>What happens when you click each of the buttons?</p>
                  <br/>
                  for realise this exercice go to <Highlight language="bash">{`src/Exercices/Step2/`}</Highlight>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Step2;
