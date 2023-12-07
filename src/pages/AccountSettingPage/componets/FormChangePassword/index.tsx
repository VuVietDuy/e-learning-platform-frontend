import { Form, Input, Button } from 'antd'
import React from 'react'

import './index.scss'

function FormChangePassword() {
  const handleChangePassword = (e : any) => {
    console.log(e)
  }
    
  return (
    <div className='change-password-form'>
      <h3 className='title'>Password</h3>
      <Form
        // name='changePassword'
        onFinish={handleChangePassword}
      >
        <Form.Item
          name="currentPassword"
        >
          <label>Current Password</label>
          <Input.Password className='input' name='curPassword'></Input.Password>
        </Form.Item>
        <Form.Item
          name="newPassword"
        >
          <label>New Password</label>
          <Input.Password className='input' name='newPassword'></Input.Password>
        </Form.Item>
        <Form.Item
          name="cfNewPassword"
        >
          <label>Confirm New Password</label>
          <Input.Password className='input' name='confirmPassword'></Input.Password>
        </Form.Item>
        <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default FormChangePassword