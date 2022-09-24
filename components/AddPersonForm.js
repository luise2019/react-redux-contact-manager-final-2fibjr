import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addPerson } from '../actions'

function AddPersonForm(props) {
  const [person, setPerson] = useState('');
  const [number, setNumber] = useState('');

  function handleChange(e) {
    setPerson(e.target.value);
  }
  function numberChange(e) {
    setNumber(e.target.value);
  }
    
  function handleSubmit(e) {
    if(person !== '' && number!== '' ) {
      props.addPerson(person,number);
      setPerson('');
      setNumber('');
    }
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
      <input type="text" 
        placeholder="Add new contact" 
        onChange={handleChange} 
        value={person} />
      <input type="text"
        placeholder="Add new number"
        onChange={numberChange}
        value={number} /> 
      <button type="submit">Add</button>
      </div>
    </form>
  );
}

const mapDipatchToProps = {
  addPerson
}

export default connect(null, mapDipatchToProps)(AddPersonForm)