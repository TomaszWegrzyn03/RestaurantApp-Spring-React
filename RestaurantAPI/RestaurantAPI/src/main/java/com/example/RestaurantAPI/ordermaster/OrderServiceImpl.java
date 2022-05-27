package com.example.RestaurantAPI.ordermaster;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService{

    @Autowired
    private OrderRepository orderRepository;

    @Override
    public List<OrderMaster> getOrders() {
        return orderRepository.findAll();
    }

    @Override
    public OrderMaster getOrder(Long orderMasterId) {
        return orderRepository.findById(orderMasterId).get();
    }

    @Override
    public OrderMaster postOrderMaster(OrderMaster orderMaster) {
        return orderRepository.save(orderMaster);
    }


}
