import React, { Component } from 'react';
import { Button, Table } from 'reactstrap';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { togglePage, subscriberList, removeSubscriber } = this.props;
    return (
      <div>
        <Button color='success' onClick={() => togglePage()}>ADD</Button>
        <Table borderless>
          <thead>
            <tr>
              <th>NAME</th>
              <th>PHONE</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {subscriberList.map((subscriber,index) => (
              <tr key={index}>
                <td>{subscriber.name}</td>
                <td>{subscriber.phone}</td>
                <td><Button color='danger' onClick={() => removeSubscriber(index)}>DELETE</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default HomePage;
