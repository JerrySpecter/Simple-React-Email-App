import React, {useState} from 'react'
import {SidebarList} from './sidebar-list'
import {Button} from './button'

export const Sidebar = (props) => {
    console.log('sidebar', props)
    const {mailboxes, labels, readEmails, setActiveMailbox} = props
    const [menuOpen, setMenuOpen] = useState(false)

    const handleClick = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div className="Mobile-Navigation">
            <div className="Mobile-Header">
                <button className="Mobile-Navigation-Button" onClick={handleClick}>
                    {menuOpen ? 'Close' : 'Menu'}
                </button>
                <span className="Mailbox-Name">{mailboxes.filter(mailbox => mailbox.active === true)[0].name}</span>
            </div>
            <div className={`Sidebar ${menuOpen ? 'is-open' : ''}`}>
                <Button variation="Primary" text="Compose" />

                <SidebarList list={mailboxes} readEmails={readEmails} setMenuOpen={setMenuOpen} setActiveMailbox={setActiveMailbox} />
                
                <h2 className="Sidebar-Title">labels</h2>

                <SidebarList list={labels} />
            </div>
        </div>
    )
}