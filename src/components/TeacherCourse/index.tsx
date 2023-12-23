import React from 'react'
import './index.scss'

function TeacherCourse(props: any) {

    const {
        src = '/images/card3.png',
        studentNum = "10,288 students",
        hourLearn = "1h 10m",
        lesson = 'Creative Cooking: Simple Sauces to Elevate Every Meal',
        teachername = "Jacob Andree", 
        rating = "4/5",
        originCost = "60$",
        saleCost = "40$",
    } = props;

  return (
    <div className='TeacherCourse'>
        <div className="top"></div>
        <div className="body">
            <div className="up">
                <div className="studentNum">{studentNum}</div>
                <div className="hour">{hourLearn}</div>
            </div>
            <div className="title">{lesson}</div>
            <div className="startCost">{originCost}</div>
            <div className="bottom">
                <div className="name">{teachername}</div>
                <div className="rate">{rating}</div>
                <img src="/images/Star.png" alt="" />
                <div className="sale">{saleCost}</div>
            </div>
        </div>

    </div>
  )
}

export default TeacherCourse