package com.dsai.netflux.services;

import com.dsai.netflux.entities.Movie;
import com.dsai.netflux.entities.Watchable;
import com.dsai.netflux.exceptions.InvalidInputException;
import com.dsai.netflux.exceptions.ResourceNotFoundException;
import com.dsai.netflux.repositories.MovieRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.util.List;

@RequiredArgsConstructor
@Service
public class MovieService {

    private final MovieRepository repository;
    private final FileHandler fileHandler;

    public List<Movie> getAll() {
        return repository.findAll();
    }

    public List<Watchable> getNew() {
        return repository.findTop8ByOrderByYearDesc();
    }

    public List<Watchable> getFeatured() {
        return repository.findByIsFeatured(true);
    }

    public Movie getOne(int id) {
        return repository.findById(id).orElseThrow(this::stop);
    }

    public Movie add(String data, MultipartFile file) {
        Movie temp = repository.save(mapData(data, file));
        int id = temp.getId();
        String imgURL = temp.getImgURL();
        String newImgURL = fileHandler.rename(imgURL, "actor_" + id);
        temp.setImgURL(newImgURL);
        return repository.save(temp);
    }

    public Movie update(int id, String data, MultipartFile file) {
        Movie movie = mapData(data, file);
        repository.findById(id).orElseThrow(this::stop);
        movie.setId(id);
        return repository.save(movie);
    }

    public void delete(int id) {
        if (fileHandler.delete(getOne(id).getImgURL())) {
            repository.deleteById(id);
        }

    }

    public ResourceNotFoundException stop() {
        return new ResourceNotFoundException("Movie");
    }

    private Movie mapData(String data, MultipartFile file) {

        Movie movie;
        try {
            movie = (new ObjectMapper()).readValue(data, Movie.class);
if (!validate(movie)){
    System.out.println("invalid");
    throw new InvalidInputException("Invalid Input");
}
            if (file != null) {
                String imgURL = fileHandler.saveFile(file, "movie_" + (movie.getId() != null ? movie.getId() : System.currentTimeMillis()));
                movie.setImgURL(imgURL);
            }
        } catch (IOException | NoSuchAlgorithmException e) {
            e.printStackTrace();
            throw new InvalidInputException("invalid input");
        }

        return movie;
    }

    private boolean validate(Movie movie) {
        String titleRegEx = "[\\p{L} 0-9,:-]+";
        String nameRegEx = "[\\p{L} -]+";
        String descriptionRegEx = "[A-Za-z0-9 :.;()-]+";
        return (movie.getTitle().matches(titleRegEx)
                || movie.getDescription().matches(descriptionRegEx)
                || movie.getDirector().matches(nameRegEx)
                || movie.getDuration()<0
                || movie.getYear() < 1900
        );
    }
}
