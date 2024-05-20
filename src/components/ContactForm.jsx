import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, editContact } from '../features/contacts/contactsSlice';
import styled from 'styled-components';

const FormContainer = styled.div`
  margin: 20px;
`;

const Input = styled.input`
  margin: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  margin: 5px;
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ContactForm = ({ existingContact, onClose }) => {
  const [contact, setContact] = useState(existingContact || { name: '', email: '', phone: '' });
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (existingContact) {
      dispatch(editContact({ ...contact, id: existingContact.id }));
    } else {
      dispatch(addContact({ ...contact, id: Date.now().toString() }));
    }
    if (onClose) onClose();
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Input type="text" name="name" value={contact.name} onChange={handleChange} placeholder="Nome Completo" required />
        <Input type="email" name="email" value={contact.email} onChange={handleChange} placeholder="Email" required />
        <Input type="tel" name="phone" value={contact.phone} onChange={handleChange} placeholder="Telefone" required />
        <Button type="submit">{existingContact ? 'Editar' : 'Adicionar'}</Button>
      </form>
    </FormContainer>
  );
};

export default ContactForm;
