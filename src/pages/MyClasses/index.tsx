import React from 'react'
import './index.scss'
import MyClassesCourse from "../../components/MyClassesCourse";

function MyClasses() {
  return (
    <div className="MyClasses">
      <div className="Top">
        <div className="Title">My Classes</div>
        <div className="Category">
          <div className='element'>My Learning Paths</div>
          <div className='element'>Watch History</div>
          <div className='element'>Purchased Courses</div>
        </div>
      </div>

      <div className="Body">
        <div className="MyLearningPaths">
            <MyClassesCourse></MyClassesCourse>
            <MyClassesCourse></MyClassesCourse>
            <MyClassesCourse></MyClassesCourse>
            <MyClassesCourse></MyClassesCourse>
            <MyClassesCourse></MyClassesCourse>
            <MyClassesCourse></MyClassesCourse>
        </div>

        <div className="WatchHistory">
          <div className="top">
            <div className="length-status">
              <div className="title">
                <div>CLASS LENGTH</div>
                <div>STATUS</div>
              </div>

              <div className="cate">
                <div className="element">
                  <input type="checkbox" className='borderBox' />
                  &lt; 30 min
                </div>
                <div className="element">
                  <input type="checkbox" className='borderBox' />
                  30 - 60 min
                </div>
                <div className="element">
                  <input type="checkbox" className='borderBox' />
                  &gt; 60 min
                </div>
                <div className="element">
                    <input type="checkbox" className='borderBox-seperate' />
                    In progress
                  </div>
                  <div className="element">
                    <input type="checkbox" className='borderBox' />
                    Completed
                  </div>
              </div>
            </div>
            <div className="skills">
              <div className="title">
                  SKILLS
              </div>
              <button className="cusButton">
                All Skills
              </button>
            </div>
          </div>
        </div>

        <div className="PurchasedCourses">

        </div>
      </div>
    </div>
  )
}

export default MyClasses