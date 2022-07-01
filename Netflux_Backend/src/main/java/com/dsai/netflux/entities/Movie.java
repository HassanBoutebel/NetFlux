package com.dsai.netflux.entities;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Table(name = "movies")
@Entity
public class Movie implements Watchable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Transient
    private String url = "/peliculas/";

    @Lob
    @Column(name = "imgURL")
    private String imgURL;

    @Column(name = "title", length = 45)
    private String title;

    @Lob
    @Column(name = "description")
    private String description;

    @Column(name = "year")
    private int year;

    @Column(name = "duration")
    private int duration;

    @Column(name = "director", length = 45)
    private String director;

    @Column(name = "is_featured")
    private boolean isFeatured;

    @ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.MERGE)
    @JoinTable(name = "movies_has_actors",
            joinColumns = @JoinColumn(name = "movies_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "actors_id",referencedColumnName = "id"))
    private List<Actor> cast = new ArrayList<>();

    public List<Actor> getCast() {
        return cast;
    }

    public void setCast(List<Actor> actors) {
        this.cast = actors;
    }

    public boolean getIsFeatured() {
        return isFeatured;
    }

    public void setIsFeatured(boolean isFeatured) {
        this.isFeatured = isFeatured;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
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
        return url += this.id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}