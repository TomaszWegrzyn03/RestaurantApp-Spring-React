package com.example.RestaurantAPI.orderdetail;

import com.example.RestaurantAPI.fooditem.FoodItem;
import com.example.RestaurantAPI.ordermaster.OrderMaster;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import javax.persistence.*;

@Entity @Table  @AllArgsConstructor @NoArgsConstructor @Getter @Setter
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(updatable = false)
    private Long orderDetailId;


    @JoinColumn(name="orderMasterId", insertable = false, updatable = false )
    @ManyToOne(fetch = FetchType.EAGER)
    @Getter(AccessLevel.NONE)
    private OrderMaster orderMaster;

    @Column(nullable = false, columnDefinition = "bigint")
    private Long orderMasterId;


    @JoinColumn(name="foodItemId", insertable = false, updatable = false )
    @ManyToOne(  fetch = FetchType.EAGER)
    @Getter(AccessLevel.NONE)
    private FoodItem foodItem;

    @Column(nullable = false, columnDefinition = "bigint")
    private Long foodItemId;

    @Column(nullable = false, columnDefinition = "decimal")
    private Double totalPrice;

    @Column(nullable = false, columnDefinition = "int")
    private Integer quantity;

}
