import React from 'react';
import Button from './Button';
import FormInput from './FormInput';

// class component to manage state as I know!
class Form extends React.Component {
  // constructor() {
	// 	super();
  //
	// }

  render() {
    return (
      <form className="form">
        <FormInput inputName="email" type="text" label="Email Address"/>
        <FormInput inputName="device" type="checkbox" label="Remember this device"/>
        <Button block="form" copy="Sign in" type="submit"/>
      </form>
    )
  }
}

export default Form;
