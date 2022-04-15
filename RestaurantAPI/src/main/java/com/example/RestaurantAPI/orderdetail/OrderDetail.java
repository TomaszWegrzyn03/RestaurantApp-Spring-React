package com.example.RestaurantAPI.orderdetail;

import com.example.RestaurantAPI.fooditem.FoodItem;
import com.example.RestaurantAPI.ordermaster.OrderMaster;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import javax.persistence.*;

@Entity @Table(name="OrderDetails") @AllArgsConstructor @NoArgsConstructor @Getter @Setter
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(updatable = false)
    private Long OrderDetailId;


    @JoinColumn(name="OrderMasterId", insertable = false, updatable = false )
    @ManyToOne(fetch = FetchType.EAGER)
    @Getter(AccessLevel.NONE)
    private OrderMaster OrderMaster;

    @Column(nullable = false, columnDefinition = "bigint")
    private Long OrderMasterId;


    @JoinColumn(name="FoodItemId", insertable = false, updatable = false )
    @ManyToOne( targetEntity = FoodItem.class, fetch = FetchType.EAGER)

    private FoodItem FoodItem;

    @Column(nullable = false, columnDefinition = "bigint")
    private Long FoodItemId;

    @Column(nullable = false, columnDefinition = "decimal")
    private Double TotalPrice;

    @Column(nullable = false, columnDefinition = "int")
    private Integer Quantity;

}
