import { makeStyles } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import FormControl from '@material-ui/core/FormControl'
// import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import React, { useContext } from 'react'
import { StoreContext } from './Store'
import { translations } from './translations'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    marginRight: theme.spacing(4),
    minWidth: 120,
    color: grey[100],
  },
  inputBase: {
    color: grey[100],
  },
  select: {
    color: grey[100],

    '&:before': {
      borderColor: grey[100],
    },
    '&:after': {
      borderColor: grey[100],
    },
  },
  icon: {
    fill: grey[100],
  },
}))
const LanguageSelect = () => {
  const context = useContext(StoreContext)
  const classes = useStyles()
  const handleChange = (event) => {
    context.setLanguage(event.target.value)
  }

  return (
    <FormControl className={classes.formControl}>
      <Select
        labelId="language-label"
        id="language-select"
        value={context.language}
        onChange={handleChange}
        placeholder="language"
        className={classes.select}
        inputProps={{
          classes: {
            icon: classes.icon,
          },
        }}
      >
        {context.availableLanguages.map((language) => (
          <MenuItem value={language}>{language}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
export { LanguageSelect }
