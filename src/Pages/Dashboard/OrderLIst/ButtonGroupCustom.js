import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { InputLabel } from '@mui/material';

export default function ButtonGroupCustom({ action, id }) {
  const [newAction, setNewAction] = React.useState(action);

  const handleChange = (event) => {
    // update action
    setNewAction(event.target.value);
    const user = { id, action: event.target.value }
    // console.log(event.target.value)
    fetch('http://localhost:5000/carts/action', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        if (data.modifiedCount) {
          alert('Action Changed')
          // setDataObserver(!dataObserver)
        }else{
          alert('Something wrong when Action Changed')

        }
      })




  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Action
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={newAction}
          onChange={handleChange}
          label="Age"
          autoWidth
        >

          <MenuItem value='pending'>Pending</MenuItem>
          <MenuItem value='done'>Done</MenuItem>
          <MenuItem value='ongoing'>On Going</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
