package com.dsai.netflux.controllers;

import com.dsai.netflux.entities.TvSeries;
import com.dsai.netflux.services.TvSeriesService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@CrossOrigin//(origins = "http://localhost:3000")
@RequiredArgsConstructor
@RestController
@RequestMapping(path = "/series")
public class SeriesController {

    private final TvSeriesService tvSeriesService;

    @PostMapping
    public TvSeries add(@RequestParam("data") String data, @RequestParam(value = "file") MultipartFile file) {

        return tvSeriesService.add(data, file);
    }

    //get all series
    @GetMapping
    public List<TvSeries> getAll() {
        return tvSeriesService.getAll();
    }

    //get a single  Series by ID
    @GetMapping(path = "/{id}")
    public TvSeries getOne(@PathVariable String id) {
        try {
            return tvSeriesService.getOne(Integer.parseInt(id));
        } catch (Exception e) {
            throw tvSeriesService.stop();
        }
    }

    @PutMapping(path = "/{id}")
    public TvSeries update(@PathVariable int id, @RequestParam("data") String data, @RequestParam(value = "file", required = false) MultipartFile file) {

        return tvSeriesService.update(id, data, file);
    }

    @DeleteMapping(path = "/{id}")
    public void delete(@PathVariable int id) {
        tvSeriesService.delete(id);
    }

}
