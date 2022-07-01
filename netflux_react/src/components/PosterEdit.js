import React from 'react';
import {BASE_URL} from "./GlobalData";

function PosterEdit({img, previewImg, handleImgReset}) {

    return (

        <div className=" row col-4 py-1 d-flex justify-content-center">
            <figure className=" col-12 figure d-flex">
                <img alt="logo" className="figure-img img-fluid m-auto"
                     id="poster"
                     src={(img.imgURL?.indexOf("http")>=0) ? img.imgURL:BASE_URL+img.imgURL}/>
            </figure>
            <input accept="image/jpg, image/jpeg, image/png"
                   className="col-11 mx-3 mb-4 align-self-end justify-content-start w-90"
                   id="files" type="file"
                   onChange={previewImg}
            />

            <div className="d-flex justify-content-center align-self-end reset">
                <button className="btn px-5 py-2 d-flex align-items-center cancel reset"
                        type="button"
                        onClick={handleImgReset}
                >reset image
                </button>
            </div>

        </div>);
}

export default PosterEdit;