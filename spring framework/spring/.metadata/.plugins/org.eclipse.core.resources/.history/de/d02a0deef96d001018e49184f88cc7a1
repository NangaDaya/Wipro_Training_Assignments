package com.main;
 
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.model.Address;
import com.model.Customer;
 
public class CustomerMain {
	public static void main(String[] args) {
		//load the context
		@SuppressWarnings("resource")
		ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");
		//Fetch the bean
		Customer cust = (Customer) context.getBean("customer");
		
		//access the variables, methods
		System.out.println(cust.getSno());
		System.out.println(cust.getName());
		System.out.println(cust.getEmail());
		
		Address addr = (Address) context.getBean("address");
		System.out.println(addr.getDoorno());
		System.out.println(addr.getCityName());
		System.out.println(addr.getStreetAddr());
		System.out.println(addr.getPincode());
	}
}
 
 