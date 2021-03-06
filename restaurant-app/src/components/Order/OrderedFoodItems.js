import { Button, ButtonGroup, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, Paper } from "@mui/material";

import React from "react";
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { roundTo2DecimalPoint } from "../../utils";
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/system";

const useStyles=makeStyles(theme=>({
    paperRoot:{
        margin: '15px 0px',
        
        '&:hover':{
            cursor:'pointer',
        },
        '&:hover $deleteButton':{
            display:'block'
        },
        
    },
    buttonGroup:{
        backgroundColor:'#E3E3E3',
        
        '& .MuiButtonBase-root':{
            border:'none',
            minWidth:'25px',
            padding:'1px'
        },
        '& button:nth-child(2)':{
            fontSize:'1.2em',
            color:'#000'
        }
    },
    deleteButton:{
        display:'none',
        '& .MuiButtonBase-root':{
            color:"#E81719"
        },
    },
    totalPerItem:{
        fontWeight: 'bolder',
        fontSize:'1.2em',
        margin:'0px 10px'
    },
    
  
    
}))

export default function OrderedFoodItems(props){
    const { values,setValues} = props;

    let OrderedFoodItems = values.orderDetail;

    const removeFoodItem= (index,id) => {
        let x ={...values};
        x.orderDetail = x.orderDetail.filter((_,i)=> i !=index);
        setValues({...x});
    }

    const updateQuantity = (index,value) =>{
        
         let x ={...values};
         let foodItem = x.orderDetail[index];
         if(foodItem.quantity +value>0){
            foodItem.quantity +=value;
         setValues({...x});
    }}

    const classes = useStyles();
    return(
        <List className={classes.listRoot}>
            {OrderedFoodItems.length==0?
            <ListItem>
                <ListItemText
                primary = "Please select items."
                primaryTypographyProps={{
                    style:{
                        textAlign:'center',
                        marginTop:'170px',
                        fontSize:'1.7rem',
                        fontStyle: 'italic'
                    }
                }}/>
            </ListItem>
                   
            : OrderedFoodItems.map((item,idx) =>(
                    <Paper key={idx} className={classes.paperRoot}>
                        <ListItem>
                            <ListItemText
                            primary={item.foodItemName}
                            primaryTypographyProps={{
                                component: "h1",
                                style:{
                                    fontWeight:'500',
                                    fontSize: '1.2em'
                                }
                            }}
                            secondary={
                                <>
                                <ButtonGroup className={classes.buttonGroup} size='small'>
                                    <Button onClick={e=>updateQuantity(idx,-1)}>-</Button>
                                    <Button disabled>{item.quantity}</Button>
                                    <Button onClick={e=>updateQuantity(idx,+1)}>+</Button>
                                </ButtonGroup>
                                <span className={classes.totalPerItem}>
                                    {'$'+ roundTo2DecimalPoint(item.quantity*item.foodItemPrice)}
                                </span>
                                </>}
                                secondaryTypographyProps={{component:'div'}}
                                />
                            <ListItemSecondaryAction>
                                <IconButton
                                disableRipple
                                onClick = {e=>removeFoodItem(idx,item.orderDetailId)}>
                                <DeleteTwoToneIcon/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </Paper>
                ))
            }
        </List>
    )
}