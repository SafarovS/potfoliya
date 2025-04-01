import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="page-title" data-aos="fade">
            <div className="heading">
                <div className="container">
                    <nav className="breadcrumbs">
                        <div className="container">
                            <ol>
                                <li><Link to="/">Home</Link></li>
                                <li className="current">Not Found</li>
                            </ol>
                        </div>
                    </nav>
                    <div className="row d-flex justify-content-center text-center">
                        <div className="col-lg-8">
                            <h1>404</h1>
                            <p className="mb-0">Not Found this page</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} export default NotFound;