import { StarOutlined } from '@ant-design/icons';
import React from 'react';

import './index.scss'

function Course(props :any) {
    const {
        src,
        time,
        title,
        instructor,
        star,
        currentPrice,
        defaultPrice,
        viewer,
        onClick,
    } = props;

  return (
    <div className='Course' onClick={onClick}>
        <div className='upper'>
            <img className='image' src={src} alt="" />
        </div>
        <div className='bottom'>
            <p className='time'>{time}</p>
            <p className='title'>{title}</p>
            <div className='info1'>
                <span className='instructor'>{instructor}</span>
                <span className='star'>{star} <StarOutlined /></span>
            </div>
            <div className='info2'>
                <span className='cur-price'>{currentPrice}</span>
                <span className='def-price'>{defaultPrice}</span>
                <span className='viewer'>{viewer}</span>
            </div>
        </div>
    </div>
  )
}

export default Course