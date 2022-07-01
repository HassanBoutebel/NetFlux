import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {
    BASE_URL,
    errorMsg,
    formatCreators,
    handlePost,
    handleUpdate,
    pattern,
    validateImage
} from "../components/GlobalData";
import CastLoader from "../components/CastLoader";
import AddActorForm from "../components/AddActorForm";
import PosterEdit from "../components/PosterEdit";
import BodyContent from "../components/BodyContent";
import Error from "./Error";

function EditPage({content}) {
    let [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const {id} = useParams();
    const request = axios.CancelToken.source();

    const [img, setImg] = useState({
        file: null, imgURL: null
    });

    // item to be edited and submitted (original is unchanged)
    const [newItem, setNewItem] = useState({...content.data});
    const [init, setInit] = useState(false);

    const [submit, setSubmit] = useState(false);
   // const navigate = useNavigate();


    //preview image
    const previewImg = (e) => {
        validateImage(e.target.files[0], setImg);

    }

    //reset image
    const handleImgReset = () => {
        setImg({file: null, imgURL: item.imgURL});
    }

    //Add new actor to DB and cast list
    const addActorToCast = (actor) => {
        console.log(actor);
        let stateCopy = Object.assign({}, newItem);
        stateCopy.cast.push(actor);
        setNewItem(stateCopy);
    }

    //handle the cast selection
    const handleCast = (cast) => {
        const temp = {...newItem};
        temp.cast = cast;
        setNewItem(temp);
    }

    // handle changes to form inputs
    const handleChange = (e) => {

        setNewItem({...newItem, [e.target.name]: e.target.value});
    }

    //reset Form
    const reset = () => {
        document.getElementById("editForm").reset();
        handleCast(item.cast);
        handleImgReset();
    }

    // init item from id or create an empty one
    useEffect(() => {
        if (id) {

            axios.get(BASE_URL + content.url + "/" + id, {
                cancelToken: request.token
            })
                .then((res) => {
                    setItem(res.data);
                }).catch(() => {
                request.cancel();
                setError(errorMsg);
            })

            ;

        } else {
            setItem({...content.data});
        }
        setIsLoading(false);
    }, []);

    //init new item
    useEffect(() => {
        if (!init && item) {
            setNewItem(Object.assign({}, item));
            setImg({file: null, imgURL: item.imgURL})
            setInit(true);
        }
    }, [item]);


    //onSubmit
    const submitForm = (e) => {
        e.preventDefault();
        let isValid = true;
        newItem.creators && setNewItem({...newItem, "creators": formatCreators(newItem.creators)});
        if (content.data.cast) {
            if (!pattern.description.test(newItem.description)) {
                isValid = false;
                window.alert("Please enter a valid description");
            }
            if (newItem.cast.length === 0) {
                isValid = false;
                window.alert("Please select at least one actor");
            }
        }
        if (!id && img.file === null) {
            isValid = false;
            window.alert("Please select an image");
        }
        if (isValid) {
            setSubmit(true);
        }


    }
    //Submit changes
    useEffect(() => {

        if (submit) {
            const formData = new FormData();
            formData.append("file", img.file);
            formData.append("data", JSON.stringify(newItem));
            if (id) {
                handleUpdate(content.url + "/" + id, formData);
            } else {
                handlePost(content.url, formData);
            }
            setSubmit(false);
           // navigate(content.url)
        }

    }, [submit]);

    return (<>
            {isLoading && <div>Loading...</div>}
            {error && <Error msg={error}/>}
            {item && <>

                <div className="w-100 p-5 text-white bg-dark" id="movie-title">
                    {/*<h2 className="d-flex justify-content-center m-2">{content.button}</h2><br/>*/}
                    <h2 className="d-flex justify-content-center p-0" id="title">{item.title}</h2>
                    <hr/>
                </div>

                <div className="row">
                    <form className="row" id="editForm" onSubmit={submitForm}>

                        {/*---Poster--*/}
                        <PosterEdit img={img} handleImgReset={handleImgReset} previewImg={previewImg}/>

                        {/*---Synopsis--*/}
                        <BodyContent newItem={item} handleChange={handleChange}/>

                        <div>
                            <hr/>
                        </div>
                        {/*--Cast-->*/}
                        {item.cast && <div className="row mb-3 m-2 cast">

                            <p>Cast: </p>


                            {/*CastLoader */}
                            <CastLoader cast={newItem.cast} handleCast={handleCast}/>
                        </div>}


                        {/*Save and reset buttons*/}
                        <div className="d-flex justify-content-center py-2">
                            <button className="btn px-5 py-2 mx-2 d-flex align-items-center watch" type="submit"
                            >save
                            </button>
                            <button className="btn px-5 py-2 mx-2 d-flex align-items-center watch cancel"
                                    type="button"
                                    onClick={reset}
                            >Reset
                            </button>
                        </div>

                    </form>
                    {/*Add Actor*/}
                    {item.cast && <AddActorForm addActorToCast={addActorToCast}/>}

                </div>

            </>}

        </>

    );
}

export default EditPage;