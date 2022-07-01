import React, {useState} from 'react';
import {handlePost, pattern, validateImage} from "./GlobalData";

function AddActorForm({addActorToCast}) {
    const namePlaceholder = "Actor Name";
    const imgPlaceholder = "https://via.placeholder.com/40";

    const [actor, setActor] = useState({
        name: namePlaceholder, imgURL: imgPlaceholder
    });
    const [img, setImg] = useState({
        file: null, imgURL: imgPlaceholder
    });
    const onChange = (e) => {
        setActor({...actor, name: e.target.value});
    }
    const preview = (e) => {
        validateImage(e.target.files[0], setImg);
    }
    const reset = () => {
        document.getElementById("addActorForm").reset();
        setActor({
            name: namePlaceholder, imgURL: imgPlaceholder
        });
        setImg({file: null, imgURL: imgPlaceholder})
    }

    const addActor = (e) => {
        e.preventDefault();
        if (img.file !== null && actor.name !== namePlaceholder && actor.name.length !== 0) {
            const formData = new FormData();
            formData.append("file", img.file);
            formData.append("data", JSON.stringify(actor));
            handlePost("/actors", formData, addActorToCast);
    reset();
        } else {
            window.alert("Something is missing: Please select an image and a name for the actor");
        }

    }

    return (<form id="addActorForm" onSubmit={(event) => addActor(event)}>
        <div className="row mx-0 justify-content-around  cast">
            <div className="col-8 ">

                <figure className="row figure my-0  align-items-center ">
                    <img alt="ActorImg.exe" className="col-2 figure-img my-1 img-fluid"
                         id="act_img" src={img.imgURL}/>
                    <figcaption className="col-5 figure-caption align-self-center w-75">
                        <label htmlFor="actor_name" id="label_actor_name" className="pe-2">Actor
                            Name: </label>
                        <input id="actor_name" name="name" type="text" pattern={pattern.name}
                               title="Actor name can not have numbers or special characters"
                               value={actor.name}
                               onChange={onChange}
                        />
                        <input accept="image/jpg, image/jpeg, image/png"
                               className="col-5 mx-3 mb-4 align-self-end justify-content-start"
                               id="act_files" type="file"
                               onChange={preview}
                        />
                    </figcaption>
                </figure>

            </div>
            {/*-- add_cancel buttons-->*/}
            <div className="col-1 d-flex align-items-center">
                <div>
                    <button className="btn-secondary w-100 my-2" type="submit"
                    >Add
                    </button>
                    <button className="btn-danger w-100 my-2" type="button"
                            onClick={reset}
                    >cancel
                    </button>

                </div>
            </div>

        </div>
    </form>);
}

export default AddActorForm;