package com.dsai.netflux.exceptions;

public class InvalidInputException extends RuntimeException{
    private final String conundrum;

    public InvalidInputException(String message) {
        this.conundrum = message;
    }
    public String getConundrum() {
        return conundrum;
    }
}
