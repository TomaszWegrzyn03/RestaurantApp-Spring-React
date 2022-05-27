package com.example.RestaurantAPI.waiter;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface WaiterService {

    List<Waiter> getWaiters();

    Waiter getWaiter(Long WaiterId);

    Waiter postWaiter(Waiter waiter);
}
