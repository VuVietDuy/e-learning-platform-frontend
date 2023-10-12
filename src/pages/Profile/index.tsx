import React, {useState, ChangeEvent} from "react";
import './index.scss'
import { DatePicker, Space } from "antd";
import 'react-datepicker/dist/react-datepicker.css'
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import type { DatePickerProps } from 'antd';
import {EyeOutlined} from '@ant-design/icons';

export default function Profile() {

    dayjs.extend(customParseFormat);

    //      Lịch
    const { RangePicker } = DatePicker;
    const dateFormat = 'YYYY/MM/DD';
    const weekFormat = 'MM/DD';
    const monthFormat = 'YYYY/MM';
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];
    const customFormat: DatePickerProps['format'] = (value) =>
    `custom format: ${value.format(dateFormat)}`;
    const customWeekStartEndFormat: DatePickerProps['format'] = (value) =>
    `${dayjs(value).startOf('week').format(weekFormat)} ~ ${dayjs(value)
        .endOf('week')
        .format(weekFormat)}`;

    let pimg;
    let hourlearn = 216.8;

        //  Lưu thông tin người dùng
    const [inputs, setInputs] = useState({
        firstName:'',
        lastName: '',
        dateofbirth: '',
        gender: '',
        biography: '',
        phone: ''});
    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        const username = event.target.name;
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    function print(){
        console.log("First name: " + inputs.firstName);
        console.log("Last name: " + inputs.lastName);
        console.log("Phone number: " + inputs.phone);
    }
    return (
        <div className="Profile">
            <div className="left">
                <div className="profileimg">
                    <div className="img">{pimg}
                    </div>
                    <h2>Hai Dang Phung Ba</h2>
                    <div className="line-1"></div>
                </div>
                <div className="follower">
                    <div>
                        <p className="num">--</p>
                        <p>Followers</p>
                    </div>
                    <div>
                        <p className="num">25</p>
                        <p>Following</p>
                    </div>
                </div>
                <div className="line-1"></div>
                <div className="hours-learning">
                    <span><EyeOutlined />&nbsp;&nbsp;{hourlearn}&nbsp;&nbsp; Hours&nbsp; Learning</span>
                </div>
                <img className="chart" src="/images/donutchart.png" alt="" />
                <div className="statistics">
                    <div className="element">
                        <div>
                            <div className="roundbox first"></div>
                            <span className="specifyin">3D Art</span>
                        </div>
                        <span>150.3 hr</span>
                    </div>
                    <div className="element">
                        <div>
                            <div className="roundbox second"></div>
                            <span className="specifyin">Animation</span>
                        </div>
                        <span>150.3 hr</span>
                    </div>
                    <div className="element">
                        <div>
                            <div className="roundbox third"></div>
                            <span className="specifyin">Film & Video</span>
                        </div>
                        <span>150.3 hr</span>
                    </div>
                    <div className="element">
                        <div>
                            <div className="roundbox fourth"></div>
                            <span className="specifyin">UI/UI Design</span>
                        </div>
                        <span>150.3 hr</span>
                    </div>
                    <div className="element">
                        <div>
                            <div className="roundbox fifth"></div>
                            <span className="specifyin">Graphic Design</span>
                        </div>
                        <span>150.3 hr</span>
                    </div>
                    <div className="element">
                        <div>
                            <div className="roundbox sixth"></div>
                            <span className="specifyin">Other</span>
                        </div>
                        <span>150.3 hr</span>
                    </div>
                </div>
                <div className="notice">*These stats are only visible to you</div>
                <div className="line-1"></div>
            </div>

            <div className="right">
                <h2>Profile</h2>
                <div className="line-1"></div>
                <div className="body">
                    <div className="name">
                        <div>
                            <p>First Name</p>
                            <input type="text" className="box" name="firstName" value={inputs.firstName || ""} onChange={handleChange} />
                        </div>
                        <div>
                            <p>Last Name</p>
                            <input type="text" className="box" name="lastName" value={inputs.lastName || ""} onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="phone_gender">
                        <div className="phone">
                            <p>Phone</p>
                            <input type="text" className="box" name="phone" value={inputs.phone || ""} onChange={handleChange}/>
                        </div>
                        <div className="gender">
                            
                            <div>
                                <span>Gender: </span>
                                <input className="radio" type="radio" name="gender"/>
                                <label>Male</label>
                            </div>
                            <div>
                                <input className="radio" type="radio" name="gender"/>
                                <label>Female</label>
                            </div>
                            <div>
                                <input className="radio" type="radio" name="gender"/>
                                <label>Other</label>
                            </div>
                        </div>
                    </div>
                    <div className="dateofbirth">
                        <div>
                            <p>Date of Birth</p>
                            <DatePicker className="box" defaultValue={dayjs('01/01/2015', dateFormatList[0])} format={dateFormatList} />
                        </div>
                    </div>
                    <div className="biography">
                        <div>
                            <p>Biography</p>
                            <textarea name="biography" className="box" id="" cols={30} rows={10}></textarea >
                        </div>
                    </div>
                    <button onClick={print} className="savechange">Save Changes</button>
                </div>
            </div>
        </div>
    )
}
