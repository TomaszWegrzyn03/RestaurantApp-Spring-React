import React, {useState, useEffect} from 'react';
import Form from "../../layouts/Form";
import Popup from '../../layouts/Popup';
import {Input } from "../../controls";

import { createApiEndpoint, ENDPOINTS } from '../../api';
import { Button } from '@mui/material';
import { axios } from 'axios';


export default function FoodForm(props){

const { resetFormControls} = props;

const [foodFormVisibility, setFoodFormVisibility] = useState(false);
const openFoodForm = () =>{
    setFoodFormVisibility(true);
}
    const[foodItemName, setFoodItemName] = useState('')
    const[price, setPrice] = useState(0)


  

  

const submitOrder= async (e) => {
    e.preventDefault();
    let res = await fetch("http://localhost:8080/api/FoodItem", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    
      },
  
    body: JSON.stringify({
    foodItemName: foodItemName,
    price: parseFloat(price)
    })})

    resetFormControls()
   
    }


return (
    <>
    <Button  color="primary" onClick={openFoodForm}>Add New</Button>
    <Popup title="Add Food Item" openPopup={foodFormVisibility} setOpenPopup={setFoodFormVisibility}>
            <Form onSubmit={submitOrder}>
                <Input  onChange={(e) => setFoodItemName(e.target.value)} value={foodItemName}  style={{width:'220px'}} label="Food Name" name="foodItemName"/>
                
                <Input  type="number" onChange={(e) => setPrice(e.target.value)}  value={price} style={{margin:"0px 10px 0px", width:'100px'}} label="Price" name="price"/>
                <Button color="primary" size='large' type='submit'> Add</Button>
            </Form>
            
            

    </Popup>
    </>
    


)
}
