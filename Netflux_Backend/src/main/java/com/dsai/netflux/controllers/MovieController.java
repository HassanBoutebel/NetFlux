package com.dsai.netflux.controllers;

import com.dsai.netflux.entities.Movie;
import com.dsai.netflux.services.MovieService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@CrossOrigin//(origins = "http://localhost:3000")
@RequiredArgsConstructor
@RestController
@RequestMapping(path = "/peliculas")
public class MovieController {
    private final MovieService movieService;

    @PostMapping
    public Movie addMovie(@RequestParam("data") String data, @RequestParam(value = "file") MultipartFile file) {

        return movieService.add(data, file);
    }

    // Get all movies
    @GetMapping
    public List<Movie> getAll() {
        return movieService.getAll();
    }

    //get a single movie by ID
    @GetMapping(path = "/{id}")
    public Movie getOne(@PathVariable String id) {
        try {
            return movieService.getOne(Integer.parseInt(id));
        } catch (Exception e) {
            throw movieService.stop();
        }
    }

    @PutMapping(path = "/{id}")
    public Movie update(@PathVariable int id, @RequestParam("data") String data, @RequestParam(value = "file", required = false) MultipartFile file) {

        return movieService.update(id, data, file);
    }

    @DeleteMapping(path = "/{id}")
    public void delete(@PathVariable int id) {
        movieService.delete(id);
    }


}
