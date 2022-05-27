import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import React, { useEffect, useState }  from "react";
import { createApiEndpoint, ENDPOINTS } from "../../api";
import Table from "../../layouts/Table";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';



export default function OrderList(props){

    const {setOrderId, setOrderListVisibility} = props;

    const [orderList, setOrderList] = useState([]);
    useEffect(() =>{
        createApiEndpoint(ENDPOINTS.ORDER).fetchAll()
            .then(res=>{
                setOrderList(res.data)
            })
            .catch(err=> console.log(err))
    },[])

    const showForUpdate =id=>{
        setOrderId(id);
        setOrderListVisibility(false);
    }
    return(
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Order No.</TableCell>
                    <TableCell>Waiter</TableCell>
                    <TableCell>Table No.</TableCell>
                    <TableCell>Grand Total</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    orderList.map(item =>(
                        <TableRow key={item.orderMasterId}>
                            <TableCell>
                                {item.orderNumber}
                            </TableCell>
                            <TableCell >
                                {item.customer.customerName}
                            </TableCell>
                            <TableCell >
                                {item.pmethod}
                            </TableCell>
                            <TableCell >
                            ${item.grandTotal}
                            </TableCell>
                            <TableCell>
                            <EditIcon color="inherit" onClick={e=>showForUpdate(item.orderMasterId)} />
                            </TableCell>
                            <TableCell>
                                
                                <DeleteOutlineIcon color="secondary"/>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>

        </Table>
    )
}