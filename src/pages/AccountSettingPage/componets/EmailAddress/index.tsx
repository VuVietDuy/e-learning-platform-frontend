import React from "react";
import "./index.scss";
import { Form, Input } from "antd";
import { Button } from "../../../../components/Button";

function EmailAddress() {
  const handleChangeEmail = () => {};
  return (
    <div className="change-email-form">
      <h3 className="title">Email Address</h3>
      <Form
        // name='changeEmail'
        onFinish={handleChangeEmail}
      >
        <Form.Item name="currentEmail">
          <label>Current Email</label>
          <Input className="input" name="curEmail"></Input>
        </Form.Item>
        <Form.Item name="newEmail">
          <label>New Email</label>
          <Input className="input" name="newEmail"></Input>
        </Form.Item>
        <Form.Item name="cfNewEmail">
          <label>Confirm code</label>
          <Input className="input" name="confirmCode"></Input>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default EmailAddress;
