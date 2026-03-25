package mthree.ecomproject.backend.controller;

import mthree.ecomproject.backend.dto.OrderRequestDTO;
import mthree.ecomproject.backend.dto.OrderResponseDTO;
import mthree.ecomproject.backend.model.OrderHistory;
import mthree.ecomproject.backend.service.OrderService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:4200")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    // POST /api/orders — place a new order
    @PostMapping
    public ResponseEntity<OrderResponseDTO> placeOrder(@RequestBody OrderRequestDTO request) {
        OrderResponseDTO response = orderService.placeOrder(request);
        return ResponseEntity.ok(response);
    }

    // GET /api/orders/{userId} — get order history for a user
    @GetMapping("/{userId}")
    public ResponseEntity<List<OrderHistory>> getOrderHistory(@PathVariable Long userId) {
        List<OrderHistory> history = orderService.getOrderHistory(userId);
        return ResponseEntity.ok(history);
    }
}