package com.dsai.netflux.exceptions;

public class ResourceNotFoundException extends RuntimeException {
    private final String conundrum;

    public ResourceNotFoundException(String resource) {
        this.conundrum = String.format("The %s that you requested does not exist," +
                " but then again does anything actually exist", resource);
    }
    public String getConundrum() {
        return conundrum;
    }
}
