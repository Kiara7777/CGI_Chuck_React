import React from "react";
import {CircularProgress, makeStyles, Paper, Typography} from "@material-ui/core";
import {fade} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        backgroundColor: fade(theme.palette.secondary.main, 0.7),
        color: "#FFF",
    },

    progreessDiv: {
        display: "flex"
    },

    progress: {
        marginLeft: "auto"
    }
}));

/**
 * Komponenta pro zobrazeni vtipu/poozadovaneho textu.
 * Pokud se data nenactou ze serveru, tak se zobrazuje indikator nacitani - props.loading
 * props: {
 *     title: nadpis,
 *     chuck: text na zobrazeni
 *     loading: indikace zda se data nacitaji ze serveru
 * }
 * */
function JokeArea(props) {
    const classes = useStyles();
    return(
        <Paper className={classes.paper}>
            <Typography variant="h5">
                {props.title}
            </Typography>
            <Typography variant="body1">
                {props.chuck}
            </Typography>

            {props.loading &&
                <div className={classes.progreessDiv}>
                    <CircularProgress className={classes.progress}/>
                </div>
            }
        </Paper>
    );
}

export default JokeArea;