import React from 'react'
import './index.scss'

function CardHorizontal(props: any) {

    const {
        src,
        lession,
        time,
        title,
        instructor
    } = props;

  return (
    <div className='card-horizontal'>
        <div className='left'>
            <img src={src} alt="" />
        </div>
        <div className='right'>
            <div className='lession'>{lession} | {time}</div>
            <div className='title'>{title}</div>
            <div className='instructor'>{instructor}</div>
            Levents là thương hiệu thời trang đường phố dẫn dầu xu hướng với phong cách thiết kế đơn giản, sành điệu,
sản phẩm tiêu chuẩn cao dành cho giới trẻ toàn cầu tự tin thể hiện cá tính.
        </div>
    </div>
  )
}

export default CardHorizontal