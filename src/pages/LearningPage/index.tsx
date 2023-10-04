import React from "react";

import './index.scss'
import { CheckOutlined, PauseCircleFilled, PauseOutlined, PlayCircleOutlined, StarFilled, StarOutlined, StepBackwardOutlined } from "@ant-design/icons";

export function LearningPage() {
    return (
        <div className="LearningPage">
            {/* phan 1- learning video */}
            <div className="learning-main">
                <div className="learning-contain">

                    <div className="learning-video">
                        <video controls src="/images/learning/video.mp4" className="learning-video-watch"></video>
                    
                    </div>
                    <div className="learning-lessons">
                        <div className="learning-lessons-title">
                            <div className="learning-lessons-title-main">100 Lessons</div>
                            <div className="learning-lessons-title-time">(22h 15m)</div>
                        </div>
                        <ul className="learning-lessons-list">
                            <li className="learning-lessons-item">
                                <PauseCircleFilled className="check-icon"></PauseCircleFilled>
                                <div className="learning-lessons-item-index">001.</div>
                                <div className="learning-lessons-item-introduction">Introduction</div>
                                <div className="learning-lessons-item-time">12:00</div>
                            </li>
                            <li className="learning-lessons-item">
                            <CheckOutlined className="check-icon"></CheckOutlined>
                                <div className="learning-lessons-item-index">002.</div>
                                <div className="learning-lessons-item-introduction">Introduction</div>
                                <div className="learning-lessons-item-time">12:00</div>
                            </li>
                            <li className="learning-lessons-item">
                            <CheckOutlined className="check-icon"></CheckOutlined>
                                <div className="learning-lessons-item-index">003.</div>
                                <div className="learning-lessons-item-introduction">Introduction</div>
                                <div className="learning-lessons-item-time">12:00</div>
                            </li>
                            <li className="learning-lessons-item">
                            <CheckOutlined className="check-icon"></CheckOutlined>
                                <div className="learning-lessons-item-index">004.</div>
                                <div className="learning-lessons-item-introduction">Introduction</div>
                                <div className="learning-lessons-item-time">12:00</div>
                            </li>
                            <li className="learning-lessons-item">
                            <CheckOutlined className="check-icon"></CheckOutlined>
                                <div className="learning-lessons-item-index">005.</div>
                                <div className="learning-lessons-item-introduction">Introduction</div>
                                <div className="learning-lessons-item-time">12:00</div>
                            </li>
                            <li className="learning-lessons-item">
                            <CheckOutlined className="check-icon"></CheckOutlined>
                                <div className="learning-lessons-item-index">006.</div>
                                <div className="learning-lessons-item-introduction">Introduction</div>
                                <div className="learning-lessons-item-time">12:00</div>
                            </li>
                            <li className="learning-lessons-item">
                            <CheckOutlined className="check-icon"></CheckOutlined>
                                <div className="learning-lessons-item-index">007.</div>
                                <div className="learning-lessons-item-introduction">Introduction</div>
                                <div className="learning-lessons-item-time">12:00</div>
                            </li>
                            <li className="learning-lessons-item">
                            <CheckOutlined className="check-icon"></CheckOutlined>
                                <div className="learning-lessons-item-index">008.</div>
                                <div className="learning-lessons-item-introduction">Introduction</div>
                                <div className="learning-lessons-item-time">12:00</div>
                            </li>

                            
                            
                            
                            
                        </ul>
                    </div>
                </div>
                <div className="learning-descript">
                    <div className="learning-descript-title">Advance Anatomy For Character Artists</div>
                    <div className="learning-descript-author">
                        <div className="learning-descript-author-name">Teddy Swim, A Specialist in CG Tutorials</div>
                        <div className="learning-descript-author-follow">Following</div>
                    </div>
                </div>
            </div>
            {/* nav learning*/}
            <div className="learning-nav">
                <div className="learning-nav-contain">

                    <button className="learning-nav-btn">About</button>
                    <button className="learning-nav-btn">Projects & Resources</button>
                    <button className="learning-nav-btn">Discussions</button>
                    <button className="learning-nav-btn">Review</button>
                </div>
            </div>
            {/**end nav */}
            {/** begin about */}
            <div className="course__1-body course__1-body-set-width">
                    <div className="course__1-body-title">About This Class</div>
                      <ul className="course__1-body-list">
                        <li className="course__1-body-item">Do you think sculpting Human anatomy is not your cup of tea ?</li>
                        <li className="course__1-body-item">Have you tried learning anatomy before but felt overwhelmed and quit ?</li>
                        <li className="course__1-body-item">Then, this class is the right class for you. Welcome you to Dynamic Male Anatomy for Artists in Zbrush class.</li>
                        <li className="course__1-body-item">My name is Teddy Swims, I'm a freelancer character artist, with many years of experience on sculpting statues of heroes and movie characters. </li>
                      </ul>
                    <div className="course__1-body-title">Benefits:</div>
                    <div className="course__1-body-list">At the end of this class, your fear of Anatomy will vanish and you will be able to sculpt Human anatomy with ease and create stunning realistic characters.</div>
                    <div className="course__1-body-title">In this class, We will be covering:</div>
                    <div className="course__1-body-des">
                      <div className="course__1-body-des-list">
                        <li className="des-list-item">Sculpting All the Muscles.</li>
                        <li className="des-list-item">Sculpting a Final Male Body.</li>
                        <li className="des-list-item">Making a Dynamic Pose.</li>
                        <li className="des-list-item">Sculpting Anatomy in Dynamic Pose.</li>
                        <li className="des-list-item">Sculpting All the Muscles.</li>
                      </div>
                      <ul className="course__1-body-list">
                        <li className="course__1-body-item">In this class, we sculpt a complete anatomical model, simultaneously between we do a complete human male body, in a flesh and skin model.</li>
                        <li className="course__1-body-item">This way we can better understand each muscle and bones that compose the entire surface of the body, and also figure out how it can affect the volume under the skin.</li>
                        <li className="course__1-body-item">Once we cover all the body, we also bring the character to a very dynamic pose, understanding how the anatomical structure will deforms when it comes to bring gesture and life to the model.</li>
                      </ul>
                      <div className="course__1-body-des-list">
                        <li className="des-list-item">This class is designed for intermediate Zbrush users who are looking to improve their anatomy sculpting skills.</li>
                        <li className="des-list-item">Basics knowledge of Zbrush is required to follow along with this class. This class is fully real time recorded and narrated.</li>                
                      </div>
                    </div>
            </div>
            {/* begin project and resuorces */}
            <div className="project">
                <div className="project-instruction">
                    <div className="project-instruction-title">
                    Project Instructions
                    </div>
                    <ul className="project-file"> 
                        <div className="project-file-title">Download Project Files</div>
                        <li className="project-list">Step 01: Understand The Structure Of Bones</li>
                        <li className="project-list">Step 02: Sculpting the Bones</li>
                        <li className="project-list">Step 03: Understand The Structure Of Muscles</li>
                        <li className="project-list">Step 04: Sculpting The Muscles</li>
                        <li className="project-list">Step 05: Understand The Flesh & Skin</li>
                        <li className="project-list">Step 06: Sculpting The Flesh & Skin</li>
                        <li className="project-list">Step 07: Render 3 Images From Different Angles</li>
                        <li className="project-list">Step 08: Review and Conclusion</li>
                    </ul>
                </div>
                <div className="project-exam">
                        <div className="project-exam-title">Example Results</div>
                        <div className="project-exam-contain">
                            <img src="images/learning/244.png" alt="" className="project-exam-img" />
                            <img src="images/learning/245.png" alt="" className="project-exam-img" />
                            <img src="images/learning/246.png" alt="" className="project-exam-img" />
                            <img src="images/learning/247.png" alt="" className="project-exam-img" />
                            <img src="images/learning/248.png" alt="" className="project-exam-img" />
                            <img src="images/learning/249.png" alt="" className="project-exam-img " />
                        </div>
                        
                </div>
            </div>
            {/* end project and resource */}
            
            {/* discussions */}
            <div className="discussions">
                {/* hoi thoai 1 */}
                <div className="discussions-member">
                    <img src="/images/learning/user1.png" alt="" className="discussions-member-img img-l" />
                    <div className="discussions-member-chatbox">
                        <button className="discussions-btn">Start a Conversation</button>
                        <button className="discussions-btn">Ask a Question</button>
                        <button className="discussions-btn">Share your Knowledge</button>
                    </div>
                </div>
                <div className="discussions-member">
                    <img src="/images/learning/user2.png" alt="" className="discussions-member-img img-l" />
                    <div className="discussions-info">
                        <div className="discussions-info-name">Wurvic Daniel</div>
                        <div className="discussions-info-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                        <div className="discussions-info-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                        <div className="discussions-info-text">(Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint)</div>
                        <a href="" className="discussions-reply">Reply</a>
                    </div>
                </div>
                {/* hoi thoai 2 */}
                <div className="discussions-member">
                    <img src="/images/learning/user3.png" alt="" className="discussions-member-img img-l" />
                    <div className="discussions-info">
                        <div className="discussions-info-name">Wurvic Daniel</div>
                        <div className="discussions-info-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                        <div className="discussions-info-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                        <div className="discussions-info-text">(Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint)</div>
                        <a href="" className="discussions-reply">Cancel Reply</a>
                        <div className="discussions-info-reply">
                            <img src="/images/learning/user4.png" alt="" className="discussions-reply-img img-s" />
                            <div className="discussions-info-reply-contain">
                                <div className="discussions-info-reply-icon">
                                    <div className="discussions-info-reply-icon-tag"> <img src="/images/learning/iconlink.png" alt="" /></div>
                                    <div className="discussions-info-reply-icon-tag"><img src="/images/learning/camera.png" alt="" /></div>
                                </div>
                                <div className="discussions-info-text padding-left-16"> mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis en  mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis en </div>
                            </div>
                        </div>
                        <div className="discussions-info-reply">
                            <img src="/images/learning/user4.png" alt="" className="discussions-reply-img img-s" />
                            <div className="reply-add-img">
                                <div className="add-img-icon">
                                    <img src="/images/learning/anhmau.png" alt="" className="add-img" />
                                    <div className="add-icon-contain">
                                        <img src="/images/learning/camera.png" alt="" />
                                        <div className="add-icon-des">Add Images/Videos</div>
                                    </div>
                                </div>
                                <div className="discussions-info-text-bold"> Mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat  mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat  mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat  m mollit non.</div>
                            </div>
                        </div>
                        {/* them file-anh*/}
                        <div className="discussions-info-reply">
                            <img src="/images/learning/user4.png" alt="" className="discussions-reply-img img-s" />
                            <div className="reply-add-img">
                                <div className="add-file">
                                    <ul className="add-file-list">
                                        <li className="file-item">
                                             <img src="/images/learning/iconlink.png" alt="" />
                                             <div className="file-item-example">Example Files 001.halo</div>
                                             <img  src="/images/learning/exit.png" alt="" className="h-16" />
                                            
                                        </li>
                                        <li className="file-item">
                                             <img src="/images/learning/iconlink.png" alt="" />
                                             <div className="file-item-example">Example Files 001.halo</div>
                                             <img  src="/images/learning/exit.png" alt="" className="h-16" />
                                            
                                        </li>
                                        <li className="file-item">
                                             <img src="/images/learning/iconlink.png" alt="" />
                                             <div className="file-item-example">Example Files 001.halo</div>
                                             <img  src="/images/learning/exit.png" alt="" className="h-16" />
                                            
                                        </li>
                                        <li className="file-item">
                                             <img src="/images/learning/iconlink.png" alt="" />
                                             <div className="file-item-example">Example Files 001.halo</div>
                                             <img  src="/images/learning/exit.png" alt="" className="h-16" />
                                            
                                        </li>
                                      
                                        
                                     
                                    </ul>
                                    <div className="add-icon-contain">
                                        <img src="/images/learning/iconlink.png" alt="" />
                                        <div className="add-icon-des">Add Files</div>
                                    </div>
                                </div>
                                <div className="discussions-info-text-bold"> Mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat  mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat  mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat  m mollit non.</div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                {/* hoi thoai 3 */}
                <div className="discussions-member">
                    <img src="/images/learning/user3.png" alt="" className="discussions-member-img img-l" />
                    <div className="discussions-info">
                        <div className="discussions-info-name">Wurvic Daniel</div>
                        <div className="discussions-info-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                        <div className="discussions-info-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                        <div className="discussions-info-text">(Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint)</div>
                        <a href="" className="discussions-reply">Reply</a>
                        
                    </div>

                </div>
                
            </div>
            {/* end discussions */}
            {/* begin review */}
            <div className="review">
                {/**review title */}
                <div className="review-title">
                    <div className="review-title-bold">Reviews</div>
                    <div className="review-title-number">325 reviews</div>
                </div>
                {/** review contain */}
                <div className="review-contain">
                    {/** rate */}
                    <div className="review-rate">
                        <div className="rate-star">
                            <div className="rate-text-while">Expectations Met?</div>
                                 <ul className="rate-star-list">
                                        <li className="rate-start-item">
                                            <StarFilled className="star-icon-fill"></StarFilled>
                                            <StarFilled className="star-icon-fill"></StarFilled>
                                            <StarFilled className="star-icon-fill"></StarFilled>
                                            <StarFilled className="star-icon-fill"></StarFilled>
                                            <StarFilled className="star-icon-fill"></StarFilled>
                                             
                                            <div className="rate-text-normal">Exceeded</div>
                                        </li>
                                        <li className="rate-start-item">
                                            <StarFilled className="star-icon-fill"></StarFilled>
                                            <StarFilled className="star-icon-fill"></StarFilled>
                                            <StarFilled className="star-icon-fill"></StarFilled>
                                            <StarFilled className="star-icon-fill"></StarFilled>
                                            <StarOutlined className="star-icon-no-fill"></StarOutlined>
                                             
                                            <div className="rate-text-normal">Yes</div>
                                        </li>
                                        <li className="rate-start-item">
                                            <StarFilled className="star-icon-fill"></StarFilled>
                                            <StarFilled className="star-icon-fill"></StarFilled>
                                            <StarFilled className="star-icon-fill"></StarFilled>
                                            <StarOutlined className="star-icon-no-fill"></StarOutlined>
                                            <StarOutlined className="star-icon-no-fill"></StarOutlined>
                                             
                                            <div className="rate-text-normal">Somewhat</div>
                                        </li>
                                        <li className="rate-start-item">
                                            <StarFilled className="star-icon-fill"></StarFilled>
                                            <StarFilled className="star-icon-fill"></StarFilled>
                                            <StarOutlined className="star-icon-no-fill"></StarOutlined>
                                            <StarOutlined className="star-icon-no-fill"></StarOutlined>
                                            <StarOutlined className="star-icon-no-fill"></StarOutlined>
                                             
                                            <div className="rate-text-normal">Not Really</div>
                                        </li>
                                 </ul>
                        </div>
                        <div className="rate-suited">
                             <div className="rate-text-while">Best suited for</div>
                            <ul className="suited-list">
                                <li className="suited-item">
                                    <div className="col col-s col-color"></div>
                                    <div className="col col-m col-no-color"></div>
                                    <div className="col col-l col-no-color"></div>
                                    <div className="suited-text-normal">Beginner</div>
                                    <div className="suited-tick suited-tick-color"></div>
                                </li>
                                <li className="suited-item">
                                    <div className="col col-s col-color"></div>
                                    <div className="col col-m col-color"></div>
                                    <div className="col col-l col-no-color"></div>
                                    <div className="suited-text-normal">Intermediate</div>
                                    <div className="suited-tick"></div>
                                </li>
                                <li className="suited-item">
                                    <div className="col col-s col-color"></div>
                                    <div className="col col-m col-color"></div>
                                    <div className="col col-l col-color"></div>
                                    <div className="suited-text-normal">Advance</div>
                                    <div className="suited-tick"></div>
                                </li>
                            </ul>
                        </div>
                        <div className="rate-write">
                            <div className="rate-text-while">Write your Thoughts</div>
                            <div className="write-box">
                                <div className="write-box-text">This class is so amazing, I learnt a a lot of useful Techniques. Thank you for your dedication. This class is so amazing, I learnt a a lot of useful Techniques. Thank you for your dedication.This class is so amazing, I learnt a a lot of useful Techniques. Thank you for your dedication.This class is so amazing, I learnt a a lot of useful Technique...</div>

                            </div>
                        </div>
                        <button className="rate-btn">Leave a Review</button>
                    </div>
                    {/**end rate */}
                    {/** begin list review */}
                    <div className="review-list">
                        <div className="review-item">
                            <div className="person-name">
                                <img src="/images/learning/person1.png" alt="" className="person-img" />
                                <div className="person-text-bold">David Shazam</div>
                            </div>
                            <div className="person-text-normal">This class is so amazing, I learnt a a lot of useful Techniques. Thank you for your dedication...</div>
                            <div className="person-exceeded">
                                <div className="person-text-normal">This class</div>
                                <div className="person-text-bold">Exceeded</div>
                                <div className="person-text-normal">my expectations!</div>
                            </div>
                            <div className="person-level">
                                <div className="person-text-normal">Recommending for</div>
                                <div className="person-text-bold">Intermediate Levels</div>
                                <div className="person-text-time">Posted 1 month ago</div>
                            </div>
                        </div>
                        <div className="review-item">
                            <div className="person-name">
                                <img src="/images/learning/person2.png" alt="" className="person-img" />
                                <div className="person-text-bold">David Shazam</div>
                            </div>
                            <div className="person-text-normal">This class is so amazing, I learnt a a lot of useful Techniques. Thank you for your dedication...</div>
                            <div className="person-exceeded">
                                <div className="person-text-normal">This class</div>
                                <div className="person-text-bold">Exceeded</div>
                                <div className="person-text-normal">my expectations!</div>
                            </div>
                            <div className="person-level">
                                <div className="person-text-normal">Recommending for</div>
                                <div className="person-text-bold">Intermediate Levels</div>
                                <div className="person-text-time">Posted 1 month ago</div>
                            </div>
                        </div>
                        <div className="review-item">
                            <div className="person-name">
                                <img src="/images/learning/person3.png" alt="" className="person-img" />
                                <div className="person-text-bold">David Shazam</div>
                            </div>
                            <div className="person-text-normal">This class is so amazing, I learnt a a lot of useful Techniques. Thank you for your dedication...</div>
                            <div className="person-exceeded">
                                <div className="person-text-normal">This class</div>
                                <div className="person-text-bold">Exceeded</div>
                                <div className="person-text-normal">my expectations!</div>
                            </div>
                            <div className="person-level">
                                <div className="person-text-normal">Recommending for</div>
                                <div className="person-text-bold">Intermediate Levels</div>
                                <div className="person-text-time">Posted 1 month ago</div>
                            </div>
                        </div>
                        <div className="review-item">
                            <div className="person-name">
                                <img src="/images/learning/person1.png" alt="" className="person-img" />
                                <div className="person-text-bold">David Shazam</div>
                            </div>
                            <div className="person-text-normal">This class is so amazing, I learnt a a lot of useful Techniques. Thank you for your dedication...</div>
                            <div className="person-exceeded">
                                <div className="person-text-normal">This class</div>
                                <div className="person-text-bold">Exceeded</div>
                                <div className="person-text-normal">my expectations!</div>
                            </div>
                            <div className="person-level">
                                <div className="person-text-normal">Recommending for</div>
                                <div className="person-text-bold">Intermediate Levels</div>
                                <div className="person-text-time">Posted 1 month ago</div>
                            </div>
                        </div>

                    </div>
                    {/**End reviews */}
                </div>
            </div>
        </div>
    )
}