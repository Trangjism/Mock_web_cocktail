import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import './loading.scss'

export default function Loading() {
    const antIcon = (
        <LoadingOutlined
          style={{
            fontSize: 50,
          }}
          spin
        />
      );
  return (
    <Spin indicator={antIcon} />
  )
}
