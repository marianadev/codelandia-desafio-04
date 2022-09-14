import React from 'react';

const Checkbox = ({ id, label }) => {
  return (
    <div className="checkboxContainer">
          <input id={id} type="checkbox" />
          <label htmlFor={id}>{label}</label>
        </div>
  );
}

export default Checkbox;
