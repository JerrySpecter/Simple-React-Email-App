import React from 'react'

export const Button = (props) => {
    const {variation, text} = props
    return (
        <button className={`
            Button
            Button--${variation}
        `}>
            {text}
        </button>
    )
}