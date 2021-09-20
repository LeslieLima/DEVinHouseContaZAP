import React from 'react';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


const MySelect = ({ options, value, onChange, label }) => {
    return (
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>

      <Select 
      labelId="demo-simple-select-helper-label"
      id="demo-simple-select-helper"
        value={value} 
        onChange={onChange}
        sx={{ width: 200 }}
        label={label}>    
        {options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
      </Select>

      </FormControl>
    )
  }
  
  export default MySelect;