import React from 'react';
import useFetch from "./useFetch";
import {BASE_URL} from "./GlobalData";

function CastLoader({cast, handleCast}) {

    const {data: actors, isLoading} = useFetch("/actors");

    const removeExisting = (actor) => {
        if (!cast.isEmpty) {
            for (const act of cast) {
                if (act.id === actor.id)
                    return false;
            }
            return true;
        }
        return true;
    }

    const handleSelection = (actor, remove) => {

        if (remove) {
            handleCast(cast.filter((act) => !(act.id === actor.id)));

        } else {
            cast.push(actor);
            handleCast(cast);
        }
    }

    return (<>
        <>
            <p className="pt-2">Remove Actors : </p>
            <ul className="col-11 py-1 list-unstyled w-100 actors_edit">
                {cast && cast.map((actor) => <>
                    {actor && <li className="row">

                        <figure className="col-11 row d-flex px-0 m-0 figure align-items-center"
                                onClick={() => handleSelection(actor, true)}
                                key={"actor_" + actor.id}
                        >
                            <img alt="logo" className="col-3 figure-img img-fluid my-lg-1"
                                 src={BASE_URL+actor.imgURL}/>
                            <figcaption className="col-9 figure-caption align-self-lg-center">
                                <p>{actor.name}</p>
                            </figcaption>
                        </figure>
                    </li>}</>
                )
                }
            </ul>
        </>
        {isLoading && <div>Loading...</div>}
        {actors && <>
            <p className="pt-2">Select Other Actors : </p>
            <ul className="col-11 py-1 list-unstyled w-100 actors_edit">
                {actors.filter(removeExisting).map((actor) => <>
                    {actor && <li className="row" key={"add_" + actor.id}>

                        <figure className="col-11 row d-flex px-0 m-0 figure align-items-center"
                                onClick={() => handleSelection(actor, false)}

                        >
                            <img alt="logo" className="col-3 figure-img img-fluid my-lg-1"
                                 src={BASE_URL+actor.imgURL}/>
                            <figcaption className="col-9 figure-caption align-self-lg-center">
                                <p>{actor.name}</p>
                            </figcaption>
                        </figure>
                    </li>}</>
                )
                }
            </ul>
        </>}


    </>);
}

export default CastLoader;
