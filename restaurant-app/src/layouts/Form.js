import React from "react";
import { makeStyles } from '@mui/styles';
import { createTheme } from "@mui/system";

const useStyles = makeStyles(theme=>({
    root:{
        '& .MuiFormControl-root':{
            widht:'90%',
            
        }
    }
}))

export default function Form(props){
    const classes = useStyles();
    const {children, ...other} = props;

    return(
        <form className={classes.root} noValidate autoComplete="off" {...other}>
            {children}
        </form>
    )
}