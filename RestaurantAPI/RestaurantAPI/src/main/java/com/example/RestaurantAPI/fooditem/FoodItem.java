package com.example.RestaurantAPI.fooditem;

import lombok.*;

import javax.persistence.*;

@Entity @Table @AllArgsConstructor @NoArgsConstructor @Getter @Setter
public class FoodItem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(updatable = false)
    private Long foodItemId;

    @Column(nullable = false, columnDefinition = "varchar(100)")
    private String foodItemName;

    @Column(nullable = false, columnDefinition = "decimal")
    private Double price;

}
