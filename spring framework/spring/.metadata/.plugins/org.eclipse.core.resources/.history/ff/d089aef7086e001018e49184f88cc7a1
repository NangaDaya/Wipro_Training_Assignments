package com.main;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.healthcare.AppointmentService;

public class MainApp {
    public static void main(String[] args) {
        @SuppressWarnings("resource")
		ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");

        AppointmentService service = (AppointmentService) context.getBean("appointmentService");
        String result = service.book("DOC101", "2025-07-21");
        System.out.println(result);
    }
}

