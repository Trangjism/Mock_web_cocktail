import React from 'react';
import './inputField.css'

export default function InputField(props) {
  const {type, setValue, id} = props;
  const handleInputChange = (e) => {
    setValue(e.target.value);   
  }   
  const handleKeyPress = (e) => {    
    if (e.key === 'Enter') {
      props.onKeyPress()
    }
  }
  return (
    <div>
      <input id={id} type={type} onChange={handleInputChange} onKeyDown={handleKeyPress}/>
    </div>
  )
}

