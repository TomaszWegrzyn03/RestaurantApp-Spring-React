package com.example.RestaurantAPI.fooditem;

import lombok.*;

import javax.persistence.*;

@Entity @Table(name="FoodItems") @AllArgsConstructor @NoArgsConstructor @Getter @Setter
public class FoodItem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(updatable = false)
    private Long FoodItemId;

    @Column(nullable = false, columnDefinition = "varchar(100)")
    private String FoodItemName;

    @Column(nullable = false, columnDefinition = "decimal")
    private Double Price;

}
