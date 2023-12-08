import { Col, Form, Input, Row, Select } from "antd";
import React from "react";

import './index.scss'
import { Option } from "antd/es/mentions";

function CheckOut() {
  return (
    <div className="checkout_container">
      <div className="title-page">
        <span className="title-page_text">Check Out</span>
      </div>
      <Row>
        <Col span={12} className="payment">
          <div className="billing-address">
            <p className="title">Billing address</p>
            <Form>
              <Form.Item>
                <Form.Item name={"country"} label="Country" style={{display: 'inline-block', width: 'cal(50%-8px)'}}>
                  <Select
                    placeholder="Country"
                    allowClear
                  >
                    <Option value="vietnamese">Viet Nam</Option>
                    <Option value="english">English</Option>
                  </Select>
                </Form.Item>
                <Form.Item name={"zipCode"} label="Zip Code" style={{display: 'inline-block', width: 'cal(50%-8px)'}}>
                  <Input></Input>
                </Form.Item>
                <span>
                  GraFish is required by law to collect applicable transaction or
                  taxes for purchases made in certain tax jurisdictions
                </span>
              </Form.Item>
            </Form>
          </div>
        </Col>
        <Col span={12} className="sumary"></Col>
      </Row>
    </div>
  );
}

export default CheckOut;
