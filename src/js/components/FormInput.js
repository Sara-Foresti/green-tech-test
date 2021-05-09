import React from 'react';

class FormInput extends React.Component {
  constructor(props){
    super(props);

    this.state = this.initialState;
    this.handleCheckbox = this.handleCheckbox.bind.this;
  }

  get initialState() {
    return {
      isChecked: false
    };
  }

  handleCheckbox() {
    this.setState({
      isChecked: !this.state.isChecked
    });
    console.log('dd state ', this.state);
  }

  render() {
    const {inputName, label, type} = this.props;
    const customCheckbox = (
      <div className="form__input--customCheckbox" onClick={this.handleCheckbox}></div>
    );

    return (
      <div className="form__input">
      <label className={`form__input-label--${type}`} for={inputName}>{label}</label>
      <input className={`form__input--${type}`} id={inputName} name={inputName} type={type} defaultChecked={this.state.isChecked}/>
      {(type === 'checkbox' ? customCheckbox : '')}
      </div>
    )
  }
}

export default FormInput;
