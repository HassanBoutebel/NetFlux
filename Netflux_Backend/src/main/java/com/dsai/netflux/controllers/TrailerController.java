package com.dsai.netflux.controllers;

import com.dsai.netflux.entities.TrailerAlt;
import com.dsai.netflux.services.TrailersService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
@CrossOrigin//(origins = "http://localhost:3000")
@RequiredArgsConstructor
@RestController
@RequestMapping(path = "/trailers")
public class TrailerController {
    private final TrailersService trailersService;
    //get trailers
    @GetMapping
    public List<TrailerAlt> getTrailers() {
        return trailersService.getAll();
    }

    @GetMapping(path = "/{id}")
    public TrailerAlt getTrailer(@PathVariable int id){
        return trailersService.get(id);
    }

    @PostMapping
    public TrailerAlt addTrailer(@RequestParam("data") String data, @RequestParam(value = "file", required = true) MultipartFile file) {
        return trailersService.add(data,file);
    }

    @PutMapping(path = "/{id}")
    public void updateTrailer(@PathVariable int id, @RequestParam("data") String data, @RequestParam(value = "file", required = false) MultipartFile file) {

        trailersService.update(id, data,file);
    }

    @DeleteMapping(path = "/{id}")
    public void deleteTrailer(@PathVariable int id) {
        trailersService.delete(id);
    }

}
