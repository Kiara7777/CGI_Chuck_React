import React from "react";
import {Link, makeStyles, Typography} from "@material-ui/core";

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

    fixLink:{
        textAlign: "center",
    }

}));

/**
 * Komponenta pro zobrazeni loga a horniho titulku. Po kliknuti na obrazek je uzivatel prenesen na pozadovanou adresu
 * props: {
 *      link: adresa na odkaz loga
 *      image: zdroj obrazku/loga
 *      alt: alternativni nazev pro logo
 *      width: sirka loga
 *      height: vyska loga
 *      title: titulek k zobrazeni
 * }
 * */
function LogoTitle(props){
    const classes = useStyles();
    return(
        <div className={classes.mainDiv}>
            <div className={classes.fixLink}>
                <Link href={props.link}>
                    <img src={props.image} alt={props.alt} width={props.width} height={props.height}/>
                </Link>
            </div>
            <Typography variant="h5" className={classes.titleMain}>{props.title}</Typography>
        </div>
    );
}

export default LogoTitle;