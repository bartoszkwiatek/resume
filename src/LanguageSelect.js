import { makeStyles } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
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
const LanguageSelect = () => {
  const context = useContext(StoreContext)
  const classes = useStyles()

  console.log(context.availableLanguages)
  const handleChange = (event) => {
    context.setLanguage(event.target.value)
  }

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="language-label">Language</InputLabel>
      <Select
        labelId="language-label"
        id="language-select"
        value={context.language}
        onChange={handleChange}
      >
        {context.availableLanguages.map((language) => (
          <MenuItem value={language}>{language}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
export { LanguageSelect }
