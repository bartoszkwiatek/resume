import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
    root: {
        width: '100%',
        maxWidth: 360,
    },
    name: {
        fontSize: '1.6rem',
    },
    label: {
        fontSize: '1.2rem',
    },
    weight: {
        fontWeight: 100,
    },
    header: {
        paddingTop: '1.5rem',
        fontSize: '1.2rem'
    }
}));

export { styles }