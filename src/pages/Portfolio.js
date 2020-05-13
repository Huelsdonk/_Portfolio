import React from "react";

function Portfolio() {
    return (
        <main className="container mt-3">
            <div className="row">
                <div className="col-sm-12">
                    <div className="page-header">
                        <h1>Projects</h1>
                        <hr className="my-4" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4 col-sm-12 mt-3">
                    <div className="card shadow-lg">
                        <a
                            href="https://sali6798.github.io/memory-game/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img
                                src="./../assets/frustration.png"
                                className="card-img"
                                alt="..."
                            />
                        </a>

                        <div className="card-body">
                            <h3 className="card-title">Frustration.</h3>
                            <p className="card-text">A difficult matching game</p>
                            <a
                                className="btn btn-block btn-sm"
                                href="https://github.com/sali6798/memory-game"
                                rel="noopener noreferrer"
                                target="_blank"
                                role="button"
                            >
                                <img src="./../assets/GitHub-Mark-32px.png" alt="GitHub" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-12 mt-3">
                    <div className="card shadow-lg">
                        <a
                            href="https://flixlists.herokuapp.com/movies"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img
                                src="./../assets/flixlists.png"
                                className="card-img-top"
                                alt="..."
                            />
                        </a>

                        <div className="card-body">
                            <h3 className="card-title">FlixLists</h3>
                            <p className="card-text">A movie list application</p>
                            <a
                                className="btn btn-block btn-sm"
                                href="https://github.com/yotambaram/Flixlists"
                                rel="noopener noreferrer"
                                target="_blank"
                                role="button"
                            >
                                <img src="./../assets/GitHub-Mark-32px.png" alt="GitHub" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-12 mt-3">
                    <div className="card shadow-lg">
                        <a
                            href="https://goofyburgerdeal.herokuapp.com/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img
                                src="./../assets/burger.png"
                                className="card-img-top"
                                alt="..."
                            />
                        </a>

                        <div className="card-body">
                            <h3 className="card-title">Eat a Burger!</h3>

                            <p className="card-text">A burger logger</p>
                            <a
                                className="btn btn-block btn-sm"
                                href="https://github.com/Huelsdonk/burger"
                                rel="noopener noreferrer"
                                target="_blank"
                                role="button"
                            >
                                <img src="./../assets/GitHub-Mark-32px.png" alt="GitHub" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-sm-12 mt-3">
                    <div className="card shadow-lg">
                        <a
                            href="https://huelsdonk.github.io/weatherapp/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img
                                src="./../assets/weatherapp.png"
                                className="card-img-top"
                                alt="..."
                            />
                        </a>

                        <div className="card-body">
                            <h3 className="card-title">Weather Planner</h3>
                            <p className="card-text">A travel weather application</p>
                            <a
                                className="btn btn-block btn-sm"
                                href="https://github.com/Huelsdonk/weatherapp"
                                rel="noopener noreferrer"
                                target="_blank"
                                role="button"
                            >
                                <img src="./../assets/GitHub-Mark-32px.png" alt="GitHub" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-12 mt-3">
                    <div className="card shadow-lg">
                        <a
                            href="https://huelsdonk.github.io/calendar"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img
                                src="./../assets/scheduler.png"
                                className="card-img-top"
                                alt="..."
                            />
                        </a>

                        <div className="card-body">
                            <h3 className="card-title">Scheduler</h3>

                            <p className="card-text">A day planner application</p>
                            <a
                                className="btn btn-block btn-sm"
                                href="https://github.com/Huelsdonk/calendar"
                                rel="noopener noreferrer"
                                target="_blank"
                                role="button"
                            >
                                <img src="./../assets/GitHub-Mark-32px.png" alt="GitHub" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12 mt-3">
                    <div className="card shadow-lg">
                        <a
                            href="https://github.com/Huelsdonk/converter"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img
                                src="./../assets/converter.png"
                                className="card-img-top"
                                alt="..."
                            />
                        </a>

                        <div className="card-body">
                            <h3 className="card-title">Python Converter</h3>

                            <p className="card-text">An ingredient converter</p>
                            <a
                                className="btn btn-block btn-sm"
                                href="https://github.com/Huelsdonk/converter"
                                rel="noopener noreferrer"
                                target="_blank"
                                role="button"
                            >
                                <img
                                    src="./../assets/GitHub-Mark-32px.png"
                                    className="git"
                                    alt="GitHub"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default Portfolio;
