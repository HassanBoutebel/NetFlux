import React from "react";
// noinspection ES6CheckImport
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ContentList from "./ContentList";
import DetailsPage from "../pages/DetailsPage";
import EditPage from "../pages/EditPage";
import {movies, series, trailers} from "./GlobalData";
import Error from "../pages/Error";
import HomePage from "../pages/HomePage";



function App() {
    return (<BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>

            <Route path="/admin/peliculas" element={<ContentList content={movies}/>}/>
            <Route path="/admin" element={<ContentList content={movies}/>}/>
            <Route path="/peliculas/:id" element={<DetailsPage content={movies}/>}/>
            <Route path="/peliculas/:id/edit" element={<EditPage content={movies}/>}/>
            <Route path="/peliculas/add" element={<EditPage content={movies}/>}/>

            <Route path="/series" element={<ContentList content={series}/>}/>
            <Route path="/series/:id" element={<DetailsPage content={series}/>}/>
            <Route path="/series/:id/edit" element={<EditPage content={series}/>}/>
            <Route path="/series/add" element={<EditPage content={series}/>}/>

            <Route path="/trailers" element={<ContentList content={trailers}/>}/>
            <Route path="/trailers/:id" element={<DetailsPage content={trailers}/>}/>
            <Route path="/trailers/:id/edit" element={<EditPage content={trailers}/>}/>
            <Route path="/trailers/add" element={<EditPage content={trailers}/>}/>
            <Route path={"/*"} element={<Error msg={"Something went wrong, go back home"}/>}/>
                </Routes>
                </BrowserRouter>);
            }

                   export default App;
