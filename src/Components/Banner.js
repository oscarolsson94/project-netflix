import React from 'react';
import "./Banner.css";

const Banner = () => {
    return (
        <header className="banner"
            style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://www.phoneworld.com.pk/wp-content/uploads/2020/10/seo-watch-free-link-preview.jpg")`,
            backgroundPosition: "center center",
            }} >
            
            <div className="banner__contents">
                <h1 className="banner__title">Movie Name</h1>
            </div>
            
        </header>
    )
}

export default Banner;
