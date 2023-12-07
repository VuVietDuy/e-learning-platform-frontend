import { CheckCircleOutlined, CloseCircleOutlined, PlayCircleOutlined } from '@ant-design/icons'
import React from 'react'

function Lession(props : any) {
    const {
        isPlay,
        done,
        lessonMount,
        title,
        time,
    } = props

    function lessonIcon () {
        if(isPlay) {
            return <PlayCircleOutlined></PlayCircleOutlined>
        } else if (done) {
            return <CheckCircleOutlined></CheckCircleOutlined>
        } else {
            return <CloseCircleOutlined></CloseCircleOutlined>
        }
    }

  return (
    <div className='lesson-container'>
        <div>
            
        </div>
    </div>
  )
}

export default Lession