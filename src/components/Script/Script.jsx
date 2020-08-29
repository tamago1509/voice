import React from 'react'
import { Tag } from 'antd'
import './style.css'

function Script(props) {
    return (
        <div className = "each-script">
            <Tag color="#f50">{props.time}</Tag>
            <p>
                {props.content}
            </p>
        </div>
    )
}

export default Script
