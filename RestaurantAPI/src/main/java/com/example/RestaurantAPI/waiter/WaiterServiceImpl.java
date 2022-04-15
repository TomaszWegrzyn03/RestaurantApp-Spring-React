package com.example.RestaurantAPI.waiter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WaiterServiceImpl implements WaiterService{

    @Autowired
    private WaiterRepository waiterRepository;

    @Override
    public List<Waiter> getWaiters() {
        return waiterRepository.findAll();
    }

    @Override
    public Waiter getWaiter(Long WaiterId) {
        return waiterRepository.findById(WaiterId).get();
    }

    @Override
    public Waiter postWaiter(Waiter waiter) {
        return waiterRepository.save(waiter);
    }

}
