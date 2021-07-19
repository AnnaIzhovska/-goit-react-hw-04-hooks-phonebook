import PropTypes from "prop-types";
import { Input } from '../ContactFrom/ContactForm.styles';
import { Text } from './Filter.styles';

const Filter = ({ value, onChange }) => {
    return (
        <>
        <Text>Find contacts by name</Text>
            <Input
                type="text"
                name="name"
                placeholder="Name to search"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                value={value}
                onChange={onChange}
                required>  
            </Input>
        </>
    )
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;