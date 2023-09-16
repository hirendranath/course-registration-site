import React from 'react';
import "./Home.css"
const Home = () => {
    return (
        <div className="container">
            <div className="card-container">
                <div className="card">
                    <div className="card-image">
                        <img className='photo' src="https://i.ibb.co/68dK4h5/47094270.jpg" alt="" />
                    </div>
                    <h2>Introduction to C Programming</h2>
                    <p><small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, quo.</small></p>
                    <div className="info">
                        <p> Price : 19000</p>
                        <p> Credit : 5hr </p>
                    </div>
                    <button className='course-select-btn' >Select</button>
                </div>

            </div>
        </div>
    );
};

export default Home;