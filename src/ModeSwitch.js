import { makeStyles } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import Switch from '@material-ui/core/Switch'
import React, { useContext } from 'react'
import { StoreContext } from './Store'

const useStyles = makeStyles({
  switchBase: {
    '&$checked': {
      color: grey[800],
    },
    '&$checked + $track': {
      backgroundColor: grey[700],
    },
  },
  checked: {},
  track: {},
})

const ModeSwitch = () => {
  const context = useContext(StoreContext)
  const classes = useStyles()

  const handleChange = (event) => {
    context.setDarkMode(event.target.checked)
  }

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            classes={{
              switchBase: classes.switchBase,
              checked: classes.checked,
              track: classes.track,
            }}
            checked={context.darkMode}
            onChange={handleChange}
            name="dark"
          />
        }
        label="Dark mode"
      />
    </FormGroup>
  )
}
export { ModeSwitch }
