import React from 'react'
import "./index.scss"
import TeacherCourse from "../../components/TeacherCourse";

function TeacherProfile() {


  return (
    <div className='TeacherProfile'>
      <div className="Left">
        <div className="teacherImg"></div>
        <div className="name">Teddy Swim</div>
        <div className="career">A Speacialist in CG Tutorials</div>
        <div className="tag">Teacher</div>
        <button className="followBtn">Following</button>
        <div className="followNum">
          <div className="num">1888</div>
          <div className="num">25</div>
          <div>Followers</div>
          <div>Following</div>
        </div>
      </div>
      <div className="Right">
        <img src="/images/teacherpage.png" alt="" className='teacherpage'/>
        <div className="paragraph">
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
        </div>
        <div className="AllTeacherCourse">
          <TeacherCourse></TeacherCourse>
          <TeacherCourse></TeacherCourse>
          <TeacherCourse></TeacherCourse>
          <TeacherCourse></TeacherCourse>
          <TeacherCourse></TeacherCourse>
          <TeacherCourse></TeacherCourse>
          <TeacherCourse></TeacherCourse>
          <TeacherCourse></TeacherCourse>
          <TeacherCourse></TeacherCourse>
        </div>
      </div>
    </div>
  )
}

export default TeacherProfile