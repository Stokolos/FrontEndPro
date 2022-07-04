import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import React from 'react';
import "./Loading.css"
import 'antd/dist/antd.css';

const antIcon = (
    <LoadingOutlined
        style={{
            fontSize: 50,
        }}
        spin
    />
);

const Loading = (props) => props.active ? <div className='modul'>
    <Spin indicator={antIcon} tip="Loading..."/>
</div> : "";
export default Loading;