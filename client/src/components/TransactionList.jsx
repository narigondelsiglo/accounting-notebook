import React from 'react';
import { Accordion, Card } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './TransactionList.css';

function TransactionList(props) {
  const data = props.data && Array.isArray(props.data) ? props.data : [];
  return (
    <Accordion>
      {data.map((item, key) => (
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
  );
}

export default TransactionList;
