package com.dsai.netflux.entities;

import com.fasterxml.jackson.annotation.JsonRawValue;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Table(name = "series")
@Entity
public class TvSeries implements Watchable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Transient
    private String url = "/series/";

    @Column(name = "imgURL")
    private String imgURL;

    @Column(name = "title")
    private String title;

    @Lob
    @Column(name = "description")
    private String description;

    @Column(name = "year_start")
    private int yearStart;

    @Column(name = "year_end")
    private int yearEnd;

    @Column(name = "seasons")
    private int seasons;

    @Column(name = "is_featured")
    private boolean isFeatured;

    @Column(name = "creators")
    @JsonRawValue
    private String creators;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinTable(name = "series_has_actors", joinColumns = @JoinColumn(name = "series_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "actors_id", referencedColumnName = "id"))
    private List<Actor> cast = new ArrayList<>();

    public List<Actor> getCast() {
        return cast;
    }

    public void setCast(List<Actor> actors) {
        this.cast = actors;
    }

    public String getCreators() {
        return creators;
    }

    public void setCreators(String creators) {
        this.creators = creators;
    }

    public void setIsFeatured(boolean isFeatured) {
        this.isFeatured = isFeatured;
    }

    public int getSeasons() {
        return seasons;
    }

    public void setSeasons(int seasons) {
        this.seasons = seasons;
    }

    public int getYearEnd() {
        return yearEnd;
    }

    public void setYearEnd(int yearEnd) {
        this.yearEnd = yearEnd;
    }

    public int getYearStart() {
        return yearStart;
    }

    public void setYearStart(int yearStart) {
        this.yearStart = yearStart;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImgURL() {
        return imgURL;
    }

    public void setImgURL(String imgURL) {
        this.imgURL = imgURL;
    }

    public String getUrl() {
        return url += id;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}