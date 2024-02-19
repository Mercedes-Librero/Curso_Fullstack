import React from 'react';
import InputField from './InputField'

const InputForm = ({ onSubmit, onNameChange, onNumberChange, newName, newNumber }) => {
  return (
    <form onSubmit={onSubmit}>
      <InputField label="Name:" value={newName} onChange={onNameChange} />
      <InputField label="Number:" value={newNumber} onChange={onNumberChange} />
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default InputForm;