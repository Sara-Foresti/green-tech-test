import React from 'react';
import Button from './Button';
import FormInput from './FormInput';

class Form extends React.Component {
  constructor() {
		super();

    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
	}

  get initialState() {
    return {
      'email': '',
      'emailError': false,
      'isValid': false
    };
  }

  // re-set state on change of input
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value, [`${event.target.name}Error`]: false});
  }

  handleClick(event) {
    // run validations
    event.preventDefault();
    const reg = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
    if ((this.state.email).match(reg)) {
      this.setState({isValid: true}, () => {
        this.handleSubmit();
      });
    } else {
      this.setState({emailError: true})
    }
  }

  handleSubmit() {
    if(this.state.isValid){
      // sumbit
      alert('Thanks for signing in!');
    }
  }

  render() {
    return (
      <form className="form">
        <FormInput error={this.state.emailError} errorMessage="Please, enter a valid email address" inputName="email" type="text" label="Email Address" onChange={this.handleChange}/>
        <FormInput inputName="device" type="checkbox" label="Remember this device"/>
        <Button block="form" copy="Sign in" type="submit" onClick={this.handleClick}/>
      </form>
    )
  }
}

export default Form;
