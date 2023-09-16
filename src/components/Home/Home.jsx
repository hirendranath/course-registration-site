/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import "./Home.css"
const Home = () => {

    const [allCourse, setAllCourse] = useState([]);

    useEffect(() => {
        fetch("./data.json")
            .then((res) => res.json())
            .then((data) => setAllCourse(data));
    }, []);

console.log(allCourse);

    return (
        <div className="container">
            <div className="card-main-container">
                <div className="card-container">
                    {
                        allCourse.map(course => (
                            <div key={course.id} className="card">
                                <div className="card-image">
                                    <img className='photo' 
                                    src={course.image}
                                    alt="" />
                                </div>
                                <h3>{course.name}</h3>
                                <p><small>{course.details}</small></p>
                                <div className="info">
                                    <p> Price : {course.Price} </p>
                                    <p> Credit : {course.Credit} </p>
                                </div>
                                <button className='course-select-btn' >Select</button>
                            </div>
                        ))

                    }
                </div>
                <div className="card2">
                    <h2>Hi</h2>
                </div>

            </div>
        </div>
    );
};

export default Home;