package com.example.RestaurantAPI.fooditem;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(path="api/FoodItem")
public class FoodItemController {

    @Autowired
    private FoodItemService foodItemService;

    @GetMapping
    public List<FoodItem> getFoodItems() {
        return foodItemService.getFoodItems();
    }

    @GetMapping("/{id}")
    public FoodItem getFoodItem(@PathVariable("id") Long FoodItemId){
        return foodItemService.getFoodItem(FoodItemId);
    }

    @PostMapping
    public FoodItem postFoodItem(@RequestBody FoodItem foodItem){
        return foodItemService.postFoodItem(foodItem);

    }
}
