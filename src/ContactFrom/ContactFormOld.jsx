import { Formik } from 'formik';
import { Component } from 'react';
import { v4 as uuidv4 } from "uuid";
import {Input, Title2, Button} from './ContactForm.styles'
import {BiPhoneCall,BiUser, BiAddToQueue} from 'react-icons/bi'

class ContactFrom extends Component {
  state = {
    name: '',
    number: ''
  }

  nameInputId = uuidv4();
  numberInputId = uuidv4();
 
  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
     const { name, number } = this.state;
    return (
          
        <Formik initialValues={{ name: '', number: '' }}>
            {({
              errors,
              touched,
              handleBlur
            }) => (
              <form onSubmit={this.handleSubmit}>
           
                <Title2 htmlFor={this.nameInputId}><BiUser/> Name</Title2>

                <Input
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={this.handleChange}
                onBlur={handleBlur}
                value={name}
                id={this.nameInputId}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. 
                Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                />
                {errors.name && touched.name && errors.name}
          
                <Title2 htmlFor={this.numberInputId}><BiPhoneCall/> Number </Title2>

                <Input
                type="text"
                name="number"
                placeholder="Enter your number"
                onChange={this.handleChange}
                onBlur={handleBlur}
                value={number}
                id={this.numberInputId}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять из цифр и может содержать пробелы,
                тире, круглые скобки и может начинаться с +"
                required
                />
                {errors.number && touched.number && errors.number}

                <Button type="submit"  disabled={!name || !number}>
                <BiAddToQueue />
                  Add contact
                </Button>
              </form>
            )}
        </Formik>
    )
  }
}
 
export default ContactFrom