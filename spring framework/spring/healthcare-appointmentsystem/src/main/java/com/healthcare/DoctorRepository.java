package com.healthcare;

import java.time.LocalDate;
import java.util.*;

public class DoctorRepository {
    private Map<String, List<LocalDate>> doctorSchedule;

    public DoctorRepository() {
        doctorSchedule = new HashMap<>();
        List<LocalDate> docDates = new ArrayList<>();
        docDates.add(LocalDate.of(2025, 7, 21));
        docDates.add(LocalDate.of(2025, 7, 31));

        doctorSchedule.put("DOC101", docDates);
    }

    public boolean isDoctorAvailable(String doctorId, LocalDate date) {
        List<LocalDate> availableDates = doctorSchedule.get(doctorId);

        if (availableDates == null) {
            return false;
        }

        return availableDates.contains(date);
    }
}
