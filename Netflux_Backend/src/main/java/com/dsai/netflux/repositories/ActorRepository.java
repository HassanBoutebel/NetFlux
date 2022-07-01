package com.dsai.netflux.repositories;

import com.dsai.netflux.entities.Actor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ActorRepository extends JpaRepository<Actor, Integer> {
    Actor findFirstByOrderByIdDesc();
}