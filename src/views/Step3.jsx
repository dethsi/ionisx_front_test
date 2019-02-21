import React from "react";
// react plugin for creating notifications over the dashboard
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

class Step3 extends React.Component {

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Step 3</CardTitle>
                </CardHeader>
                <CardBody>
                  <Highlight language="javascript">
                  {`
class App extends React.Component {

state = { search: '' }

handleChange = event => {

/**
     * This is a simple implementation of a "debounce" function,
     * which will queue an expression to be called in 250ms and
     * cancel any pending queued expressions. This way we can 
     * delay the call 250ms after the user has stoped typing.
     */
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.setState({
        search: event.target.value
      })
    }, 250);
  }

render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        {this.state.search ? <p>Search for: {this.state.search}</p> : null}
      </div>
    )
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
                  <p className="lead">What's the issue with this component. Why?</p>
                  <p>How would you go about fixing it ?</p>
                  <br/>
                  for realise this exercice go to <Highlight language="bash">{`src/Exercices/Step3/`}</Highlight>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Step3;
