const BASE_URL="http://localhost:8080"
const MOVIES = {
    his_soul: "/peliculas/novedades",
    container: "#movies-row"
};
const SERIES = {
    his_soul: "/series/novedades",
    container: "#series-row"
};
const TRAILERS = {
    his_soul: "/trailers",
    container: "#trailers"
};
const FEATURED = {
    his_soul: "/destacados",
    container: "#popular"
};
//tile Template (movies and series)
const TILE_TEMPLATE = $(" <div class=\"col-lg-3 col-md-6 col-sm-12 py-1 d-flex justify-content-sm-center\">\n" +
    "                    <a>\n" +
    "                        <figure class=\"figure\">\n" +
    "                            <img alt=\"logo\"\n" +
    "                                 class=\"figure-img img-fluid img-thumbnail\"\n" +
    "                                 src=\"./Assets/movie_poster_480x720.png\">\n" +
    "                            <figcaption class=\"figure-caption\">\n" +
    "                                <p>Quisque eleifend ligula non condimentum euismod</p>\n" +
    "                            </figcaption>\n" +
    "                        </figure>\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "               ");
// sidebar template
const SIDEBAR_TILE_TEMPLATE = $("<div class=\"col-lg-12 col-md-6 col-sm-12 d-flex justify-content-sm-center\" id=\"sidebar-template\">\n" +
    "                        <a class=\"p-1 ps-lg-0\">\n" +
    "                            <figure class=\"row figure my-lg-0 d-flex align-items-center\">\n" +
    "                                <img alt=\"logo\" class=\"col-lg-3 figure-img img-fluid my-lg-1\"\n" +
    "                                     src=\"./Assets/movie_poster_480x720.png\">\n" +
    "                                <figcaption class=\"col-lg-9 figure-caption align-self-lg-center\">\n" +
    "                                    <p>Quisque eleifend ligula non condimentum euismod</p>\n" +
    "                                </figcaption>\n" +
    "                            </figure>\n" +
    "                        </a>\n" +
    "                    </div>");
// Actor template
const ACTOR_TEMPLATE = $("<li>\n" +
    "                                <figure class=\"row figure my-lg-0 d-flex align-items-center\">\n" +
    "                                    <img alt=\"logo\" class=\"col-3 figure-img img-fluid my-lg-1\"\n" +
    "                                         src=\"Assets/actor.png\">\n" +
    "                                    <figcaption class=\"col-9 figure-caption align-self-lg-center\">\n" +
    "                                        <p>Actor</p>\n" +
    "                                    </figcaption>\n" +
    "                                </figure>\n" +
    "                            </li>")

async function loadData(me, template) {
    /* me = { his_soul : request_url, container : id of container to insert data into (movies, series, ...)}
       template : template to be used, movie or sidebar*/
    let response = await fetch(BASE_URL+me.his_soul);
    if (response.status === 200) {
        let data = await response.json();
        update(data, me.container, template);
    } else {
        alert("could not connect to server check your connection and refresh page");
    }
}

function update(data, container, template) {
    for (const info of data) {
        template.find("img").attr('src',BASE_URL+info.imgURL);
        template.find("p").html(info.title);
        // set external links to open in new tabs
        if (info.url.indexOf("http") >= 0) {
            template.find("a").attr({
                "href": info.url,
                "target": "_blank"
            });
        } else {
            template.find("a").on("click", (event) => {
                getDetails(BASE_URL+info.url);
                event.preventDefault();
            });
        }
        $(container).append(template.clone(true, true));
        template.find("a").off("click");
    }
}

async function getDetails(his_soul) {
    // his_soul: movie or series id. ex: BASE_URL+/api/series/101
    let response = await fetch(his_soul);
    if (response.status === 200) {
        let data = await response.json();
        const isMovie = his_soul.indexOf("peliculas") > 0;
        // load Header
        $("#news").load("./../details.html #movie-title > *", () => {
            loadHeader(data, isMovie)
        });
        // load main content
        $("#main").load("./../details.html #main > *", () => {
            loadMainContent(data, isMovie);
        });
        $(window).scrollTop(150);
    } else {
        let data = await response.json();
        alert(data.conundrum);
    }
}

function loadHeader(data, isMovie) {
    if (isMovie) {
        $("#title").html(data.title);
        $("#year").html(data.year);
    } else {
        $("#title").html(data.title);
        $("#year ").html(data.yearStart + " - " + ((data.yearEnd !== 0) ? data.yearEnd : "Airing"));
    }
}

function loadMainContent(data, isMovie) {
    loadCommonContent(data);
    if (isMovie) {
        $("#d_year").html("Year :" + data.year);
        $("#duration").html("Duration : " + parseInt((data.duration / 60).toString()) + "h" + data.duration % 60 + "min");
        $("#director").html("Director : " + data.director);
    } else {
        $("#d_year").html(data.yearStart + " - " + ((data.yearEnd !== 0) ? data.yearEnd : "Airing"));
        $("#duration").html("Seasons : " + data.seasons);
        $("#director").html("Creators : " + data.creators.join(", "));
    }

}

function loadCommonContent(data) {
    $("#poster").attr("src", data.imgURL);
    $("#d_title").html(data.title);
    $("#description").html(data.description);
    for (const actor of data.cast) {
        ACTOR_TEMPLATE.find("img").attr("src",actor.imgURL);
        ACTOR_TEMPLATE.find("p").html(actor.name);
        $("#actors").append(ACTOR_TEMPLATE.clone())
    }
}

$(document).ready(() => {

    loadData(MOVIES, TILE_TEMPLATE);
    loadData(SERIES, TILE_TEMPLATE);
    loadData(FEATURED, SIDEBAR_TILE_TEMPLATE);
    loadData(TRAILERS, SIDEBAR_TILE_TEMPLATE);
});