import React from 'react';



const MySelect = ({ options, value, onChange, label }) => {
    return (
      <select 
        value={value} 
        onChange={onChange}
        sx={{ width: 200 }}>    
        {options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
      </select>
    )
  }
  
  export default MySelect;