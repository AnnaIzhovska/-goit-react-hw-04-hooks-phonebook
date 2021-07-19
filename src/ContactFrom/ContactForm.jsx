import PropTypes from 'prop-types'
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import {Input, Title2,Button} from './ContactForm.styles'
import {BiPhoneCall, BiUser,BiAddToQueue} from 'react-icons/bi'

export default function ContactFrom({onSubmit}) {
 const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  
  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const handleChange = e => {

    const { name, value } = e.target;

    switch (name) {
      case 'name' :
        setName(value);
        break;
      
      case 'number':
        setNumber(value);
        break;
      
      default: return;
    }
   }

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(name, number);

    reset();
  };

  const reset = () => {
    setName("")
    setNumber("")
  }

    return (

          <form onSubmit={handleSubmit}>
           
                <Title2 htmlFor={nameInputId}><BiUser/> Name</Title2>

                <Input
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={handleChange}
                value={name}
                id={nameInputId}
                autoComplete='all'
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. 
                Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                />

                <Title2 htmlFor={numberInputId}><BiPhoneCall/> Number </Title2>

                <Input
                type="text"
                name="number"
                placeholder="Enter your number"
                autoComplete='all'
                onChange={handleChange}
                value={number}
                id={numberInputId}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять из цифр и может содержать пробелы,
                тире, круглые скобки и может начинаться с +"
                required
                />
                <Button type="submit"  disabled={!name || !number}>
                <BiAddToQueue />
                  Add contact
                </Button>
              </form>
  )
}

  ContactFrom.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}