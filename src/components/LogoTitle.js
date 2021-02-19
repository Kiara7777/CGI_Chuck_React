import React from "react";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    mainDiv: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch ",
    },

    titleMain: {
        '&::before, &::after':{
            content: '""',
            borderBottom: "2px solid " + theme.palette.secondary.main,
            flex: 1,
            margin: "auto",

        },
        '&::before':{
            marginRight: theme.spacing(1),
        },
        '&::after':{
            marginLeft: theme.spacing(1),
        },

        display: "flex",
        color: theme.palette.secondary.main,
    },

    divHelper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center ",
    }


}));


function LogoTitle(props){
    const classes = useStyles();
    return(
        <div className={classes.mainDiv}>
            <div className={classes.divHelper}>
                <img src={props.image} alt="Chuck logo" width='25%' height='25%'/>
            </div>
            <h1 className={classes.titleMain}>{props.title}</h1>
        </div>
    );
}

export default LogoTitle;