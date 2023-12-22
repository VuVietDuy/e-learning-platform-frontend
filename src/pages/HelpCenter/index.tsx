import React from 'react'
import './index.scss'
import HelpCenterQuestion from "../../components/HelpCenterQuestion";
import {QuestionCircleOutlined} from '@ant-design/icons';
import {MinusOutlined } from '@ant-design/icons';
import {RightOutlined } from '@ant-design/icons';


function HelpCenter() {
  let spwindow_OnorOff = false;
  let isStudent = false;
  let isArticle = false;
  function turnSP(){
    if(!spwindow_OnorOff){
      document.getElementById('supportWindow')!.style.display = 'block'
      document.getElementById('spButton')!.style.display = 'none'
    }
    else{
      document.getElementById('supportWindow')!.style.display = 'none'
      document.getElementById('spButton')!.style.display = 'block'
    }
    spwindow_OnorOff = !spwindow_OnorOff;
  }

  function stuortecher(){
    if(isStudent) {
      document.getElementById('teachers')!.style.backgroundColor = '#ffffff';
      document.getElementById('students')!.style.backgroundColor = '#2CFF99';
    }else{
      document.getElementById('teachers')!.style.backgroundColor = '#2CFF99';
      document.getElementById('students')!.style.backgroundColor = '#ffffff';
    }
  }

  function teacherOn(){
    isStudent = false;
  }
  function studentOn(){
    isStudent = true;
  }
  
  function seeArticle(){
    if(!isArticle){
      document.getElementById('notarticle')!.style.display = 'none';
      document.getElementById('fullarticle')!.style.display = 'block';
      isArticle = true;
    }else{
      document.getElementById('notarticle')!.style.display = 'block';
      document.getElementById('fullarticle')!.style.display = 'none';
      isArticle = false;
    }
  }

  return (
    <div className='HelpCenter'>
      <button className="seefullarticle" onClick={() => {seeArticle();}}>See full article</button>
      <div className="NotArticle" >
      <div className="support">
        <div className="supportWindow" id='supportWindow'>
          <div className="title">Support <span className='minus' onClick={turnSP}><MinusOutlined /></span></div>

          <div className="result">
            <div className="search">
              <img src="/images/searchIcon.png" alt="" className='searchIcon'/>
              <input type="text" className='searchbox' placeholder='How can we help?'/>
            </div>
            <div className="topresult">
              <div className="toprestext">Top results</div>
              <ul>
                <li>How to train your dragon?</li>
                <li>How to train your dragon?</li>
                <li>How to train your dragon?</li>
                <li>How to train your dragon?</li>
                <li>How to train your dragon?</li>
                <li>How to train your dragon?</li>
              </ul>
            </div>
          </div>

          <div className="chat">
            <div className='chatLeft'>Hello. How can I help you?</div>
            <div className='chatRight'>I’m considering to get my money back</div>
            <div className='chatLeft'>Ok. What is your main problems?</div>
          </div>

          <div className="sendtext">
            <input type="text" className="chatBox" placeholder='How can I get...'/>
            
            <button className="sendButton"><img src="/images/sendIcon.png" alt="" className='sendIcon'/></button>
          </div>
        </div>

        <button className='spButton' id='spButton' onClick={turnSP}><QuestionCircleOutlined /> Support</button>
      </div>
      <div className="Top">
        <div className="search">
            <div className="searchTitle">
              GraFish Help Center
            </div>
            <div className="box-button">
              <input type="text" className='searchBox'/>
              <button className="searchButton">Search</button>
            </div>
        </div>
        <div className="alpha">&nbsp;</div>
        <img src="/images/helpcenter.png" alt="" className='titleImage'/>
      </div>
      <div className="Body" id='notarticle'>
        <div className="top">
          <button className="chooseSide" id='students'onClick={() => { studentOn(); stuortecher();}}>
            Students
          </button>
          <button className="chooseSide" id='teachers' onClick={() => { teacherOn(); stuortecher();}}>
            Teachers
          </button>
        </div>
        <div className="bottom">
          <HelpCenterQuestion></HelpCenterQuestion>
          <HelpCenterQuestion></HelpCenterQuestion>
          <HelpCenterQuestion></HelpCenterQuestion>
          <HelpCenterQuestion></HelpCenterQuestion>
          <HelpCenterQuestion></HelpCenterQuestion>
          <HelpCenterQuestion></HelpCenterQuestion>
          <HelpCenterQuestion></HelpCenterQuestion>
          <HelpCenterQuestion></HelpCenterQuestion>
          <HelpCenterQuestion></HelpCenterQuestion>
          <HelpCenterQuestion></HelpCenterQuestion>
          <HelpCenterQuestion></HelpCenterQuestion>
          <HelpCenterQuestion></HelpCenterQuestion>
          <HelpCenterQuestion></HelpCenterQuestion>
          <HelpCenterQuestion></HelpCenterQuestion>
          <HelpCenterQuestion></HelpCenterQuestion>
        </div>
      </div>

      </div>
      <div className="FullArticle" id='fullarticle'>
        <div className="top">
          <div>GraFish Help Center</div>
          <RightOutlined />
          <div>Students</div>
          <RightOutlined />
          <div>Getting Started</div>

        </div>
        <div className="body">
          <div className="title">What does GraFish Course include?</div>
          <div className='paragraph'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
        <ul>
          <li>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</li>
          <li>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</li>
          <li>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</li>
          <li>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</li>
          <li>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</li>
          <li>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</li>
        </ul>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
      </div>
    </div>

  )
}

export default HelpCenter