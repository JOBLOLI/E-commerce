package mthree.ecomproject.backend.service;

import mthree.ecomproject.backend.dto.OrderItemRequestDTO;
import mthree.ecomproject.backend.dto.OrderRequestDTO;
import mthree.ecomproject.backend.dto.OrderResponseDTO;
import mthree.ecomproject.backend.model.Order;
import mthree.ecomproject.backend.model.OrderHistory;
import mthree.ecomproject.backend.model.OrderItem;
import mthree.ecomproject.backend.repository.OrderHistoryRepository;
import mthree.ecomproject.backend.repository.OrderItemRepository;
import mthree.ecomproject.backend.repository.OrderRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final OrderItemRepository orderItemRepository;
    private final OrderHistoryRepository orderHistoryRepository;

    public OrderService(OrderRepository orderRepository,
                        OrderItemRepository orderItemRepository,
                        OrderHistoryRepository orderHistoryRepository) {
        this.orderRepository = orderRepository;
        this.orderItemRepository = orderItemRepository;
        this.orderHistoryRepository = orderHistoryRepository;
    }

    // Place a new order
    public OrderResponseDTO placeOrder(OrderRequestDTO request) {

        // 1 - Create and save the Order
        Order order = new Order();
        order.setUserId(request.getUserId());
        order.setStatus("PROCESSING");
        order.setDate(LocalDate.now());
        Order savedOrder = orderRepository.save(order);

        // 2 - Create and save each OrderItem
        List<OrderItem> orderItems = new ArrayList<>();
        for (OrderItemRequestDTO itemDTO : request.getItems()) {
            OrderItem item = new OrderItem();
            item.setOrder(savedOrder);
            item.setProductId(itemDTO.getProductId());
            item.setQuantity(itemDTO.getQuantity());
            item.setPrice(itemDTO.getPrice());
            orderItems.add(item);
            orderItemRepository.save(item);
        }

        // 3 - Save to OrderHistory
        for (OrderItemRequestDTO itemDTO : request.getItems()) {
            OrderHistory history = new OrderHistory();
            history.setOrderId(savedOrder.getOrderId());
            history.setUserId(request.getUserId());
            history.setItemName(itemDTO.getProductName());
            history.setPrice(itemDTO.getPrice());
            orderHistoryRepository.save(history);
        }

        // 4 - Build and return response
        OrderResponseDTO response = new OrderResponseDTO();
        response.setOrderId(savedOrder.getOrderId());
        response.setStatus("PROCESSING");
        response.setMessage("Order placed successfully!");
        return response;
    }

    // Get order history for a user
    public List<OrderHistory> getOrderHistory(Long userId) {
        return orderHistoryRepository.findByUserId(userId);
    }
}