package com.example.ecommerce_app_rest_api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ecommerce_app_rest_api.model.Theater;
import com.example.ecommerce_app_rest_api.service.TheaterService;

@RestController
@RequestMapping("/api")
public class TheaterController {
	
	@Autowired
	private TheaterService theaterService;
	
		//http://localhost:8082/api/theaters
		@GetMapping("/theaters")
		public List<Theater> getAllTheaters(){
			
			return theaterService.getAllTheaters();
		}
		
		//http://localhost:8082/api/theater/id
		@GetMapping("/theater/{id}")
		public Theater getTheaterById(@PathVariable Long id) {
			
			return theaterService.getTheaterById(id);
			
		}
		
		//http://localhost:8082/api/theaters
		@PostMapping("/theaters")
		public Theater createTheater(@RequestBody Theater theater) {
			
			return theaterService.saveTheater(theater);
			
		}
		
		//http://localhost:8082/api/theaters/id
		@PutMapping("/theaters/{id}")
		public Theater updateTheater(@RequestBody Theater theater, @PathVariable Long id) {
			
			Theater existingBooking = theaterService.getTheaterById(id);
			
			existingBooking.setName(theater.getName());
			existingBooking.setLocation(theater.getLocation());
			
			return theaterService.saveTheater(existingBooking);
			
		}
		
		//http://localhost:8082/api/theaters/id
		@DeleteMapping("/theaters/{id}")
		public String deleteTheater(@PathVariable Long id) {
			
			theaterService.deleteTheater(id);
			
			return "Theater with "+ id + " is Successfully deleted";	
		}

}