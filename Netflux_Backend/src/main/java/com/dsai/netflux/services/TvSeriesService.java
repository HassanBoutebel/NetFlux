package com.dsai.netflux.services;

import com.dsai.netflux.entities.TvSeries;
import com.dsai.netflux.entities.Watchable;
import com.dsai.netflux.exceptions.InvalidInputException;
import com.dsai.netflux.exceptions.ResourceNotFoundException;
import com.dsai.netflux.repositories.SeriesRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.util.List;

@RequiredArgsConstructor
@Service
public class TvSeriesService {
    private final SeriesRepository repository;
    private final FileHandler fileHandler;

    public List<TvSeries> getAll() {
        return repository.findAll();
    }

    public List<Watchable> getNew() {
        return this.repository.findTop8ByOrderByYearStartDesc();
    }

    public List<Watchable> getFeatured() {
        return repository.findByIsFeatured(true);
    }

    public TvSeries getOne(int id) {
        return repository.findById(id).orElseThrow(this::stop);
    }

    public TvSeries add(String data, MultipartFile file) {
        TvSeries temp = repository.save(mapData(data, file));
        int id = temp.getId();
        String imgURL = temp.getImgURL();
        String newImgURL = fileHandler.rename(imgURL, "series" + id);
        temp.setImgURL(newImgURL);
        return repository.save(temp);
    }

    public TvSeries update(int id, String data, MultipartFile file) {
        TvSeries series = mapData(data, file);
        repository.findById(id).orElseThrow(this::stop);
        series.setId(id);
        return repository.save(series);
    }

    public void delete(int id) {
        if (fileHandler.delete(getOne(id).getImgURL())) {
            repository.deleteById(id);
        }
    }

    public ResourceNotFoundException stop() {
        return new ResourceNotFoundException("Series");
    }

    private TvSeries mapData(String data, MultipartFile file) {

        TvSeries series;
        try {
            series = (new ObjectMapper()).readValue(data, TvSeries.class);
if (!validate(series)){
throw new InvalidInputException("invalid input");
}
            if (file != null) {
                String imgURL = fileHandler.saveFile(file, "series" + (series.getId() != null ? series.getId() : System.currentTimeMillis()));
                series.setImgURL(imgURL);
            }
        } catch (IOException | NoSuchAlgorithmException e) {
            e.printStackTrace();
            throw new InvalidInputException("invalid input");
        }

        return series;
    }

    private boolean validate(TvSeries series) {
        String titleRegEx = "[\\p{L}0-9 ,:-]+";
        String creators = "[\\p{L} ,.-]+";
        String descriptionRegEx = "[A-Za-z0-9 :.;()-]+";
        return (series.getTitle().matches(titleRegEx)
                || series.getDescription().matches(descriptionRegEx)
                || series.getCreators().substring(1, series.getCreators().length() - 1).matches(creators)
                || series.getSeasons() < 0
                || series.getYearStart() < series.getYearEnd()
                || series.getYearStart() < 1900
                || series.getYearEnd() < 0
        );
    }
}
