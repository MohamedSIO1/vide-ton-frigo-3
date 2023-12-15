// HomePage.js
import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from './Footer.js';
import { ReactComponent as Poireau } from '../assets/images/poireau.svg';
import { ReactComponent as Tomate } from '../assets/images/tomate.svg';
import { ReactComponent as Celeri } from '../assets/images/céleri.svg';
import { ReactComponent as Choux } from '../assets/images/choux.svg';
import { ReactComponent as Steack } from '../assets/images/steak.svg';
import { ReactComponent as Brocoli } from '../assets/images/broccoli.svg';
import { ReactComponent as Phone } from '../assets/images/phone1.svg';
import { ReactComponent as AppleIcon } from '../assets/images/apple.svg';
import { ReactComponent as GoogleIcon } from '../assets/images/google1.svg';
import { ReactComponent as Scroll } from '../assets/images/Scroll.svg';
import { ReactComponent as Ticket } from '../assets/images/ticket.svg';
import { ReactComponent as Frigo } from '../assets/images/fridge.svg';
import { ReactComponent as Cuisto } from '../assets/images/cuisto.svg';
import { ReactComponent as Fleche } from '../assets/images/fleche.svg';
import { ReactComponent as FlecheR } from '../assets/images/flecheR.svg';
import { ReactComponent as Phone2 } from '../assets/images/phone2.svg';
import { ReactComponent as Ligne } from '../assets/images/ligneR.svg';
import { ReactComponent as Ligne2 } from '../assets/images/ligneR1.svg';
import '../styles/styles-desktop.css'; 
import '../styles/styles-mobile.css'; 

const HomePage = () => {
  // Référence à l'élément .scroll
  const scrollRef = React.useRef(null);

  // Fonction pour gérer le clic sur .scroll
  const handleScrollClick = () => {
    if (scrollRef.current) {
      // Faire défiler jusqu'à la fin de la page
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="home-page-container">
      <Container>
        {/* Rectangle orange */}
        <div className="rectangle-orange">
          <Poireau className="vegetable poireau" />
          <Tomate className="vegetable tomato" />
          <Celeri className="vegetable celeri" />
          <p className="text-style text-style1">Dites adieu à la question existentielle :</p>
          <p className="text-style text-style2">Qu'est-ce qu'on mange ce soir?</p>
          <Choux className="vegetable choux" />
          <Steack className="vegetable steack" />
          <Brocoli className="vegetable brocoli" />
          <Phone className="phone" />
          <p className="text-style text-style3">Télécharge-moi, enregistre ton garde-manger</p>
          <p className="text-style text-style4">Et je me charge du reste</p>
          <AppleIcon className="icon apple-icon" rel="noreferrer" onClick={() => window.location.href = 'https://www.apple.com/fr/app-store/'} />
          <GoogleIcon className="icon google-icon" rel="noreferrer" onClick={() => window.location.href = 'https://play.google.com/store/apps?hl=fr&gl=US'} />  
        </div>
      </Container>
      {/* Texte avec soulignement */}
      <div>
        <p className="text5">Les meilleures recettes à portée de main ?</p>
        <p className="text6">Avec <strong>VideTonFrigo</strong> c'est possible !</p>
        {/* Carré */}
        <div className="rounded-square1">
          <p className='scan'>Scan ton ticket de</p>
          <p className='caisse'>caisse</p>
          <Ticket/>
        </div>
        <div className="rounded-square2">
        <p className='remplit'>Remplit ton frigo</p>
          <Frigo className='frigo'/>
        </div>
        <div className="rounded-square3">
        <p className='prepare'>Prépare un festin !</p>
          <Cuisto/>
        </div>
      </div>
      <div ref={scrollRef}>
        <Scroll className="scroll" onClick={handleScrollClick} />
      </div>
      <div className='fleche'>
        <Fleche />
      </div>
      <div className='flecheR'>
        <FlecheR />
      </div>
      <div className='phone2'>
        <Phone2 />
      </div>
      <div className="content-next-to-phone">
        <h1 className="partit">
          C'est parti !
        </h1>
        <ul className="list-unstyled">
            <li>Enregistre les ingrédients de ton frigo</li>
            <li>Scan le code barre des produits</li>
            <li>Entre leur date de péremption</li>
        </ul>
      </div>
      <div className='phone3'>
        <Phone2 />
      </div>
      <div className="content-next-to-phone2">
        <h1 className="programme">
          Programme
        </h1>
        <ul className="list-unstyled2">
            <li>Plannifie les dates de tes repas</li>
            <li>Indique le nombre de personne à table !</li>
        </ul>
      </div>
      <div className='phone4'>
        <Phone2 />
      </div>
      <div className="content-next-to-phone3">
        <h1 className="occupe">
          On s'occupe du reste !
        </h1>
        <ul className="list-unstyled2">
            <li>Plus de tracas, on se charge de te trappeler l'essentiel</li>
            <li>Avec <strong className='VTF'>VideTonFrigo</strong>, lutte contre le gaspillage</li>
            <li>Fini les aliments jetés</li>
        </ul>
      </div>
      <div className='footer'>
      <Footer />
      </div>
      <div className='red-rectangle'>
        <p className='abonne'>Abonnez-vous pour être tenu</p>
        <p className='jour'>à jour</p>
      </div>
      <div className='end'>
        <p className='copy'>Copyright 2022 Devamax</p>        
      </div>
      <div>
      <Ligne className="ligne" />
        <Ligne2 className="ligne2" />
      </div>
    </div>
  );
};

export default HomePage;
