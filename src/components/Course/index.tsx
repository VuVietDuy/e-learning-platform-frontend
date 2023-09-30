import React from 'react';
import './index.scss'

function Course(props :any) {
    const {
        src,
        time,
        title,
        instructor,
        currentPrice,
        defaultPrice,
        student,
        onClick,
    } = props;

  return (
    <div className='Course' onClick={onClick}>
        <div className='upper'>
            <img className='image' src={src} alt="" />
        </div>
        <div className='bottom'>
            <div className='info1'>
                <span className='student'>{student}</span>
                <span className='time'>{time}</span>
            </div>
            <p className="title">{title}</p>
            <p className="def-price">{defaultPrice}</p>
            <div className='info2'>
                <span className='instructor'>{instructor}</span>
                <span className='cur-price'>{currentPrice}</span>
            </div>
        </div>
    </div>
  )
}

export default Course
