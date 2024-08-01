import {ButtonPrimary} from "./Application/Component/ButtonPrimary.tsx";
import { ButtonSecondaire } from './Application/Component/ButtonSecondaire.tsx';
import { ButtonExterne } from './Application/Component/ButtonExterne.tsx';
import {InputCustom} from "./Application/Component/InputCustom.tsx";
import {FcGoogle} from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Card from './Card.css'
import './App.css';

import {Logo} from "./Application/Component/Logo.tsx"; // Assurez-vous d'avoir un fichier CSS pour les styles globaux

function App() {

  return (
   


    <>
        <Logo w={"200"} h={"167"} />
        
        <InputCustom withAsterisk label={"Adresse E-mail"} placeholder={"Adresse E-mail"}/>
        <InputCustom withAsterisk label={"Mot de Passe"} placeholder={"Mot de Passe"}/>
        <InputCustom withAsterisk label={"Nom d'utilisateur"} placeholder={"Nom d'utilisateur"}/>
      
       
        <ButtonPrimary>
            Se connecter
        </ButtonPrimary>
        <ButtonPrimary>
            S'inscrire
        </ButtonPrimary> 
        <ButtonPrimary>
            Préférences
        </ButtonPrimary>

        <ButtonSecondaire>
            PREMIUM
        </ButtonSecondaire>

       <ButtonExterne iconLeft={<FcGoogle />}>
            Connexion avec Google
      </ButtonExterne>
       <ButtonExterne iconLeft={<FaApple />}>
            Connexion avec Apple
      </ButtonExterne>
       <ButtonExterne iconLeft={<FaFacebook />}>
            Connexion avec Facebook
      </ButtonExterne>
    </>
  )
}

// src/App.js





export default App;



