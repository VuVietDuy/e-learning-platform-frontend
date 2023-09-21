import React from "react";

import './index.scss'

export function Button(props: any) {
    const {
        className,
        title,
        onClick,
        size,
    } = props;

    const btnSize = `btn${size}`

    return (
        <button className={`${className} btn-component ${btnSize}`} onClick={onClick}>{title}</button>
    )
}