package com.example.portfolio_app.model;

public class Education {
    private String degree;
    private String institution;
    private String year;

    public Education(String degree, String institution, String year) {
        this.degree = degree;
        this.institution = institution;
        this.year = year;
    }

    public String getDegree() { return degree; }
    public String getInstitution() { return institution; }
    public String getYear() { return year; }
}
