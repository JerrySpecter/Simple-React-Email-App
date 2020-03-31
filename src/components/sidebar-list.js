import React from 'react'

export const SidebarList = (props) => {
    const { list, readEmails, setActiveMailbox, setMenuOpen } = props

    console.log('siedbar', list)

    return (
        <ul className="Sidebar-List">
            {list.map((item, i) => {
                return (
                    <li 
                        className={`Sidebar-List-Item ${item.active ? 'Sidebar-List-Item--active' : ''}`} 
                        onClick={() => {
                            if (setActiveMailbox) setActiveMailbox(i)
                            setMenuOpen(false)
                        }} 
                        key={i}>
                            {item.name} 
                            {i === 0 && readEmails ? 
                                <span> ({readEmails})</span>
                                : ''}
                    </li>
                ) 
            })}
        </ul>
    )
}