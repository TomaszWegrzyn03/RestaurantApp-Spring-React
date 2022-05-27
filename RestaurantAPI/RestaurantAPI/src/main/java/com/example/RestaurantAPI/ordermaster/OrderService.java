package com.example.RestaurantAPI.ordermaster;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface OrderService {
    List<OrderMaster> getOrders();

    OrderMaster getOrder(Long orderMasterId);

    OrderMaster postOrderMaster(OrderMaster orderMaster);
}
