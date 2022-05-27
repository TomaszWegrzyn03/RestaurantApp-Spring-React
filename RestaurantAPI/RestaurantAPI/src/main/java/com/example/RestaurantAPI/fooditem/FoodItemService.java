package com.example.RestaurantAPI.fooditem;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface FoodItemService {
    List<FoodItem> getFoodItems();

    FoodItem getFoodItem(Long foodItemId);

    FoodItem postFoodItem(FoodItem foodItem);
}
