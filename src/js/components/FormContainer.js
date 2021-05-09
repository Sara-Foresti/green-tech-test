import React from 'react';
import Form from './Form';
import Headline from './Headline';
import Logo from './Logo';

function FormContainer() {
  return (
    <div className="form__container">
      <Logo />
      <Headline copy="Operations studio" type="h1" level="1"/>
      <Headline copy="Please enter your email below" type="h2" level="2"/>
      <Form />
    </div>
  )
}

export default FormContainer;
