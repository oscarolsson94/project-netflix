import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import "./Nav.css";

const Nav = () => {

    const [show, setShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            setShow(true);
        }
        else {
            setShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);

        return () => window.removeEventListener("scroll", transitionNavBar); //cleanup for listener

    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
                <img
                    onClick={() => history.push("/")}
                    className="nav__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
                    alt="netflix logo"
                />

                <img
                    onClick={() => history.push("/profile")}
                    className="nav__avatar"
                    src="https://occ-0-285-41.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
                    alt="netflix avatar"
                />
            </div>
        </div>
    )
}

export default Nav;
