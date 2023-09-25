import React from 'react'
import './index.scss'
import { Button } from '../../components/Button'

export function Footer() {
  return (
    <div className='footer'>
        <div className="f-container">
          <div className="f-contain-top">
              <ul className="f-contain-top-item">
                <li className="f-top-list f-top-list--bold">Company</li>
                <li className="f-top-list">About</li>
                <li className="f-top-list">Careers</li>
                <li className="f-top-list">Press</li>
                <li className="f-top-list">Blog</li>
                <li className="f-top-list">Affiliates</li>
                <li className="f-top-list">Partnerships</li>
              </ul>
              <ul className="f-contain-top-item">
                <li className="f-top-list f-top-list--bold">Community</li>
                <li className="f-top-list">Team Plans</li>
                <li className="f-top-list">Limited Memberships</li>
                <li className="f-top-list">Scholarships</li>
                <li className="f-top-list">Free Classes</li>
              </ul>
              <ul className="f-contain-top-item">
                <li className="f-top-list f-top-list--bold">Teaching</li>
                <li className="f-top-list">Become a Teacher</li>
                <li className="f-top-list">Teacher Help Center</li>
                <li className="f-top-list">Teacher Rules & Requirements</li>
              </ul>
              <ul className="f-contain-top-item">
                <li className="f-top-list f-top-list--bold">Subscribe our Youtube Channel</li>
                <button className="f-contain-top-item-btn">
                     <div className="f-contain-top-item-btn-grafish">GraFish</div>
                </button>
              </ul>
          </div>
          <div className="f-contain-bottom">
              <ul className="f-contain-bottom-item">
                <li className="f-bottom-list">GraFish, Inc. 2023</li>
                <li className="f-bottom-list">Help</li>
                <li className="f-bottom-list">Privacy</li>
                <li className="f-bottom-list">Terms</li>
              </ul>
              <ul className="f-contain-bottom-item">

                <button className=" f-contain-bottom-item-btn">
                     <div className="f-contain-bottom-item-btn-Endlish">English</div>
                </button>
              </ul>
          </div>
        </div>
    </div>
  )
}