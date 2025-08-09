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

import com.example.ecommerce_app_rest_api.model.Booking;
import com.example.ecommerce_app_rest_api.service.BookingService;

@RestController
@RequestMapping("/api")
public class BookingController {
	
	
	@Autowired
	private BookingService bookingService;
	
		//http://localhost:8082/api/bookings
		@GetMapping("/bookings")
		public List<Booking> getAllBookings(){
			
			return bookingService.getAllBookings();
		}
		
		//http://localhost:8082/api/booking/id
		@GetMapping("/booking/{id}")
		public Booking getBookingById(@PathVariable Long id) {
			
			return bookingService.getBookingById(id);
			
		}
		
		//http://localhost:8082/api/bookings
		@PostMapping("/bookings")
		public Booking createBooking(@RequestBody Booking booking) {
			
			return bookingService.saveBooking(booking);
			
		}
		
		//http://localhost:8082/api/bookings/id
		@PutMapping("/bookings/{id}")
		public Booking updateBooking(@RequestBody Booking booking, @PathVariable Long id) {
			
			Booking existingBooking = bookingService.getBookingById(id);
			
			existingBooking.setBookingDate(booking.getBookingDate());
			existingBooking.setSeats(booking.getSeats());
			
			return bookingService.saveBooking(existingBooking);
			
		}
		
		//http://localhost:8082/api/bookings/id
		@DeleteMapping("/bookings/{id}")
		public String deletebooking(@PathVariable Long id) {
			
			bookingService.deleteBooking(id);
			
			return "Booking with "+ id + " is Successfully deleted";	
		}


}