import React, { Component } from 'react';

import './App.css';
import HomePage from './HomePage';
import AddSubscriber from './AddSubscriber'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHomePage: true,
      pageTitle: 'PHONE DIRECTORY',
      subscriberList: [],
      nameInput: '',
      phoneInput: '',
    }
  }

  addSubscriber = (obj) => {
    this.setState(prevState => ({
      subscriberList: prevState.subscriberList.concat(obj),
      nameInput: '',
      phoneInput: '',
    }));
    this.togglePage();
    // console.log('hello!');
  }

  handleInputChange = (e,field,isNumber=false) => {
    const { value } = e.target;
    let result = (isNumber ? value.replace(/[0-9]/g,'') : value.replace(/[a-zA-Z0-9]/g,''));
    if(result === '')
      this.setState({[field]: value});
  }

  removeSubscriber = (i) => {
    console.log(i);
    let tempList = this.state.subscriberList;
    this.setState({
      subscriberList: tempList.slice(0,i).concat(tempList.slice(i+1,tempList.length))
    });
  }

  togglePage = () => {
    this.setState(prevState => ({
      pageTitle: (prevState.isHomePage ? 'ADD SUBSCRIBER' : 'PHONE DIRECTORY'),
      isHomePage: !prevState.isHomePage,
    }));
  }

  pageContent = () => {
    const {
      isHomePage,
      subscriberList,
      nameInput,
      phoneInput,
    } = this.state;
    if(isHomePage) {
      return (
        <HomePage
          togglePage={this.togglePage}
          subscriberList={subscriberList}
          removeSubscriber={this.removeSubscriber}
        />
      );
    }
    else {
      return (
        <AddSubscriber
          togglePage={this.togglePage}
          addSubscriber={this.addSubscriber}
          nameInput={nameInput}
          phoneInput={phoneInput}
          handleInputChange={this.handleInputChange}
        />
      )
    }
  }
  
  render() {
    const { pageTitle } = this.state;
    return (
      <div>
        <div style={{
          color: 'white',
          backgroundColor: 'black',
          height: '50px',
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div>{pageTitle}</div>
        </div>
        <div style={{ padding: '1%', }}>
          {this.pageContent()}
        </div>
      </div>
    );
  }
}

export default App;
