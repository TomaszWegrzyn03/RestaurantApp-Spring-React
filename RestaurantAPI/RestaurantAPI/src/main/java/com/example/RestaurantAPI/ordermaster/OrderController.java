package com.example.RestaurantAPI.ordermaster;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(path = "api/Order")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping
    public List<OrderMaster> getOrderMasters(){
        return orderService.getOrders();
    }

    @GetMapping("/{id}")
    public OrderMaster getOrderMaster(@PathVariable("id") Long orderMasterId){
        return orderService.getOrder(orderMasterId);
    }

    @PostMapping
    public OrderMaster postOrderMaster(@RequestBody OrderMaster orderMaster){
        return  orderService.postOrderMaster(orderMaster);

    }

}
