import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../features/contacts/contactsSlice';
import styled from 'styled-components';
import ContactForm from './ContactForm';

const ListContainer = styled.div`
  margin: 20px;
  width: 100%;
`;

const ContactItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  background-color: ${props => props.delete ? '#dc3545' : '#007BFF'};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.delete ? '#c82333' : '#0056b3'};
  }
`;

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const [editingContact, setEditingContact] = useState(null);

  return (
    <ListContainer>
      {contacts.map(contact => (
        <ContactItem key={contact.id}>
          <div>
            <div>{contact.name}</div>
            <div>{contact.email}</div>
            <div>{contact.phone}</div>
          </div>
          <div>
            <Button onClick={() => setEditingContact(contact)}>Editar</Button>
            <Button delete onClick={() => dispatch(removeContact(contact.id))}>Remover</Button>
          </div>
        </ContactItem>
      ))}
      {editingContact && <ContactForm existingContact={editingContact} onClose={() => setEditingContact(null)} />}
    </ListContainer>
  );
};

export default ContactList;
