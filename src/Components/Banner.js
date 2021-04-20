import React, { useEffect, useState } from 'react';
import "./Banner.css";
import axios from '../axios';
import requests from '../Requests';

const Banner = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
            );
            return request;
        }

        fetchData();
    }, [])

    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }

    return (
        <header className="banner"
            style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://www.phoneworld.com.pk/wp-content/uploads/2020/10/seo-watch-free-link-preview.jpg")`,
            backgroundPosition: "center center",
            }} >
            
            <div className="banner__contents">
                <h1 className="banner__title">Movie Name</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">{truncate(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil provident error dolor vitae cum nemo, debitis, modi facilis deserunt minus expedita. Quos eos, aperiam provident vel mollitia sequi dolores soluta.`, 150) }</h1>
            </div>

            <div className="banner--fadeBottom" />
            
        </header>
    )
}

export default Banner;
