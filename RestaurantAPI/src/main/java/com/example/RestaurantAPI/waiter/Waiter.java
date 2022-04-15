package com.example.RestaurantAPI.waiter;
import lombok.*;

import javax.persistence.*;


@Entity @Table(name="Waiters") @AllArgsConstructor @NoArgsConstructor @Getter @Setter
public class Waiter {

     @Id
     @GeneratedValue(strategy = GenerationType.AUTO)
     @Column(updatable = false)
     private Long WaiterId;

     @Column(nullable = false,columnDefinition = "varchar(50)")
     private String WaiterName;


}