import React from "react";
import {makeStyles, Paper, Typography} from "@material-ui/core";
import {fade} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        backgroundColor: fade(theme.palette.secondary.main, 0.7),
        color: "#FFF",
    }

}));

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
        </Paper>
    );
}

export default JokeArea;