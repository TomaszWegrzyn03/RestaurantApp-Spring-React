package com.example.RestaurantAPI.ordermaster;

import com.example.RestaurantAPI.waiter.Waiter;
import com.example.RestaurantAPI.orderdetail.OrderDetail;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;


import javax.persistence.*;
import java.util.List;

@Entity @Table(name="OrderMasters") @AllArgsConstructor @NoArgsConstructor @Getter @Setter
public class OrderMaster {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(updatable = false)
    private Long OrderMasterId;

    @Column(nullable = false, columnDefinition = "varchar(70)")
    private String OrderNumber;

    @JoinColumn(name="waiterId", insertable = false, updatable = false)
    @ManyToOne( fetch = FetchType.EAGER)
    private Waiter Waiter;

    @Column(nullable = false, columnDefinition = "bigint")
    private Long WaiterId;


    @Column(nullable = false, columnDefinition = "int")
    private Integer TableNumber;

    @Column(columnDefinition = "TEXT")
    private String MoreInfo;

    @Column( nullable = false, columnDefinition = "decimal")
    private Double GrandTotal;


    @OneToMany(mappedBy = "orderMasterId")
    private List<OrderDetail> OrderDetail;



}
