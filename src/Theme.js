import { createMuiTheme, useMediaQuery } from "@material-ui/core"
import React, { useContext, useMemo } from "react"

const Theme = (prefersDarkMode) => useMemo(
    () =>
        createMuiTheme({
            palette: {
                type: prefersDarkMode ? 'dark' : 'light',
                primary: {
                    main: '#ec407a',
                },
                secondary: {
                    main: '#2962ff',
                },
                tonalOffset: 0.2,
            },
        }), [prefersDarkMode],
);

export { Theme }
