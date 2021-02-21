import React from "react";
import {Link, makeStyles, Typography} from "@material-ui/core";
import {API} from "../constants";

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
        marginTop: theme.spacing(2)
    },

    linkHelper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center ",
    },

}));



function LogoTitle(props){
    const classes = useStyles();
    return(
        <div className={classes.mainDiv}>
            <Link href={API.MAIN} className={classes.linkHelper}>
                <img src={props.image} alt={props.alt} width={props.width} height={props.height}/>
            </Link>
            <Typography variant="h5" className={classes.titleMain}>{props.title}</Typography>
        </div>
    );
}

export default LogoTitle;