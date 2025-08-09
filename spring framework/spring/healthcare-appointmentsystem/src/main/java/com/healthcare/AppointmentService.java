package com.healthcare;

import java.time.LocalDate;

public class AppointmentService {
    private DoctorRepository doctorRepository;

    
    public void setDoctorRepository(DoctorRepository doctorRepository) {
        this.doctorRepository = doctorRepository;
    }
    public String book(String doctorId, String dateText) {
        LocalDate date = LocalDate.parse(dateText);
        boolean available = doctorRepository.isDoctorAvailable(doctorId, date);

        if (available) {
            return "Appointment confirmed";
        } else {
            return "Doctor not available";
        }
    }
}
