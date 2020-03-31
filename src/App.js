import React, { useEffect, useState } from 'react';
import './assets/scss/main.scss';
import { Sidebar } from './components/sidebar'
import { data } from './app-data'
import { EmailList } from './components/email-list'
import { EmailView } from './components/email-view'

const App = () => {
  const [activeMailbox, setActiveMailboxState] = useState(data.mailboxes.find(mailbox => mailbox.active))
  const [mailboxes, setMailboxes] = useState(data.mailboxes)
  const [emails, setEmails] = useState(data.emails)
  const [activeEmail, setActiveEmail] = useState(null)

  const readInboxEmails = emails.filter(email => {
    return mailboxes[0].emails.find(item => item === email.id)
  }).filter(item => !item.read)

  const updateActiveEmail = () => {
      setActiveEmail(null)
  }

  const setActiveMailbox = (i) => {
    let newList = data.mailboxes.map(item => {
        return {
            ...item,
            active: false
        }
    })

    newList[i].active = !newList[i].active

    setMailboxes(newList)
    setActiveMailboxState(newList[i])
  }

  useEffect(() => {
    emails.filter(email => {
      if (email.active === true) {
        setActiveEmail(email)
      }
    })
  }, [emails])

  return (
    <div className="App">
      <div className="container">
        <Sidebar 
          mailboxes={mailboxes} 
          labels={data.labels} 
          readEmails={readInboxEmails.length}
          setActiveMailbox={setActiveMailbox} />
        <EmailList emails={emails} setEmails={setEmails} activeMailbox={activeMailbox} />
        {activeEmail && <EmailView email={activeEmail} updateActiveEmail={updateActiveEmail} />}
        
      </div>
    </div>
  );
}

export default App;