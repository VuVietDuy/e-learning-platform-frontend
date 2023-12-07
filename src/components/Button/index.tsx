import React from "react";

import './index.scss'

export function Button(props: any) {
    const {
        className,
        title,
        onClick,
        size,
        htmlType
    } = props;

    const btnSize = `btn${size}`

    return (
        <button className={`${className} btn-component ${btnSize}`} onClick={onClick} type={htmlType}>{title || props.children}</button>
    )
}