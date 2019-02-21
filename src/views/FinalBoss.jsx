import React from "react";
// react plugin for creating notifications over the dashboard
import TodoList from '../Exercices/FinalBoss/TodoList';
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

const items = [{ text: 'Buy grocery', done: true },
    { text: 'Play guitar', done: false },
    { text: 'Romantic dinner', done: false }
];

class Step3 extends React.Component {

  render() {
    return (
      <>
        <div className="content">
          <Row>
          <Card>
              <CardHeader>
                  <CardTitle tag="h1">Final Boss</CardTitle>
              </CardHeader>
              <CardBody>
                <p>ok this one is really hard, but if you are there it</p>
                <p> is because you have succeeded others in the time allotted,</p>
                <p>suddenly blow your brain for the last exercise.</p>
                <br/>
              </CardBody>
          </Card>
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">TodoList</CardTitle>
                </CardHeader>
                <CardBody>
                  <TodoList items={items}
                        onItemClick={(item, event) => { console.log(item, event) }} />
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Exercice description</CardTitle>
                </CardHeader>
                <CardBody>
                  <p className="lead">- Clicking on a not done item should trigger onItemClick</p>
                  <p className="lead">- Clicking on a done item should not trigger onItemClick</p>
                  <br/>
                  for realise this exercice go to <Highlight language="javascript">{`src/Exercices/FinalBoss/`}</Highlight>
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
