package com.example.order_service.service;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.circuitbreaker.CircuitBreakerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;

import com.example.order_service.dto.CustomerDTO;
import com.example.order_service.dto.ProductDTO;
import com.example.order_service.feign.ProductClient;
import com.example.order_service.model.Order;
import com.example.order_service.repository.OrderRepository;

@Service
public class OrderService {

   // private static final String CUSTOMER_SERVICE_URL = "http://customer-service/api/customers";

	 private static final String CUSTOMER_SERVICE_URL = "http://localhost:2222/api/customers";

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private ProductClient productClient;


    @Autowired
	private KafkaTemplate<Long, Order> template;
	
    
    public Order createOrder(Long customerId) {
        Order order = new Order();
        order.setOrderDate(LocalDateTime.now());
        order.setCustomerId(customerId);
        return orderRepository.save(order);
    }

    public String placeOrder(Long customerId) {
        CustomerDTO customer = findCustomer(customerId);
        if (customer != null) {
            Order order = new Order();
            order.setOrderDate(LocalDateTime.now());
            order.setCustomerId(customer.getId());
            order.setQuantity(5);
            orderRepository.save(order);
            
            template.send("orders-batch3", order.getId(),order);

            return "Order placed for Customer: " + customer.getName();
        }
        return "Failed to place order. Customer not found.";
    }

    
    @Autowired
    private CircuitBreakerFactory<?, ?> circuitBreakerFactory;

    public CustomerDTO findCustomerById(Long customerId) {
        org.springframework.cloud.client.circuitbreaker.CircuitBreaker circuitBreaker = circuitBreakerFactory.create("customerService");

        return circuitBreaker.run(
                () -> restTemplate.getForObject(CUSTOMER_SERVICE_URL + "/"+customerId, CustomerDTO.class),
                throwable -> customerFallBack(customerId, throwable)
        );
    }

    public CustomerDTO findCustomer(Long customerId) {
    	return restTemplate.getForObject(CUSTOMER_SERVICE_URL +"/"+ customerId, CustomerDTO.class);
    }
    
    public CustomerDTO customerFallBack(Long customerId, Throwable t) {
        System.out.println("Customer service is unavailable, returning fallback data. Cause: " + t.getMessage());
        return new CustomerDTO(customerId, "Default", "Customer");
    }

    public Order createOrderWithProduct(Long productId, Integer quantity) {
        ProductDTO product = productClient.getProductById(productId);
        Order order = new Order();
        order.setOrderDate(LocalDateTime.now());
        order.setProductId(product.getId());
        order.setQuantity(quantity);
        return orderRepository.save(order);
    }
}