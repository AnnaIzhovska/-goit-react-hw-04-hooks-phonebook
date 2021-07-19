import PropTypes from "prop-types";
import { Containers, Title } from "./Container.styles";
import {BiBookOpen} from 'react-icons/bi';

const Container = ({ title, children }) => (
  <Containers>
    <Title> <BiBookOpen/> {title}</Title>
    {children}
  </Containers>
);

Container.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Container;