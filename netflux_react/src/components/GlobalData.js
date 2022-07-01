import axios from "axios";
import {useNavigate} from "react-router-dom";

export const BASE_URL = "http://localhost:8080";

export const movies = {
    "url": "/peliculas", "header": "Movies", "button": "Movie", "data": {
        "url": "/peliculas",
        "imgURL": "https://via.placeholder.com/340x190",
        "title": "Add New Movie",
        "description": "description",
        "year": 1980,
        "duration": 90,
        "director": "director",
        "isFeatured": false,
        "cast": []
    }
};

export const series = {
    "url": "/series", "header": "Series", "button": "Series", "data": {
        "url": "/series",
        "imgURL": "https://via.placeholder.com/340x190",
        "title": "Add New Series",
        "description": "description",
        "yearStart": 1980,
        "yearEnd": 0,
        "seasons": 1,
        "creators": ["creator 1", "creator 2"],
        "isFeatured": false,
        "cast": []
    }
}

export const trailers = {
    "url": "/trailers", "header": "Trailers", "button": "Trailer", "data": {
        "title": "Add New Trailer", "url": "Trailer link", "imgURL": "https://via.placeholder.com/340x190"
    }
}

export const handleDelete = (url) => {
    if (window.confirm('Are you sure you want to delete the item?\n this action is irreversible')) {
        axios.delete(BASE_URL + url).then(() => {
            window.location.assign(url.substring(0, url.lastIndexOf("/")));
        });
    }
}
const request = axios.CancelToken.source();
export const handleUpdate = (url, formData) => {

    axios.put(BASE_URL + url, formData, {
        cancelToken: request.token
    }).then(() => {
        window.location=url;
    });
}

export const handlePost = (url, formData, setActor) => {

    axios.post(BASE_URL + url, formData, {
        cancelToken: request.token
    }).then((res) => {
        if (setActor){
            setActor(res.data);
        }else{
            window.location=url;
        }

    });

}

export const getURL = (item) => {
    return ((item.url.indexOf("http") >= 0) ? "/trailers/" + item.id : item.url);
}

export const formatTime = (item) => {
    if (item.duration) {
        return parseInt((item.duration / 60).toString()) + "h" + item.duration % 60 + "min";
    } else {
        return item.yearStart + " - " + ((item.yearEnd !== 0) ? item.yearEnd : "Airing");
    }
}

export const validateImage = (file, setImg) => {

    const image = new Image();
    image.src = URL.createObjectURL(file);
    image.onload = () => {
        if (image.width) {
            setImg({
                file: file, imgURL: URL.createObjectURL(file)
            })

        }
    };
    image.onerror = () => {
        window.alert("File is not an image");
    }


}
export const formatCreators = (creators) => {
    let temp = creators;
    let str = "[";
    if (creators instanceof String || typeof creators === "string") {
        temp = creators.split(",");
    }

    for (let i = 0; i < temp.length; i++) {
        str += "\"" + temp[i].trim() + "\",";
    }
    return str.substring(0, str.length - 1) + "]";
}

export const pattern = {
    name: "[\\p{L} -]+",
    title: "[\\p{L}0-9 ,:-]+",
    creators: "[\\p{L} ,.-]+",
    description: /^[A-Za-z0-9 :.;,()-]+$/

};
export const errorMsg="Looks like you are lost because John Travolta could not find the requested resource";
