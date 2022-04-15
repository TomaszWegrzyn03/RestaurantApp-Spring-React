package com.example.RestaurantAPI.waiter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(path="api/Waiter")
public class WaiterController {

    @Autowired
    private WaiterService waiterService;

    @GetMapping
    public List<Waiter> getWaiters(){
        return waiterService.getWaiters();
    }

    @GetMapping("/{id}")
    public Waiter getWaiter(@PathVariable("id") Long WaiterId){
        return waiterService.getWaiter(WaiterId);
    }

    @PostMapping
    public Waiter postWaiter(@RequestBody Waiter waiter){
        return waiterService.postWaiter(waiter);

    }
}
