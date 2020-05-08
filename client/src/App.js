import React, { Component } from "react";
import { Accordion, Card, Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then((res) => this.setState({ data: res }))
      .catch((err) => console.log(err));
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch("/api/v1/transactions");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">Accounting Notebook</h1>
        </header>
        List of transactions
        <Container>
          <Accordion>
            {this.state.data &&
              Array.isArray(this.state.data) &&
              this.state.data.map((item, key) => (
                <Card key={item.id}>
                  <Accordion.Toggle
                    className={`TransactionTitle-${item.type}`}
                    as={Card.Header}
                    eventKey={key}
                  >
                    {item.type} - {item.amount}
                  </Accordion.Toggle>
                  <Accordion.Collapse
                    className={`TransactionDetails-${item.type}`}
                    eventKey={key}
                  >
                    <Card.Body>
                      <p>Transaction Id: {item.id}</p>
                      <p>Type: {item.type}</p>
                      <p>Amount: {item.amount}</p>
                      <p>Effective Date: {item.effectiveDate}</p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              ))}
          </Accordion>
        </Container>
      </div>
    );
  }
}

export default App;
