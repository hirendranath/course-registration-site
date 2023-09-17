/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import "./Home.css"
import Cart from '../Cart/Cart';
import Swal from 'sweetalert2/src/sweetalert2.js'

const Home = () => {
    const [allCourse, setAllCourse] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);

    const [totalRemaining, setTotalRemaining] = useState(20);
    const [totalCredit, setTotalCredit] = useState(0);



    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setAllCourse(data));
    }, []);

    const handleSelectorCourse = (course) => {


        const isExist = selectedCourse.find((item) => item.id == course.id);
        let credit = course.credit;
        let count = course.credit;

        if (isExist) {
            return Swal.fire({
                title: 'Already Enrolled!',
                icon: 'success',
                confirmButtonText: 'OK',
            });
        }
        else {
            selectedCourse.forEach((item) => {
                credit = credit + item.credit;
            });
            const totalremaining = 20 - credit;
            if (credit > 20) {
                return Swal.fire({
                    title: "You Don't Have Enough Credit!",
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            }
            else {
                setTotalCredit(credit);
                setTotalRemaining(totalremaining);
                setSelectedCourse([...selectedCourse, course]);
            }
        }
    };

    return (
        <div>
            <div className="container">
                <div className="card-main-container">
                    <div className="card-container">
                        {
                            allCourse.map(course => (
                                <div key={course.id} className="card">
                                    <div className="course-image">
                                        <img className="photo" src={course.image} alt="" />
                                    </div>
                                    <h4>{course.name}</h4>
                                    <p><small>{course.details}</small></p>
                                    <div className="info">
                                        <p>Price :${course.Price}</p>
                                        <p>Credit : {course.credit}</p>
                                    </div>
                                    <button className="course-select-btn" onClick={() => handleSelectorCourse(course)}>Select</button>
                                </div>
                            ))
                        }
                    </div>

                    <div className="cart">
                        <Cart selectedCard={selectedCourse} totalRemaining={totalRemaining} totalCredit={totalCredit}></Cart>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Home;