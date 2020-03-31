import React from 'react'
import {Button} from './button'

export const EmailView = (props) => {
    const {email, updateActiveEmail} = props

    console.log('single email', email)

    const handleClick = () => {
        email.active = false

        updateActiveEmail(email)
    }

    return (
        <div className="Email-View">
            <div className="Email-View-Header">
                <div className="Content">
                    <h2 className="Title">{email.title}</h2>
                    <p className="Meta">From <span className="Name">{email.name}</span> at <span className="Date">{email.date}</span></p>
                </div>
                <div className="Actions">
                    <Button variation="Secondary" text="Reply" />
                    <Button variation="Secondary" text="Forward" />
                    <Button variation="Secondary" text="Move to" />
                </div>
                <button className="Email-View-Mobile-Close" onClick={handleClick}>close</button>
            </div>
            <div className="Email-View-Body" dangerouslySetInnerHTML={{__html: email.text}}>
            </div>
        </div>
    )
}