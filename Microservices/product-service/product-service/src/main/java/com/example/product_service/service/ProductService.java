package com.example.product_service.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import com.example.product_service.dto.OrderDTO;
import com.example.product_service.model.Product;
import com.example.product_service.repository.ProductRepository;

@Service
public class ProductService {
	
	 @Autowired
	    private ProductRepository productRepository;

	 @Autowired
		private KafkaTemplate<Long, OrderDTO> template;

	 
	    public Product createProduct(Product product) {
	        return productRepository.save(product);
	    }

	    public Optional<Product> getProductByName(String name) {
	        return productRepository.findByName(name);
	    }
	    public Optional<Product> getProductById(Long id) {
	    	
	        return productRepository.findById(id);
	    }

		public List<Product> getAllProducts() {
			// TODO Auto-generated method stub
			return productRepository.findAll();
		}
		
		@KafkaListener(topics = "orders-batch3", groupId = "my-group", containerFactory = "orderListener")
		// Method
		public void consume(OrderDTO order) {
			// Print statement
			System.out.println("message = inside consumer service " + order);
		}


}
