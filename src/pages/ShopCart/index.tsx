import { Col, Row } from 'antd'
import React from 'react'
import CardHorizontal from '../../components/CardHorizontal'
import './index.scss'
function ShopCart() {
  return (
    <div className='shop_cart_container'>
        <Row>
            <Col span={16}>
                <CardHorizontal></CardHorizontal>
                <CardHorizontal></CardHorizontal>
                <CardHorizontal></CardHorizontal>
            </Col>
            <Col span={8}>

            </Col>
        </Row>
    </div>
  )
}

export default ShopCart