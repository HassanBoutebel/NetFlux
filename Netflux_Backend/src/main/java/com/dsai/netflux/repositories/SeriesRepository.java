package com.dsai.netflux.repositories;

import com.dsai.netflux.entities.TvSeries;
import com.dsai.netflux.entities.Watchable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SeriesRepository extends JpaRepository<TvSeries, Integer> {
    List<Watchable> findByIsFeatured(boolean isFeatured);
    List<Watchable> findTop8ByOrderByYearStartDesc();

}