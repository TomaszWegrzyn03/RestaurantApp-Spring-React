package com.example.RestaurantAPI.fooditem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodItemServiceImpl implements FoodItemService{

    @Autowired
    private FoodItemRepository foodItemRepository;

    @Override
    public List<FoodItem> getFoodItems() {
        return foodItemRepository.findAll();
    }

    @Override
    public FoodItem getFoodItem(Long FoodItemId) {
        return foodItemRepository.findById(FoodItemId).get();
    }

    @Override
    public FoodItem postFoodItem(FoodItem foodItem) {
        return foodItemRepository.save(foodItem);
    }
}
