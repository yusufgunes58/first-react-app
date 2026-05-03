import React from 'react'
import "../css/ course.css";

function Course({ course }) {
    const { id, title, description, price, link, image } = course;
    return (

        <div className='course'>
            <h4 style={{ color: "red" }}> {title}</h4>
            <h5> {description} </h5>
            <h3> Price: {price}</h3>
            <a href={link}> şimdi kayıt ol </a>
        </div>

    )
}

export default Course