package com.dsai.netflux.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class ExceptionInterceptor extends ResponseEntityExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public final ResponseEntity<Object> handleAllExceptions(ResourceNotFoundException ex) {
        Map<String, String> msg = new HashMap<>();
        msg.put("Conundrum", ex.getConundrum());
        return new ResponseEntity<>(msg, HttpStatus.NOT_FOUND);
    }
    @ExceptionHandler(FileNotAnImageException.class)
    public final ResponseEntity<Object> handleAllExceptions(FileNotAnImageException ex) {
        Map<String, String> msg = new HashMap<>();
        msg.put("Conundrum", ex.getWarning());
        return new ResponseEntity<>(msg, HttpStatus.UNSUPPORTED_MEDIA_TYPE);
    }
@ExceptionHandler(InvalidInputException.class)
    public final ResponseEntity<Object> handleAllExceptions(InvalidInputException ex){
    Map<String, String> msg = new HashMap<>();
    msg.put("Conundrum", ex.getConundrum());
    return new ResponseEntity<>(msg, HttpStatus.BAD_REQUEST);
}
}
