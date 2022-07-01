package com.dsai.netflux.services;


import com.dsai.netflux.entities.TrailerAlt;
import com.dsai.netflux.exceptions.InvalidInputException;
import com.dsai.netflux.exceptions.ResourceNotFoundException;
import com.dsai.netflux.repositories.TrailerRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.util.List;

@RequiredArgsConstructor
@Service
public class TrailersService {

    private final TrailerRepository repository;
    private final FileHandler fileHandler;

    public List<TrailerAlt> getAll() {
        return repository.findAll();
    }

    public TrailerAlt add(String data, MultipartFile file) {
        TrailerAlt temp = repository.save(mapData(data, file));
        int id = temp.getId();
        String imgURL = temp.getImgURL();
        String newImgURL = fileHandler.rename(imgURL, "trailer" + id);
        temp.setImgURL(newImgURL);
        return repository.save(temp);
    }

    public TrailerAlt update(int id, String data, MultipartFile file) {
        TrailerAlt trailer = mapData(data, file);
        repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Trailer"));
        trailer.setId(id);

        return repository.save(trailer);
    }

    public void delete(int id) {
        repository.deleteById(id);
    }

    public TrailerAlt get(int id) {
        return repository.findById(id).orElseThrow(this::stop);
    }

    public ResourceNotFoundException stop() {
        return new ResourceNotFoundException("Trailer");
    }

    private TrailerAlt mapData(String data, MultipartFile file) {

        TrailerAlt trailer;
        try {
            trailer = (new ObjectMapper()).readValue(data, TrailerAlt.class);
            if (!trailer.getTitle().matches("[\\p{L} 0-9,:-]+")) {
                throw new InvalidInputException("invalid input");
            }
            if (file != null) {
                String imgURL = fileHandler.saveFile(file, "trailer" + (trailer.getId() != null ? trailer.getId() : System.currentTimeMillis()));
                trailer.setImgURL(imgURL);
            }
        } catch (IOException | NoSuchAlgorithmException e) {
            e.printStackTrace();
            throw new InvalidInputException("invalid input");
        }

        return trailer;
    }

}
