import React from 'react'
import OrderForm from "./OrderForm"
import { useForm } from '../../hooks/useForm';
import { Grid } from '@mui/material';
import SearchFoodItems from './SearchFoodItems';
import OrderedFoodItems from './OrderedFoodItems';
import validateForm from './OrderForm'
import FoodForm from './FoodForm';

export default function Order(){

    const generateOrderNumber = () => Math.floor(10000 + Math.random() *90000).toString();
    const getFreshModelObject = () =>({
        orderMasterId: 0,
        orderNumber: generateOrderNumber(),
        waiterId: 0,
        tableNumber: 0,
        grandTotal: 0,
        moreInfo:'',
        deletedOrderItemIds:'',
        orderDetail:[]
    })

    const addFoodItem = foodItem =>{
        let x ={
            orderMasterId: values.orderMasterId,
            orderDetail: 0,
            foodItemId: foodItem.foodItemId,
            quantity:1,
            foodItemPrice: foodItem.price,
            foodItemName: foodItem.foodItemName
        }
        setValues({
            ...values,
            orderDetail: [...values.orderDetail,x]
        })
    }
   
    
    const{
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetFormControls
}= useForm(getFreshModelObject);

    

    return (
        <>
            <Grid container>
            <OrderForm
            {...{ values, setValues, errors, setErrors, handleInputChange, resetFormControls}} />
                <Grid item xs={5}>
                    <SearchFoodItems
                     {...{addFoodItem, OrderedFoodItems:values.orderDetail}}/>
                </Grid>
                <Grid item xs={5}>
                    <OrderedFoodItems
                    {...{values,setValues}}/>
                    
                </Grid>
               
            </Grid>
            <FoodForm {...{resetFormControls}} />
        </>
            

       
    )

}