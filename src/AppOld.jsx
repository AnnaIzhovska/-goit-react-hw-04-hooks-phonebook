import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import contacts from './data/contacts.json';
import ContactForm  from './ContactFrom';
import ContactList from './Contacts';
import Container from './Container';
import Filter from './Filter';
import {RiContactsLine} from 'react-icons/ri';

class AppOld extends React.Component{
    state = {
      contacts: contacts ,
        filter: '',
  }
  
   formSubmitHandle = ({ name, number }) => {
    const { contacts } = this.state;
    const entry = {
      id: uuidv4(),
      name,
      number,
     };
     
    if (contacts.some((contact) => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState((prevState) => ({
      ...prevState,
      contacts: [entry, ...prevState.contacts],
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }
    ))
  }

    render(){
      const { filter } = this.state;
      const visibleContacts = this.getVisibleContacts();
        return(
            <Container title='Phonebook'>
            <ContactForm onSubmit={this.formSubmitHandle}></ContactForm>
            <h2> <RiContactsLine/> Contacts</h2>
            <Filter value={filter} onChange={this.changeFilter}></Filter>
            <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact}></ContactList>
            </Container>
        )
    }
}

export default AppOld;