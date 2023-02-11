import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';
// import css from './ContactList.module.css';
import { getContacts, getFilter } from '../../redux/contacts/contacts.selector';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  // const filteredContactsHandler = () => {
  //   return contacts.filter(item =>
  //     item.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  const filteredContacts = useMemo(
    () =>
      contacts.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      ),
    [contacts, filter]
  );

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ContactList;
