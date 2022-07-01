package com.dsai.netflux.controllers;

import com.dsai.netflux.entities.Watchable;
import com.dsai.netflux.services.MovieService;
import com.dsai.netflux.services.TvSeriesService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RequiredArgsConstructor
@RestController
@RequestMapping
public class HomePageController {

    private final MovieService movieService;
    private final TvSeriesService tvSeriesService;


    // featured movies and series
    @GetMapping(path = "/destacados")
    public List<Map<String, Object>> getFeatured() {
        List<Map<String, Object>> results = formatData(movieService.getFeatured());
        results.addAll(formatData(tvSeriesService.getFeatured()));
        return results;
    }

    //get new movies
    @GetMapping(path = "/peliculas/novedades")
    public List<Map<String, Object>> getNewMovies() {
        return formatData(movieService.getNew());
    }

    //get new Series
    @GetMapping(path = "/series/novedades")
    public List<Map<String, Object>> getNewSeries() {
        return formatData(tvSeriesService.getNew());
    }

    private List<Map<String, Object>> formatData(List<Watchable> data) {
        List<Map<String, Object>> results = new ArrayList<>();
        for (Watchable w : data) {
            Map<String, Object> temp = new HashMap<>();
            temp.put("id", w.getId());
            temp.put("url", w.getUrl());
            temp.put("title", w.getTitle());
            temp.put("imgURL", w.getImgURL());
            results.add(temp);
        }
        return results;
    }

}

