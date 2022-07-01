import React from 'react';

function HomePage() {
    return (<>
            <div className="w-100 p-5 text-white bg-dark " id="news">
                <h2>New Entries</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Donec quam fells, ultricies nec, pellentesque eu.</p>

            </div>
        <div className="row">


            <div className="col-lg-9" id="main">

                <div className="row bg-dark " id="movies-row">
                    <h3>New Movies</h3>


                </div>

                <hr/>
                    <div className="row bg-dark " id="series-row">
                        <h3> New TV Series</h3>


                    </div>

            </div>

            <div className="d-none d-md-block d-sm-block d-lg-none">
                <hr/>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 px-2 flex-md-grow-1" id="sidebar">

                <div className="row" id="popular">
                    <h4>Popular</h4>

                </div>
                <br/>
                    <div className="d-none d-md-block d-sm-block d-lg-none">
                        <hr/>
                    </div>

                    <div className="row" id="trailers">
                        <h4>Trailers</h4>
                    </div>
            </div>
        </div>

        </>
    );
}

export default HomePage;