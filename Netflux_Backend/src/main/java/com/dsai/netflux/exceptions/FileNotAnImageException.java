package com.dsai.netflux.exceptions;

public class FileNotAnImageException extends RuntimeException {
    private static int count = 0;
    private final String warning;

    public FileNotAnImageException(String resource) {
        FileNotAnImageException.count++;
        switch (FileNotAnImageException.count) {
            case 1 -> this.warning = String.format("Optimus Prime detected that your file { %s } was not an image," +
                    " Optimus Prime will consider it a mistake", resource);
            case 2 -> this.warning = String.format("Optimus Prime detected that your file { %s } was not an image," +
                    " this happened twice now.Optimus Prime is reconsidering", resource);
            default -> this.warning = String.format("SkyNet detected that your file { %s } was not an image," +
                    " this happened %s " + ((FileNotAnImageException.count > 9) ? "time" : "times") +
                    " now. SkyNet is questioning your intelligence and intentions", resource, FileNotAnImageException.count);
        }

    }

    public String getWarning() {
        return warning;
    }
}
