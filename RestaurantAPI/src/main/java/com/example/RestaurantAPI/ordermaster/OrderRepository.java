package com.example.RestaurantAPI.ordermaster;

import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository  extends JpaRepository<OrderMaster, Long> {

}
