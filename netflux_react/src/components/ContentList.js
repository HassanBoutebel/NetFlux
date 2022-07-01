import React from 'react';
import DataLoader from "./DataLoader";
import useFetch from "./useFetch";
import {useNavigate} from "react-router-dom";
import Error from "../pages/Error";

function ContentList({content}) {

    const {data, isLoading,error} = useFetch(content.url);
    const navigate = useNavigate();
    return (<div>
            <h3 className="my-3 d-flex justify-content-center">List of {content.header}</h3>
            <div className="d-flex justify-content-center my-2 mb-5">
                <button className="btn px-5 py-2 d-flex align-items-center watch" type="button"
                        onClick={()=>navigate(content.url + "/add")}>Add
                    New {content.button} </button>
            </div>
            {isLoading && <div>Loading...</div>}
            {error && <Error msg={error}/>}
            {data && <DataLoader list={data}/>}
        </div>

    );
}

export default ContentList;