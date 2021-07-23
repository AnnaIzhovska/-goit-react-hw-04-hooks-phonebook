import PropTypes from "prop-types";
import { Contact, ContactItem, BtnDelete, Text } from './Contacts.styles';
import {RiDeleteBin5Line, RiUserHeartLine} from 'react-icons/ri';

const ContactList = ({ contacts, onDeleteContact }) => (
  <Contact>
    {contacts.map(({ id, name, number }) => (
      <ContactItem key={id}><RiUserHeartLine />
        <Text>{name}: {number}</Text>
        <BtnDelete onClick={() => onDeleteContact(id)}><RiDeleteBin5Line /></BtnDelete>
      </ContactItem>
    ))}
  </Contact>
  )

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,

  onDeleteContact: PropTypes.func.isRequired,
};


export default ContactList;