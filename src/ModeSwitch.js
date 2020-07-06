import React, { useContext } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { StoreContext } from './Store';

const ModeSwitch = () => {
  const context = useContext(StoreContext)


  const handleChange = (event) => {
    context.setDarkMode(event.target.checked);
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={<Switch checked={context.darkMode} onChange={handleChange} name="dark" />}
        label="Dark mode"
      />
    </FormGroup>
  );
}
export { ModeSwitch }