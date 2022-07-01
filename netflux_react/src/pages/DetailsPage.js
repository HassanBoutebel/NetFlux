import React from 'react';
// noinspection ES6CheckImport
import {useNavigate, useParams} from "react-router-dom";
import useFetch from "../components/useFetch";
import {BASE_URL, formatTime, getURL, handleDelete} from "../components/GlobalData";
import Error from "./Error";

function DetailsPage({content}) {
    const {id} = useParams();
    const {data: item, isLoading,error} = useFetch(content.url + "/" + id);
    const navigate = useNavigate();
    return (<div>
        {isLoading && <div>Loading...</div>}
        {error && <Error msg={error}/>}
        {item && <div>
            {/*Title_Container*/}
            <div className="w-100 p-5 text-white bg-dark" id="movie-title">
                <h2 className="d-flex justify-content-center p-0" id="title">{item.title}</h2>
                {/*if it is a movie or serie show the year*/}
                {item.cast && <h2 className="d-flex justify-content-center m-2"
                                  id="year">{item.year ? item.year : formatTime(item)}</h2>}

                <div className="d-flex justify-content-center ">
                    <button className="btn px-5 py-2 mx-2 d-flex align-items-center watch" type="button"
                            onClick={() => navigate(getURL(item)+"/edit")}>edit
                    </button>
                    <button className="btn px-5 py-2 mx-2 d-flex align-items-center watch cancel"
                            type="button" onClick={() => handleDelete(item.url)}>delete
                    </button>
                </div>
                <hr/>
            </div>

            {/*Main Container*/}
            <div className="row">
                <div id="main">

                    <div className="row bg-dark">

                        <div className="col-md-4  col-sm-12 py-1 d-flex d-flex justify-content-sm-center">
                            <figure className="figure">
                                <img alt="logo" className="figure-img img-fluid"
                                     id="poster"
                                     src={BASE_URL+item.imgURL}/>
                            </figure>
                        </div>

                        {/*Synopsis*/}
                        <div className="col-md-8  py-1">
                            <h3 id="d_title">{item.title}</h3>
                            {!item.cast && <h5 id="d_year">Url : {item.url}</h5>}
                            {item.year && <h5 id="d_year">Year : {item.year}</h5>}
                            {item.yearStart && <h5 id="d_year">{formatTime(item)}</h5>}
                            {item.duration && <h5 id="duration">Duration:{formatTime(item)}</h5>}
                            {item.seasons && <h5 id="duration">Seasons: {item.seasons}</h5>}
                            {item.cast && <>
                                <hr/>
                                <h5>Synopsis</h5>
                                <p id="description"> {item.description} </p></>}

                        </div>
                    </div>

                    {/*info*/}
                    {item.cast && <>
                        <hr/>
                        <div className="row bg-dark ">

                            {item.director && <p id="director">Director: {item.director}</p>}
                            {item.creators && <p id="director">Creators : {item.creators.join(", ")}</p>}

                            <br/>
                            {/*Cast*/}
                            <p>Cast: </p>
                            <ul className="col-sm-12 py-1 list-unstyled" id="actors">
                                {item.cast.map(actor => <li key={actor.id}>
                                    <figure className="row figure my-lg-0 d-flex align-items-center">
                                        <img alt="logo" className="col-3 figure-img img-fluid my-lg-1"
                                             src={BASE_URL+actor.imgURL}/>
                                        <figcaption className="col-9 figure-caption align-self-lg-center">
                                            <p>{actor.name}</p>
                                        </figcaption>
                                    </figure>
                                </li>)}


                            </ul>

                            <div className="d-flex justify-content-center ">
                                <button className="btn px-5 py-2 mx-2 d-flex align-items-center watch"
                                        type="button"
                                        onClick={() => navigate(getURL(item)+"/edit")}
                                >edit
                                </button>
                                <button className="btn px-5 py-2 mx-2 d-flex align-items-center watch cancel"
                                        type="button" onClick={() => {
                                    handleDelete(getURL(item));
                                }}
                                >delete
                                </button>
                            </div>

                        </div>
                    </>

                    }

                </div>

            </div>

        </div>}


    </div>);
}

export default DetailsPage;