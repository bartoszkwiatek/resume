import { createMuiTheme } from "@material-ui/core"
import { useMemo } from "react"

const Theme = (prefersDarkMode, primary) => useMemo(
    () =>
        createMuiTheme({
            palette: {
                type: prefersDarkMode ? 'dark' : 'light',
                primary: {
                    main: primary, //'#e91e63'
                },
                secondary: {
                    main: '#2962ff',
                },
                tonalOffset: 0.2,




            },
        }), [prefersDarkMode, primary],
);

export { Theme }
