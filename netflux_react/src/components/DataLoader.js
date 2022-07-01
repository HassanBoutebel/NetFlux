import React from 'react';
// noinspection ES6CheckImport
import {Link, useNavigate} from "react-router-dom";
import {BASE_URL, formatTime, getURL, handleDelete} from "./GlobalData";

function DataLoader({list}) {
    const navigate = useNavigate();
    return (<div>
            {list.map((item) => <div className="row justify-content-around mx-5 highlight" key={item.id}>

                <Link className="col-11" to={((item.url.indexOf("http") >= 0) ? "/trailers/" + item.id : item.url) }>
                    <figure className="row  figure my-0 d-flex align-items-center ">
                        <img alt="Poster.exe" className="col-3 figure-img my-1 max-height"
                             src={BASE_URL+item.imgURL}/>
                        <figcaption className="col-9 figure-caption align-self-center w-auto">
                            <h4>{item.title}</h4>
                            {/*Movie preview*/}
                            {item.year && <p>Year : {item.year}<br/>
                                director : {item.director}<br/>
                                Duration
                                : {formatTime(item)}</p>}
                            {/*Series Preview*/}
                            {item.yearStart && <p>
                                {formatTime(item)}<br/>
                                Seasons : {item.seasons}<br/>
                                Creators : {item.creators.join(", ")}
                            </p>}
                            {(item.url.indexOf("http") >= 0) && <p>URL: {item.url}</p>}
                        </figcaption>
                    </figure>

                </Link>

                <div className="col-1  d-flex align-items-center">
                    <div>
                        <button className="btn-secondary w-100 my-2" type="button"
                                onClick={() => navigate(getURL(item)+"/edit")}
                        >
                            Edit
                        </button>
                        <button className="btn-danger w-100 my-2" type="button"
                                onClick={() => handleDelete(getURL(item))}>Delete
                        </button>

                    </div>
                </div>

            </div>)}
        </div>

    );
}

export default DataLoader;