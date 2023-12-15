// Footer .js
import React from 'react';
import { Container } from 'react-bootstrap';
import ContactForm from './ContactForm';

const Footer = () => {
  return (
    <footer className="bg-light mt-5">
      <Container> 
         <ContactForm />        
      </Container>
    </footer>
  );
};

export default Footer;
