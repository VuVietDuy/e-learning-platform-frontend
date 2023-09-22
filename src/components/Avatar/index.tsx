import React from "react";
import './index.scss'

export function Avatar(props : any) {
    const {
        src,
        onClick,
        className,
        size
    } = props;

    return (
        <div className={`${className} avatar ${size}`} onClick={onClick}>
            <img className="image" src={src} alt="" />
        </div>
    )
}
