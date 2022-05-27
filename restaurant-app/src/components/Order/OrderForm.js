import React, {useState, useEffect} from 'react';
import Form from "../../layouts/Form";
import { ButtonGroup, Grid, InputAdornment, Button as MuiButton } from '@mui/material';
import {Input, Select, Button} from "../../controls";
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/system';
import ReplayIcon from '@mui/icons-material/Replay';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { createApiEndpoint, ENDPOINTS } from '../../api';
import { roundTo2DecimalPoint } from '../../utils';
import Popup from '../../layouts/Popup';
import OrderList from './OrderList';


const tableNumbers = [
    {id:'none', title:'Select'},
    {id:'1', title:'1'},
    {id:'2', title:'2'},
    {id:'3', title:'3'},
    {id:'4', title:'4'},
    {id:'5', title:'5'},
    {id:'6', title:'6'},
    {id:'7', title:'7'},
    {id:'8', title:'8'},
]

const useStyles = makeStyles(theme=>({
    adormentText:{
        '& .MuiTypography-root':{
            color:'#f3b33d',
            fontWeight:'bolder',
            fontSize:'1.2em',
        }
    },
    submitButtonGroup:{
        backgroundColor: '#2e2e2e',
        color: "#ebebeb",
        margin:'20px 60px 10px',
        height:'50px',
        '&  .MuiButton-label': {
            textTransform:'none',
        },
        '&:hover':{
            backgroundColor: '#f3b3dd'
        }
    },
    formCell:{
        margin: '10px 0px 10px',
        width:'240px'
    },
}))
export default function OrderForm(props){

    const {values, setValues, errors, setErrors, handleInputChange, resetFormControls} = props;
    const classes = useStyles();

    const [customerList,setCustomerList] = useState([]);
    const [orderListVisibility, setOrderListVisibility] = useState(false);
    const [orderId, setOrderId] = useState(0);

    useEffect(()=>{
        createApiEndpoint(ENDPOINTS.CUSTOMER).fetchAll()
        .then(res=>{
            let customerList = res.data.map(item=>({
                id: item.waiterId,
                title: item.waiterName,
            }))
            customerList = [{id:0, title:'Select'}].concat(customerList);
            setCustomerList(customerList);
        })
        .catch(err=>console.log(err))
    },[])

 useEffect(()=> {
     let grandTotal = values.orderDetail.reduce((tempTotal,item)=>{ 
return tempTotal + (item.quantity*item.foodItemprice)
     },0);
     setValues({
         ...values,
         grandTotal : roundTo2DecimalPoint(grandTotal)
     })

 },[JSON.stringify(values.orderDetail)])

 useEffect(()=>{
    if(orderId==0) resetFormControls()
    else{
        createApiEndpoint(ENDPOINTS.ORDER).fetchById(orderId)
        .then(res=>{
            setValues(res.data);
            setErrors({})
        })
    }
 },[orderId]);

 const validateForm = () => {
    let temp = {};
    temp.waiterId = values.waiterId != 0 ? "" : "This field is required.";
    temp.orderDetails = values.orderDetail.length != 0 ? "" : "This field is required.";
    setErrors({ ...temp });
    return Object.values(temp).every(x => x === "");
}

 const submitOrder = e =>{
     e.preventDefault();
     if(validateForm()){
        console.log('huj');
         createApiEndpoint(ENDPOINTS.ORDER).create(values)
            .then(res=>{
            resetFormControls(); 
         })
            .catch(err=>console.log(err));
    
     }
 }

 const openListOfOrders = () =>{
     setOrderListVisibility(true);
 }
 
    return (
        <>
        <Form onSubmit={submitOrder}>
            <Grid container>
                
                <Grid item xs={5.1}>
                    <Input  disabled label="Order Number" name="orderNumber"  className={classes.formCell} value={values.orderNumber} InputProps = {{startAdornment: 
                    <InputAdornment className={classes.adormentText}  position='start'>#</InputAdornment>}} />
                    <Input  label="Grand Total"  disabled value={values.grandTotal} name="grandTotal"  className={classes.formCell} InputProps = {{startAdornment: <InputAdornment className={classes.adormentText} position='start'>$</InputAdornment>}}/>
                    
                    <Select  className={classes.selects} label="Waiter" name="waiterId"   value={values.waiterId} onChange={handleInputChange} options={customerList} error={errors.customerId}/>
                    <Select   label="Table Number" name="tableNumber" value={values.tableNumber} onChange={handleInputChange}  options={tableNumbers}  error={errors.pMethod}  />


                    
                </Grid>
                
                
              <Grid item xs={6}>  
              <Input   type='text' label="Additional Info" value={values.moreInfo} className={classes.formCell}   name="moreInfo"/>  
                <br/>                 
                 <ButtonGroup className={classes.submitButtonGroup}>
                     <MuiButton color="inherit" size='large' endIcon={<RestaurantIcon/>} type='submit'>Submit</MuiButton>

                     <MuiButton color="inherit" size='small' startIcon={<ReplayIcon/>}></MuiButton>
                 </ButtonGroup>
                 <Button color="primary" size='small' onClick={openListOfOrders} startIcon={<ListAltIcon/>}>Orders</Button>
                 </Grid> 
                

            </Grid>
            <br></br> 
            <br></br> 
        </Form>
        
        <Popup title="List Of Orders" openPopup={orderListVisibility} setOpenPopup={setOrderListVisibility}>
            <OrderList
            {...{setOrderId, setOrderListVisibility}}/>
            

        </Popup>
        </>
    )

}