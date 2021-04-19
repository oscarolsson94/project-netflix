import React from 'react';
import "./Nav.css";

const Nav = () => {
    return (
        <div className="nav">
            <div className="nav__contents">
                <img
                    className="nav__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
                    alt="netflix logo"
                />

                <img
                    className="nav__avatar"
                    src="https://occ-0-285-41.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
                    alt="netflix avatar"
                />
            </div>
        </div>
    )
}

export default Nav;