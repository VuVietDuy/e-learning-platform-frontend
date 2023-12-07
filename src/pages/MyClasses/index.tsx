import React, { useState } from 'react'
import './index.scss'
import Course from '../../components/Course'
import CardHorizontal from '../../components/CardHorizontal'
import { Radio } from 'antd'
import { Button } from '../../components/Button'
import type { RadioChangeEvent } from 'antd';

function MyClasses() {
  const [valueClasslength, setValueClasslength] = useState(1);
  const [valueStatus, setValueStatus] = useState(1);

  const onChangeClasslength = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValueClasslength(e.target.value);
  };

  const onChangeStatus = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValueStatus(e.target.value);
  };

  return (
    <div className='mayclasses-container'>
        <div className="title">My Classes</div>
        <div className="nav">
          <button className=" nav-list">My Learning Paths</button>
          <button className=" nav-list">Watch History</button>
          <button className=" nav-list">Purchased Course</button>
        </div>
        
        {/** Begin my learning path */}
        <div className="learning-path-contain">
            <div className="learning-list">
              <img src="/images/classes/card1.png" alt="" className="img-item" />
              <div className="descript">Photoshop Advance: Retouching with Master of Photoshop (2023) ...</div>
              <div className="descript-class">
                <div className="number">6 Classes</div>
                <div className="hour">(10h 8m)</div>
              </div>
            </div>
            <div className="learning-list mg-middle">
              <img src="/images/classes/card2.png" alt="" className="img-item" />
              <div className="descript">Photoshop Advance: Retouching with Master of Photoshop (2023) ...</div>
              <div className="descript-class">
                <div className="number">6 Classes</div>
                <div className="hour">(10h 8m)</div>
              </div>
            </div>
            <div className="learning-list">
              <img src="/images/classes/card3.png" alt="" className="img-item" />
              <div className="descript">Photoshop Advance: Retouching with Master of Photoshop (2023) ...</div>
              <div className="descript-class">
                <div className="number">6 Classes</div>
                <div className="hour">(10h 8m)</div>
              </div>
            </div>
            <div className="learning-list">
              <img src="/images/classes/card1.png" alt="" className="img-item" />
              <div className="descript">Photoshop Advance: Retouching with Master of Photoshop (2023) ...</div>
              <div className="descript-class">
                <div className="number">6 Classes</div>
                <div className="hour">(10h 8m)</div>
              </div>
            </div>
            <div className="learning-list mg-middle">
              <img src="/images/classes/card2.png" alt="" className="img-item" />
              <div className="descript">Photoshop Advance: Retouching with Master of Photoshop (2023) ...</div>
              <div className="descript-class">
                <div className="number">6 Classes</div>
                <div className="hour">(10h 8m)</div>
              </div>
            </div>
            <div className="learning-list">
              <img src="/images/classes/card3.png" alt="" className="img-item" />
              <div className="descript">Photoshop Advance: Retouching with Master of Photoshop (2023) ...</div>
              <div className="descript-class">
                <div className="number">6 Classes</div>
                <div className="hour">(10h 8m)</div>
              </div>
            </div>
        </div>
        {/** End my learning path */}
        {/** begin watch history learning path */}
        <div className="watch-histoty">
          {/**part 1 */}
          <div className="class-option">
            <div className="choose">
              <div className="choose-item">
                <h3 className="choose-title">CLASSLENGTH</h3>
                <Radio.Group className='radio-btn' onChange={onChangeClasslength} value={valueClasslength}>
                  <Radio value={1} className='radio'>&lt;30min</Radio>
                  <Radio value={2} className='radio'>30-60min</Radio>
                  <Radio value={3} className='radio'>&gt;60min</Radio>
                </Radio.Group>
              </div>
              <div className="choose-item">
                <h3 className="choose-title">STATUS</h3>
                <Radio.Group className='radio-btn' onChange={onChangeStatus} value={valueStatus}>
                    <Radio value={1} className='radio'>In progress</Radio>
                    <Radio value={2} className='radio'>Completed</Radio>
                </Radio.Group>
              </div>
            </div>
            <h3>SKILLS</h3>
            <div className="skills">
              <div className="all-skill">
                <Button size="32">All skill</Button>
              </div>
              <div className="btn-list">
                <Button size="24" className="item">3D Art</Button>
                <Button size="24" className="item">Animation</Button>
                <Button size="24" className="item">Graphic Design</Button>
                <Button size="24" className="item">Illustration</Button>
                <Button size="24" className="item">Photography</Button>
                <Button size="24" className="item">UI/UX Design</Button>
              </div>
            </div>
          </div>
          <div className="class-list">
            <div className="course__3 mt24">
              
              <div className="course-3-body">
                <div  className="course-3-img">
                   <img src="/images/classes/card4.png" alt="" />
                   <div className="course-img-box"></div>
                  </div>
                <div className="course-3-des">
                  <div className="course-3-des-1">Dynamic Male Anatomy for Artists in Mudbox: Make realistic 3D Meta Human</div>
                  <div className="course-3-des-2-contain">
                    
                    <div className="course-3-des-2-1">
                      <div className=" fz-20">Ginger Bear</div>
                      
                      <div className="des-2-3 flex des-2-3-margin mt80 mt80">
                        <div className=" fz-20 ml5">1d 5h 28m</div>
                        <div className=" fz-20">1,313,581 Students</div>
                      </div>
                     
                    </div>
                    
                  </div>

                </div>
              </div>

            </div>
            <div className="course__3 mt24">
            
            <div className="course-3-body">
                <div  className="course-3-img">
                   <img src="/images/classes/img1.png" alt="" />
                   <div className="course-img-box"></div>
                  </div>
              <div className="course-3-des">
                <div className="course-3-des-1">Dynamic Male Anatomy for Artists in Mudbox: Make realistic 3D Meta Human</div>
                <div className="course-3-des-2-contain">
                  
                  <div className="course-3-des-2-1">
                    <div className=" fz-20">Ginger Bear</div>
                    
                    <div className="des-2-3 flex des-2-3-margin mt80">
                      <div className=" fz-20 ml5">1d 5h 28m</div>
                      <div className=" fz-20">1,313,581 Students</div>
                    </div>
                   
                  </div>
                  
                </div>
              
              </div>
            </div>
            

            </div>
            <div className="course__3 mt24">
            
            <div className="course-3-body">
                <div  className="course-3-img">
                   <img src="/images/classes/img4.png" alt="" />
                   <div className="course-img-box"></div>
                  </div>
              <div className="course-3-des">
                <div className="course-3-des-1">Dynamic Male Anatomy for Artists in Mudbox: Make realistic 3D Meta Human</div>
                <div className="course-3-des-2-contain">
                  
                  <div className="course-3-des-2-1">
                    <div className=" fz-20">Ginger Bear</div>
                    
                    <div className="des-2-3 flex des-2-3-margin mt80">
                      <div className=" fz-20 ml5">1d 5h 28m</div>
                      <div className=" fz-20">1,313,581 Students</div>
                    </div>
                   
                  </div>
                  
                </div>
              
              </div>
            </div>
            

            </div>
            <div className="course__3 mt24">
            
            <div className="course-3-body">
                <div  className="course-3-img">
                   <img src="/images/classes/img3.png" alt="" />
                   <div className="course-img-box"></div>
                  </div>
              <div className="course-3-des">
                <div className="course-3-des-1">Dynamic Male Anatomy for Artists in Mudbox: Make realistic 3D Meta Human</div>
                <div className="course-3-des-2-contain">
                  
                  <div className="course-3-des-2-1">
                    <div className=" fz-20">Ginger Bear</div>
                    
                    <div className="des-2-3 flex des-2-3-margin mt80">
                      <div className=" fz-20 ml5">1d 5h 28m</div>
                      <div className=" fz-20">1,313,581 Students</div>
                    </div>
                   
                  </div>
                  
                </div>
              
              </div>
            </div>
            

            </div>
           <div className="course__3 mt24">
            
            <div className="course-3-body">
                <div  className="course-3-img">
                   <img src="/images/classes/img2.png" alt="" />
                   <div className="course-img-box"></div>
                  </div>
              <div className="course-3-des">
                <div className="course-3-des-1">Dynamic Male Anatomy for Artists in Mudbox: Make realistic 3D Meta Human</div>
                <div className="course-3-des-2-contain">
                  
                  <div className="course-3-des-2-1">
                    <div className=" fz-20">Ginger Bear</div>
                    
                    <div className="des-2-3 flex des-2-3-margin mt80">
                      <div className=" fz-20 ml5">1d 5h 28m</div>
                      <div className=" fz-20">1,313,581 Students</div>
                    </div>
                    
                  </div>
                  
                </div>

              </div>
            </div>

          </div>
          </div>
          
        </div>

        {/*------------------- End history-watch-------------------------------- */}
        {/** purchased course */}
        <h2>Phần purchased- ô xóa chữ này đi nhé </h2>
        <div className="purchased-contain">

          <div className="course__3 mt24">
              
                <div className="course-3-body">
                  <div  className="course-3-img">
                     <img src="/images/classes/card4.png" alt="" />
                     <div className="course-img-box"></div>
                    </div>
                  <div className="course-3-des">
                    <div className="course-3-des-1">Dynamic Male Anatomy for Artists in Mudbox: Make realistic 3D Meta Human</div>
                    <div className="course-3-des-2-contain">
                      
                      <div className="course-3-des-2-1">
                        <div className=" fz-20">Ginger Bear</div>
                        
                        <div className="des-2-3 flex des-2-3-margin">
                          <div className=" fz-20 ml5">1d 5h 28m</div>
                          <div className=" fz-20">1,313,581 Students</div>
                        </div>
                        <div className="des-2-4">
                          <div className="des-2-4-1">Publish Date:</div>
                          <div className="fz-20">02/04/2023</div>
                        </div>
                      </div>
                      
                    </div>

                  </div>
                </div>

              </div>
              <div className="course__3 mt24">
              
              <div className="course-3-body">
                  <div  className="course-3-img">
                     <img src="/images/classes/img1.png" alt="" />
                     <div className="course-img-box"></div>
                    </div>
                <div className="course-3-des">
                  <div className="course-3-des-1">Dynamic Male Anatomy for Artists in Mudbox: Make realistic 3D Meta Human</div>
                  <div className="course-3-des-2-contain">
                    
                    <div className="course-3-des-2-1">
                      <div className=" fz-20">Ginger Bear</div>
                      
                      <div className="des-2-3 flex des-2-3-margin">
                        <div className=" fz-20 ml5">1d 5h 28m</div>
                        <div className=" fz-20">1,313,581 Students</div>
                      </div>
                      <div className="des-2-4">
                        <div className="des-2-4-1">Publish Date:</div>
                        <div className="fz-20">02/04/2023</div>
                      </div>
                    </div>
                    
                  </div>

                </div>
              </div>

          </div>
          <div className="course__3 mt24">
              
            <div className="course-3-body">
                  <div  className="course-3-img">
                     <img src="/images/classes/img2.png" alt="" />
                     <div className="course-img-box"></div>
                    </div>
                <div className="course-3-des">
                  <div className="course-3-des-1">Dynamic Male Anatomy for Artists in Mudbox: Make realistic 3D Meta Human</div>
                  <div className="course-3-des-2-contain">
                    
                    <div className="course-3-des-2-1">
                      <div className=" fz-20">Ginger Bear</div>
                      
                      <div className="des-2-3 flex des-2-3-margin">
                        <div className=" fz-20 ml5">1d 5h 28m</div>
                        <div className=" fz-20">1,313,581 Students</div>
                      </div>
                      <div className="des-2-4">
                        <div className="des-2-4-1">Publish Date:</div>
                        <div className="fz-20">02/04/2023</div>
                      </div>
                    </div>
                    
                  </div>

                </div>
              </div>

            </div>
        </div>
        {/** end purchased course */}
        
    </div>
  )
}

export default MyClasses