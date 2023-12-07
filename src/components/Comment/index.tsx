import React from 'react'
import './index.scss'
import { Avatar } from '../Avatar'

function Comment(props: any) {
    const {
        name,
        time,
        content,
    } = props
  return (
    <div className="course__2-item">
        <div className="course__2-item-name">
            <div className="course__2-item-name-img"><Avatar></Avatar></div>
            <div className="item-name">
                <div className="item-name-1">{name}</div>
                <div className="item-name-rate">{time}</div>
            </div>
        </div>
        <div className="course__2-item-des">{content}</div>
        <a href="" className="course__2-item-more">Show more</a>
    </div>
  )
}

export default Comment