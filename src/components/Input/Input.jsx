import React, { useState } from 'react';

const LabeledInput = ({ id, fieldType, label }) => {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="inputContainer">
      <input id={id} type={fieldType} value={value} onChange={handleChange} />
      <label htmlFor={id} className={value && 'filled'}>
        {label}
      </label>
    </div>
  );
}

export default LabeledInput;
