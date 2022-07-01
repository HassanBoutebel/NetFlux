import React from 'react';
import {pattern} from "./GlobalData";

function BodyContent({newItem, handleChange}) {
    return (<div className="col-8  py-1 details">
        {/*Title*/}
        <div className="row">
            <label htmlFor="txt_title" id="title-ariaLabel">Title</label>
            <input id="txt_title" name="title" type="text" pattern={pattern.title}
                   defaultValue={newItem.title}
                   onChange={handleChange}
            />
        </div>
        {/*Trailer URL*/}
        {!newItem.cast && <div className="row">
            <label htmlFor="txt_url" id="url-ariaLabel">URL</label>
            <input id="txt_url" name="url" type="text"
                   // pattern={pattern.URL}
                   defaultValue={newItem.url}
                   onChange={handleChange}
            />
        </div>}
        {/*Year*/}
        {newItem.cast && <>
            <div className="row">
                {/*Movie*/}
                {newItem.year && <>
                    <label htmlFor="txt_year" id="year-ariaLabel">Year</label>
                    <input id="txt_year" name="year" type="number" min="1900" defaultValue={newItem.year}
                           onChange={handleChange}
                    /></>}
                {/*Series*/}
                {newItem.yearStart && <div>
                    <div className="row"><label htmlFor="txt_year" id="year-ariaLabel">Start Year</label>
                        <input id="txt_year" name="yearStart" type="number" min="1900" defaultValue={newItem.yearStart}
                               onChange={handleChange}
                        /></div>
                    <div className="row"><label htmlFor="txt_year" id="yearEnd-ariaLabel">End Year (0 (zero):
                        Airing</label>
                        <input id="txt_yearEnd" name="yearStart" type="number"
                               defaultValue={newItem.yearEnd}
                               onChange={handleChange}
                        /></div>
                </div>}
            </div>
            {/*Director, Creators*/}
            <div className="row">
                {/*Director*/}
                {newItem.director && <><label htmlFor="txt_director" id="director-ariaLabel">Director</label>
                    <input id="txt_director" name="director" type="text" pattern={pattern.name}
                           defaultValue={newItem.director}
                           onChange={handleChange}
                    />
                </>}
                {/*Creators*/}
                {newItem.creators && <>
                    <label htmlFor="txt_director" id="director-ariaLabel">Creators( comma "," seperated)</label>
                    <input id="txt_director" name="creators" type="text" pattern={pattern.creators}
                           defaultValue={newItem.creators.join(", ")}
                           onChange={handleChange}
                    />
                </>}
            </div>
            {/*Duration, Seasons*/}
            <div className="row">
                {/*Duration*/}
                {newItem.duration && <>
                    <label htmlFor="txt_duration" id="duration-ariaLabel">Duration (in
                        minutes)</label>
                    <input id="txt_duration" name="duration" type="number" min="60"
                           defaultValue={newItem.duration}
                           onChange={handleChange}
                    /></>}
                {/*Seasons*/}
                {newItem.seasons && <><label htmlFor="txt_duration" id="seasons-ariaLabel">Seasons</label>
                    <input id="txt_duration" name="seasons" type="number" min="1"
                           defaultValue={newItem.seasons}
                           onChange={handleChange}
                    /></>}
            </div>
            {/*is Featured*/}
            <div className="row py-1 ">
                <label className="col-4" htmlFor="txt_featured" id="featured-ariaLabel">Check the box to set it in
                    featured
                    list </label>
                <input className="col-1" id="isFeatured" name="isFeatured" type="checkbox"
                       defaultChecked={newItem.isFeatured}
                       defaultValue={newItem.isFeatured === "true" ? "false" : "true"}
                       onClick={handleChange}
                />

            </div>

            {/*Description*/}
            <div className="row">
                <label htmlFor="txtarea_synopsis" id="synopsis-ariaLabel">synopsis</label>
                <textarea cols="20" id="txtarea_synopsis" pattern={pattern.text}
                          name="description"
                          rows="8"
                          defaultValue={newItem.description}
                          onChange={handleChange}
                />
            </div>
        </>}


    </div>);
}

export default BodyContent;