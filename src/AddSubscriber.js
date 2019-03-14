import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { togglePage, nameInput, phoneInput, handleInputChange, addSubscriber } = this.props;
    return (
      <div>
        <Button color='link' style={{ textDecoration: 'none', color: 'black' }} onClick={() => togglePage()}>BACK</Button>
        <Form>
          <Col md={4} sm={8} xs={12}>
            <FormGroup>
              <Label for='name'>Name:</Label>
              <Input type='text' name='name' value={nameInput} onChange={(e) => handleInputChange(e,'nameInput')} />
            </FormGroup>
            <FormGroup>
              <Label for='phone'>Phone:</Label>
              <Input type='text' name='phone' value={phoneInput} onChange={(e) => handleInputChange(e,'phoneInput',true)} />
            </FormGroup>
          </Col>
        </Form>
        <p>
          <span style={{ fontWeight: '500' }}>Subscriber to be added:</span>
          <br />
          Name: {nameInput}
          <br />
          Phone: {phoneInput}
        </p>
        <Button color='success' onClick={() => addSubscriber({ name: nameInput, phone: phoneInput })}>ADD</Button>
      </div>
    );
  }
}

export default HomePage;
