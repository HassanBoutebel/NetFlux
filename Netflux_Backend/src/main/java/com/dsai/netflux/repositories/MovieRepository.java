package com.dsai.netflux.repositories;

import com.dsai.netflux.entities.Movie;
import com.dsai.netflux.entities.Watchable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MovieRepository extends JpaRepository<Movie, Integer> {
    List<Watchable> findByIsFeatured(boolean isFeatured);
    List<Watchable> findTop8ByOrderByYearDesc();
}