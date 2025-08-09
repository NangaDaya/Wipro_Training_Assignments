package com.example.ecommerce_app_rest_api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ecommerce_app_rest_api.model.Booking;
import com.example.ecommerce_app_rest_api.repository.BookingRepository;

@Service
public class BookingService {
	
	
	@Autowired
	private BookingRepository bookingRepo;
	
	
	public List<Booking> getAllBookings(){
		return bookingRepo.findAll();
	}

	public Booking saveBooking(Booking booking) {
		return bookingRepo.save(booking);
	}
	
	public Booking getBookingById(Long id) {
		return bookingRepo.findById(id).get();
	}
	
	public void deleteBooking(Long id) {
		bookingRepo.deleteById(id);
	}

}