import { useState, useEffect, useRef} from 'react'
import { v4 as uuidv4 } from 'uuid';
import ContactsJson from './data/contacts.json'
import ContactForm  from './ContactFrom';
import ContactList from './Contacts';
import Container from './Container';
import Filter from './Filter';
import {RiContactsLine} from 'react-icons/ri';


export default function App() { 
const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? ContactsJson
  });

  const [filter, setFilter] = useState('');
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      const parsedContacts = JSON.parse(localStorage.getItem('contacts'))

      if (parsedContacts) {
        setContacts(parsedContacts)
      }
      isFirstRender.current = false
      return
    }
    localStorage.setItem ('contacts', JSON.stringify(contacts))
  }, [contacts]);

  const formSubmitHandle = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    if (contacts.some((contact) => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

      setContacts((contacts) => [contact, ...contacts])
  }

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };
    

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter),
    )
  }
  
    
  const deleteContact = (contactId) => {
     setContacts(contacts.filter((contact) => contact.id !== contactId))
    }

  return (
    <Container title='Phonebook'>
      <ContactForm onSubmit={formSubmitHandle}></ContactForm>
      <h2> <RiContactsLine /> Contacts</h2>
      <Filter value={filter} onChange={changeFilter}></Filter>

      {contacts.length > 0 && (
         <ContactList contacts={getVisibleContacts()} onDeleteContact={deleteContact}></ContactList>
      )}
     
    </Container>
  )
}