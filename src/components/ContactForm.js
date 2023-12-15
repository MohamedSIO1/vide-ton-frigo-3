import React, { useState } from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    nom: '',
    prenom: '',
    mail: '',
    message: '',
  });

  const [confidentialiteAcceptee, setConfidentialiteAcceptee] = useState(false);

  const handleNomChange = (e) => {
    setFormValues({ ...formValues, nom: e.target.value });
  };

  const handlePrenomChange = (e) => {
    setFormValues({ ...formValues, prenom: e.target.value });
  };

  const handleMailChange = (e) => {
    setFormValues({ ...formValues, mail: e.target.value });
  };

  const handleMessageChange = (e) => {
    setFormValues({ ...formValues, message: e.target.value });
  };

  const gererChangementConfidentialite = (e) => {
    setConfidentialiteAcceptee(e.target.checked);
  };

  const handleEnvoyer = () => {
    // Vérifier si les politiques de confidentialité sont acceptées
    if (!confidentialiteAcceptee) {
      alert('Veuillez accepter les politiques de confidentialité pour envoyer le formulaire.');
      return;
    }

    // Effectuer une action d'envoi (par exemple, une requête vers une API)
    fetch('/mon-endpoint-api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues),
    })
      .then(response => response.json())
      .then(data => {
        // Traiter la réponse de l'API (par exemple, afficher un message de réussite)
        console.log('Réponse de l\'API :', data);
        // Réinitialiser les valeurs du formulaire après l'envoi réussi
        setFormValues({
          nom: '',
          prenom: '',
          mail: '',
          message: '',
        });
      })
      .catch(error => {
        // Gérer les erreurs (par exemple, afficher un message d'erreur)
        console.error('Erreur lors de l\'envoi du formulaire :', error);
      });
  };

  return (
    <div>
      <div className="black-border-rectangle2">
        <p className='contact'>Contactez-Nous !</p>
      </div>
      <div className="form-input nom-rectangle">
        <input type="text" className="nom" placeholder="Nom..." value={formValues.nom} onChange={handleNomChange} />
      </div>
      <div className="form-input prenom-rectangle">
        <input type="text" className="prenom" placeholder="Prenom..." value={formValues.prenom} onChange={handlePrenomChange} />
      </div>
      <div className="form-input mail-rectangle">
        <input type="text" className="mail" placeholder="Adresse mail..." value={formValues.mail} onChange={handleMailChange} />
      </div>
      <div className="form-input message-rectangle">
        <textarea className="message" placeholder="Ecris nous un message..." value={formValues.message} onChange={handleMessageChange}></textarea>
      </div>      
      <div className="pol-confi">
        <input type="checkbox" id="pol-confi" checked={confidentialiteAcceptee} onChange={gererChangementConfidentialite} />
        <label htmlFor="pol-confi">Acceptez les politiques de confidentialité...</label>        
      </div>
      <div>
      <button className="send-button" disabled={!confidentialiteAcceptee} onClick={handleEnvoyer}>
        Envoyer
      </button>
      </div>      
    </div>
  );
};

export default ContactForm;