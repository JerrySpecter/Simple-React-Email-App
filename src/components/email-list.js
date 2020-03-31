import React from 'react'
import { EmailNotice } from './email-notice'

export const EmailList = (props) => {
    const {emails, activeMailbox, setEmails} = props
    const showEmails = emails.filter(email => {
        return activeMailbox.emails.find(item => item === email.id)
    })

    const handleClick = (id) => {
        const clickedEmail = emails.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    read: true,
                    active: true
                }
            } else {
                return {
                    ...item,
                    active: false
                }
            }
        })

        setEmails(clickedEmail)
    }

    return (
        <div className="Email-List-Wrapper">
            {showEmails.length ? 
                <ul className="Email-List">
                    {showEmails.map((email, i) => {
                        return (
                            <li className={`
                                Email-List-Item 
                                ${!email.read ? 'Email-List-Item--notRead' : ''}
                                ${email.active ? 'Email-List-Item--active' : ''}
                                `} 
                                key={i}
                                onClick={() => handleClick(email.id)}>
                                <img className="Image" src={`/images/${email.id}.jpg`} alt={email.name} />
                                <div className="Content">
                                    <h3 className="Name">{email.name}</h3>
                                    <p className="Title">{email.title}</p>
                                    <p className="Excerpt">{email.excerpt}</p>
                                </div>
                            </li>
                        ) 
                    })}
                </ul>
                :
                <EmailNotice />
            }
        </div>
    )
}