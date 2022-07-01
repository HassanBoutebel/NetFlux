package com.dsai.netflux.services;

import com.dsai.netflux.entities.Actor;
import com.dsai.netflux.exceptions.InvalidInputException;
import com.dsai.netflux.repositories.ActorRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.util.List;


@RequiredArgsConstructor
@RestController
@CrossOrigin//(origins = "http://localhost:3000")
@RequestMapping(path = "/actors")
public class ActorService {

    private final ActorRepository repository;
    private final FileHandler fileHandler;

    @PostMapping
    public Actor addActor(@RequestParam("data") String data, @RequestParam(value = "file") MultipartFile file) {

        Actor temp = repository.save(mapData(data, file));
        int id = temp.getId();
        String imgURL = temp.getImgURL();
        String newImgURL = fileHandler.rename(imgURL, "actor_" + id);
        temp.setImgURL(newImgURL);
        return repository.save(temp);

    }

    @GetMapping
    public List<Actor> getAll() {
        return repository.findAll();
    }

    private Actor mapData(String data, MultipartFile file) {

        Actor actor = null;
        try {
            actor = (new ObjectMapper()).readValue(data, Actor.class);

            if(!actor.getName().matches("[\\p{L} -]+")){
                throw new InvalidInputException("invalid Actor name");
            }
            if (file != null) {
                String imgURL = fileHandler.saveFile(file, "actor_" + ((actor.getId() != null) ? actor.getId() : System.currentTimeMillis()));
                actor.setImgURL(imgURL);
            }
        } catch (IOException | NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return actor;
    }

}
