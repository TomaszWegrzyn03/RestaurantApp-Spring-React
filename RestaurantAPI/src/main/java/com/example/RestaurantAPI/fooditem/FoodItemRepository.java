package com.example.RestaurantAPI.fooditem;

import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodItemRepository  extends JpaRepository<FoodItem, Long> {
}
