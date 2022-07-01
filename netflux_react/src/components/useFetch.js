import {useEffect, useState} from 'react';
import axios from "axios";
import {BASE_URL, errorMsg} from "./GlobalData";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios.get(BASE_URL + url, {
            cancelToken: request.token
        })
            .then((res) => {
                setData(res.data);
                setIsLoading(false);
            }).catch(ex => {
            console.log(ex.response.data);
            request.cancel();
            setError(errorMsg);
            setIsLoading(false);

        })
        ;
    }, [url]);


    return {data, isLoading, error};
}

export default useFetch;