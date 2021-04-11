import { makeStyles } from '@material-ui/core'
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
    color: theme.palette.primary.contrastText,
  },
  root: {
    '&$focused': { color: theme.palette.primary.contrastText },
  },
  focused: {},
}))
const LanguageSelect = () => {
  const context = useContext(StoreContext)
  const classes = useStyles()

  console.log(context.availableLanguages)
  const handleChange = (event) => {
    context.setLanguage(event.target.value)
  }

  return (
    <FormControl className={classes.formControl}>
      {/* <InputLabel
        id="language-label"
        disableAnimation={true}
        classes={{ root: classes.root, focused: classes.focused }}
      >
        {translations[context.language].languages}
      </InputLabel> */}
      <Select
        labelId="language-label"
        id="language-select"
        className={classes.selectEmpty}
        value={context.language}
        onChange={handleChange}
        placeholder="language"
      >
        {context.availableLanguages.map((language) => (
          <MenuItem value={language}>{language}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
export { LanguageSelect }
